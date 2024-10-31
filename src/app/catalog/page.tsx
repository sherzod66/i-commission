import Layout from '@/components/layout/Layout'
import Catalog from '@/components/screens/catalog/Catalog'

export default function CatalogPage() {
	return (
		<Layout isShop={null} title='КАТАЛОГ ТОВАРОВ' image='/image/cover.png'>
			<Catalog />
		</Layout>
	)
}
