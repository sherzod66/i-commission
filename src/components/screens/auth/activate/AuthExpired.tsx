'use client'
import { Dispatch, FC, SetStateAction } from 'react'
import styles from './register.module.scss'

import { useRouter } from 'next/navigation'
import Image from 'next/image'

const AuthExpired: FC = () => {
	const router = useRouter()
	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.logo}>
					<Image
						draggable={false}
						src={'/icon/delete_history.png'}
						alt='Logo'
						width={117.25}
						height={98}
					/>
				</div>
				<h1 className={styles.title}>Срок ссылки истёк</h1>
				<p className={styles.sub_title}>Ссылка была отправлена давно или более не действительна.</p>
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

export default AuthExpired
