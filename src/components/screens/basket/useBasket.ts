import { useEffect, useMemo, useState } from 'react'
import { defaultChangeBasket, defaultChangeChoice } from './defaultChangeBasket'
import { PopconfirmProps, message } from 'antd'
import { changeBoolean } from '@/components/ui/count/changeIvent'
import { useRouter } from 'next/navigation'
import { useBasketStore } from '@/store/basketStore/useBasketStore'
import { IProduct } from '@/types/product.type'
import { readLocal, setLocal } from '@/utils/localStorage.helper'
import { IBasket } from '@/types/basket.type'

export interface IBasketHook extends IProduct {
	count: string
	selected: boolean
	isFocus: boolean
}
export const useBasket = () => {
	const globalBasket = useBasketStore(store => store.basket)
	const setGlobalBasket = useBasketStore(store => store.setBasket)
	const [basket, setBasket] = useState<IBasketHook[]>([])
	const [selectAll, setSelectAll] = useState<{ isSelect: boolean; isRadioClick: boolean }>({
		isRadioClick: false,
		isSelect: false
	})
	const navigate = useRouter()
	useEffect(() => {
		console.log(selectAll)
		if (selectAll.isSelect) setBasket([...defaultChangeChoice(basket, true)])
		else {
			if (selectAll.isRadioClick) setBasket([...defaultChangeChoice(basket, false)])
		}
	}, [selectAll])
	useEffect(() => {
		setBasket(defaultChangeBasket(globalBasket, false, false))
	}, [globalBasket])

	const changeCheckBox = (index: number) => {
		changeBoolean<IBasketHook>(index, !basket[index].selected, basket, 'selected', setBasket)
		const bas = basket.some(item => item.selected === false)
		if (!bas) {
			setSelectAll({ isRadioClick: true, isSelect: false })
		}
		setSelectAll({ isRadioClick: false, isSelect: false })
	}

	const confirm: PopconfirmProps['onConfirm'] = e => {
		setSelectAll({ isRadioClick: false, isSelect: false })
		updateGlobalBasket()
	}
	const confirmSelect: PopconfirmProps['onConfirm'] = e => {
		updateGlobalBasket()
	}

	const updateGlobalBasket = () => {
		const changeData: IProduct[] = basket.filter(item => {
			if (!item.selected) {
				return {
					active: item.active,
					count: '4',
					createdAt: item.createdAt,
					description: item.description,
					displayName: item.displayName,
					id: item.id,
					image: item.image,
					price: item.price,
					shop: item.shop,
					updatedAt: item.updatedAt,
					category: item.category
				}
			}
		})
		setGlobalBasket(changeData)
		message.success('Успешно удаленно!')
	}

	return useMemo(
		() => ({
			basket,
			setBasket,
			setSelectAll,
			selectAll,
			confirm,
			confirmSelect,
			changeCheckBox,
			navigate
		}),
		[basket, selectAll]
	)
}
