import { GET_CATEGORIES } from '@/services/categories/categories.service'
import {
	createFile,
	PRODUCT,
	UPDATE_ACTIVATION_CODE_PRODUCT
} from '@/services/product/products.service'
import { GET_SHOP_PRODUCTS } from '@/services/shop/shop.service'
import { useMessagesStore } from '@/store/messageStore/messageStore'
import { ICategories } from '@/types/category.type'
import {
	IInputActivationCodeProduct,
	IProduct,
	IRequestUpdateActivationCodeProduct
} from '@/types/product.type'
import { fileReader } from '@/utils/fileReader'
import { getImageDimensions } from '@/utils/getImageDimensions'
import { useMutation, useQuery } from '@apollo/client'
import { SelectProps } from 'antd'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

export const useDefaultUpdate = () => {
	const searchParams = useSearchParams()
	const [uploadLoading, setUploadLoading] = useState<boolean>(false)
	const shopId = searchParams.get('shopId')
	const productId = searchParams.get('productId')
	const navigate = useRouter()
	const PushMessage = useMessagesStore(state => state.pushMessages)
	const [imageUrl, setImageUrl] = useState<string | null>(null)

	const { data, loading: productLoading } = useQuery<{ product: IProduct }, { id: string | null }>(
		PRODUCT,
		{
			variables: { id: productId }
		}
	)

	const [UpdateActivationCodeProduct, { loading }] = useMutation<
		IProduct,
		IRequestUpdateActivationCodeProduct
	>(UPDATE_ACTIVATION_CODE_PRODUCT, {
		onCompleted() {
			PushMessage({ key: '', title: 'Продукт был успешно отредактирован', type: 'success' })
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

	useEffect(() => {
		if (data) {
			reset({
				description: data.product.description,
				displayName: data.product.displayName,
				price: data.product.price,
				usageInstruction: data.product.usageInstruction,
				categoryId: data.product.category?.id
			})
			setImageUrl(data?.product.image.url)
		}
	}, [data])

	const onSubmit: SubmitHandler<IInputActivationCodeProduct> = async formData => {
		if (imageUrl) {
			if (shopId && data)
				UpdateActivationCodeProduct({
					variables: {
						id: data.product.id,
						categoryId: formData.categoryId,
						description: formData.description,
						displayName: formData.displayName,
						price: formData.price,
						usageInstruction: formData.usageInstruction,
						imageId: data.product.image.id
					}
				})
		} else {
			getImageDimensions(fileReader(formData.image))
				.then(async dimensions => {
					const minSize = dimensions.width >= 512 && dimensions.height >= 1024
					const maxSize = dimensions.width <= 2048 && dimensions.height <= 4096
					if (minSize && maxSize) {
						setUploadLoading(true)
						const bodyFormData = new FormData()
						bodyFormData.append('image', formData.image)
						const uploadFile = await createFile(bodyFormData)
						setUploadLoading(false)
						if (shopId && data)
							UpdateActivationCodeProduct({
								variables: {
									id: data.product.id,
									categoryId: formData.categoryId,
									description: formData.description,
									displayName: formData.displayName,
									imageId: uploadFile,
									price: formData.price,
									usageInstruction: formData.usageInstruction
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

	const getCategoryOption = (): string => {
		if (categories && data) {
			const findIndex = categories.categories.edges.findIndex(
				elem => elem.node.id === data.product.category?.id
			)
			return categories.categories.edges[findIndex].node.code
		} else return ''
	}

	return {
		register,
		handleSubmit,
		errors,
		onSubmit,
		categorySelectOptions,
		control,
		uploadLoading,
		loading,
		imageUrl,
		setImageUrl,
		getCategoryOption,
		productLoading
	}
}
