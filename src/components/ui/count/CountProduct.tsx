'use client'
import { Dispatch, FC, SetStateAction } from 'react'
import styles from './countProduct.module.scss'
import cn from 'clsx'
import { minusCountProduct, plusCountProduct } from '@/utils/countQuantity'
import { TCountQuantity } from '../filter/Filter'
import PlusIcon from '@/assets/icon/PlusIcon'
import MinusIcon from '@/assets/icon/MinusIcon'

type TCountProps = {
	count: TCountQuantity
	setCount: Dispatch<SetStateAction<TCountQuantity>>
	oldPrice: boolean
}

const CountProduct: FC<TCountProps> = ({ count, setCount, oldPrice }) => {
	const onBlur = () => {
		if (1 > +count.count) setCount(prev => ({ ...prev, count: '1' }))
		if (count.quantity < +count.count)
			if (1 > +count.count) setCount(prev => ({ ...prev, count: `${count.quantity}` }))
	}
	return (
		<div className={cn(styles.count__wrapper, { [styles.min]: oldPrice })}>
			<div
				className={cn(
					styles.card__quantity_input,
					{ [styles.active]: count.isFocus },
					{
						[styles.error]: +count.count < 1 || +count.count > count.quantity
					},
					styles.margin
				)}
			>
				<button onClick={() => minusCountProduct(count, setCount)} type='button'>
					<MinusIcon />
				</button>

				<input
					onChange={e => setCount(prev => ({ ...prev, count: e.target.value }))}
					value={count.count}
					type='number'
					min={1}
					max={count.quantity}
					inputMode='numeric'
					onFocus={() => setCount(prev => ({ ...prev, isFocus: true }))}
					onBlur={onBlur}
				/>

				<button onClick={() => plusCountProduct(count, setCount)} type='button'>
					<PlusIcon />
				</button>
			</div>
		</div>
	)
}

export default CountProduct
