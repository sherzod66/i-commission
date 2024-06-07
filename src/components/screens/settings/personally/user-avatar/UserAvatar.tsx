'use client'
import { ChangeEvent, DragEvent, FC, useState } from 'react'
import styles from './userAva.module.scss'
import { message } from 'antd'
import Dragger from '@/components/ui/dragger/Dragger'
import { fileReader } from '@/utils/fileReader'

const UserAvatar: FC = () => {
	const [isDragger, setIsDragger] = useState<boolean>(false)
	const [avatar, setAvatar] = useState<File | null>(null)
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
	return (
		<>
			<div className={styles.row}>
				<div className={styles.image}>
					<img src={avatar ? fileReader(avatar) : '/image/avatar.png'} alt='avatar' />
				</div>
				<div className={styles.row__column}>
					<h4>Изменить фотографию</h4>
					<div className={styles.bg_header_active}>
						<button onClick={delCoverImage} type='button'>
							Удалить
						</button>
						<button onClick={onChangeBgHandler} type='button'>
							Загрузить
						</button>
					</div>
				</div>
			</div>
			<Dragger
				dragDropHandler={dragDropHandler}
				dragLeaveHandler={dragLeaveHandler}
				dragStarHandler={dragStarHandler}
				inputImageHandler={inputImageHandler}
				isDragger={isDragger}
				description='(Макс. размер 200x200px)'
				label='avatar-image'
			/>
			{avatar && (
				<img
					id='avatar'
					className='absolute left-0 top-0 opacity-0 invisible'
					src={avatar && fileReader(avatar)}
					alt=''
				/>
			)}
		</>
	)
}

export default UserAvatar
