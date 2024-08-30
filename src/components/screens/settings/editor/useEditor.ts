import { IProduct, IProductTest } from '@/types/product.type'
import { useMemo, useState } from 'react'

export type TIsEdit = {
	isShow: boolean
	product: IProductTest | null
}

export const useEditor = () => {
	const [isAdd, setIsAdd] = useState<boolean>(false)
	const [isEdit, setIsEdit] = useState<TIsEdit>({ isShow: false, product: null })

	return useMemo(() => ({ isAdd, setIsAdd, isEdit, setIsEdit }), [isAdd, isEdit])
}
