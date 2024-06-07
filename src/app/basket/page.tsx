import Layout from '@/components/layout/Layout'
import Basket from '@/components/screens/basket/Basket'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'I commision | Корзина'
}
export default function BasketPage() {
	return (
		<Layout isShop={null}>
			<Basket />
		</Layout>
	)
}
