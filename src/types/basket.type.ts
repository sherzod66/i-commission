import { ISalesman } from './shop.type'

export interface IBasket {
	id: number
	price: number
	category: string
	name: string
	imagePath: string
	quantity: number
	salesman: ISalesman
}
