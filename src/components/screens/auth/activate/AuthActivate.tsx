'use client'
import { FC } from 'react'
import styles from './register.module.scss'

import { useRouter } from 'next/navigation'

import Image from 'next/image'

const AuthActivate: FC = () => {
	const router = useRouter()
	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.logo}>
					<Image
						draggable={false}
						src={'/icon/notification_success.png'}
						alt='Logo'
						width={117.25}
						height={98}
					/>
				</div>
				<h1 className={styles.title}>Проверьте почту</h1>
				<p className={styles.sub_title}>
					Мы отправили вам письмо, перейдите по ссылке в письме чтобы войти в аккаунт
				</p>
				<div className={styles.info}>
					<p>
						Не пришло письмо? <button type='button'>Отправить ещё раз</button>
					</p>
				</div>
			</div>
			<img draggable={false} className={styles.image_bg} src='/image/popupBg.png' alt='bg' />
		</>
	)
}

export default AuthActivate
