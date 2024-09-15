import { ME } from '@/services/user/user.service'
import { IUser } from '@/types/user.type'
import { useQuery } from '@apollo/client'
import { useMemo } from 'react'

export const useMe = () => {
	const { data, loading, error } = useQuery<IUser>(ME)
	return useMemo(() => ({ data, error, loading }), [data, error, loading])
}
