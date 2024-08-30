import { userService } from '@/services/user/user.service'
// import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'

export const useMe = () => {
	// const { data, isError, error } = useQuery({
	// 	queryKey: ['user'],
	// 	queryFn: userService.me,
	// 	select: data => data.data
	// })
	// return useMemo(() => ({ data, isError, error }), [data, isError, error])
}
