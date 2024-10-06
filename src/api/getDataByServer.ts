import { getAccessToken } from '@/services/auth/auth.helper'

const url = process.env.NEXT_PUBLIC_SERVER_URL

export const getDataByServer = async <T>(
	query: string,
	variables: object
): Promise<T | undefined> => {
	try {
		const res = await fetch(`${url}/graphql`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${getAccessToken()}`
			},
			body: JSON.stringify({ query, variables }),
			next: { revalidate: 20 }
		})
		const data = (await res.json()) as T
		if (res.ok) return data
	} catch (e) {
		console.log(e)
		return undefined
	}
}
