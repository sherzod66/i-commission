import { TCountQuantity } from '@/components/ui/filter/Filter'
import { PRODUCT } from '@/services/product/products.service'
import { useBasketStore } from '@/store/basketStore/useBasketStore'
import { IBasket } from '@/types/basket.type'
import {
	EnumConfigurationGroupType,
	IConfiguration,
	IConfigurationCheckbox,
	IConfigurationNumberGroup,
	IConfigurationNumberGroupClient,
	IConfigurationSelectGroup,
	IConfigurationTextGroup,
	IConfigurationTextGroupClient,
	IProduct,
	IProductConfigurationCheckboxGroup
} from '@/types/product.type'
import { cleanNumber, containsNumbers } from '@/utils/formatPrice'
import { useQuery } from '@apollo/client'
import { message } from 'antd'
import { FastAverageColor } from 'fast-average-color'
import { useParams } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'

export const useProduct = () => {
	const params = useParams()
	const basket = useBasketStore(store => store.basket)
	const [count, setCount] = useState<TCountQuantity>({ count: '2', isFocus: false, quantity: 55 })
	const [configureError, setConfigureError] = useState<boolean>(false)
	const [selectValue, setSelectValue] = useState<IConfigurationSelectGroup[]>([])
	const [checkboxValue, setCheckboxValue] = useState<IProductConfigurationCheckboxGroup[]>([])
	const [textValue, setTextValue] = useState<IConfigurationTextGroupClient[]>([])
	const [numberValue, setNumberValue] = useState<IConfigurationNumberGroupClient[]>([])
	const toggleBasket = useBasketStore(store => store.toggle)

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

			if (basket.length > 0) {
				const findProduct = basket.find(item => item.id === data.product.id)
				if (findProduct) {
					findProduct.configuration.groups.forEach(group => {
						if (
							group.__typename === EnumConfigurationGroupType.ProductConfigurationInputTextGroup
						) {
							setTextValue(prev => [...prev, { ...group, value: group.value ? group.value : '' }])
						} else if (
							group.__typename === EnumConfigurationGroupType.ProductConfigurationSelectGroup
						) {
							setSelectValue(prev => [...prev, { ...group }])
						} else if (
							group.__typename === EnumConfigurationGroupType.ProductConfigurationCheckboxGroup
						) {
							setCheckboxValue(prev => [...prev, { ...group }])
						} else if (
							group.__typename === EnumConfigurationGroupType.ProductConfigurationInputNumberGroup
						) {
							setNumberValue(prev => [...prev, { ...group, value: group.value ? group.value : '' }])
						}
					})
				} else {
					if (data.product.configuration) {
						data.product.configuration.groups.forEach(group => {
							if (
								group.__typename === EnumConfigurationGroupType.ProductConfigurationInputTextGroup
							) {
								setTextValue(prev => [...prev, { ...group, value: '' }])
							} else if (
								group.__typename === EnumConfigurationGroupType.ProductConfigurationSelectGroup
							) {
								setSelectValue(prev => [...prev, { ...group, list: [] }])
							} else if (
								group.__typename === EnumConfigurationGroupType.ProductConfigurationCheckboxGroup
							) {
								setCheckboxValue(prev => [...prev, { ...group, list: [] }])
							} else if (
								group.__typename === EnumConfigurationGroupType.ProductConfigurationInputNumberGroup
							) {
								setNumberValue(prev => [...prev, { ...group, value: '' }])
							}
						})
					}
				}
			}
		}
	}, [data])

	const toggleCheckbox = (
		checkbox: IProductConfigurationCheckboxGroup,
		checkboxList: IConfigurationCheckbox
	) => {
		const copyCheckboxValue: IProductConfigurationCheckboxGroup[] = [...checkboxValue]
		checkboxValue.forEach((checkboxes, index) => {
			const findListIndex = checkboxes.list.findIndex(list => list.id === checkboxList.id)
			if (findListIndex >= 0) {
				copyCheckboxValue[index].list.splice(findListIndex, 1)
				setCheckboxValue(copyCheckboxValue)
			} else {
				if (checkbox.id === checkboxes.id) {
					copyCheckboxValue[index].list.push(checkboxList)
					setCheckboxValue(copyCheckboxValue)
				}
			}
		})
	}

	const onSelectValue = (
		selectGroup: IConfigurationSelectGroup,
		selectOption: IConfigurationCheckbox
	) => {
		const findSelect = selectValue.findIndex(elem => elem.id === selectGroup.id)
		if (findSelect >= 0) {
			const copySelectValue: IConfigurationSelectGroup[] = [...selectValue]
			copySelectValue[findSelect].list = [selectOption]
			setSelectValue(copySelectValue)
		}
	}
	const onSetTextValue = (textGroup: IConfigurationTextGroup, text: string) => {
		const findText = textValue.findIndex(elem => elem.id === textGroup.id)
		if (findText >= 0) {
			const copyTextValue: IConfigurationTextGroupClient[] = [...textValue]
			copyTextValue[findText].value = text
			setTextValue(copyTextValue)
		}
	}
	const onSetNumberValue = (numberGroup: IConfigurationNumberGroup, number: string) => {
		const findNumber = numberValue.findIndex(elem => elem.id === numberGroup.id)
		if (findNumber >= 0) {
			const StringNumber = cleanNumber(number)
			const copyNumberValue: IConfigurationNumberGroupClient[] = [...numberValue]
			const isNumber = containsNumbers(StringNumber)
			console.log(isNumber)
			if (!isNumber) return
			copyNumberValue[findNumber].value = StringNumber
			setNumberValue(copyNumberValue)
		}
	}

	const onToggleBasket = () => {
		if (data?.product.configuration) {
			const { configuration, ...rest } = data.product
			const validate: boolean[] = []
			const userConfigure: IConfiguration = {
				__typename: 'ProductConfiguration',
				groups: []
			}
			data.product.configuration.groups.forEach(group => {
				if (group.__typename === EnumConfigurationGroupType.ProductConfigurationCheckboxGroup) {
					const findCheckbox = checkboxValue.find(item => item.id === group.id)
					if (findCheckbox) {
						validate.push(findCheckbox.list.length > 0 ? true : false)
					}
				} else if (
					group.__typename === EnumConfigurationGroupType.ProductConfigurationInputNumberGroup
				) {
					const findNumber = numberValue.find(item => item.id === group.id)
					if (findNumber) {
						validate.push(findNumber.value.length > 0 ? true : false)
					}
				} else if (
					group.__typename === EnumConfigurationGroupType.ProductConfigurationInputTextGroup
				) {
					const findText = textValue.find(item => item.id === group.id)
					if (findText) {
						const regex = new RegExp(findText.regex)
						const isValid = regex.test(findText.value)
						if (isValid) {
							validate.push(true)
						} else {
							message.error(findText.errorMessage)
							validate.push(false)
						}
					}
				} else if (
					group.__typename === EnumConfigurationGroupType.ProductConfigurationSelectGroup
				) {
					const findSelect = selectValue.find(item => item.id === group.id)
					if (findSelect) {
						validate.push(findSelect.list.length > 0 ? true : false)
					}
				}
			})
			if (validate.includes(false)) {
				setConfigureError(true)
				const timeOut = setTimeout(() => {
					setConfigureError(false)
					return () => clearTimeout(timeOut)
				}, 1000)
			} else {
				toggleBasket({
					...data.product,
					configuration: {
						__typename: 'ProductConfiguration',
						groups: [...selectValue, ...numberValue, ...textValue, ...checkboxValue]
					},
					basketQuantity: +count.count
				})
			}
		} else {
			if (data)
				toggleBasket({
					...data.product,
					basketQuantity: +count.count
				})
		}
	}

	return useMemo(
		() => ({
			data,
			loading,
			copyText,
			count,
			setCount,
			toggleCheckbox,
			checkboxValue,
			onSelectValue,
			onSetTextValue,
			selectValue,
			numberValue,
			onToggleBasket,
			textValue,
			onSetNumberValue,
			configureError
		}),
		[data, loading, count, checkboxValue, selectValue, textValue, numberValue, configureError]
	)
}
