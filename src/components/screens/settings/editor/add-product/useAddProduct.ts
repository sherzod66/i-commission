import { IAddProduct, IProduct, defProduct } from '@/types/product.type'
import { message } from 'antd'
import { ChangeEvent, DragEvent, useMemo, useState } from 'react'

export const useAddProduct = () => {
	const [isDragger, setIsDragger] = useState<boolean>(false)
	const [avatar, setAvatar] = useState<File | null>(null)
	const [product, setProduct] = useState<IAddProduct>(defProduct)
	const dragStarHandler = (e: DragEvent<HTMLDivElement>) => {
		e.preventDefault()
		setIsDragger(true)
	}
	const dragLeaveHandler = (e: DragEvent<HTMLDivElement>) => {
		e.preventDefault()
		setIsDragger(false)
	}
	const dragDropHandler = (e: DragEvent<HTMLDivElement>) => {
		e.preventDefault()
		let files = e.dataTransfer.files
		if (['image/jpeg', 'image/png', 'image/jpg'].includes(files[0].type)) {
			setAvatar(files[0])
			setIsDragger(false)
		} else {
			message.error('Выберите изображения формата PNG или JPG')
		}
	}
	const inputImageHandler = (e: ChangeEvent<HTMLInputElement>) => {
		e.preventDefault()
		let files = e.target.files
		console.log(files)
		if (files) {
			if (['image/jpeg', 'image/png', 'image/jpg'].includes(files[0].type)) {
				setAvatar(files[0])
				setIsDragger(false)
			} else {
				message.error('Выберите изображения формата PNG или JPG')
			}
		}
	}

	const onChangeBgHandler = () => {
		const element = document.getElementById('avatar')
		if (avatar && element) {
			if (element.clientWidth <= 200 && element.clientHeight <= 200) {
				message.success('Успешно')
			} else {
				message.error('Макс. размер 200x200px')
			}
		}
	}
	const delCoverImage = () => {
		setAvatar(null)
	}

	const handleChange = <T>(key: keyof IAddProduct, value: T) => {
		setProduct(prev => ({ ...prev, [key]: value }))
	}
	return useMemo(
		() => ({
			dragStarHandler,
			dragLeaveHandler,
			dragDropHandler,
			inputImageHandler,
			onChangeBgHandler,
			delCoverImage,
			avatar,
			isDragger,
			product,
			setProduct,
			handleChange
		}),
		[isDragger, avatar, product]
	)
}
