import { IBasketHook } from '@/components/screens/basket/useBasket'
import { changeBoolean } from '@/components/ui/count/changeIvent'
import { TCountQuantity } from '@/components/ui/filter/Filter'
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

export const minusCountProduct = (
	count: TCountQuantity,
	setCount: Dispatch<SetStateAction<TCountQuantity>>
) => {
	if (1 < +count.count) setCount(prev => ({ ...prev, count: String(+count.count - 1) }))
}
export const plusCountProduct = (
	count: TCountQuantity,
	setCount: Dispatch<SetStateAction<TCountQuantity>>
) => {
	if (count.quantity > +count.count)
		setCount(prev => ({ ...prev, count: String(+count.count + 1) }))
}
