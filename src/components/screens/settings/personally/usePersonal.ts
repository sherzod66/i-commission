import { message } from 'antd'
import { ChangeEvent, DragEvent, useMemo, useState } from 'react'

type TUserInfo = {
	name: string
	email: string
	domain: string
	nameFocus: boolean
	emailFocus: boolean
	domainFocus: boolean
}
const userDefault: TUserInfo = {
	domain: '15132165',
	domainFocus: false,
	email: 'TolyPostebailo226@gmail.com',
	emailFocus: false,
	name: '',
	nameFocus: false
}

export const usePersonal = () => {
	const [userInfo, setUserInfo] = useState<TUserInfo>(userDefault)
	const [isDragger, setIsDragger] = useState<boolean>(false)
	const [coverBg, setCoverBg] = useState<File | null>(null)
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
		console.log(files)
		if (['image/jpeg', 'image/png', 'image/jpg'].includes(files[0].type)) {
			setCoverBg(files[0])
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
				setCoverBg(files[0])
				setIsDragger(false)
			} else {
				message.error('Выберите изображения формата PNG или JPG')
			}
		}
	}

	const onChangeBgHandler = () => {
		const element = document.getElementById('image-size')
		if (coverBg && element) {
			if (element.clientWidth <= 960 && element.clientHeight <= 430) {
				message.success('Успешно')
			} else {
				message.error('Макс. размер 960x430px')
			}
		}
	}

	const delCoverImage = () => {
		setCoverBg(null)
	}

	return useMemo(
		() => ({
			userInfo,
			setUserInfo,
			coverBg,
			dragStarHandler,
			dragLeaveHandler,
			dragDropHandler,
			isDragger,
			inputImageHandler,
			delCoverImage,
			onChangeBgHandler
		}),
		[userInfo, coverBg, isDragger]
	)
}
