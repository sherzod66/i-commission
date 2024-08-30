import { ICategory } from './category.type'
import { IEdges } from './edges.type'
import { IProduct } from './product.type'

export interface IShop {
	createdAt: Date
	updatedAt: Date
	id: string
	code: string
	displayName: string
	active: boolean
	categories?: IEdges<ICategory>
	products?: IEdges<IProduct>
	owner: {
		id: string
		nickname: string
	}
}

export interface IShops {
	shops: IEdges<IShop>
}

export interface ISalesman {
	id: string
	name: string
	products: IProduct[]
	imagePath: string
	activate: boolean
	description: string
	rate: number
}

export const defaultSalesman: ISalesman[] = [
	{
		activate: true,
		id: 'fadsf',
		imagePath: '/shop.png',
		name: 'Stopgame / shop dssssadada',
		description: 'Магазин аккаунтов и игр',
		products: [],
		rate: 2.5
	}
]
