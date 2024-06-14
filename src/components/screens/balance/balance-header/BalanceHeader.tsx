import { FC } from 'react'
import styles from './balanceHeader.module.scss'
import Link from 'next/link'
import cn from 'clsx'

const BalanceHeader: FC = () => {
	return (
		<section className={styles.balance}>
			<div className={styles.balance__container}>
				<h2>Финансы, переводы и выводы</h2>
				<div className={styles.balance__money}>
					<div className={styles.money__info}>
						<h1>1700 ₽</h1>
						<button className={styles.money__active}>
							<Link href={'/'}>Пополнить баланс</Link>
						</button>
						<button className={cn(styles.money__active, styles.second)}>
							<Link href={'/'}>Вывести деньги</Link>
						</button>
					</div>
					<div className={styles.balance__conclusion}>
						<p>
							Вывод осуществляется спустя 7 днейпосле продажи товара, если есть депозит и вы
							верифицированы то возможно ваш вывод пройдет более быструю модерация
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default BalanceHeader
