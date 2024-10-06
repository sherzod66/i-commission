import { Dispatch, FC, SetStateAction } from 'react'
import styles from './productOrder.module.scss'
import { IProduct } from '@/types/product.type'
import CountProduct from '@/components/ui/count/CountProduct'
import { TCountQuantity } from '@/components/ui/filter/Filter'
import { formatPrice } from '@/utils/formatPrice'

const ProductPrice: FC<{
	product: IProduct
	count: TCountQuantity
	setCount: Dispatch<SetStateAction<TCountQuantity>>
}> = ({ product, count, setCount }) => {
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
			<button type='button' className={styles.buy__basket}>
				Добавить в корзину
			</button>
		</div>
	)
}

export default ProductPrice
