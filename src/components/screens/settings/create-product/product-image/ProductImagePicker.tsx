'use client'
import { ChangeEvent, DragEvent, FC, useEffect, useState } from 'react'
import styles from './productImagePicker.module.scss'
import { message } from 'antd'
import Dragger from '@/components/ui/dragger/Dragger'
import { fileReader } from '@/utils/fileReader'
import { useMessagesStore } from '@/store/messageStore/messageStore'
import DeleteIcon from '@/assets/icon/DeleteIcon'
import { FastAverageColor } from 'fast-average-color'
import { Control, Controller, ControllerRenderProps } from 'react-hook-form'
import { IInputActivationCodeProduct } from '@/types/product.type'

const ProductImagePicker: FC<{ control: Control<IInputActivationCodeProduct, any> }> = ({
	control
}) => {
	const [isDragger, setIsDragger] = useState<boolean>(false)
	const [avatar, setAvatar] = useState<File | null>(null)
	const PushMessage = useMessagesStore(state => state.pushMessages)
	useEffect(() => {
		if (avatar) {
			const fac = new FastAverageColor()
			fac
				.getColorAsync(fileReader(avatar), { algorithm: 'simple' })
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
	}, [avatar])
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
		field: ControllerRenderProps<IInputActivationCodeProduct, 'image'>
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
		field: ControllerRenderProps<IInputActivationCodeProduct, 'image'>
	) => {
		e.preventDefault()
		let files = e.target.files
		if (files) {
			if (files[0].size < 5500000) {
				if (['image/jpeg', 'image/png', 'image/jpg'].includes(files[0].type)) {
					setAvatar(files[0])
					field.onChange(files[0])
					setIsDragger(false)
				} else {
					PushMessage({ type: 'error', title: 'Выберите изображения формата PNG или JPG', key: '' })
				}
			} else {
				message.error('(Макс. размер 5мб)')
			}
		}
	}

	const delCoverImage = () => {
		setAvatar(null)
	}
	return (
		<>
			<div className={styles.row}>
				<div className={styles.row__column}>
					<h4>Обложка товара</h4>
				</div>
			</div>
			<div className={styles.drag__wrapper}>
				{avatar ? (
					<div className={styles.product__image}>
						<button type='button' onClick={() => setAvatar(null)} className={styles.delete__image}>
							<DeleteIcon />
						</button>
						<div id='product-image-wrapper-preview' className={styles.product__image_wrapper}>
							<img src={fileReader(avatar)} alt='product-image' />
							<span className={styles.product__price}>1 000 ₽</span>
							<span className={styles.product__name}>Apple gifts</span>
						</div>
					</div>
				) : (
					<Controller
						name='image'
						control={control}
						rules={{ required: true }}
						render={({ field }) => (
							<Dragger
								dragDropHandler={e => dragDropHandler(e, field)}
								dragLeaveHandler={dragLeaveHandler}
								dragStarHandler={dragStarHandler}
								inputImageHandler={e => inputImageHandler(e, field)}
								isDragger={isDragger}
								description='(Макс. размер 5мб)'
								label='avatar-image'
							/>
						)}
					/>
				)}
			</div>
		</>
	)
}

export default ProductImagePicker
