'use client'
import { FC } from 'react'
import styles from './layout.module.scss'
import { shopService } from '@/services/shop/shop.service'
import { productsService } from '@/services/product/products.service'
const InfoSalesman: FC = () => {
	return (
		<>
			<div className={styles.title__item}>
				<p>Количество продавцов</p>
				{/* <h5>{shopQuantity ? shopQuantity.data.shops.totalCount : '0'}</h5> */}
			</div>
			<div className={styles.title__item}>
				<p>Количество товаров</p>
				{/* <h5>{productQuantity ? productQuantity.data.products.totalCount : '0'}</h5> */}
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
