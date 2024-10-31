'use client'
import { ChangeEvent, Dispatch, DragEvent, FC, SetStateAction, useEffect, useState } from 'react'
import styles from './ShopCreateImagePicker.module.scss'
import { message } from 'antd'
import Dragger from '@/components/ui/dragger/Dragger'
import { fileReader } from '@/utils/fileReader'
import { useMessagesStore } from '@/store/messageStore/messageStore'
import DeleteIcon from '@/assets/icon/DeleteIcon'
import { Control, Controller, ControllerRenderProps, FieldErrors } from 'react-hook-form'
import { IShopCreate } from '@/types/shop.type'
import { getImageDimensions } from '@/utils/getImageDimensions'

type TShopCreateImagePicker = {
	control: Control<IShopCreate, any>
	title: string
	maxWidth: number
	maxHeight: number
	minWidth: number
	minHeight: number
	controlKey: keyof IShopCreate
	errors: FieldErrors<IShopCreate>
}

const ShopCreateImagePicker: FC<TShopCreateImagePicker> = ({
	control,
	maxHeight,
	maxWidth,
	minHeight,
	minWidth,
	title,
	controlKey,
	errors
}) => {
	const [isDragger, setIsDragger] = useState<boolean>(false)
	const [avatar, setAvatar] = useState<File | null>(null)
	const PushMessage = useMessagesStore(state => state.pushMessages)
	const dragStarHandler = (e: DragEvent<HTMLDivElement>) => {
		e.preventDefault()
		setIsDragger(true)
	}
	const dragLeaveHandler = (e: DragEvent<HTMLDivElement>) => {
		e.preventDefault()
		setIsDragger(false)
	}
	const dragDropHandler = (
		e: DragEvent<HTMLDivElement>,
		field: ControllerRenderProps<IShopCreate, typeof controlKey>
	) => {
		e.preventDefault()
		let files = e.dataTransfer.files
		if (files[0].size < 5500000) {
			if (['image/jpeg', 'image/png', 'image/jpg'].includes(files[0].type)) {
				setAvatar(files[0])
				field.onChange(files[0])
				setIsDragger(false)
			} else {
				message.error('Выберите изображения формата PNG или JPG')
			}
		} else {
			message.error('(Макс. размер 5мб)')
		}
	}
	const inputImageHandler = (
		e: ChangeEvent<HTMLInputElement>,
		field: ControllerRenderProps<IShopCreate, typeof controlKey>
	) => {
		e.preventDefault()
		let files = e.target.files
		if (files) {
			getImageDimensions(fileReader(files[0]))
				.then(async dimensions => {
					const minSize = dimensions.width >= minWidth && dimensions.height >= minHeight
					const maxSize = dimensions.width <= maxWidth && dimensions.height <= maxHeight
					if (minSize && maxSize) {
						if (files[0].size < 5500000) {
							if (['image/jpeg', 'image/png', 'image/jpg'].includes(files[0].type)) {
								setAvatar(files[0])
								field.onChange(files[0])
								setIsDragger(false)
							} else {
								PushMessage({
									type: 'error',
									title: 'Выберите изображения формата PNG или JPG',
									key: ''
								})
							}
						} else {
							message.error('(Макс. размер 5мб)')
						}
					} else {
						PushMessage({
							type: 'error',
							title: `Минимальный размер обложки ${minWidth}х${minHeight}px, максимальный размер ${maxWidth}х${maxHeight}px`,
							key: ''
						})
					}
				})
				.catch(error => console.error('Ошибка загрузки изображения:', error))
		}
	}

	const delCoverImage = () => {
		setAvatar(null)
	}
	return (
		<>
			<div className={styles.row}>
				<div className={styles.row__column}>
					<h4>{title}</h4>
				</div>
			</div>
			<div className={styles.drag__wrapper}>
				{avatar ? (
					<>
						{controlKey === 'cover' ? (
							<div className={styles.product__image_cover}>
								<button
									type='button'
									onClick={() => setAvatar(null)}
									className={styles.delete__image_cover}
								>
									<DeleteIcon />
								</button>
								<div
									id='product-image-wrapper-preview'
									className={styles.product__image_wrapper_cover}
								>
									<img src={avatar ? fileReader(avatar) : ''} alt='product-image' />
								</div>
							</div>
						) : (
							<div className={styles.product__image}>
								<button
									type='button'
									onClick={() => setAvatar(null)}
									className={styles.delete__image}
								>
									<DeleteIcon />
								</button>
								<div id='product-image-wrapper-preview' className={styles.product__image_wrapper}>
									<img src={avatar ? fileReader(avatar) : ''} alt='product-image' />
								</div>
							</div>
						)}
					</>
				) : (
					<Controller
						name={controlKey}
						control={control}
						rules={{ required: 'Вы не загрузили фотографию' }}
						render={({ field }) => (
							<>
								<Dragger
									dragDropHandler={e => dragDropHandler(e, field)}
									dragLeaveHandler={dragLeaveHandler}
									dragStarHandler={dragStarHandler}
									inputImageHandler={e => inputImageHandler(e, field)}
									isDragger={isDragger}
									description={`(размер ${maxWidth}x${maxHeight})`}
									label='avatar-image'
								/>
								{errors[controlKey] && (
									<p className='text-orange-900 my-2 animate-fade' role='alert'>
										{errors[controlKey].message}
									</p>
								)}
							</>
						)}
					/>
				)}
			</div>
		</>
	)
}

export default ShopCreateImagePicker
