import { errorCatch } from '@/api/api.helper'
import { getAccessToken, getRefreshToken, saveTokenStorage } from '@/services/auth/auth.helper'
import { IAuthResponse } from '@/types/auth.type'
import { keycloackUrl } from '@/utils/constans'
import { ApolloClient, InMemoryCache, HttpLink, Observable, ApolloLink } from '@apollo/client'
import { onError } from '@apollo/client/link/error'

const authLink = new ApolloLink((operation, forward) => {
	let token = `${getAccessToken()}`
	operation.setContext(({ headers = {} }) => ({
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : ''
		}
	}))

	return forward(operation)
})

const refreshToken = async () => {
	// Логика обновления токена (например, запрос к вашему серверу)
	const formData = new URLSearchParams()
	formData.append('grant_type', 'refresh_token')
	formData.append('client_id', 'frontend')
	formData.append('refresh_token', `${getRefreshToken()}`)

	const response = await fetch(keycloackUrl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		body: formData.toString()
	})
	const data = (await response.json()) as IAuthResponse
	if (data.access_token) saveTokenStorage(data.access_token, data.refresh_token)
	return data.access_token
}

const errorLink = onError(({ graphQLErrors, operation, forward, response, networkError }) => {
	if (networkError) {
		if (networkError.message.includes('401')) {
			return new Observable(observer => {
				refreshToken()
					.then(newToken => {
						operation.setContext(({ headers = {} }) => ({
							headers: {
								...headers,
								authorization: newToken ? `Bearer ${newToken}` : ''
							}
						}))

						const subscriber = {
							next: observer.next.bind(observer),
							error: observer.error.bind(observer),
							complete: observer.complete.bind(observer)
						}

						forward(operation).subscribe(subscriber)
					})
					.catch(error => {
						observer.error(error)
					})
			})
		}
	}
})

const httpLink = new HttpLink({ uri: `${process.env.NEXT_PUBLIC_SERVER_URL}/graphql` })

const client = new ApolloClient({
	ssrMode: typeof window === 'undefined',
	link: ApolloLink.from([authLink, errorLink, httpLink]),
	cache: new InMemoryCache(),
	credentials: 'same-origin'
})

export default client
