import { instance } from '@/api/axios'
import { IResponse } from '@/types/response.type'
import { gql } from '@apollo/client'

export const productsService = {
	async getProductQuantity() {
		return instance.post<
			IResponse<{
				products: {
					totalCount: number
				}
			}>
		>('/graphql', {
			query: `query {
    products {
      totalCount
    }
}`
		})
	}
}

export const PRODUCT_SEARCH = gql`
	query ProductSearch($value: String) {
		products(filter: { displayName: { search: $value } }) {
			edges {
				node {
					id
					displayName
					image {
						url
						imageMin: resize(size: 512)
					}
					price
					description
					oldPrice
					category {
						code
					}
				}
			}
		}
	}
`
