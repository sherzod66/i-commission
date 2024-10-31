'use client'
import { FC } from 'react'
import { SwiperSlide, Swiper } from 'swiper/react'
import 'swiper/scss'
import 'swiper/scss/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation } from 'swiper/modules'
import './verticalCarousel.scss'
import { fakeSalesman } from '../../../../fake-data/fakeSalesman'
import Link from 'next/link'
import Loader from '../../loader/Loader'
import { useQuery } from '@apollo/client'
import { IShops } from '@/types/shop.type'
import { GET_SHOPS } from '@/services/shop/shop.service'

const VerticalCarousel: FC = () => {
	const { data, loading } = useQuery<IShops>(GET_SHOPS)
	console.log('Shop:', data)
	return (
		<Swiper
			direction={'vertical'}
			slidesPerView={3.2}
			pagination={{
				clickable: true,
				dynamicBullets: true
			}}
			navigation={true}
			modules={[Pagination, Navigation]}
			className='verticalSwiper'
		>
			{data ? (
				data.activeShops.edges.map(el => (
					<SwiperSlide key={el.node.id}>
						<Link className='vertical__column' href={`/${el.node.id}`}>
							<div className='vertical__image'>
								<img src='/image/selesmanImage.png' alt='shop image' />
							</div>
							<div className='vertical__shop'>
								<h3>{el.node.code}</h3>
								<p>Продавец</p>
							</div>
						</Link>
					</SwiperSlide>
				))
			) : loading || loading ? (
				<Loader black={true} />
			) : (
				<h3>Пусто</h3>
			)}
		</Swiper>
	)
}

export default VerticalCarousel
