import Layout from '@/components/layout/Layout'
import Card from '@/components/screens/home/card/Card'
import { defaultProducts } from '@/components/screens/home/card/defaultProducts'
import Filter from '@/components/screens/home/filter/Filter'

export default function HomePage() {
	return (
		<Layout image='/image/cover.png' isShop={null} title='Каталог товаров'>
			<Filter shop={null} />
			<Card title='Подарочные карты' isSellers={false} productData={defaultProducts} />
			<Card title='Аккаунты' isSellers={false} productData={defaultProducts} />
		</Layout>
	)
}
