import { useEffect, useMemo, useState } from 'react'

export type TBalanceFilter = {
	after: string
	before: string
}

export const useBalanceTable = () => {
	const [filter, setFilter] = useState<TBalanceFilter>({
		after: '',
		before: ''
	})
	const [sw, setSw] = useState<boolean>(false)
	const [isMobile, setIsMobile] = useState<boolean>(false)

	useEffect(() => {
		if (window.innerWidth <= 768) {
			setIsMobile(true)
		}
		window.addEventListener('resize', e => {
			if (window.innerWidth <= 768) {
				setIsMobile(true)
			} else {
				setIsMobile(false)
			}
		})
	}, [])

	return useMemo(() => ({ filter, setFilter, isMobile, sw, setSw }), [filter, isMobile, sw])
}
