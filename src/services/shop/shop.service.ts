import { gql } from '@apollo/client'

type TOption = {
	id: string
	price: 'ASC' | 'DESC' | null
	code: string | null
	search: string | null
	view: string | null
	before: number | null
	after: number | null
}
export const GET_SHOPS = gql`
	query GetShops {
		shops {
			edges {
				node {
					id
					code
					displayName
					active
				}
			}
		}
	}
`

export const GET_SHOP_QUANTITY = gql`
	query GetShopQuantity {
		shops {
			totalCount
		}
	}
`
export const GET_SHOP_BY_SERVER = gql`
	query GetShopByServer($id: UUID!) {
		shop(id: $id) {
			id
			createdAt
			updatedAt
			code
			active
			displayName
			createdAt
			availablePermissions
		}
	}
`

export const GET_SHOP_PRODUCTS = gql`
	query GetShopByServer($shopId: ID!) {
		shop(id: $shopId) {
			id
			createdAt
			updatedAt
			code
			active
			displayName
			products {
				edges {
					node {
						id
						createdAt
						updatedAt
						displayName
						id
						displayName
						description
						price
						oldPrice
						active
						category {
							id
							displayName
						}
						image {
							url
							imageMin: resize(size: 512)
						}
					}
				}
			}
			createdAt
			availablePermissions
		}
	}
`

//{ after, before, code, search, view, price, id }: TOption

//          # first: 50 filter:{${search ? se : ''} ${before && after ? priceSort : ''}}
//order: {${price ? pr : ''} ${view ? vi : ''}}
export const GET_SHOP_ONE = gql`
	query GetShopOne($id: ID!) {
		shop(id: $id) {
			id
			createdAt
			updatedAt
			code
			active
			displayName
			categories {
				edges {
					node {
						id
						displayName
						code
						products {
							edges {
								node {
									id
									displayName
									id
									displayName
									description
									oldPrice
									price
									active
									image {
										url
										imageMin: resize(size: 512)
									}
								}
							}
						}
					}
				}
			}
			products(first: 20) {
				edges {
					node {
						id
						displayName
						id
						displayName
						description
						price
						active
						image {
							url
							imageMin: resize(size: 512)
						}
					}
				}
			}
		}
	}
`
