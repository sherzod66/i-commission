export interface IEdges<T> {
	totalCount?: number
	edges: [{ node: T }]
}
