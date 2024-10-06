'use client'
import { ChangeEvent, Dispatch, DragEvent, FC, SetStateAction, useMemo, useState } from 'react'
import styles from '../../profile/user-avatar/userAvatar.module.scss'
import { message } from 'antd'
import Dragger from '@/components/ui/dragger/Dragger'
import { fileReader } from '@/utils/fileReader'
import { useMessagesStore } from '@/store/messageStore/messageStore'
import cn from 'clsx'
import Loader from '@/components/ui/loader/Loader'
import { useMe } from '@/hooks/useMe'
import { useSearchParams } from 'next/navigation'

type TShopAvatarProps = {
	avatarImage: File | null
	setAvatarImage: Dispatch<SetStateAction<File | null>>
	onImageSubmit: () => void
	avatarLoading: boolean
	onImageReset: () => void
	uploadLoading: boolean
}

const ShopAvatar: FC<TShopAvatarProps> = ({
	avatarImage,
	avatarLoading,
	onImageReset,
	onImageSubmit,
	setAvatarImage,
	uploadLoading
}) => {
	const { data: user } = useMe()
	const searchParams = useSearchParams()
	const shopId = searchParams.get('shopId')
	const imageUrl: string | null = useMemo(() => {
		if (user && user.me.account) {
			const findShop = user.me.account.shops.edges.findIndex(item => item.node.id === shopId)
			return user.me.account.shops.edges[findShop].node.image
				? user.me.account.shops.edges[findShop].node.image.url
				: null
		} else return null
	}, [user])
	const [isDragger, setIsDragger] = useState<boolean>(false)
	const PushMessage = useMessagesStore(state => state.pushMessages)
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
			setAvatarImage(files[0])
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
				setAvatarImage(files[0])
				setIsDragger(false)
			} else {
				PushMessage({ type: 'error', title: 'Выберите изображения формата PNG или JPG', key: '' })
			}
		}
	}
	const delCoverImage = () => {
		if (avatarImage === null) {
			onImageReset()
		} else {
			setAvatarImage(null)
		}
	}
	return (
		<>
			<div className={styles.row}>
				<div className={styles.image}>
					<img
						src={avatarImage ? fileReader(avatarImage) : imageUrl ? imageUrl : '/image/avatar.png'}
						alt='avatar'
					/>
				</div>
				<div className={styles.row__column}>
					<h4>Изменить фотографию</h4>
					<div className={styles.head__buttons}>
						<div className=''>
							<button onClick={delCoverImage} type='button' className={styles.action}>
								Удалить
							</button>
						</div>
						<div className='relative h-5 min-w-6'>
							{avatarLoading || uploadLoading ? (
								<Loader black={true} />
							) : (
								<button
									onClick={onImageSubmit}
									type='button'
									disabled={avatarLoading}
									className={cn(styles.action, styles.orange)}
								>
									Загрузить
								</button>
							)}
						</div>
					</div>
				</div>
			</div>
			<div className={cn(styles.drag__wrapper, styles.shop)}>
				<Dragger
					dragDropHandler={dragDropHandler}
					dragLeaveHandler={dragLeaveHandler}
					dragStarHandler={dragStarHandler}
					inputImageHandler={inputImageHandler}
					isDragger={isDragger}
					description='(Макс. размер 400x400px)'
					label='avatar-image'
				/>
			</div>
		</>
	)
}

export default ShopAvatar
