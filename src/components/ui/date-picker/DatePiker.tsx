'use client'
import { Dispatch, FC, SetStateAction, useState } from 'react'
import styles from './datePiker.module.scss'
import cn from 'clsx'
import { TBalanceFilter } from '@/components/screens/balance/balance-table/useBalanceTable'

type TDatePikerProps = {
	placeHolder: string
	data: Omit<TBalanceFilter, 'myPurchases'>
	setDate: Dispatch<SetStateAction<TBalanceFilter>>
	change: keyof Omit<TBalanceFilter, 'myPurchases'>
}
const DatePiker: FC<TDatePikerProps> = ({ placeHolder, setDate, change, data }) => {
	const [focus, setFocus] = useState(false)
	return (
		<div className={styles.pick__body}>
			<label className='block text-text-lg mb-1 font-medium' htmlFor={change}>
				{placeHolder}
			</label>
			<div className={cn(styles.pick, styles.focus)}>
				<input
					id={change}
					value={data[change]}
					onChange={e => setDate(prev => ({ ...prev, [change]: e.target.value }))}
					onFocus={() => setFocus(!focus)}
					onBlur={() => setFocus(!focus)}
					placeholder={placeHolder}
					type='date'
					name='date'
				/>
				<div className={styles.icon}>{/* TODO: CalenarIcon{} */}</div>
			</div>
		</div>
	)
}

export default DatePiker
