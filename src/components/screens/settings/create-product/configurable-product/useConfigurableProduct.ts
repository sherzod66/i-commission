import { GET_CATEGORIES } from '@/services/categories/categories.service'
import { CREATE_CONFIGURABLE_PRODUCT, createFile } from '@/services/product/products.service'
import { GET_SHOP_PRODUCTS } from '@/services/shop/shop.service'
import { useMessagesStore } from '@/store/messageStore/messageStore'
import { ICategories } from '@/types/category.type'
import {
	IConfigurationNumberGroup,
	IConfigurationSelectGroup,
	IConfigurationTextGroup,
	IInputActivationCodeProduct,
	IProduct,
	IProductConfigurationCheckboxGroup,
	IRequestConfigurableProduct,
	TGroupType
} from '@/types/product.type'
import { fileReader } from '@/utils/fileReader'
import { generateId } from '@/utils/generateId'
import { getImageDimensions } from '@/utils/getImageDimensions'
import { useMutation, useQuery } from '@apollo/client'
import { SelectProps } from 'antd'
import { useRouter, useSearchParams } from 'next/navigation'
import { ChangeEvent, useMemo, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

type TMiddleState = {
	id: string
	type: TGroupType | null
	displayName: string
}

export const useConfigurableProduct = () => {
	const searchParams = useSearchParams()
	const [uploadLoading, setUploadLoading] = useState<boolean>(false)
	const [orderGroup, setOrderGroup] = useState<string[]>([])

	const [checkboxValues, setCheckboxValues] = useState<IProductConfigurationCheckboxGroup[]>([])
	const [selectValues, setSelectValues] = useState<IConfigurationSelectGroup[]>([])
	const [numberValues, setNumberValues] = useState<IConfigurationNumberGroup[]>([])
	const [textValues, setTextValues] = useState<IConfigurationTextGroup[]>([])

	const [middleState, setMiddleState] = useState<TMiddleState[]>([])
	console.log(numberValues)
	const shopId = searchParams.get('shopId')
	const navigate = useRouter()
	const PushMessage = useMessagesStore(state => state.pushMessages)

	const [createConfigurableProduct, { loading, error }] = useMutation<
		IProduct,
		IRequestConfigurableProduct
	>(CREATE_CONFIGURABLE_PRODUCT, {
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
						createConfigurableProduct({
							variables: {
								categoryId: data.categoryId,
								description: data.description,
								displayName: data.displayName,
								imageId: uploadFile,
								price: data.price,
								usageInstruction: data.usageInstruction,
								shopId,
								checkboxes: checkboxValues,
								groupOrder: orderGroup,
								numbers: numberValues,
								selects: selectValues,
								texts: textValues
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

	const createMiddleEntity = () => {
		const createId = generateId()
		setOrderGroup(prev => [...prev, createId])
		setMiddleState(prev => [...prev, { id: createId, type: null, displayName: '' }])
	}

	const setMiddleValue = (
		MiddleValueIndex: number,
		event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
		name: keyof TMiddleState
	) => {
		const editMiddle = [...middleState]
		editMiddle.splice(MiddleValueIndex, 1, {
			...middleState[MiddleValueIndex],
			[name]: event.target.value
		})
		setMiddleState(editMiddle)
	}

	const selectOnChange = (
		nextType: TGroupType,
		currentType: 'checkbox' | 'select' | 'text' | 'numbers' | 'middle',
		currentGroupIndex: number
	) => {
		const typesRoute = {
			checkbox: (displayName: string, id: string) =>
				setCheckboxValues(prev => [...prev, { displayName, id, list: [] }]),
			select: (displayName: string, id: string) =>
				setSelectValues(prev => [...prev, { displayName, id, defaultSelect: '', list: [] }]),
			text: (displayName: string, id: string) =>
				setTextValues(prev => [...prev, { displayName, id, errorMessage: '', regex: '' }]),
			numbers: (displayName: string, id: string) =>
				setNumberValues(prev => [
					...prev,
					{ displayName, id, defaultAmount: 1, max: 2, min: 1, price: 0 }
				])
		}
		if (currentType === 'checkbox') {
			const copyCheckbox = [...checkboxValues]
			typesRoute[nextType](
				copyCheckbox[currentGroupIndex].displayName,
				copyCheckbox[currentGroupIndex].id
			)
			copyCheckbox.splice(currentGroupIndex, 1)
			setCheckboxValues(copyCheckbox)
		} else if (currentType === 'numbers') {
			const copyNumbers = [...numberValues]
			typesRoute[nextType](
				copyNumbers[currentGroupIndex].displayName,
				copyNumbers[currentGroupIndex].id
			)
			copyNumbers.splice(currentGroupIndex, 1)
			setNumberValues(copyNumbers)
		} else if (currentType === 'select') {
			const copySelect = [...selectValues]
			typesRoute[nextType](
				copySelect[currentGroupIndex].displayName,
				copySelect[currentGroupIndex].id
			)
			copySelect.splice(currentGroupIndex, 1)
			setSelectValues(copySelect)
		} else if (currentType === 'text') {
			const copyText = [...textValues]
			typesRoute[nextType](copyText[currentGroupIndex].displayName, copyText[currentGroupIndex].id)
			copyText.splice(currentGroupIndex, 1)
			setTextValues(copyText)
		} else if (currentType === 'middle') {
			const copyMiddle = [...middleState]
			typesRoute[nextType](
				copyMiddle[currentGroupIndex].displayName,
				copyMiddle[currentGroupIndex].id
			)
			copyMiddle.splice(currentGroupIndex, 1)
			setMiddleState(copyMiddle)
		}
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
		createMiddleEntity,
		orderGroup,
		checkboxValues,
		selectValues,
		numberValues,
		textValues,
		middleState,
		setMiddleValue,
		selectOnChange,
		setSelectValues,
		setCheckboxValues,
		setNumberValues,
		setTextValues
	}
}

export const configurationSelect: SelectProps['options'] = [
	{ label: 'Чекбокс', value: 'checkbox' },
	{ label: 'Селект', value: 'select' },
	{ label: 'Числа', value: 'numbers' },
	{ label: 'Текст', value: 'text' }
]
