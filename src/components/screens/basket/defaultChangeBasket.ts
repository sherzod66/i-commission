import { IBasket } from '@/types/basket.type'
import { IBasketHook } from './useBasket'

export const defaultChangeBasket = (
	data: IBasket[],
	selected: boolean,
	isFocus: boolean
): IBasketHook[] => {
	const defaultV = data.map<IBasketHook>(el => ({
		count: '2',
		id: el.id,
		category: el.category,
		imagePath: el.imagePath,
		name: el.name,
		price: el.price,
		quantity: el.quantity,
		salesman: el.salesman,
		selected,
		isFocus
	}))
	return defaultV
}

export const defaultChangeChoice = (data: IBasketHook[], selected: boolean): IBasketHook[] => {
	const defaultV = data.map<IBasketHook>(el => ({
		count: '2',
		id: el.id,
		category: el.category,
		imagePath: el.imagePath,
		name: el.name,
		price: el.price,
		quantity: el.quantity,
		salesman: el.salesman,
		selected,
		isFocus: el.isFocus
	}))
	return defaultV
}
