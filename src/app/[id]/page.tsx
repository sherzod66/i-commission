import Layout from '@/components/layout/Layout'
import Salesman from '@/components/screens/salesman/Salesman'
import { Metadata, ResolvingMetadata } from 'next'
import NotFound from '../not-found'
import { GET_SHOP_BY_SERVER } from '@/services/shop/shop.service'
import client from '@/lib/apollo-client'
import { IShop } from '@/types/shop.type'

type Props = {
	params: { id: string; locale: string }
}

export async function generateMetadata(
	{ params }: Props,
	parent: ResolvingMetadata
): Promise<Metadata> {
	const id = params.id
	const url = process.env.NEXT_PUBLIC_API_URL
	const apolloClient = client
	const { data } = await apolloClient.query<{ shop: IShop }, { id: string }>({
		query: GET_SHOP_BY_SERVER,
		variables: { id: id }
	})

	const previousImages = (await parent).openGraph?.images || []

	if (data)
		return {
			// metadataBase: new URL(`${url}`),
			title: `I commission | ${data?.shop.displayName}`
			// openGraph: {
			// 	images: [product?.imageLink[0], ...previousImages]
			// }
		}
	else
		return {
			// metadataBase: new URL(`${process.env.CLIENT_API}`),
			title: `I commission | page not found`,
			openGraph: {
				images: [`/image/cover.png`, ...previousImages]
			}
		}
}
export default async function salesmanPage({ params }: Props) {
	const apolloClient = client
	const { data } = await apolloClient.query<{ shop: IShop }>({
		query: GET_SHOP_BY_SERVER,
		variables: { id: params.id }
	})
	return (
		<>
			{data?.shop ? (
				<Layout isShop={data.shop} image='/image/shopCover.png'>
					<Salesman />
				</Layout>
			) : (
				<NotFound />
			)}
		</>
	)
}
