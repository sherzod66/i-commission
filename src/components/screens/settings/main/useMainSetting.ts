import { useMe } from '@/hooks/useMe'
import { useMemo, useState } from 'react'

export const useMainSetting = () => {
	const [isCreate, setIsCreate] = useState<boolean>(false)
	const { data } = useMe()

	const onToggleModal = () => {
		setIsCreate(!isCreate)
	}

	return useMemo(() => ({ isCreate, onToggleModal, data }), [isCreate, data])
}
