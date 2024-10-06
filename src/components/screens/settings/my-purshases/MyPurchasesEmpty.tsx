'use client'
import BasketIcon from '@/assets/icon/BasketIcon'
import { FC } from 'react'

const MyPurchasesEmpty: FC = () => {
	return (
		<main className='bg-white min-h-[calc(100vh - 100px)] rounded-6xl flex-full p-6'>
			<h2 className='text-text-24 font-medium'>Мои покупки</h2>
			<div className='flex flex-col w-full h-full items-center justify-center'>
				<div className='text-64px text-black-550'>
					<BasketIcon />
				</div>

				<p className='text-black-550 text-text-24 font-medium mt-1 w-[266px] text-center leading-normal'>
					У вас нету ни одной покупки
				</p>
			</div>
		</main>
	)
}

export default MyPurchasesEmpty
