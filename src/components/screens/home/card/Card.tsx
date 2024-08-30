'use client'
import { FC } from 'react'
import styles from './card.module.scss'
import { Select } from 'antd'
import ProductCarousel from '@/components/ui/carousels/product-carousel/ProductCarousel'
import { IProduct } from '@/types/product.type'
import SalesmanCarousel from '@/components/ui/carousels/salesman-carousel/SalesmanCarousel'
import { IEdges } from '@/types/edges.type'
import { IShops } from '@/types/shop.type'
import { options } from '@/components/ui/filter/selectOptions'
import ProductItem from '@/components/ui/product-item/ProductItem'
import Link from 'next/link'
import ProductDiscountItem from '@/components/ui/product-discount-item/ProductDiscountItem'

type TCardProps = {
	title: string
	isSellers: boolean
	sellerData?: IShops[]
	productData?: IEdges<IProduct>
}
const Card: FC<TCardProps> = ({ title, isSellers, productData, sellerData }) => {
	const handleChange = (value: string) => {
		console.log(`selected ${value}`)
	}
	return (
		<>
			{isSellers && sellerData && (
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
						{/* <SalesmanCarousel sellers={sellerData ? sellerData : []} /> */}
					</div>
				</section>
			)}
			{!isSellers && productData && (
				<>
					{productData.edges.length > 0 && (
						<section className={styles.card}>
							<div className={styles.card__container}>
								<div className={styles.title__row}>
									<div className={styles.title}>
										<h2>{title}</h2>
										<Link href={'/'}>Посмотреть все</Link>
									</div>

									<Select
										defaultValue={'popular'}
										className='w-[273px] tablet:w-ful'
										onChange={handleChange}
										options={options}
									/>
								</div>
								<ProductCarousel products={productData} />
								<div className={styles.product__row}>
									{productData.edges.map(item => {
										const isDiscount = item.node.oldPrice
											? item.node.oldPrice - item.node.price
											: null
										const percent =
											item.node.oldPrice && isDiscount
												? (isDiscount / item.node.oldPrice) * 100
												: null
										if (percent === null || percent <= 30)
											return (
												<div key={item.node.id} className={styles.product__column}>
													<ProductItem product={item.node} />
												</div>
											)
									})}
								</div>
							</div>
						</section>
					)}
				</>
			)}
		</>
	)
}

export default Card
