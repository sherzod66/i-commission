import { ICategory } from '@/types/category.type'
import { useMemo, useState } from 'react'

export const useSellers = () => {
	const [active, setActive] = useState<ICategory | undefined>(undefined)

	return useMemo(() => ({ active, setActive }), [active])
}
