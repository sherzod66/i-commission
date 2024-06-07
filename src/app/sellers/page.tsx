import Layout from '@/components/layout/Layout'
import Card from '@/components/screens/home/card/Card'
import { defaultProducts } from '@/components/screens/home/card/defaultProducts'
import Filter from '@/components/screens/home/filter/Filter'
import { fakeSalesman } from '@/fake-data/fakeSalesman'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'I commision | продавцы'
}

export default function SellersPage() {
	return (
		<Layout isShop={null} image='/image/sellersCover.png'>
			<h1>hi</h1>
			<Filter shop={null} />
			<Card title='C высшим рейтингом' isSellers={true} sellerData={fakeSalesman} />
			<Card title='Продавцы игр' isSellers={true} sellerData={fakeSalesman} />
		</Layout>
	)
}
