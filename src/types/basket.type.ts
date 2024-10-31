import {
	IConfigurationNumberGroup,
	IConfigurationSelectGroup,
	IConfigurationTextGroup,
	IProduct,
	IProductConfigurationCheckboxGroup
} from './product.type'
import { ISalesman } from './shop.type'

export interface IConfigurationClient {
	__typename: 'ProductConfiguration'
	groups: (
		| IProductConfigurationCheckboxGroup
		| IConfigurationSelectGroup
		| IConfigurationNumberGroup
		| IConfigurationTextGroup
	)[]
}
export interface IBasket extends Omit<IProduct, 'configuration'> {
	basketQuantity: number
	configuration: IConfigurationClient
}
