import Layout from '@/components/layout/Layout'
import Order from '@/components/screens/order/Order'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'I commision | Оформление заказа'
}
export default function OrderPage() {
	return (
		<Layout isShop={null}>
			<h1></h1>
			{/* <Order /> */}
		</Layout>
	)
}
