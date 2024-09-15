'use client'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/scrollbar'
import { FreeMode, Navigation } from 'swiper/modules'

import './carousel.scss'
import 'swiper/css/navigation'
import { Dispatch, SetStateAction, useEffect } from 'react'
import { ICategory } from '@/types/category.type'
import Loader from '../../loader/Loader'
import { IEdges } from '@/types/edges.type'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import AppleIcon from '@/assets/icon/AppleIcon'

type TCategoryCarouselProps = {
	categories: IEdges<ICategory> | undefined
	isLoading: boolean
}
export default function CategoryCarousel({ categories, isLoading }: TCategoryCarouselProps) {
	const pathName = usePathname()
	const navigate = useRouter()
	const queryParams = useSearchParams()
	const displayName = queryParams.get('displayName')

	return (
		<div className='verticalSW'>
			<h5 className='text-text-12 text-black-300 mb-2 mt-6'>Категория</h5>
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
				{categories ? (
					categories.edges.map((elem, index) => (
						<SwiperSlide key={elem.node.id}>
							<div
								onClick={() => navigate.push(getUrl(displayName, pathName, elem.node.code))}
								className={`category__link ${
									elem.node.code === queryParams.get('category') && 'sel'
								}`}
							>
								<AppleIcon />
								<p className='mt-[16px]'>{elem.node.displayName}</p>
							</div>
						</SwiperSlide>
					))
				) : isLoading ? (
					<Loader black={true} />
				) : (
					<h3>Категорий не найденно</h3>
				)}
			</Swiper>
		</div>
	)
}

const getUrl = (displayName: string | null, pathName: string, category: string) => {
	if (displayName) {
		return `${pathName}?displayName=${displayName}&category=${category}`
	} else {
		return `${pathName}?category=${category}`
	}
}
