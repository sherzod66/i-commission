import Cookie from 'js-cookie'

export const getCookie = <T>(value: string): T => {
	const local = Cookie.get(value)
	if (local) {
		return JSON.parse(local) as T
	} else {
		return null as T
	}
}

export const setCookie = <T>(key: string, value: T) => {
	Cookie.set(key, JSON.stringify(value), {
		domain: 'localhost',
		sameSite: 'strict',
		expires: 30
	})
}
