'use client'
import { ChangeEvent, Dispatch, DragEvent, FC, SetStateAction, useMemo, useState } from 'react'
import styles from './shopBackground.module.scss'
import cn from 'clsx'
import { message } from 'antd'
import { useMessagesStore } from '@/store/messageStore/messageStore'
import Dragger from '@/components/ui/dragger/Dragger'
import { fileReader } from '@/utils/fileReader'
import { useMe } from '@/hooks/useMe'
import { useSearchParams } from 'next/navigation'
import Loader from '@/components/ui/loader/Loader'
type TShopBackgroundProps = {
	coverImage: File | null
	setCoverImage: Dispatch<SetStateAction<File | null>>
	onCoverSubmit: () => void
	coverLoading: boolean
	onCoverReset: () => void
	uploadLoading: boolean
}

const ShopBackground: FC<TShopBackgroundProps> = ({
	coverImage,
	setCoverImage,
	onCoverSubmit,
	coverLoading,
	onCoverReset,
	uploadLoading
}) => {
	const { data: user } = useMe()
	const searchParams = useSearchParams()
	const shopId = searchParams.get('shopId')
	const coverUrl: string | null = useMemo(() => {
		if (user && user.me.account) {
			const findShop = user.me.account.shops.edges.findIndex(item => item.node.id === shopId)
			return user.me.account.shops.edges[findShop].node.cover
				? user.me.account.shops.edges[findShop].node.cover.url
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
			setCoverImage(files[0])
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
				setCoverImage(files[0])
				setIsDragger(false)
			} else {
				PushMessage({ type: 'error', title: 'Выберите изображения формата PNG или JPG', key: '' })
			}
		}
	}

	const delCoverImage = () => {
		if (coverImage === null) {
			onCoverReset()
		} else {
			setCoverImage(null)
		}
	}
	return (
		<>
			<div className={styles.head}>
				<h4 className={styles.head__title}>Обложка магазина</h4>
				<div className={styles.head__buttons}>
					<div className=''>
						<button onClick={delCoverImage} type='button' className={styles.action}>
							Удалить
						</button>
					</div>
					<div className='relative h-5 min-w-6'>
						{coverLoading || uploadLoading ? (
							<Loader black={true} />
						) : (
							<button
								onClick={onCoverSubmit}
								type='button'
								disabled={coverLoading}
								className={cn(styles.action, styles.orange)}
							>
								Загрузить
							</button>
						)}
					</div>
				</div>
			</div>
			<div className={styles.shop__background}>
				<img
					src={coverImage ? fileReader(coverImage) : coverUrl ? coverUrl : '/image/shopCover.png'}
					alt='image'
				/>
			</div>
			<div className={styles.drag__wrapper}>
				<Dragger
					dragDropHandler={dragDropHandler}
					dragLeaveHandler={dragLeaveHandler}
					dragStarHandler={dragStarHandler}
					inputImageHandler={inputImageHandler}
					isDragger={isDragger}
					description='(Макс. размер 960x430px)'
					label='background-shop-image'
				/>
			</div>
		</>
	)
}

export default ShopBackground
