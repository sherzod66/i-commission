import { instance } from '@/api/axios'
import { IUser } from '@/types/user.type'

export const userService = {
	async me() {
		return instance.post<IUser>('/graphql', {
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
