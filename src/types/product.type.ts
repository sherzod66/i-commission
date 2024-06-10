import { ISalesman } from './shop.type'

export interface IProduct {
	id: string
	price: number
	category: string
	description: string
	type: string
	name: string
	imagePath: string
	login: string
	password: string
	quantity: number
}

export interface IAddProduct extends Omit<IProduct, 'id'> {}

export const defProduct: IAddProduct = {
	category: '',
	description: '',
	imagePath: '/image/avatar.png',
	login: '',
	name: '',
	password: '',
	price: 0,
	quantity: 0,
	type: ''
}

export const defEdit: IProduct = {
	id: '',
	category: '',
	description: '',
	imagePath: '/image/avatar.png',
	login: '',
	name: '',
	password: '',
	price: 0,
	quantity: 0,
	type: ''
}
