import { GET_SHOP_PRODUCTS } from '@/services/shop/shop.service'
import { IShop } from '@/types/shop.type'
import { useQuery } from '@apollo/client'
import { useRouter, useSearchParams } from 'next/navigation'
import { useMemo } from 'react'

export const useSettingProducts = () => {
	const searchParams = useSearchParams()
	const shopId = searchParams.get('shopId')
	const navigate = useRouter()
	const { data, loading } = useQuery<{ shop: IShop }, { shopId: string | null }>(
		GET_SHOP_PRODUCTS,
		{
			variables: { shopId }
		}
	)

	return useMemo(() => ({ data, loading, navigate, shopId }), [data, loading, shopId])
}
