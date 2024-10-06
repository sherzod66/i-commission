import { TCountQuantity } from '@/components/ui/filter/Filter'
import { PRODUCT } from '@/services/product/products.service'
import { IProduct } from '@/types/product.type'
import { getColorIsDark } from '@/utils/fastAverage'
import { useQuery } from '@apollo/client'
import { message } from 'antd'
import { FastAverageColor } from 'fast-average-color'
import { useParams } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'

export const useProduct = () => {
	const params = useParams()
	const [count, setCount] = useState<TCountQuantity>({ count: '2', isFocus: false, quantity: 55 })
	const { data, loading } = useQuery<{ product: IProduct }, { id: string | string[] }>(PRODUCT, {
		variables: { id: params.id }
	})

	const copyText = (text: string) => {
		navigator.clipboard
			.writeText(text)
			.then(() => {
				message.success('Артикул был скопирован!')
			})
			.catch(() => console.log('Текст успешно скопирован в буфер обмена'))
	}

	useEffect(() => {
		if (data) {
			const fac = new FastAverageColor()
			fac
				.getColorAsync(data.product.image.url, {
					algorithm: 'simple'
				})
				.then(color => {
					const getElem = document.getElementById('product-image-wrapper-preview')
					if (getElem) {
						//Цвет фона
						// getElem.style.backgroundColor = color.hex
						getElem.style.color = color.isDark ? '#ffffff' : '#000000'
					}
				})
				.catch(e => {
					console.error(e)
				})
		}
	}, [data])

	return useMemo(() => ({ data, loading, copyText, count, setCount }), [data, loading, count])
}
