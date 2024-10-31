import { instance } from '@/api/axios'
import { ICategories } from '@/types/category.type'
import { IResponse } from '@/types/response.type'
import { gql } from '@apollo/client'

type TOption = {
	price: 'ASC' | 'DESC' | null
	code: string | null
	search: string | null
	view: string | null
	before: number | null
	after: number | null
}

export const GET_CATEGORIES = gql`
	query getCategories {
		categories {
			edges {
				node {
					id
					code
					displayName
					parent {
						id
						displayName
					}
				}
			}
		}
	}
`
// { after, before, code, search, view, price }: TOption
export const GET_CATEGORY_AND_PRODUCTS =
	//   const ca = `code: {eq:"${code}"}`
	//   const priceSort = `price: { ge: ${before}, le: ${after} }`
	//   const se = `displayName: {search:"${search}"}`
	//   const vi = `createdAt: ${view}`
	//   const pr = `price: ${price}`
	// category($after: String?, $before: String?, $code: String?, $search: String?, $view: String?, $price: String?)
	// filter:{code: {eq: $code}}
	// filter:{${search ? se : ''} ${before && after ? priceSort : ''}}
	// order: {${price ? pr : ''} ${view ? vi : ''}}
	gql`
		query GetCategoryAndProducts {
			categories {
				edges {
					node {
						displayName
						id
						activeProducts(first: 50) {
							edges {
								node {
									id
									displayName
									oldPrice
									image {
										url
										imageMin: resize(size: 512)
									}
									price
									description
								}
							}
						}
					}
				}
			}
		}
	`

// async getCategoriesProducts({ after, before, code, search, view, price }: TOption) {
//   const ca = `code: {eq:"${code}"}`
//   const priceSort = `price: { ge: ${before}, le: ${after} }`
//   const se = `displayName: {search:"${search}"}`
//   const vi = `createdAt: ${view}`
//   const pr = `price: ${price}`

//   const filterQuery = `query {
// categories(filter:{${code ? ca : ''} }) {
// edges {
//   node {
//   displayName
//   id
//   products(
//   first: 50 filter:{${search ? se : ''} ${before && after ? priceSort : ''}}
//   order: {${price ? pr : ''} ${view ? vi : ''}}
//   ){
//       edges {
//         node {
//         id
//         displayName
//           image {
//             url
//             imageMin: resize(size: 512)
//           }
//           price
//           description
// }
//       }
//     }
//   }
// }
// }
// }`
