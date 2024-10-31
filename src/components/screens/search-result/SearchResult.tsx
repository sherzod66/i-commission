'use client'
import { FC } from 'react'
import { useSearchResult } from './useSearchResult'
import Filter from '@/components/ui/filter/Filter'
import SearchProduct from '@/components/ui/search/Search'
import styles from './searchResult.module.scss'
import ProductItem from '@/components/ui/product-item/ProductItem'

const SearchResult: FC = () => {
	const { displayName, data, loading, searchValue, setSearchValue, searchData, searchLoading } =
		useSearchResult()
	return (
		<>
			<div className='__container'>
				<SearchProduct
					data={searchData}
					searchValue={searchValue}
					setSearchValue={setSearchValue}
					isLoading={searchLoading}
				/>
			</div>
			<Filter categories={data?.categories} isLoading={loading} />
			<div className='__container'>
				{searchData ? (
					<section className={styles.card}>
						<div className={styles.product__row}>
							{searchData?.activeProducts.edges.map(item => (
								<div key={item.node.id} className={styles.product__column}>
									<ProductItem product={item.node} />
								</div>
							))}
						</div>
					</section>
				) : (
					'Не найдено'
				)}
			</div>
		</>
	)
}

export default SearchResult
