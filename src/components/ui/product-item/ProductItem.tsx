'use client'
import { FC, useEffect } from 'react'
import styles from './productItem.module.scss'
import { IProduct } from '@/types/product.type'
import Link from 'next/link'
import { FastAverageColor } from 'fast-average-color'
type TProductItemProps = {
	product: IProduct
}
const ProductItem: FC<TProductItemProps> = ({ product }) => {
	useEffect(() => {
		const fac = new FastAverageColor()
		fac
			.getColorAsync(product.imagePath, { algorithm: 'simple' })
			.then(color => {
				const getElem = document.getElementById(`bg-${product.id}`)
				if (getElem) {
					getElem.style.backgroundColor = color.hex
					getElem.style.color = color.isDark ? '#fff' : '#000'
				}
				console.log(color.hex)
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
					<img loading='lazy' draggable={false} src={product.imagePath} alt='product' />
					<p className={styles.item__category}>{product.category}</p>
					<div className='swiper-lazy-preloader swiper-lazy-preloader-white'></div>
				</div>
				<div className={styles.blur}></div>
			</div>
			<div className={styles.item__info}>
				<h4>{product.name}</h4>
				<p>Скидки на любую покупку, 1000 ₽</p>
			</div>
		</Link>
	)
}

export default ProductItem
