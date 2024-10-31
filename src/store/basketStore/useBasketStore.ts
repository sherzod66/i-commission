import { IBasket } from '@/types/basket.type'
import { readLocal, setLocal } from '@/utils/localStorage.helper'
import { create } from 'zustand'

type Store = {
	basket: IBasket[]
	toggle: (item: IBasket) => void
	setBasket: (basket: IBasket[]) => void
	// removeItem: (index: number) => void
	// setBasket: (basket: IBasket[]) => void
}

export const useBasketStore = create<Store>(set => ({
	basket: [],
	toggle: item =>
		set(store => {
			const findItem = store.basket.findIndex(elem => elem.id === item.id)
			const basketData: IBasket[] = [...store.basket]
			if (findItem >= 0) {
				basketData.splice(findItem, 1)
				setLocal('basket', JSON.stringify([...basketData]))
				return { basket: basketData }
			} else {
				setLocal('basket', JSON.stringify([...store.basket, item]))
				return { basket: [...store.basket, item] }
			}
		}),
	setBasket: basket => set(state => ({ basket: basket }))
	// removeItem: (index)=> set(store=> {
	// 	const basket
	// })
}))
