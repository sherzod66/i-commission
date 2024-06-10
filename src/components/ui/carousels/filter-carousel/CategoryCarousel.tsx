import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/scrollbar'
import Link from 'next/link'
import AppleSvg from '@/assets/icon/AppleSvg'
import MidjourneySvg from '@/assets/icon/MidjourneySvg'
import { FreeMode, Navigation } from 'swiper/modules'
import Roblox from '@/assets/icon/Roblox'
import GptSvg from '@/assets/icon/GptSvg'
import './carousel.scss'
import 'swiper/css/navigation'

export default function ProductsSwiper() {
	return (
		<div className='verticalSW'>
			<h5 className='text-text-12 text-black-300 mb-2'>Категория</h5>
			<Swiper
				freeMode={true}
				slidesPerView={2.2}
				spaceBetween={20}
				navigation={true}
				modules={[FreeMode, Navigation]}
				breakpoints={{
					768: {
						slidesPerView: 2.2,
						spaceBetween: 20
					},
					1000: {
						slidesPerView: 3.5,
						spaceBetween: 30
					},
					1440: {
						slidesPerView: 6.39,
						spaceBetween: 30
					}
				}}
				className='mySwiper'
			>
				<SwiperSlide>
					<div className='category__link sel'>
						<AppleSvg />
						<p className='mt-[16px]'>Игры</p>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='category__link'>
						<MidjourneySvg />
						<p className='mt-[16px]'>Аккаунты</p>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='category__link'>
						<Roblox />
						<p className='mt-[16px]'>Для работы</p>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='category__link'>
						<GptSvg />
						<p className='mt-[16px]'>Для офиса</p>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='category__link'>
						<AppleSvg />
						<p className='mt-[16px]'>Игры</p>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='category__link'>
						<MidjourneySvg />
						<p className='mt-[16px]'>Аккаунты</p>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='category__link'>
						<Roblox />
						<p className='mt-[16px]'>Для работы</p>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='category__link'>
						<GptSvg />
						<p className='mt-[16px]'>Для офиса</p>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	)
}
