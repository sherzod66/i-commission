import { EnumProductTypeName } from '@/types/product.type'
import { useMemo, useState } from 'react'

export const useCreateProduct = () => {
	const [productType, setProductType] = useState<EnumProductTypeName | null>(null)

	return useMemo(() => ({ productType, setProductType }), [productType])
}
