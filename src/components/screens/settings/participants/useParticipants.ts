import { useRouter } from 'next/navigation'
import { useMemo } from 'react'

export const useParticipants = () => {
	const navigate = useRouter()

	return useMemo(() => ({ navigate }), [])
}
