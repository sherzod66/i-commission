'use client'
import { FC } from 'react'
import styles from './settingShop.module.scss'
import ShopBackground from './shop-background-image/ShopBackground'
import ShopAvatar from './shop-avatar/ShopAvatar'
import { getShopCreate } from '@/utils/Date.helper'
import CheckIcon from '@/assets/icon/CheckIcon'
import { useSettingsShop } from './useSettingsShop'
import cn from 'clsx'
import NotFound from '@/app/not-found'

const SettingShop: FC = () => {
	const {
		avatarImage,
		coverImage,
		errors,
		handleSubmit,
		onCoverSubmit,
		onImageSubmit,
		onSubmit,
		register,
		setAvatarImage,
		setCoverImage,
		isEdit,
		setIsEdit,
		coverLoading,
		onCoverReset,
		uploadLoading,
		avatarLoading,
		onImageReset,
		user,
		shop
	} = useSettingsShop()
	if (user?.me.account) {
		return (
			<main className={styles.shop}>
				<div className={styles.shop__first}>
					<ShopBackground
						coverLoading={coverLoading}
						coverImage={coverImage}
						onCoverSubmit={onCoverSubmit}
						setCoverImage={setCoverImage}
						onCoverReset={onCoverReset}
						uploadLoading={uploadLoading}
					/>
				</div>
				<div className={styles.shop__second}>
					<ShopAvatar
						avatarImage={avatarImage}
						avatarLoading={avatarLoading}
						onImageReset={onImageReset}
						onImageSubmit={onImageSubmit}
						setAvatarImage={setAvatarImage}
						uploadLoading={uploadLoading}
					/>
				</div>
				<div className={styles.shop__third}>
					<h4 className={styles.title}>Магазин</h4>
					<form className={styles.from} onSubmit={handleSubmit(onSubmit)}>
						<div className={styles.input__wrapper}>
							<label htmlFor='product-name'>Название</label>
							<div className={styles.input__row}>
								<input
									{...register('code', {
										required: 'Заполните название магазина',
										pattern: {
											value: /^[^&*@#_%\-\$\.\s]+$/,
											message: 'В названии присутствуют недопустимые символы (&*@#_-%$.)'
										}
									})}
									disabled={!isEdit}
									className={cn(styles.input__input, { [styles.error]: errors.code })}
									id='product-name'
									placeholder='Название'
									type='text'
								/>
								<CheckIcon />
							</div>
							{errors.code && (
								<p className={styles.error__alert} role='alert'>
									{errors.code?.message}
								</p>
							)}
						</div>
						<div className={styles.input__wrapper}>
							<label htmlFor='product-name'>Краткое описание</label>
							<textarea
								{...register('displayName', { max: 255 })}
								id='product-name'
								placeholder='Не более 255 символов'
								disabled={!isEdit}
							/>
							{errors.displayName && (
								<p className={styles.error__alert} role='alert'>
									{errors.displayName?.message}
								</p>
							)}
						</div>
						{isEdit ? (
							<button className={styles.action_btn} type='submit'>
								Сохранить
							</button>
						) : (
							<button
								onClick={() => setIsEdit(!isEdit)}
								className={styles.action_btn}
								type='button'
							>
								Редактировать
							</button>
						)}
					</form>
				</div>
				<div className={styles.shop__fourth}>
					<h4 className={styles.title}>Дополнительно</h4>
					<div className={styles.profile__info_info}>
						<p>Дата создания магазина:</p>
						<span className='inline-block mb-6'>{getShopCreate(shop ? shop.createdAt : '')}</span>
						<p>Статус аккаунта:</p>
						<span>
							<CheckIcon /> Активен
						</span>
						<p className='mt-6'>Участников:</p>
						<span className='inline-block'>3 человека</span>
					</div>
				</div>
			</main>
		)
	} else {
		return (
			<main className={styles.shop}>
				<NotFound />
			</main>
		)
	}
}

export default SettingShop
