'use client'
import { FC } from 'react'
import styles from './balanceTable.module.scss'
import cn from 'clsx'
import { useBalanceTable } from './useBalanceTable'
import DatePiker from '@/components/ui/date-picker/DatePiker'
import { Select } from 'antd'
import Switch from '@/components/ui/switch/Switch'

const BalanceTable: FC = () => {
	const { filter, setFilter, isMobile, setSw, sw } = useBalanceTable()
	const handleChange = (value: string) => {
		console.log(`selected ${value}`)
	}
	return (
		<>
			<section className={styles.filter}>
				<div className={styles.filter__container}>
					<div className={styles.filter__row}>
						<div className={styles.filter__column}>
							<DatePiker change='after' data={filter} placeHolder='От' setDate={setFilter} />
							<DatePiker change='before' data={filter} placeHolder='До' setDate={setFilter} />
							<div className={styles.filter__select}>
								<Select
									className='w-full'
									defaultValue={'all'}
									onChange={handleChange}
									options={[{ value: 'all', label: 'Все операции' }]}
								/>
							</div>
							<div className={styles.filter__select}>
								<Select
									className='w-full'
									defaultValue={'product-name'}
									onChange={handleChange}
									options={[{ value: 'product-name', label: 'Название товара' }]}
								/>
							</div>
						</div>
						<Switch
							setSw={setSw}
							sw={sw}
							swFirst='Мои покупки'
							swSecond='Все операции'
							fixed={false}
						/>
					</div>
				</div>
			</section>
			{isMobile ? (
				<section className={styles.mob__table}>
					<div className={styles.mob__table__container}>
						<div className={styles.mob__table_header}>
							<h5>Список операций</h5>
						</div>
						<div className={styles.mob__table_product}>
							<div className={cn(styles.mob__column, styles.first)}>
								<div className={styles.mob__image}>
									<img src='/image/imagePMin.png' alt='image' />
								</div>
								<div className={styles.mob__product_info}>
									<h4>Chat GPT</h4>
									<p>Количество товара: 1</p>
								</div>
							</div>
							<div className={cn(styles.mob__column, styles.second)}>
								<p className={styles.mob__date}>
									<span>1 апреля</span> 08:26
								</p>
								<p className={styles.mob__price}>+ 1 350 ₽</p>
							</div>
							<div className={cn(styles.mob__column, styles.third)}>
								<div className={cn(styles.table__products_status)}>Начисленно</div>
							</div>
						</div>
						<div className={styles.mob__table_product}>
							<div className={cn(styles.mob__column, styles.first)}>
								<div className={styles.mob__image}>
									<img src='/image/imagePMin.png' alt='image' />
								</div>
								<div className={styles.mob__product_info}>
									<h4>Chat GPT</h4>
									<p>Количество товара: 1</p>
								</div>
							</div>
							<div className={cn(styles.mob__column, styles.second)}>
								<p className={styles.mob__date}>
									<span>1 апреля</span> 08:26
								</p>
								<p className={styles.mob__price}>+ 1 350 ₽</p>
							</div>
							<div className={cn(styles.mob__column, styles.third)}>
								<div className={cn(styles.table__products_status, styles.error)}>Ошибка</div>
							</div>
						</div>
						<div className={styles.mob__table_product}>
							<div className={cn(styles.mob__column, styles.first)}>
								<div className={styles.mob__image}>
									<img src='/image/imagePMin.png' alt='image' />
								</div>
								<div className={styles.mob__product_info}>
									<h4>Chat GPT</h4>
									<p>Количество товара: 1</p>
								</div>
							</div>
							<div className={cn(styles.mob__column, styles.second)}>
								<p className={styles.mob__date}>
									<span>1 апреля</span> 08:26
								</p>
								<p className={cn(styles.mob__price, styles.plus)}>+ 1 350 ₽</p>
							</div>
							<div className={cn(styles.mob__column, styles.third)}>
								<div className={cn(styles.table__products_status, styles.canceled)}>Отменено</div>
							</div>
						</div>
					</div>
				</section>
			) : (
				<section className={styles.table}>
					<div className={styles.table__container}>
						<div className={styles.table__header}>
							<div className={styles.table__header_column}>
								<p>Дата</p>
							</div>
							<div className={styles.table__header_column}>
								<p>Описание</p>
							</div>
							<div className={styles.table__header_column}>
								<p>Сумма</p>
							</div>
							<div className={styles.table__header_column}>
								<p>Статус</p>
							</div>
						</div>

						<div className={styles.table__products}>
							<div className={styles.table__products_column}>
								<p className={styles.date}>1 апреля</p>
								<p className={styles.time}>08:26</p>
							</div>
							<div className={cn(styles.table__products_column, styles.second)}>
								<div className={styles.table__product_image}>
									<img src='/image/imagePMin.png' alt='image' />
								</div>
								<div className={styles.table__product_info}>
									<h4>Chat GPT</h4>
									<p>Количество товара: 1</p>
								</div>
							</div>
							<div className={styles.table__products_column}>
								<p className={cn(styles.price, styles.plus)}>+ 1 350 ₽</p>
							</div>
							<div className={styles.table__products_column}>
								<div className={styles.table__products_status}>Начисленно</div>
							</div>
						</div>
						<div className={styles.table__products}>
							<div className={styles.table__products_column}>
								<p>1 апреля</p>
								<p>08:26</p>
							</div>
							<div className={cn(styles.table__products_column, styles.second)}>
								<p className={styles.table__products_description}>
									Вывод средств с помощью Сбер Pay
								</p>
							</div>
							<div className={styles.table__products_column}>
								<p className={cn(styles.price)}>1 950 ₽</p>
							</div>
							<div className={styles.table__products_column}>
								<div className={styles.table__products_status}>Начисленно</div>
							</div>
						</div>
						<div className={styles.table__products}>
							<div className={styles.table__products_column}>
								<p>1 апреля</p>
								<p>08:26</p>
							</div>
							<div className={cn(styles.table__products_column, styles.second)}>
								<p className={styles.table__products_description}>
									За покупку вашего товара <span className='text-orange-900'>Аккаунт apple</span> ,
									пользователем <span className='text-orange-900'>CheburashkaEb</span>
								</p>
							</div>
							<div className={styles.table__products_column}>
								<p className={cn(styles.price)}>2 950 ₽</p>
							</div>
							<div className={styles.table__products_column}>
								<div className={cn(styles.table__products_status, styles.canceled)}>Отменено</div>
							</div>
						</div>
						<div className={styles.table__products}>
							<div className={styles.table__products_column}>
								<p>1 апреля</p>
								<p>08:26</p>
							</div>
							<div className={cn(styles.table__products_column, styles.second)}>
								<p className={styles.table__products_description}>
									За покупку вашего товара <span className='text-orange-900'>Аккаунт apple</span> ,
									пользователем <span className='text-orange-900'>CheburashkaEb</span>
								</p>
							</div>
							<div className={styles.table__products_column}>
								<p className={cn(styles.price)}>2 950 ₽</p>
							</div>
							<div className={styles.table__products_column}>
								<div className={cn(styles.table__products_status, styles.error)}>Ошибка</div>
							</div>
						</div>
					</div>
				</section>
			)}
		</>
	)
}

export default BalanceTable
