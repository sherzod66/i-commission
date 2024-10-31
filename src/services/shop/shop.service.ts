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
		activeShops {
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
		activeShops {
			totalCount
		}
	}
`
export const GET_SHOP_BY_SERVER = `
	query GetShopByServer($id: ID!) {
		shop(id: $id) {
			id
			createdAt
			updatedAt
			code
			active
			displayName
			createdAt
			availablePermissions
			image {
				url
			}
			cover {
				url
			}
		}
	}
`

export const UPDATE_SHOP_COVER_IMAGE = gql`
	mutation UpdateShopCoverImage($coverId: ID, $id: ID!) {
		updateShop(id: $id, input: { coverId: $coverId }) {
			id
			code
			displayName
			active
		}
	}
`

export const UPDATE_SHOP_AVATAR_IMAGE = gql`
	mutation UpdateShopAvatarImage($imageId: ID, $id: ID!) {
		updateShop(id: $id, input: { imageId: $imageId }) {
			id
			code
			displayName
			active
		}
	}
`

export const UPDATE_SHOP = gql`
	mutation UpdateShop($id: ID!, $displayName: String!, $code: String!) {
		updateShop(id: $id, input: { displayName: $displayName, code: $code }) {
			id
			code
			displayName
			active
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
			activeProducts(order: { createdAt: ASC }) {
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
						__typename
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

export const SALESMAN_TOTAL_COUNT = gql`
	query SalesmanTotalCount {
		activeShops {
			totalCount
		}
	}
`

export const FIND_SHOP_BY_CODE = gql`
	query FindShopByCode($code: String) {
		activeShops(filter: { code: { eq: $code } }) {
			totalCount
		}
	}
`

export const CREATE_SHOP = gql`
	mutation CreateShop($displayName: String, $code: String, $imageId: ID, $coverId: ID) {
		createShop(
			input: { displayName: $displayName, code: $code, imageId: $imageId, coverId: $coverId }
		) {
			id
			code
			displayName
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
						activeProducts {
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
			activeProducts(first: 20) {
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
