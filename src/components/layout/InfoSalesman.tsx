'use client'
import { FC } from 'react'
import styles from './layout.module.scss'
import { SALESMAN_TOTAL_COUNT } from '@/services/shop/shop.service'
import { PRODUCT_TOTAL_COUNT } from '@/services/product/products.service'
import { useQuery } from '@apollo/client'
const InfoSalesman: FC = () => {
	const { data: shopsTotalCount, loading: shopsTotalCountLoading } = useQuery<{
		activeShops: { totalCount: number }
	}>(SALESMAN_TOTAL_COUNT)
	const { data: productTotalCount, loading: productTotalCountLoading } = useQuery<{
		activeProducts: { totalCount: number }
	}>(PRODUCT_TOTAL_COUNT)

	return (
		<>
			<div className={styles.title__item}>
				<p>Количество продавцов</p>
				<h5>{shopsTotalCount ? shopsTotalCount.activeShops.totalCount : '0'}</h5>
			</div>
			<div className={styles.title__item}>
				<p>Количество товаров</p>
				<h5>{productTotalCount ? productTotalCount.activeProducts.totalCount : '0'}</h5>
			</div>
		</>
	)
}

export default InfoSalesman

// const { data: shopQuantity, isLoading: isLoadingShop } = useQuery({
// 	queryKey: ['shopsQuantity'],
// 	queryFn: shopService.getShopQuantity,
// 	select: data => data.data
// })
// const { data: productQuantity, isLoading: isLoadingProduct } = useQuery({
// 	queryKey: ['productsQuantity'],
// 	queryFn: productsService.getProductQuantity,
// 	select: data => data.data
// })
