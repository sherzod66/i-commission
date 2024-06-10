'use client'
import { FC, useEffect } from 'react'
import styles from './salesmanItem.module.scss'
import Link from 'next/link'
import { ISalesman } from '@/types/shop.type'
import { Rate } from 'antd'
import { FastAverageColor } from 'fast-average-color'

type TProductItemProps = {
	salesman: ISalesman
}
const SalesmanItem: FC<TProductItemProps> = ({ salesman }) => {
	useEffect(() => {
		const fac = new FastAverageColor()
		fac
			.getColorAsync(salesman.imagePath, { algorithm: 'simple' })
			.then(color => {
				const getElem = document.getElementById(`sl-${salesman.id}`)
				if (getElem) {
					getElem.style.backgroundColor = color.hex
					getElem.style.color = color.isDark ? '#fff' : '#000'
				}
				console.log(color.hex)
			})
			.catch(e => {
				console.error(e)
			})
	}, [salesman])
	return (
		<Link href={`/salesman/${salesman.id}`} className={styles.item}>
			<div id={`sl-${salesman.id}`} className={styles.item__top}>
				<p className={styles.item__category}>Аккаунты</p>
				<div className={styles.item__image}>
					<img loading='lazy' draggable={false} src={salesman.imagePath} alt='product' />
					<div className='swiper-lazy-preloader swiper-lazy-preloader-white'></div>
				</div>
			</div>
			<div className={styles.item__info}>
				<h4>{salesman.name}</h4>
				<div className={styles.salesman__rate}>
					<Rate
						className='text-black-900 text-text-sm'
						disabled
						defaultValue={salesman.rate}
						allowHalf
					/>
					<div className={styles.salesman__reviews}>{salesman.rate}</div>
				</div>
			</div>
		</Link>
	)
}

export default SalesmanItem
