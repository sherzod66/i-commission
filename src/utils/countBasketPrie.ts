import { IBasketHook } from '@/components/screens/basket/useBasket'

export const countBasketPrice = (arg: IBasketHook[]): number => {
	let price = 0
	for (let index = 0; index < arg.length; index++) {
		price += arg[index].price * +arg[index].count
	}
	return price
}
