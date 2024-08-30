import { useParams, useSearchParams } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'
import { TOption } from '../home/useHome'
import { useQuery } from '@apollo/client'
import { GET_CATEGORIES } from '@/services/categories/categories.service'
import { GET_SHOP_ONE } from '@/services/shop/shop.service'
import { IShop } from '@/types/shop.type'

export const useSalesman = () => {
	const params = useParams()
	const searchParams = useSearchParams()
	const code = searchParams.get('category')
	const [filterValue, setFilterV] = useState<TOption>({
		after: null,
		before: null,
		price: null,
		search: null,
		view: null
	})
	const { data: categories, loading: categoryLoading } = useQuery(GET_CATEGORIES)
	const { data, loading, refetch } = useQuery<{ shop: IShop }>(GET_SHOP_ONE, {
		variables: { id: params.id }
	})
	useEffect(() => {
		refetch()
	}, [code, filterValue])

	return useMemo(
		() => ({ data, loading, filterValue, setFilterV, categories, categoryLoading }),
		[data, loading, filterValue, categories, categoryLoading]
	)
}
