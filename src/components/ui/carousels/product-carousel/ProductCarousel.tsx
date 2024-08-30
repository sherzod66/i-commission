import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/scrollbar'
import './productCarousel.scss'
import { IProduct } from '@/types/product.type'
import FireSvg from '@/assets/icon/fire.svg'

import { IEdges } from '@/types/edges.type'
import { useBasketStore } from '@/store/basketStore/useBasketStore'
import ProductDiscountItem from '../../product-discount-item/ProductDiscountItem'

type ProductSwProps = {
	products: IEdges<IProduct>
}
export default function ProductCarousel({ products }: ProductSwProps) {
	const basket = useBasketStore(store => store.basket)
	const toggle = useBasketStore(store => store.toggle)
	return (
		<div className='product__carousel'>
			<div className='discount__title'>
				<FireSvg /> <span>Горячие скидки</span>
			</div>
			<Swiper
				slidesPerView={1.1}
				spaceBetween={20}
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
						slidesPerView: 6.3,
						spaceBetween: 26
					}
				}}
				className='mySwiper'
			>
				{products.edges.length > 0
					? products.edges.map(item => {
							const isDiscount = item.node.oldPrice ? item.node.oldPrice - item.node.price : null
							const percent =
								item.node.oldPrice && isDiscount ? (isDiscount / item.node.oldPrice) * 100 : null
							if (percent && percent >= 50)
								return (
									<SwiperSlide className='pr-slide' key={item.node.id}>
										<ProductDiscountItem product={item.node} />
									</SwiperSlide>
								)
					  })
					: ''}
			</Swiper>
		</div>
	)
}

// <button onClick={() => toggle(item.node)} className='add__basket'>
// {basket.some(elem => elem.id === item.node.id) ? <BasketRemove /> : <BasketSvg />}
// </button>
