import { keycloackUrl } from '@/utils/constans'

import axios, { CreateAxiosDefaults } from 'axios'
import { errorCatch, getContentType } from './api.helper'
import { getAccessToken, removeFromStorage } from '@/services/auth/auth.helper'
import { authService } from '@/services/auth/auth.service'
const axiosOptions: CreateAxiosDefaults = {
	baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
	headers: {
		'Content-Type': 'application/json'
	},
	withCredentials: true
}

const axiosUploadImage: CreateAxiosDefaults = {
	baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
	withCredentials: true
}

const axiosAuthOptions: CreateAxiosDefaults = {
	baseURL: keycloackUrl,
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded'
	},
	withCredentials: true
}

export const axiosAuth = axios.create(axiosAuthOptions)

export const instance = axios.create(axiosOptions)

export const uploadAxios = axios.create(axiosUploadImage)

instance.interceptors.request.use(config => {
	const accessToken = getAccessToken()
	if (config?.headers && accessToken) config.headers.Authorization = `Bearer ${accessToken}`

	return config
})

instance.interceptors.response.use(
	config => config,
	async error => {
		const originalRequest = error.config
		console.log('Status code:', error)
		if (
			(error?.response?.status === 401 ||
				errorCatch(error) === 'jwt expired' ||
				errorCatch(error) === 'jwt must be provided') &&
			error.config &&
			!error.config._isRetry
		) {
			console.log('refresh Token')
			originalRequest._isRetry = true
			try {
				await authService.getNewTokens()
				return uploadAxios.request(originalRequest)
			} catch (error) {
				if (errorCatch(error) === 'jwt expired') removeFromStorage()
			}
		}

		throw error
	}
)

uploadAxios.interceptors.request.use(config => {
	const accessToken = getAccessToken()
	if (config?.headers && accessToken) config.headers.Authorization = `Bearer ${accessToken}`

	return config
})

uploadAxios.interceptors.response.use(
	config => config,
	async error => {
		const originalRequest = error.config
		console.log('Status code:', error)
		if (
			(error?.response?.status === 401 ||
				errorCatch(error) === 'jwt expired' ||
				errorCatch(error) === 'jwt must be provided') &&
			error.config &&
			!error.config._isRetry
		) {
			console.log('refresh Token')
			originalRequest._isRetry = true
			try {
				await authService.getNewTokens()
				return uploadAxios.request(originalRequest)
			} catch (error) {
				if (errorCatch(error) === 'jwt expired') removeFromStorage()
			}
		}

		throw error
	}
)
