export const setLocal = (key: string, value: string) => {
	localStorage.setItem(key, value)
}

export const readLocal = (key: string): string | null => {
	const item = localStorage.getItem(key)
	return item
}

export const removeLocal = (key: string) => {
	localStorage.removeItem(key)
}
