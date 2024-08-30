import { defaultProducts } from '@/components/screens/home/card/defaultProducts'
import { IProductTest } from '@/types/product.type'
import { useEffect, useMemo, useState } from 'react'

export const useEditTable = () => {
	const [isMobile, setIsMobile] = useState<boolean>(false)
	const [sorted, setSorted] = useState<boolean>(false)
	const [products, setProducts] = useState<IProductTest[]>([...defaultProducts])
	const sortHandler = () => {
		if (sorted) {
			setProducts([...defaultProducts.sort((a, b) => +a.price - +b.price).reverse()])
			setSorted(!sorted)
		} else {
			setProducts([...defaultProducts.sort((a, b) => +a.price - +b.price)])
			setSorted(!sorted)
		}
	}

	useEffect(() => {
		if (window.innerWidth <= 768) {
			setIsMobile(true)
		}
		window.addEventListener('resize', e => {
			if (window.innerWidth <= 768) {
				setIsMobile(true)
			} else {
				setIsMobile(false)
			}
		})
	}, [])
	return useMemo(
		() => ({ sortHandler, isMobile, setIsMobile, sorted, setSorted, products, setProducts }),
		[isMobile, sorted, products]
	)
}
