import { FC } from 'react'
import styles from './settingNotification.module.scss'
import Link from 'next/link'
import OrderIcon from '@/assets/icon/OrderIcon'
import NotificationIcon from '@/assets/icon/NotificationIcon'

const notifications = Array(5).fill('ss')

const SettingNotification: FC = () => {
	return (
		<main className={styles.main}>
			<h2 className={styles.head__title}>
				Уведомления
				{/* <span>3</span> */}
			</h2>
			<div className={styles.notification__wrapper}>
				{notifications.length > 0 ? (
					notifications.map(item => (
						<div className={styles.notification}>
							<div className={styles.notification__info}>
								<h4 className={styles.notification__title}>Вывод средств</h4>
								<p className={styles.notification__description}>
									Ввывод средств 1488 руб. прошёл успешно. Вскоре ваши средства окажутся у вас на
									аккаунте.
								</p>
								<p className={styles.notification__time}>2024-05-02 20:50:45</p>
							</div>
							<div className={styles.notification__actions}>
								<div className={styles.notification__category_body}>
									<div className={styles.notification__title_popup}>Открыть чат</div>
									<button type='button' className={styles.notification__category}>
										<OrderIcon />
									</button>
								</div>
								<div className={styles.notification__read}></div>
							</div>
						</div>
					))
				) : (
					<div className={styles.empty}>
						<NotificationIcon />
						<p>У вас нету никаких уведомлений</p>
					</div>
				)}
			</div>
		</main>
	)
}

export default SettingNotification
