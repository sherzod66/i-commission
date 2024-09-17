import { gql } from '@apollo/client'

export const PRODUCT_CONFIGURATION = gql`
	fragment ConfigurableInfo on ConfigurableProduct {
		configuration {
			groups {
				id
				displayName
				... on ProductConfigurationCheckboxGroup {
					id
					displayName
					list {
						id
						displayName
						price
					}
				}
				... on ProductConfigurationSelectGroup {
					id
					displayName
					defaultSelect
					list {
						id
						displayName
						price
					}
				}
				... on ProductConfigurationInputTextGroup {
					id
					displayName
					regex
					errorMessage
				}
				... on ProductConfigurationInputNumberGroup {
					id
					displayName
					defaultAmount
					price
					min
					max
				}
			}
		}
	}
`

export const PRODUCT_INFO = gql`
	fragment ProductInfo on Product {
		id
		createdAt
		updatedAt
		active
		displayName
		description
		usageInstruction
		image {
			url
			imageMin: resize(size: 512)
		}
		price
	}
`
