import { FC } from 'react'
import styles from './myPurchases.module.scss'
import PurchasesItem from './purchsase-item/PurchasesItem'

const MyPurchases: FC = () => {
	return (
		<div className='flex-full'>
			<PurchasesItem paid={false} />
			<PurchasesItem paid={true} />
		</div>
	)
}

export default MyPurchases
