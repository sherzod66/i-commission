import { IBasketHook } from './useBasket'
import { IProduct } from '@/types/product.type'

export const defaultChangeBasket = (
	data: IProduct[],
	selected: boolean,
	isFocus: boolean
): IBasketHook[] => {
	const defaultV = data.map<IBasketHook>(el => ({
		active: el.active,
		count: '4',
		createdAt: el.createdAt,
		description: el.description,
		displayName: el.displayName,
		id: el.id,
		image: el.image,
		isFocus,
		price: el.price,
		selected,
		shop: el.shop,
		updatedAt: el.updatedAt,
		category: el.category
	}))
	return defaultV
}

export const defaultChangeChoice = (data: IBasketHook[], selected: boolean): IBasketHook[] => {
	const defaultV = data.map<IBasketHook>(el => ({
		count: '2',
		id: el.id,
		category: el.category,
		price: el.price,
		selected,
		isFocus: el.isFocus,
		active: el.active,
		createdAt: el.createdAt,
		description: el.description,
		displayName: el.displayName,
		image: el.image,
		shop: el.shop,
		updatedAt: el.updatedAt
	}))
	return defaultV
}
