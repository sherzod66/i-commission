import { ISalesman } from './shop.type'

export interface IProduct {
	id: string
	price: string
	category: string
	description: string
	type: string
	name: string
	imagePath: string
	login: string
	password: string
	quantity: string
}

export interface IAddProduct extends Omit<IProduct, 'id'> {}

export const defProduct: IAddProduct = {
	category: '',
	description: '',
	imagePath: '/image/avatar.png',
	login: '',
	name: '',
	password: '',
	price: '',
	quantity: '',
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
	price: '',
	quantity: '',
	type: ''
}
