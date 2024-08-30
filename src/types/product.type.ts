import { ICategories, ICategory } from './category.type'
import { IImage } from './image.type'
import { IShop } from './shop.type'

export interface IProduct {
	id: string
	active: boolean
	displayName: string
	description: string
	category?: ICategory
	shop: IShop
	price: number
	image: IImage
	__typename: EnumProductTypeName
	oldPrice: number | null
	createdAt: Date
	updatedAt: Date
}

export interface IProductTest {
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

export interface IAddProduct {
	displayName: string
	description: string
	categoryId: string
	shopId: string
	price: number
	imageId: string
}
export const defProduct: IAddProduct = {
	displayName: '',
	description: '',
	categoryId: '',
	shopId: '',
	price: 5000,
	imageId: ''
}

export const defEdit: IProductTest = {
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

enum EnumProductTypeName {
	ActivationCodeProduct = 'ActivationCodeProduct',
	ConfigurableProduct = 'ConfigurableProduct'
}
