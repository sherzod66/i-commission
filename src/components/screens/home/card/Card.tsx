'use client'
import { FC } from 'react'
import styles from './card.module.scss'
import { Select } from 'antd'
import { options } from '../filter/selectOptions'
import ProductCarousel from '@/components/ui/carousels/product-carousel/ProductCarousel'
import { IProduct } from '@/types/product.type'
import { ISalesman } from '@/types/shop.type'
import SalesmanCarousel from '@/components/ui/carousels/salesman-carousel/SalesmanCarousel'

type TCardProps = {
	title: string
	isSellers: boolean
	sellerData?: ISalesman[]
	productData?: IProduct[]
}
const Card: FC<TCardProps> = ({ title, isSellers, productData, sellerData }) => {
	const handleChange = (value: string) => {
		console.log(`selected ${value}`)
	}
	return (
		<section className={styles.card}>
			<div className={styles.card__container}>
				<div className={styles.title__row}>
					<h2>{title}</h2>
					<Select
						defaultValue={'popular'}
						className='w-[273px] tablet:w-ful'
						onChange={handleChange}
						options={options}
					/>
				</div>
				{isSellers && <SalesmanCarousel sellers={sellerData ? sellerData : []} />}
				{!isSellers && <ProductCarousel products={productData ? productData : []} />}
			</div>
		</section>
	)
}

export default Card
