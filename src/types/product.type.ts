import {
	InputMaybe,
	ProductConfiguration,
	ProductConfigurationCheckboxGroupInput,
	ProductConfigurationInputNumberGroupInput,
	ProductConfigurationInputTextGroupInput,
	ProductConfigurationSelectGroupInput,
	Scalars
} from '@/gql/graphql'
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
	usageInstruction: string
	configuration: {
		__typename: 'ProductConfiguration'
		groups: (
			| Required<IProductConfigurationCheckboxGroup>
			| Required<IConfigurationSelectGroup>
			| Required<IConfigurationNumberGroup>
			| Required<IConfigurationTextGroup>
		)[]
	}
}
//-------

export interface IProductConfiguration {
	groupOrder: string[]
	checkboxes: IProductConfigurationCheckboxGroup[]
	selects: IConfigurationSelectGroup[]
	numbers: IConfigurationNumberGroup[]
	texts: IConfigurationTextGroup[]
}

export type TGroupType = 'checkbox' | 'select' | 'text' | 'numbers'

export interface IProductConfigurationCheckboxGroup {
	id: string
	displayName: string
	list: IConfigurationCheckbox[]
	__typename?: EnumConfigurationGroupType.ProductConfigurationCheckboxGroup
}

export interface IConfigurationCheckbox {
	id: string
	displayName: string
	price: number
}

export interface IConfigurationSelectGroup {
	id: string
	displayName: string
	defaultSelect: string
	list: IConfigurationCheckbox[]
	__typename?: EnumConfigurationGroupType.ProductConfigurationSelectGroup
}

export interface IConfigurationNumberGroup {
	id: string
	displayName: string
	price: number

	defaultAmount: number

	min: number
	max: number
	__typename?: EnumConfigurationGroupType.ProductConfigurationInputNumberGroup
}

export interface IConfigurationTextGroup {
	id: string
	displayName: string
	regex: string
	errorMessage: string
	__typename?: EnumConfigurationGroupType.ProductConfigurationInputTextGroup
}
//------------
export interface IRequestActivationCodeProduct {
	displayName: string
	description: string
	categoryId: string
	shopId: string
	price: number
	imageId: string
	usageInstruction: string
}

export interface IRequestUpdateActivationCodeProduct
	extends Omit<IRequestActivationCodeProduct, 'shopId'> {
	id: string
}

export interface IInputActivationCodeProduct {
	displayName: string
	description: string
	categoryId: string
	price: number
	image: File
	usageInstruction: string
}

export interface IRequestConfigurableProduct {
	displayName: string
	description: string
	usageInstruction: string
	categoryId: string
	shopId: string
	price: number
	imageId: string
	checkboxes?: InputMaybe<Array<ProductConfigurationCheckboxGroupInput>>
	groupOrder?: InputMaybe<Array<Scalars['String']['input']>>
	numbers?: InputMaybe<Array<ProductConfigurationInputNumberGroupInput>>
	selects?: InputMaybe<Array<ProductConfigurationSelectGroupInput>>
	texts?: InputMaybe<Array<ProductConfigurationInputTextGroupInput>>
}

export interface IRequestConfigurableProductUpdate
	extends Omit<IRequestConfigurableProduct, 'shopId'> {
	id: string
}

export interface IInputConfigurableProduct {
	displayName: string
	description: string
	categoryId: string
	price: number
	image: File
	usageInstruction: string
}

export interface IHybridConfigurable {}

export enum EnumProductTypeName {
	ActivationCodeProduct = 'ActivationCodeProduct',
	ConfigurableProduct = 'ConfigurableProduct'
}

export enum EnumConfigurationGroupType {
	ProductConfigurationSelectGroup = 'ProductConfigurationSelectGroup',
	ProductConfigurationCheckboxGroup = 'ProductConfigurationCheckboxGroup',
	ProductConfigurationInputTextGroup = 'ProductConfigurationInputTextGroup',
	ProductConfigurationInputNumberGroup = 'ProductConfigurationInputNumberGroup'
}

//TODO: delete
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
