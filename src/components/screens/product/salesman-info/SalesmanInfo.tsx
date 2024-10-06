import { FC } from 'react'
import styles from './salesmanInfo.module.scss'
import { IShop } from '@/types/shop.type'
import Link from 'next/link'
import ShieldIcon from '@/assets/icon/ShieldIcon'
import CreditCardIcon from '@/assets/icon/CreditCardIcon'

const SalesmanInfo: FC<{ shop: IShop }> = ({ shop }) => {
	return (
		<div className={styles.salesman}>
			<div className={styles.salesman__item}>
				<div className={styles.salesman__logo}>
					<img src={shop.image?.url} alt='' />
				</div>
			</div>
			<div className={styles.salesman__item}>
				<p>Продавец</p>
				<h4>{shop.code}</h4>
				<Link href={'/' + shop.id}>Перейти в магазин</Link>
			</div>
			<div className={styles.salesman__item}>
				<p className={styles.salesman__pay}>
					<ShieldIcon /> Возврат 3 дня
				</p>
				<p className={styles.salesman__pay}>
					<CreditCardIcon />
					Безопасная оплата: Картой и другие способы
				</p>
			</div>
		</div>
	)
}

export default SalesmanInfo
