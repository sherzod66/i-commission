'use client'
import { FC, useState } from 'react'
import styles from './chatSort.module.scss'
import { Select } from 'antd'
import cn from 'clsx'
import Switch from '@/components/ui/switch/Switch'

const ChatSort: FC = () => {
	const [focus, setFocus] = useState(false)
	const [sw, setSw] = useState<boolean>(true)
	return (
		<>
			<div className={styles.sort__row}>
				<div className={styles.sort__column}>
					<label className='block text-text-sm text-black-300 mb-2' htmlFor='select-type'>
						Тип товара
					</label>
					<Select id='select-type' style={{ width: '100%' }} />
				</div>

				<div className={styles.sort__column}>
					<label className='block text-text-sm text-black-300 mb-2' htmlFor='all-time'>
						Дата
					</label>
					<div className={cn(styles.pick, { [styles.focus]: focus })}>
						<input
							id='all-time'
							onFocus={() => setFocus(!focus)}
							onBlur={() => setFocus(!focus)}
							placeholder='За все время'
							type='date'
							name='date'
						/>
						<div className={styles.icon}>{/* <Calendar /> */}</div>
					</div>
				</div>
			</div>
			<div className='px-4'>
				<Switch
					setSw={setSw}
					fixed={false}
					sw={sw}
					swFirst='Все сообщения'
					swSecond='Только сделки'
				/>
			</div>
		</>
	)
}

export default ChatSort
