'use client'
import Modal from '@/components/ui/modal/Modal'
import { FC, MouseEvent, useState } from 'react'
import styles from './profile.module.scss'
import UserAvatar from './user-avatar/UserAvatar'
import { useMe } from '@/hooks/useMe'
import VerifiedIcon from '@/assets/icon/VerifiedIcon'
import cn from 'clsx'
import { getShopCreate } from '@/utils/Date.helper'
import CheckIcon from '@/assets/icon/CheckIcon'

const Profile: FC = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const { data } = useMe()
	const onClose = () => {
		setIsOpen(false)
	}
	const onToggle = () => {
		setIsOpen(!isOpen)
	}
	return (
		<main className={styles.profile}>
			{data && (
				<>
					{' '}
					<div className={styles.first__column}>
						<h4 className={styles.title}>Профиль</h4>
						<div className={styles.user__name}>
							<label htmlFor='user-name'>Ваш юзернейм</label>
							<input
								type='text'
								name='username'
								defaultValue={data?.me.account.nickname}
								id='user-name'
								disabled
								className={styles.user__input}
							/>
						</div>
						<h4 className={styles.title}>Безопасность</h4>
						<div className={styles.safety}>
							<div className={styles.safety__column}>
								<label htmlFor='email'>Ваша почта</label>
								<div className={styles.input__decor}>
									<input
										type='email'
										name='user-email'
										defaultValue={data?.me.account.nickname}
										disabled
										id='email'
										className={styles.input__decor__input}
									/>
									<VerifiedIcon />
								</div>
							</div>
							<button type='button' className={styles.safety__button}>
								Сменить
							</button>
						</div>
						<div className={styles.safety}>
							<div className={styles.safety__column}>
								<label htmlFor='password'>Ваш пароль</label>
								<div className={styles.input__decor}>
									<input
										type='password'
										name='user-password'
										placeholder='Пароль не указан'
										disabled
										id='password'
										className={styles.input__decor__input}
									/>
								</div>
							</div>
							<button
								onClick={onToggle}
								type='button'
								className={cn(styles.safety__button, styles.orange)}
							>
								Добавить
							</button>
						</div>
					</div>
					<div className={styles.second__column}>
						<div className={styles.profile__avatar}>
							<UserAvatar />
						</div>
						<div className={styles.profile__info}>
							<h4 className={styles.title}>Дополнительно</h4>
							<div className={styles.profile__info_info}>
								<p>Дата регистрации:</p>
								<span className='inline-block mb-6'>
									{getShopCreate(data?.me.account.createdAt)}
								</span>
								<p>Статус аккаунта:</p>
								<span>
									<CheckIcon /> Активен
								</span>
							</div>
						</div>
					</div>
					<Modal
						title='Удаление пароля'
						description='Тип логинации вернётся к стандартной Авторизации. Позже вы сможете снова добавить пароль в Профиле.'
						isOpen={isOpen}
						titleStyle={{ fontSize: '46px' }}
						onClose={onClose}
					>
						<h1>hi</h1>
					</Modal>
				</>
			)}
		</main>
	)
}

export default Profile
