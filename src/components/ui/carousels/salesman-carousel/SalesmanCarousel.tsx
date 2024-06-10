import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/scrollbar'
import './salesmanCarousel.scss'
import SalesmanItem from '../../sellesman-item/SalesmanItem'
import { ISalesman } from '@/types/shop.type'

type ProductSwProps = {
	sellers: ISalesman[]
}
export default function SalesmanCarousel({ sellers }: ProductSwProps) {
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
						slidesPerView: 4.2,
						spaceBetween: 26
					}
				}}
				className='mySwiper'
			>
				{sellers.length > 0
					? sellers.map(item => (
							<SwiperSlide key={item.id}>
								<SalesmanItem salesman={item} />
							</SwiperSlide>
					  ))
					: ''}
			</Swiper>
		</div>
	)
}
