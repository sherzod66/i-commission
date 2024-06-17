import { instance } from '@/api/axios'

export const userService = {
	async me() {
		return instance.post('/graphql', {
			query: `query {
  me {
    account {
      id
      nickname
    }
    permissions
  }
}`
		})
	}
}
