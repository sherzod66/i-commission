import { useMe } from '@/hooks/useMe'
import { createFile } from '@/services/product/products.service'
import {
	UPDATE_SHOP,
	UPDATE_SHOP_AVATAR_IMAGE,
	UPDATE_SHOP_COVER_IMAGE
} from '@/services/shop/shop.service'
import { ME } from '@/services/user/user.service'
import { IShop } from '@/types/shop.type'
import { fileReader } from '@/utils/fileReader'
import { getImageDimensions } from '@/utils/getImageDimensions'
import { useMutation } from '@apollo/client'
import { message } from 'antd'
import { useSearchParams } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

type TShopInputs = {
	code: string
	displayName: string
}

export const useSettingsShop = () => {
	const searchParams = useSearchParams()
	const shopId = searchParams.get('shopId')
	const [shop, setShop] = useState<IShop | null>(null)
	const { data: user, error, loading } = useMe()
	const [coverImage, setCoverImage] = useState<File | null>(null)
	const [avatarImage, setAvatarImage] = useState<File | null>(null)
	const [isEdit, setIsEdit] = useState<boolean>(false)
	const [uploadLoading, setUploadLoading] = useState<boolean>(false)

	const [coverMutation, { loading: coverLoading }] = useMutation<
		IShop,
		{ id: string; coverId: string | null }
	>(UPDATE_SHOP_COVER_IMAGE, {
		onCompleted() {
			message.success('Успешно изменено!')
		},
		refetchQueries: [ME]
	})
	const [avatarMutation, { loading: avatarLoading }] = useMutation<
		IShop,
		{ id: string; imageId: string | null }
	>(UPDATE_SHOP_AVATAR_IMAGE, {
		onCompleted() {
			message.success('Успешно изменено!')
		},
		refetchQueries: [ME]
	})
	const [shopMutation] = useMutation<IShop, { id: string; displayName: string; code: string }>(
		UPDATE_SHOP,
		{
			onCompleted() {
				message.success('Успешно изменено!')
				setIsEdit(false)
			},
			refetchQueries: [ME]
		}
	)

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<TShopInputs>({ mode: 'onChange' })

	const onSubmit: SubmitHandler<TShopInputs> = data => {
		if (user && user.me.account && shop) {
			if (shop.code !== data.code || shop.displayName !== data.displayName) {
				shopMutation({
					variables: {
						code: data.code,
						displayName: data.displayName,
						id: shop.id
					}
				})
			}
		}
	}
	useEffect(() => {
		if (user && user.me.account) {
			const findShop = user.me.account.shops.edges.findIndex(item => item.node.id === shopId)
			setShop(user.me.account.shops.edges[findShop].node)
			reset({
				code: user.me.account.shops.edges[findShop].node.code,
				displayName: user.me.account.shops.edges[findShop].node.displayName
			})
		}
	}, [user])

	const onCoverSubmit = () => {
		if (!user) return
		if (!shop) return

		if (!shop.availablePermissions.includes('shop.update')) {
			message.info('У вас нет прав на редактирование магазина!')
			return
		}
		if (!coverImage) {
			message.info('Загрузите изображение!')
			return
		}
		getImageDimensions(fileReader(coverImage))
			.then(async dimensions => {
				const maxSize = dimensions.width <= 1920 && dimensions.height <= 430
				if (maxSize) {
					setUploadLoading(true)
					const bodyFormData = new FormData()
					bodyFormData.append('image', coverImage)
					const uploadFile = await createFile(bodyFormData)
					setUploadLoading(false)
					coverMutation({
						variables: { coverId: uploadFile, id: shop.id }
					})
				} else {
					message.error('Макс. размер 1920x427px')
				}
			})
			.catch(error => console.error('Ошибка загрузки изображения:', error))
	}

	const onCoverReset = () => {
		if (!user) return
		if (!shop) return
		coverMutation({
			variables: { coverId: null, id: shop.id }
		})
	}

	const onImageReset = () => {
		if (!user) return
		if (!shop) return
		avatarMutation({
			variables: { imageId: null, id: shop.id }
		})
	}
	const onImageSubmit = () => {
		if (!user) return
		if (!shop) return

		if (!shop.availablePermissions.includes('shop.update')) {
			message.info('У вас нет прав на редактирование магазина!')
			return
		}
		if (!avatarImage) {
			message.info('Загрузите изображение!')
			return
		}
		getImageDimensions(fileReader(avatarImage))
			.then(async dimensions => {
				const maxSize = dimensions.width <= 400 && dimensions.height <= 400
				if (maxSize) {
					setUploadLoading(true)
					const bodyFormData = new FormData()
					bodyFormData.append('image', avatarImage)
					const uploadFile = await createFile(bodyFormData)
					setUploadLoading(false)
					avatarMutation({
						variables: { imageId: uploadFile, id: shop.id }
					})
				} else {
					message.error('Макс. размер 400x400px')
				}
			})
			.catch(error => console.error('Ошибка загрузки изображения:', error))
	}

	console.log(shop)

	return useMemo(
		() => ({
			register,
			handleSubmit,
			errors,
			onSubmit,
			coverImage,
			setCoverImage,
			avatarImage,
			setAvatarImage,
			onCoverSubmit,
			onImageSubmit,
			isEdit,
			setIsEdit,
			coverLoading,
			onCoverReset,
			uploadLoading,
			avatarLoading,
			user,
			onImageReset,
			shop
		}),
		[
			errors,
			coverImage,
			avatarImage,
			isEdit,
			coverLoading,
			uploadLoading,
			user,
			avatarLoading,
			shop
		]
	)
}
