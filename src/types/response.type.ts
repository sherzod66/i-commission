export interface IResponse<D> {
	data: D
	extensions: {
		traceId: string
	}
}
