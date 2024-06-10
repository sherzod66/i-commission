import { FakeBasket } from '@/fake-data/fakeBasket'
import { IBasket } from '@/types/basket.type'
import { useEffect, useMemo, useState } from 'react'
import { defaultChangeBasket, defaultChangeChoice } from './defaultChangeBasket'
import { PopconfirmProps, message } from 'antd'
import { changeBoolean } from '@/components/ui/count/changeIvent'
import { useRouter } from 'next/navigation'

export interface IBasketHook extends IBasket {
	count: string
	selected: boolean
	isFocus: boolean
}
export const useBasket = () => {
	const [basket, setBasket] = useState<IBasketHook[]>([
		...defaultChangeBasket(FakeBasket, false, false)
	])
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

	const changeCheckBox = (index: number) => {
		changeBoolean<IBasketHook>(index, !basket[index].selected, basket, 'selected', setBasket)
		setSelectAll({ isRadioClick: false, isSelect: false })
	}

	const confirm: PopconfirmProps['onConfirm'] = e => {
		setBasket([])
		setSelectAll({ isRadioClick: false, isSelect: false })
		message.success('Успешно удаленно!')
	}
	const confirmSelect: PopconfirmProps['onConfirm'] = e => {
		setBasket([
			...basket.filter(el => {
				if (!el.selected) {
					return { ...el }
				}
			})
		])
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
