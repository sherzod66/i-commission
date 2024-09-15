import { GET_CATEGORIES } from '@/services/categories/categories.service'
import { CREATE_ACTIVATION_CODE_PRODUCT, createFile } from '@/services/product/products.service'
import { GET_SHOP_PRODUCTS } from '@/services/shop/shop.service'
import { useMessagesStore } from '@/store/messageStore/messageStore'
import { ICategories } from '@/types/category.type'
import {
	IInputActivationCodeProduct,
	IProduct,
	IRequestActivationCodeProduct
} from '@/types/product.type'
import { fileReader } from '@/utils/fileReader'
import { getImageDimensions } from '@/utils/getImageDimensions'
import { useMutation, useQuery } from '@apollo/client'
import { SelectProps } from 'antd'
import { useRouter, useSearchParams } from 'next/navigation'
import { useMemo, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

export const useDefaultProduct = () => {
	const searchParams = useSearchParams()
	const [uploadLoading, setUploadLoading] = useState<boolean>(false)
	const shopId = searchParams.get('shopId')
	const navigate = useRouter()
	const PushMessage = useMessagesStore(state => state.pushMessages)
	const [createActivationCodeProduct, { loading, error }] = useMutation<
		IProduct,
		IRequestActivationCodeProduct
	>(CREATE_ACTIVATION_CODE_PRODUCT, {
		onCompleted(data, clientOptions) {
			PushMessage({ key: '', title: 'Продукт был опубликован', type: 'success' })
			navigate.push(`/settings/products?shopId=${shopId}`)
		},
		refetchQueries: [GET_SHOP_PRODUCTS]
	})
	const {
		register,
		handleSubmit,
		watch,
		reset,
		control,
		formState: { errors }
	} = useForm<IInputActivationCodeProduct>({ mode: 'onChange', defaultValues: { price: 0 } })
	const onSubmit: SubmitHandler<IInputActivationCodeProduct> = async data => {
		getImageDimensions(fileReader(data.image))
			.then(async dimensions => {
				const minSize = dimensions.width >= 512 && dimensions.height >= 1024
				const maxSize = dimensions.width <= 2048 && dimensions.height <= 4096
				if (minSize && maxSize) {
					setUploadLoading(true)
					const bodyFormData = new FormData()
					bodyFormData.append('image', data.image)
					const uploadFile = await createFile(bodyFormData)
					setUploadLoading(false)
					if (shopId)
						createActivationCodeProduct({
							variables: {
								categoryId: data.categoryId,
								description: data.description,
								displayName: data.displayName,
								imageId: uploadFile,
								price: data.price,
								usageInstruction: data.usageInstruction,
								shopId
							}
						})
				} else {
					PushMessage({
						type: 'error',
						title: 'Минимальный размер обложки 512х1024px, максимальный размер 2048х4096px',
						key: ''
					})
				}
			})
			.catch(error => console.error('Ошибка загрузки изображения:', error))
	}

	const { data: categories, loading: categoriesLoading } = useQuery<ICategories>(GET_CATEGORIES)

	const categorySelectOptions: SelectProps['options'] = useMemo(() => {
		if (categories) {
			return [
				...categories.categories.edges.map(item => ({
					value: item.node.code,
					label: item.node.displayName,
					id: item.node.id
				}))
			]
		} else {
			return []
		}
	}, [categories])

	return {
		register,
		handleSubmit,
		errors,
		onSubmit,
		categorySelectOptions,
		control,
		uploadLoading,
		loading
	}
}
