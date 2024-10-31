'use client'
import { FC } from 'react'
import { useSalesman } from './useSalesman'
import Card from '../home/card/Card'
import Reviews from './reviews/Reviews'
import Filter from '@/components/ui/filter/Filter'
const Salesman: FC = () => {
	const { data, filterValue, setFilterV, categories, categoryLoading } = useSalesman()
	return (
		<>
			<Filter
				filterValue={filterValue}
				setFilterV={setFilterV}
				shop={data?.shop}
				categories={categories?.categories}
				isLoading={categoryLoading}
			/>
			{data
				? data.shop.categories &&
				  data.shop.categories.edges.map(item => (
						<Card
							key={item.node.id}
							title={item.node.displayName}
							isSellers={false}
							productData={item.node.activeProducts}
						/>
				  ))
				: ''}
			<Reviews title='Отзывы о продавце' />
		</>
	)
}

export default Salesman
