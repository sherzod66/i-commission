import { TLoginInput } from '@/components/screens/auth/login/useLogin'
import { IAuthResponse } from '@/types/auth.type'
import { removeFromStorage, saveTokenStorage } from './auth.helper'
import { axiosAuth, instance } from '@/api/axios'

export enum EnumTokens {
	'ACCESS_TOKEN' = 'accessToken',
	'REFRESH_TOKEN' = 'refreshToken'
}

export const authService = {
	async main(type: 'login' | 'register', data: TLoginInput) {
		const params = new URLSearchParams()
		params.append('grant_type', 'password')
		params.append('password', data.password)
		params.append('username', data.email)
		params.append('client_id', 'frontend')
		const response = await axiosAuth.post<IAuthResponse>('', params)
		if (response.data.access_token)
			saveTokenStorage(response.data.access_token, response.data.refresh_token)

		console.log(response.data)
		return
	},

	async getNewTokens() {
		const response = await axiosAuth.post<IAuthResponse>('')
		if (response.data.access_token)
			saveTokenStorage(response.data.access_token, response.data.refresh_token)

		return
	},

	async logout() {
		removeFromStorage()
	},

	async user() {
		return instance.get('/auth/user')
	}
}
