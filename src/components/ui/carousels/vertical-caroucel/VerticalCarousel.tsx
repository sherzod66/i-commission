import { FC } from 'react'
import { SwiperSlide, Swiper } from 'swiper/react'
import 'swiper/scss'
import 'swiper/scss/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation } from 'swiper/modules'
import './verticalCarousel.scss'
import { fakeSalesman } from '../../../../fake-data/fakeSalesman'
import Link from 'next/link'

const VerticalCarousel: FC = () => {
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
			{fakeSalesman.map(el => (
				<SwiperSlide key={el.id}>
					<Link className='vertical__column' href={`/salesman/${el.id}`}>
						<div className='vertical__image'>
							<img src={el.imagePath} alt='shop image' />
						</div>
						<div className='vertical__shop'>
							<h3>{el.name}</h3>
							<p>Продавец</p>
						</div>
					</Link>
				</SwiperSlide>
			))}
		</Swiper>
	)
}

export default VerticalCarousel
