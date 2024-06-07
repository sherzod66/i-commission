import Layout from '@/components/layout/Layout'
import Card from '@/components/screens/home/card/Card'
import { defaultProducts } from '@/components/screens/home/card/defaultProducts'
import Filter from '@/components/screens/home/filter/Filter'
import Reviews from '@/components/screens/salesman/reviews/Reviews'
import { fakeSalesman } from '@/fake-data/fakeSalesman'
import { Metadata, ResolvingMetadata } from 'next'

type Props = {
	params: { id: string }
}

export async function generateMetadata(
	{ params }: Props,
	parent: ResolvingMetadata
): Promise<Metadata> {
	// read route params
	const id = params.id

	// fetch data
	// const product = await fetch(`https://.../${id}`).then((res) => res.json())

	// optionally access and extend (rather than replace) parent metadata
	// const previousImages = (await parent).openGraph?.images || []

	const shop = fakeSalesman.findIndex(el => el.id === params.id)

	return {
		title: `I commision ${fakeSalesman[shop].name}`
	}
}

export default function salesmanPage({ params }: Props) {
	const shop = fakeSalesman.findIndex(el => el.id === params.id)
	return (
		<Layout isShop={fakeSalesman[shop] ? fakeSalesman[shop] : null} image='/image/shopCover.png'>
			{fakeSalesman[shop] ? (
				<>
					<Filter shop={fakeSalesman[shop]} />
					<Card title='Подарочные карты' isSellers={false} productData={defaultProducts} />
					<Card title='Аккаунты' isSellers={false} productData={defaultProducts} />
					<Reviews />
				</>
			) : (
				'Магазин не найден или был удален'
			)}
		</Layout>
	)
}
