import { ShopInput } from '@/gql/graphql'
import { createFile } from '@/services/product/products.service'
import { CREATE_SHOP, FIND_SHOP_BY_CODE } from '@/services/shop/shop.service'
import { ME } from '@/services/user/user.service'
import { IShopCreate } from '@/types/shop.type'
import { useMutation, useQuery } from '@apollo/client'
import { message } from 'antd'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

export const useCreateShop = (onToggleModal: () => void) => {
	const [page, setPage] = useState<number>(1)
	const [CreateShop, { loading: mutationLoading }] = useMutation<'', ShopInput>(CREATE_SHOP, {
		onCompleted(data, clientOptions) {},
		refetchQueries: [ME]
	})
	const [uploadLoading, setUploadLoading] = useState<boolean>(false)

	const {
		register,
		handleSubmit,
		watch,
		control,
		formState: { errors }
	} = useForm<IShopCreate>({ mode: 'onChange' })
	const onSubmit: SubmitHandler<IShopCreate> = async data => {
		try {
			setUploadLoading(true)
			const bodyFormData = new FormData()
			bodyFormData.append('image', data.image)
			const uploadFile = await createFile(bodyFormData)

			const bodyCoverFormData = new FormData()
			bodyCoverFormData.append('image', data.cover)
			const uploadCoverFile = await createFile(bodyCoverFormData)
			setUploadLoading(false)
			if (uploadCoverFile.length > 0 && uploadFile.length > 0) {
				CreateShop({
					variables: {
						code: data.code,
						coverId: uploadCoverFile,
						displayName: data.displayName,
						imageId: uploadFile
					}
				})
				onToggleModal()
				message.success('Вы успешно открыли магазаин')
			}
		} catch (e) {
			setUploadLoading(false)
		}
	}

	const onSetPage = () => {
		if (page !== 4) {
			setPage(page + 1)
		}
	}

	const { data, loading, refetch } = useQuery<{ shops: { totalCount: number } }, { code: string }>(
		FIND_SHOP_BY_CODE,
		{
			variables: { code: '' }
		}
	)
	console.log(data)

	return {
		page,
		onSetPage,
		setPage,
		register,
		handleSubmit,
		control,
		errors,
		onSubmit,
		data,
		loading,
		refetch,
		uploadLoading
	}
}
