import { FC } from 'react'
import styles from './userList.module.scss'
import Link from 'next/link'

const UserList: FC = () => {
	return (
		<div className={styles.users}>
			<Link href={`/chat/888`} className={styles.user__column}>
				<div className={styles.user__avatar}>
					<img src='/image/imagePMin.png' alt='' />
				</div>
				<div className={styles.user__info}>
					<h4 className='text-text-default text-black-950 font-medium'>Витя АК · Аккаунт Apple </h4>
					<p className={styles.user__date}>21 апр</p>
					<p className={styles.user__last_message}>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, fugiat!
					</p>
				</div>
			</Link>
		</div>
	)
}

export default UserList
