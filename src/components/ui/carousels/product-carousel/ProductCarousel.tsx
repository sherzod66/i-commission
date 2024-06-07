'use client'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/scrollbar'
import './productCarousel.scss'
import { IProduct } from '@/types/product.type'
import ProductItem from '../../product-item/ProductItem'

type ProductSwProps = {
	products: IProduct[]
}
export default function ProductCarousel({ products }: ProductSwProps) {
	return (
		<div className='product__carousel'>
			<Swiper
				slidesPerView={1.2}
				spaceBetween={26}
				breakpoints={{
					768: {
						slidesPerView: 2.2,
						spaceBetween: 26
					},
					1000: {
						slidesPerView: 3,
						spaceBetween: 26
					},
					1440: {
						slidesPerView: 4,
						spaceBetween: 26
					}
				}}
				className='mySwiper'
			>
				{products.length > 0
					? products.map(item => (
							<SwiperSlide key={item.id}>
								<ProductItem product={item} />
							</SwiperSlide>
					  ))
					: ''}
			</Swiper>
		</div>
	)
}
