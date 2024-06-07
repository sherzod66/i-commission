import { IBasketHook } from '@/components/screens/basket/useBasket'
import { TCountQuantity } from '@/components/screens/home/filter/Filter'
import { changeBoolean } from '@/components/ui/count/changeIvent'
import { Dispatch, SetStateAction } from 'react'

export const minusCount = (
	count: TCountQuantity[],
	index: number,
	setCount: Dispatch<SetStateAction<TCountQuantity[]>>
) => {
	const valueC = count[index].count
	if (1 < +valueC) changeBoolean(index, String(+valueC - 1), count, 'count', setCount)
}
export const plusCount = (
	count: TCountQuantity[],
	setCount: Dispatch<SetStateAction<TCountQuantity[]>>,
	index: number,
	isQuantity: number
) => {
	const valueC = count[index].count
	if (isQuantity > +valueC) changeBoolean(index, String(+valueC + 1), count, 'count', setCount)
}

export const minusCountBasket = (
	count: IBasketHook[],
	index: number,
	setCount: Dispatch<SetStateAction<IBasketHook[]>>
) => {
	const valueC = count[index].count
	if (1 < +valueC) changeBoolean(index, String(+valueC - 1), count, 'count', setCount)
}
export const plusCountBasket = (
	count: IBasketHook[],
	setCount: Dispatch<SetStateAction<IBasketHook[]>>,
	index: number,
	isQuantity: number
) => {
	const valueC = count[index].count
	if (isQuantity > +valueC) changeBoolean(index, String(+valueC + 1), count, 'count', setCount)
}
