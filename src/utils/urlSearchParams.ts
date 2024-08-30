export const urlSearchParamsSet = (name: string, value: string) => {
	if ('URLSearchParams' in window) {
		var searchParams = new URLSearchParams(window.location.search)
		searchParams.set(name, value)
		window.location.search = searchParams.toString()
	}
}

export const urlSearchParamsRemove = (name: string) => {
	if ('URLSearchParams' in window) {
		var searchParams = new URLSearchParams(window.location.search)
		searchParams.delete(name)
		window.location.search = searchParams.toString()
	}
}
