import { gql } from '@apollo/client'

export const ME = gql`
	query Me {
		me {
			account {
				id
				nickname
				__typename
				createdAt
				updatedAt
				shops {
					edges {
						node {
							id
							code
							displayName
							availablePermissions
							active
							image {
								url
							}
							cover {
								url
							}
						}
					}
				}
				accountWallet {
					balance
				}
			}
			permissions
		}
	}
`
