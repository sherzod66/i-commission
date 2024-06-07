import { FC } from 'react'
import styles from './order.module.scss'
import cn from 'clsx'

const Order: FC = () => {
	return (
		<main className={styles.order}>
			<div className={styles.order__container}>
				<div className={styles.order__row}>
					<div className={styles.order__column}>dfs</div>
					<div className={cn(styles.order__column, styles.second)}>fdsa</div>
				</div>
			</div>
		</main>
	)
}

export default Order
