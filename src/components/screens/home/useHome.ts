import { GET_CATEGORIES, GET_CATEGORY_AND_PRODUCTS } from '@/services/categories/categories.service'
import { ICategories, TCategoryFilter } from '@/types/category.type'
import { IResponse } from '@/types/response.type'
import { useQuery } from '@apollo/client'
import { useParams, useSearchParams } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'

export type TOption = {
	price: 'ASC' | 'DESC' | null
	search: string | null
	view: string | null
	before: number | null
	after: number | null
}

export const useHome = () => {
	const searchParams = useSearchParams()
	const [filterValue, setFilterV] = useState<TOption>({
		after: null,
		before: null,
		price: null,
		search: null,
		view: null
	})
	const code = searchParams.get('category')
	const { data, loading, refetch } = useQuery<ICategories, { category: TCategoryFilter }>(
		GET_CATEGORY_AND_PRODUCTS
		// { variables: { category: { eq: code } } }
	)
	const { data: data2, loading: categoryLoading } = useQuery<ICategories>(GET_CATEGORIES)

	useEffect(() => {
		refetch()
	}, [code, filterValue])

	return useMemo(
		() => ({ data, loading, data2, categoryLoading, filterValue, setFilterV }),
		[data, loading, data2, categoryLoading, filterValue]
	)
}

// const { data, isLoading, isFetched, refetch } = useQuery({
// 	queryKey: ['categoryProducts'],
// 	queryFn: () =>
// 		categoriesServicer.getCategoriesProducts({
// 			code,
// 			after: filterValue.after,
// 			before: filterValue.before,
// 			price: filterValue.price,
// 			search: filterValue.search,
// 			view: null
// 		}),
// 	select: response => response.data.data
// })
