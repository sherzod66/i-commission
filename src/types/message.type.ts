export type TMessage = {
	key: string
	type: 'error' | 'success' | 'info' | 'warning'
	title: string
	description?: string
	life?: number
}
