import { uploadAxios } from '@/api/axios'
import { IResponse } from '@/types/response.type'
import { gql } from '@apollo/client'
import { PRODUCT_CONFIGURATION } from './product.fragments'

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

export const UPDATE_DISCOUNT_CONFIGURABLE = gql`
	mutation UpdateDiscountConfigurable($id: ID!, $oldPrice: Int, $price: Int) {
		updateConfigurableProduct(id: $id, input: { oldPrice: $oldPrice, price: $price }) {
			id
			displayName
			active
			oldPrice
			price
		}
	}
`
export const UPDATE_DISCOUNT_ACTIVE_CODE = gql`
	mutation UpdateDiscountActiveCode($id: ID!, $oldPrice: Int, $price: Int) {
		updateActivationCodeProduct(id: $id, input: { oldPrice: $oldPrice, price: $price }) {
			id
			displayName
			active
			oldPrice
			price
		}
	}
`

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

export const UPDATE_CONFIGURABLE_PRODUCT = gql`
	mutation UpdateDiscountConfigurable(
		$id: ID!
		$displayName: String!
		$description: String!
		$categoryId: ID!
		$price: Int!
		$imageId: ID
		$usageInstruction: String
		$groupOrder: [String!]
		$checkboxes: [ProductConfigurationCheckboxGroupInput!]
		$selects: [ProductConfigurationSelectGroupInput!]
		$numbers: [ProductConfigurationInputNumberGroupInput!]
		$texts: [ProductConfigurationInputTextGroupInput!]
	) {
		updateConfigurableProduct(
			id: $id
			input: {
				displayName: $displayName
				description: $description
				categoryId: $categoryId
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
			active
			oldPrice
			price
		}
	}
`
export const UPDATE_ACTIVATION_CODE_PRODUCT = gql`
	mutation UpdateActivationCodeProduct(
		$id: ID!
		$displayName: String!
		$description: String!
		$categoryId: ID!
		$price: Int!
		$imageId: ID
		$usageInstruction: String
	) {
		updateActivationCodeProduct(
			id: $id
			input: {
				displayName: $displayName
				description: $description
				categoryId: $categoryId
				price: $price
				imageId: $imageId
				usageInstruction: $usageInstruction
			}
		) {
			id
			displayName
			active
			oldPrice
			price
		}
	}
`
export const PRODUCT = gql`
	${PRODUCT_CONFIGURATION}
	query getProduct($id: ID!) {
		product(id: $id) {
			id
			createdAt
			updatedAt
			active
			displayName
			description
			oldPrice
			usageInstruction
			category {
				id
				displayName
			}
			image {
				id
				url
				imageMin: resize(size: 512)
			}
			shop {
				id
				displayName
				code
				image {
					url
				}
			}
			price
			...ConfigurableInfo
		}
	}
`
export const PRODUCT_BY_SERVER = `
query getProduct($id: ID!) {
  product(id: $id) {
    id
    active
    displayName
    description
    image {
      imageMin: resize(size: 512)
    }
    price
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
		$usageInstruction: String
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
		$usageInstruction: String
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
