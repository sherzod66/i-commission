'use client'
import { TOption } from '@/components/screens/home/useHome'
import { useSearchParams } from 'next/navigation'
import { FC } from 'react'

type TSearchResult = {
	filterValue: TOption
}
const SearchResult: FC<TSearchResult> = ({ filterValue }) => {
	const searchParams = useSearchParams()
	const category = searchParams.get('category')
	return (
		<div className='__container'>
			{filterValue.search && (
				<h2 className='text-sub-title text-black-800'>
					По запросу "{filterValue.search}" с фильтрами "{category}"
					{filterValue.before &&
						filterValue.after &&
						`Начиная от ${filterValue.before} до ${filterValue.after}`}
				</h2>
			)}
		</div>
	)
}

export default SearchResult
