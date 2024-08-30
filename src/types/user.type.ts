export interface IUser {
	data: {
		me: {
			account: {
				id: string
				nickname: string
				createdAt: string
				updatedAt: string
			}
			permissions: string[]
		}
	}
	extensions: {
		traceId: '368bf57c-6d75-06d0-eec3-c71cf78c04ce'
	}
}
