import { IAuth } from '@/types/auth.type'
import { useMemo, useState } from 'react'

export const useAuth = () => {
	const [auth, setAuth] = useState<IAuth>({ auth: true, permissions: [] })

	return useMemo(() => ({ auth, setAuth }), [auth])
}
