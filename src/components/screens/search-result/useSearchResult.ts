import { GET_CATEGORIES } from '@/services/categories/categories.service'
import { PRODUCT_SEARCH } from '@/services/product/products.service'
import { ICategories } from '@/types/category.type'
import { IEdges } from '@/types/edges.type'
import { IProduct } from '@/types/product.type'
import { useQuery } from '@apollo/client'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export const useSearchResult = () => {
	const searchParams = useSearchParams()
	const { data, loading } = useQuery<ICategories>(GET_CATEGORIES)
	const [searchValue, setSearchValue] = useState<string>('')
	const displayName = searchParams.get('displayName')
	const {
		data: searchData,
		error,
		refetch,
		loading: searchLoading
	} = useQuery<{ activeProducts: IEdges<IProduct> }, { value: string }>(PRODUCT_SEARCH, {
		variables: { value: '' }
	})
	useEffect(() => {
		refetch({ value: searchValue })
	}, [searchValue])

	useEffect(() => setSearchValue(displayName ? displayName : ''), [displayName])

	return {
		displayName,
		data,
		loading,
		searchValue,
		setSearchValue,
		searchData,
		searchLoading
	}
}
