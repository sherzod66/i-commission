'use client'
import { FC, useEffect } from 'react'
import styles from './productItem.module.scss'
import { IProduct } from '@/types/product.type'
import Link from 'next/link'
import { FastAverageColor } from 'fast-average-color'
import { StarFilled } from '@ant-design/icons'
import cn from 'clsx'
type TProductItemProps = {
	product: IProduct
}
const ProductItem: FC<TProductItemProps> = ({ product }) => {
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
				{product.oldPrice && (
					<div className={styles.discount}>
						<span>
							-{Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
						</span>
					</div>
				)}
				<div className={styles.item__image}>
					<p className={styles.item__price}>{product.price} ₽</p>
					<img draggable={false} src={product.image.imageMin} alt='product' />
					<p className={styles.item__category}>{product.displayName}</p>
				</div>
				<div className={styles.blur}></div>
			</div>
			<div className={styles.item__info}>
				<div className={styles.item__price}>
					<span className={cn(styles.price, { [styles.old]: product.oldPrice })}>
						{product.oldPrice ? product.oldPrice : product.price} ₽
					</span>
					{product.oldPrice && <span className={styles.price_discount}>{product.price} ₽</span>}
				</div>
				<p className={styles.item__description}>{product.description}</p>
				<div className={styles.item__rate}>
					<p>Скидка на любую покупку, 1000 ₽dsadasda dsada</p>
					<div className={styles.rate}>
						<StarFilled /> <span>4,8</span>
					</div>
				</div>
			</div>
		</Link>
	)
}

export default ProductItem
