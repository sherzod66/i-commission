import { FC } from 'react'
import styles from './chatFooter.module.scss'

const ChatFooter: FC = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.footer__row}>
				<div className={styles.footer__first}>
					<input type='text' placeholder='Напишите сообщение...' />
				</div>
				<div className={styles.footer__second}>
					<button type='button' className={styles.footer__button}>
						Отправить
					</button>
				</div>
			</div>
		</div>
	)
}

export default ChatFooter
