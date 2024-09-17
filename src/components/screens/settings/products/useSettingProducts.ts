import { GET_SHOP_PRODUCTS } from '@/services/shop/shop.service'
import { IProduct } from '@/types/product.type'
import { IShop } from '@/types/shop.type'
import { useQuery } from '@apollo/client'
import { useRouter, useSearchParams } from 'next/navigation'
import { useMemo, useState } from 'react'

export const useSettingProducts = () => {
	const searchParams = useSearchParams()
	const shopId = searchParams.get('shopId')
	const [isOpenDiscount, setIsOpenDiscount] = useState<{
		isOpen: boolean
		product: IProduct | null
	}>({ isOpen: false, product: null })
	const navigate = useRouter()
	const { data, loading } = useQuery<{ shop: IShop }, { shopId: string | null }>(
		GET_SHOP_PRODUCTS,
		{
			variables: { shopId }
		}
	)
	const onOpen = (product: IProduct) => setIsOpenDiscount({ isOpen: true, product: product })
	const onClose = () => {
		setIsOpenDiscount({ isOpen: false, product: null })
	}
	return useMemo(
		() => ({ data, loading, navigate, shopId, isOpenDiscount, onClose, onOpen }),
		[data, loading, shopId, isOpenDiscount]
	)
}
