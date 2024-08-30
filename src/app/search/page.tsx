import Layout from '@/components/layout/Layout'
import SearchResult from '@/components/screens/search-result/SearchResult'

export default function SearchPage() {
	return (
		<Layout image='/image/cover.png' isShop={null}>
			<SearchResult />
		</Layout>
	)
}
