import { FC, useEffect, useState } from 'react'
import styles from './banner.module.scss'
import { useQuery } from '@apollo/client'
import { PRODUCT_SEARCH } from '@/services/product/products.service'
import { IProduct } from '@/types/product.type'
import { IEdges } from '@/types/edges.type'
import SearchProduct from '@/components/ui/search/Search'

const Banner: FC = () => {
	const [searchValue, setSearchValue] = useState<string>('')
	const { data, error, refetch, loading } = useQuery<
		{ products: IEdges<IProduct> },
		{ value: string }
	>(PRODUCT_SEARCH, {
		variables: { value: '' }
	})
	useEffect(() => {
		refetch({ value: searchValue })
	}, [searchValue])

	return (
		<section
			className={styles.banner}
			style={{ background: '#3b3b3b url("/image/bannerMain.png") 50% no-repeat' }}
		>
			<div className={styles.banner__item}>
				<h1 className={styles.title}>I comission</h1>
				<h1 className={styles.description}>10+ тысяч цифровых товаров на любой вкус</h1>
				<SearchProduct
					data={data}
					searchValue={searchValue}
					setSearchValue={setSearchValue}
					isLoading={loading}
				/>
			</div>
		</section>
	)
}

export default Banner
