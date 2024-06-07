'use client'
import { Dispatch, FC, SetStateAction } from 'react'
import styles from './count.module.scss'
import cn from 'clsx'
import { minusCount, minusCountBasket, plusCount, plusCountBasket } from '@/utils/countQuantity'
import { TCountQuantity } from '@/components/screens/home/filter/Filter'
import { changeBoolean, changeEvent } from './changeIvent'
import Minus from '@/assets/icon/minus.svg'
import Plus from '@/assets/icon/plus.svg'
import { IBasketHook } from '@/components/screens/basket/useBasket'

type TCountProps = {
	count: IBasketHook[]
	index: number
	setCount: Dispatch<SetStateAction<IBasketHook[]>>
}

const CountQuantityBasket: FC<TCountProps> = ({ count, setCount, index }) => {
	const onBlur = () => {
		changeBoolean<IBasketHook>(index, !count[index].isFocus, count, 'isFocus', setCount)
		if (1 > +count[index].count) changeBoolean<IBasketHook>(index, 1, count, 'count', setCount)
		if (count[index].quantity < +count[index].count)
			changeBoolean<IBasketHook>(index, count[index].quantity, count, 'count', setCount)
	}
	return (
		<div className={styles.count__wrapper}>
			<div
				className={cn(
					styles.card__quantity_input,
					{ [styles.active]: count[index].isFocus },
					{
						[styles.error]: +count[index].count < 1 || +count[index].count > count[index].quantity
					},
					styles.margin
				)}
			>
				<button
					onClick={() => plusCountBasket(count, setCount, index, count[index].quantity)}
					type='button'
				>
					<Plus />
				</button>
				<input
					onChange={e => changeEvent(index, e, count, 'count', setCount)}
					value={count[index].count}
					type='number'
					min={1}
					max={count[index].quantity}
					inputMode='numeric'
					onFocus={() =>
						changeBoolean<IBasketHook>(index, !count[index].isFocus, count, 'isFocus', setCount)
					}
					onBlur={onBlur}
				/>{' '}
				<button onClick={() => minusCountBasket(count, index, setCount)} type='button'>
					<Minus />
				</button>{' '}
			</div>
			{count[index].quantity > 6 ? (
				<p className='text-text-12 text-black-300 mt-1 text-right'>В наличии: Много</p>
			) : (
				<p className='text-text-12 text-orange-900 mt-1 text-right'>
					Осталось: {count[index].quantity}
				</p>
			)}
		</div>
	)
}

export default CountQuantityBasket
