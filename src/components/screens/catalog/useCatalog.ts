import { useMemo, useState } from 'react'
import { TOption } from '../home/useHome'
import { useQuery } from '@apollo/client'
import { GET_CATEGORY_AND_PRODUCTS } from '@/services/categories/categories.service'
import { IEdges } from '@/types/edges.type'
import { ICategory } from '@/types/category.type'

export const useCatalog = () => {
	const [filterValue, setFilterV] = useState<TOption>({
		after: null,
		before: null,
		price: null,
		search: null,
		view: null
	})
	const { data: categories, loading: categoryLoading } = useQuery<{
		categories: IEdges<ICategory>
	}>(GET_CATEGORY_AND_PRODUCTS)

	return useMemo(
		() => ({ filterValue, setFilterV, categories, categoryLoading }),
		[categories, categoryLoading, filterValue]
	)
}
