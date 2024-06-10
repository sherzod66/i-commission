import { FC } from 'react'
import styles from './chatHeader.module.scss'
import SearchSvg from '@/assets/icon/search.svg'
import { ArrowLeftOutlined } from '@ant-design/icons'
import Link from 'next/link'

const ChatHeader: FC = () => {
	return (
		<div className={styles.room__header}>
			<div className={styles.room__row}>
				<div className={styles.room__column}>
					<Link href={'/chat'} className='mr-2 text-text-lg'>
						<ArrowLeftOutlined />
					</Link>
					<div className={styles.room__image}>
						<img src='/image/imagePMin.png' alt='avatar' />
					</div>
					<div className={styles.room__user_info}>
						<h5>
							Витя ак <span>Был в сети: вчера</span>
						</h5>
						<p>Аккаунт · Игровой · 1600 ₽</p>
					</div>
				</div>
				<div className={styles.room__column}>
					<button type='button' className={styles.room__after_order}>
						Предыдущие покупки
					</button>
					<div className={styles.room__search}>
						<SearchSvg />
					</div>
					<button type='button' className={styles.room__arbitration}>
						Пригласить арбитраж
					</button>
				</div>
			</div>
		</div>
	)
}

export default ChatHeader
