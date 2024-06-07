import { IProduct } from './product.type'

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
