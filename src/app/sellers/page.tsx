import Layout from '@/components/layout/Layout'
import Sellers from '@/components/screens/sellers/Sellers'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'I commision | продавцы'
}

export default function SellersPage() {
	return (
		<Layout isShop={null} image='/image/sellersCover.png'>
			<h1>hi</h1>
			{/* <Sellers /> */}
		</Layout>
	)
}
