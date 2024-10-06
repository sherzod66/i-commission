import Layout from '@/components/layout/Layout'
import Salesman from '@/components/screens/salesman/Salesman'
import { Metadata, ResolvingMetadata } from 'next'
import NotFound from '../not-found'
import { GET_SHOP_BY_SERVER } from '@/services/shop/shop.service'
import { IShop } from '@/types/shop.type'
import { IResponse } from '@/types/response.type'

type Props = {
	params: { id: string; locale: string }
}

const url = process.env.NEXT_PUBLIC_SERVER_URL
const getShop = async (id: string): Promise<{ shop: IShop } | undefined> => {
	try {
		const res = await fetch(`${url}/graphql`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ query: GET_SHOP_BY_SERVER, variables: { id } }),
			next: { revalidate: 20 }
		})
		const data = (await res.json()) as IResponse<{ shop: IShop }>
		if (res.ok) return data.data
	} catch (e) {
		console.log(e)
		return undefined
	}
}

export async function generateMetadata(
	{ params }: Props,
	parent: ResolvingMetadata
): Promise<Metadata> {
	const id = params.id
	const data = await getShop(id)

	const previousImages = (await parent).openGraph?.images || []

	if (data)
		return {
			metadataBase: new URL(`${url}`),
			title: `I commission | ${data?.shop.displayName}`,
			openGraph: {
				images: [data.shop.image ? data.shop.image : '', ...previousImages]
			}
		}
	else
		return {
			metadataBase: new URL(`${url}`),
			title: `I commission | page not found`,
			openGraph: {
				images: [`/image/cover.png`, ...previousImages]
			}
		}
}
export default async function salesmanPage({ params }: Props) {
	const data = await getShop(params.id)
	return (
		<>
			{data?.shop ? (
				<Layout
					isShop={data.shop}
					image={data.shop.cover ? data.shop.cover.url : '/image/shopCover.png'}
				>
					<Salesman />
				</Layout>
			) : (
				<NotFound />
			)}
		</>
	)
}
