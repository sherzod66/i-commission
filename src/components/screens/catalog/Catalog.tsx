'use client'
import Filter from '@/components/ui/filter/Filter'
import { FC } from 'react'
import { useCatalog } from './useCatalog'
import Card from '../home/card/Card'

const Catalog: FC = () => {
	const { filterValue, setFilterV, categories, categoryLoading } = useCatalog()
	return (
		<>
			<Filter
				filterValue={filterValue}
				setFilterV={setFilterV}
				shop={null}
				categories={categories?.categories}
				isLoading={categoryLoading}
			/>
			{categories
				? categories?.categories.edges.length > 0
					? categories?.categories.edges.map(item => (
							<Card
								key={item.node.id}
								title={item.node.displayName}
								isSellers={false}
								productData={item.node.activeProducts}
							/>
					  ))
					: ''
				: ''}
		</>
	)
}

export default Catalog
