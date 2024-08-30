'use client'
import { FC } from 'react'
import Card from './card/Card'
import { useHome } from './useHome'
import Banner from './baner/Banner'

const Home: FC = () => {
	const { data, data2, categoryLoading, filterValue, setFilterV } = useHome()
	return (
		<>
			<Banner />
			{data
				? data?.categories.edges.length > 0
					? data?.categories.edges.map(item => (
							<Card
								key={item.node.id}
								title={item.node.displayName}
								isSellers={false}
								productData={item.node.products}
							/>
					  ))
					: ''
				: ''}
		</>
	)
}

export default Home

{
	/* <Filter
filterValue={filterValue}
setFilterV={setFilterV}
categories={data2?.categories}
isLoading={categoryLoading}
shop={null}
/> */
}
