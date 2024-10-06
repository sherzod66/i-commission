import { FC } from 'react'
import styles from './productDiscount.module.scss'
import FireSvg from '@/assets/icon/fire.svg'
import { IProduct } from '@/types/product.type'

const ProductDiscount: FC<{ product: IProduct }> = ({ product }) => {
	return (
		<div className={styles.product__discount}>
			<div className={styles.discount__title}>
				<FireSvg /> Распродажа
			</div>
			<div className={styles.discount__info}>
				<p className={styles.discount__time}>4 дня до конца</p>
				{product.oldPrice && (
					<p className={styles.discount__percent}>
						-{Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
					</p>
				)}
			</div>
		</div>
	)
}

export default ProductDiscount
