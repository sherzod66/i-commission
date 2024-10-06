import { instance } from '@/api/axios'
import Layout from '@/components/layout/Layout'
import Product from '@/components/screens/product/Product'
import { getAccessToken } from '@/services/auth/auth.helper'
import { PRODUCT_BY_SERVER } from '@/services/product/products.service'
import { IProduct } from '@/types/product.type'
import { IResponse } from '@/types/response.type'
import { Metadata, ResolvingMetadata } from 'next'

type Props = {
	params: { id: string; locale: string }
}

const url = process.env.NEXT_PUBLIC_SERVER_URL
const getProduct = async (id: string): Promise<{ product: IProduct } | undefined> => {
	try {
		const res = await instance.post<IResponse<{ product: IProduct }>>('/graphql', {
			query: PRODUCT_BY_SERVER,
			variables: { id }
		})
		if (res.data) return res.data.data
	} catch (e) {
		console.log(e)
		return undefined
	}
}

// export async function generateMetadata(
// 	{ params }: Props,
// 	parent: ResolvingMetadata
// ): Promise<Metadata> {
// 	const id = params.id
// 	const res = await getProduct(id)

// 	const previousImages = (await parent).openGraph?.images || []

// 	if (res)
// 		return {
// 			metadataBase: new URL(`${url}`),
// 			title: `I commission | ${res?.product.displayName}`,
// 			openGraph: {
// 				images: [res.product.image ? res.product.image : '', ...previousImages]
// 			}
// 		}
// 	else
// 		return {
// 			metadataBase: new URL(`${url}`),
// 			title: `I commission | page not found`,
// 			openGraph: {
// 				images: [`/image/cover.png`, ...previousImages]
// 			}
// 		}
// }
export default async function ProductPage({ params }: Props) {
	return (
		<Layout isShop={null}>
			<Product />
		</Layout>
	)
}
