'use client'
import { Dispatch, FC, SetStateAction, useMemo } from 'react'
import styles from './productOrder.module.scss'
import { IProduct } from '@/types/product.type'
import CountProduct from '@/components/ui/count/CountProduct'
import { TCountQuantity } from '@/components/ui/filter/Filter'
import { formatPrice } from '@/utils/formatPrice'
import { useBasketStore } from '@/store/basketStore/useBasketStore'

const ProductPrice: FC<{
	product: IProduct
	count: TCountQuantity
	setCount: Dispatch<SetStateAction<TCountQuantity>>
	onToggleBasket: () => void
}> = ({ product, count, setCount, onToggleBasket }) => {
	const basket = useBasketStore(store => store.basket)
	const findProduct = useMemo(() => basket.find(item => item.id === product.id), [basket])
	return (
		<div className={styles.buy}>
			<div className={styles.buy__row}>
				<div className={styles.buy__price}>
					<span className={styles.price}>{formatPrice(product.price)}</span>
					{product.oldPrice && <span className={styles.oldPrice}>{product.oldPrice}₽</span>}
				</div>
				<div className={styles.product__count}>
					<p className={styles.left}>Осталось только</p>
					<p className={styles.quantity}>212 шт.</p>
				</div>
				<CountProduct count={count} setCount={setCount} oldPrice={!!product.oldPrice} />
			</div>
			<button type='button' className={styles.buy__buy}>
				Купить в один клик
			</button>
			<button onClick={() => onToggleBasket()} type='button' className={styles.buy__basket}>
				{findProduct ? 'Удалить с корзины' : 'Добавить в корзину'}
			</button>
		</div>
	)
}

export default ProductPrice
