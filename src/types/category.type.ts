import { IEdges } from './edges.type'
import { IImage } from './image.type'
import { IProduct } from './product.type'

export interface ICategories {
	categories: {
		edges: [
			{
				node: ICategory
			}
		]
	}
}
export interface ICategory {
	id: string
	code: string
	displayName: string
	parent: null
	image: IImage
	products?: IEdges<IProduct>
	activeProducts?: IEdges<IProduct>
}

export type TCategoryFilter = {
	eq?: string | null
	in?: string[]
	le?: string
	lt?: string
	ge?: string
	gt?: string
	startsWith?: string
	between?: {
		min: string
		max: string
	}
}
