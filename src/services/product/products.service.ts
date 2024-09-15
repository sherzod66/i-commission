import { uploadAxios } from '@/api/axios'
import { IResponse } from '@/types/response.type'
import { gql } from '@apollo/client'

// export const productsService = {
// 	async getProductQuantity() {
// 		return instance.post<
// 			IResponse<{
// 				products: {
// 					totalCount: number
// 				}
// 			}>
// 		>('/graphql', {
// 			query: `query {
//     products {
//       totalCount
//     }
// }`
// 		})
// 	}
// }

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

export const CREATE_ACTIVATION_CODE_PRODUCT = gql`
	mutation CreateActivationCodeProduct(
		$displayName: String!
		$description: String!
		$categoryId: ID!
		$shopId: ID!
		$price: Int!
		$imageId: ID
		$usageInstruction: String!
	) {
		createActivationCodeProduct(
			input: {
				displayName: $displayName
				description: $description
				categoryId: $categoryId
				shopId: $shopId
				price: $price
				imageId: $imageId
				usageInstruction: $usageInstruction
			}
		) {
			id
			displayName
			description
		}
	}
`

export const CREATE_CONFIGURABLE_PRODUCT = gql`
	mutation CreateConfigurableProduct(
		$displayName: String!
		$description: String!
		$categoryId: ID!
		$shopId: ID!
		$price: Int!
		$imageId: ID
		$usageInstruction: String!
		$groupOrder: [String!]
		$checkboxes: [ProductConfigurationCheckboxGroupInput!]
		$selects: [ProductConfigurationSelectGroupInput!]
		$numbers: [ProductConfigurationInputNumberGroupInput!]
		$texts: [ProductConfigurationInputTextGroupInput!]
	) {
		createConfigurableProduct(
			input: {
				displayName: $displayName
				description: $description
				categoryId: $categoryId
				shopId: $shopId
				price: $price
				imageId: $imageId
				usageInstruction: $usageInstruction
				configuration: {
					groupOrder: $groupOrder
					checkboxes: $checkboxes
					selects: $selects
					numbers: $numbers
					texts: $texts
				}
			}
		) {
			id
			displayName
			description
		}
	}
`

export const createFile = async (formData: FormData): Promise<string> => {
	const request = await uploadAxios.post<{
		data: string
	}>('/api/image', formData)
	return request.data.data
}
