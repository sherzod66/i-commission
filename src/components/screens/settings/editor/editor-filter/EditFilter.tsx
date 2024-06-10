'use client'
import { Dispatch, FC, SetStateAction, useState } from 'react'
import styles from './editFilter.module.scss'
import { Select } from 'antd'
import { options } from '@/components/screens/home/filter/selectOptions'
import { PlusOutlined, LeftOutlined } from '@ant-design/icons'

type TEditFilterProps = {
	setIsAdd: Dispatch<SetStateAction<boolean>>
}
const EditFilter: FC<TEditFilterProps> = ({ setIsAdd }) => {
	const [isWrite, setIsWrite] = useState<boolean>(false)
	return (
		<div className={styles.sort}>
			<div className={styles.first__column}>
				<Select value={'popular'} style={{ width: '100%', height: '45px' }} options={options} />
			</div>
			<div className={styles.second__column}>
				<Select value={'popular'} style={{ width: '100%', height: '45px' }} options={options} />
			</div>
			<div className={styles.third__column}>
				<button onClick={() => setIsWrite(!isWrite)} type='button' className={styles.third__plus}>
					{isWrite ? <LeftOutlined /> : <PlusOutlined />}
				</button>
				{isWrite ? (
					<input type='text' placeholder='Описание товара/услуги' />
				) : (
					<div className={styles.third__name}>
						<h4>Название</h4>
						<p>Описание товара/услуги</p>
					</div>
				)}
			</div>
			<div className={styles.fourth__column}>
				<input type='text' placeholder='Стоимость  ₽ ' />
			</div>
			<button type='button' onClick={() => setIsAdd(true)} className={styles.fifth__column}>
				<PlusOutlined />
			</button>
		</div>
	)
}

export default EditFilter
