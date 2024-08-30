import { FC, useEffect } from 'react'
import styles from './productDiscountItem.module.scss'
import { IProduct } from '@/types/product.type'
import Link from 'next/link'
import { FastAverageColor } from 'fast-average-color'
import { StarFilled } from '@ant-design/icons'
import cn from 'clsx'
type TProductItemProps = {
	product: IProduct
}
const ProductDiscountItem: FC<TProductItemProps> = ({ product }) => {
	useEffect(() => {
		const fac = new FastAverageColor()
		fac
			.getColorAsync(product.image.imageMin, { algorithm: 'simple' })
			.then(color => {
				const getElem = document.getElementById(`bg-${product.id}`)
				if (getElem) {
					//Цвет фона
					// getElem.style.backgroundColor = color.hex
					getElem.style.color = color.isDark ? '#fff' : '#000'
				}
			})
			.catch(e => {
				console.error(e)
			})
	}, [product])
	return (
		<Link href={`/product/${product.id}`} className={styles.item}>
			<div id={`bg-${product.id}`} className={styles.item__top}>
				<div className={styles.item__image}>
					<p className={styles.item__price}>{product.price} ₽</p>
					<img loading='lazy' draggable={false} src={product.image.imageMin} alt='product' />
					<p className={styles.item__category}>{product.displayName}</p>
					<div className='swiper-lazy-preloader swiper-lazy-preloader-white'></div>
				</div>
				<div className={styles.blur}></div>
			</div>
			<div className={styles.item__info}>
				<div className={styles.item__price}>
					<div className={styles.price_discount}>{product.price} ₽</div>
					<div className={cn(styles.price, styles.old)}>{product.oldPrice} ₽</div>
					<div className={styles.rate}>
						<StarFilled /> <span>4,8</span>
					</div>
				</div>
				<p className={styles.product__sold}>Продано 500+</p>
			</div>
		</Link>
	)
}

export default ProductDiscountItem
