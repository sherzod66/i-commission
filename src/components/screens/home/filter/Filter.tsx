'use client'
import { FC, useEffect, useState } from 'react'
import styles from './filter.module.scss'
import ProductsSwiper from '@/components/ui/carousels/filter-carousel/CategoryCarousel'
import cn from 'clsx'
import { Select } from 'antd'
import { options } from './selectOptions'
import VerticalCarousel from '@/components/ui/carousels/vertical-caroucel/VerticalCarousel'
import Link from 'next/link'
import { ISalesman } from '@/types/shop.type'
import CountQuantity from '@/components/ui/count/Count'

type TFilterProps = {
	shop: ISalesman | null
}
export type TCountQuantity = {
	isFocus: boolean
	quantity: number
	count: string
}

const Filter: FC<TFilterProps> = ({ shop }) => {
	const [count, setCount] = useState<TCountQuantity[]>([])

	useEffect(() => {
		if (shop)
			setCount([
				...shop.products.map<TCountQuantity>(item => ({
					count: '1',
					isFocus: false,
					quantity: item.quantity
				}))
			])
	}, [shop])
	const handleChange = (value: string) => {
		console.log(`selected ${value}`)
	}
	return (
		<section className={styles.filter}>
			<div className={styles.filter__container}>
				<div className={styles.filter__row}>
					<div className={styles.filter__column}>
						<h3>{shop ? 'Популярные товары' : 'Фильтр товаров'}</h3>
						{shop && count.length > 0 ? (
							<>
								<ul className={styles.filter__categories}>
									<li>Категория</li>
									<li>Вид</li>
									<li>Описание</li>
									<li>Стоимость</li>
									<li>Количество</li>
								</ul>
								<div className={styles.product__body}>
									{shop.products.map((item, index) => (
										<div key={item.id} className={styles.product__column}>
											<p className={styles.column__first}>{item.category}</p>
											<p className={styles.column__second}>{item.category}</p>
											<div className={styles.column__item}>
												<div className={styles.item__image}>
													<img src={item.imagePath} alt='product image' />
												</div>
												<div className={styles.item__info}>
													<h5>{item.name}</h5>
													<p>Подписка на год</p>
												</div>
											</div>
											<div className={styles.column__price}>
												<h5>{item.price} ₽</h5>
												<p>Цена за 1 штуку</p>
											</div>
											<CountQuantity count={count} setCount={setCount} index={index} />
										</div>
									))}
								</div>
							</>
						) : (
							<>
								<ProductsSwiper />
								<div className={styles.filter__sort}>
									<div className={styles.sort__column}>
										<h6>Вид</h6>
										<Select className='w-full' onChange={handleChange} options={options} />
									</div>
									<div className={styles.sort__column}>
										<h6>Стоимость</h6>
										<div className={styles.filter__from}>
											<input placeholder='От' type='number' />
											<input placeholder='До' type='number' />
										</div>
									</div>
									<div className={styles.sort__column}>
										<h6>Поиск по названию</h6>
										<input type='text' placeholder='Введите название' />
									</div>
								</div>
							</>
						)}
					</div>
					<div className={cn(styles.filter__column, styles.second)}>
						<h3>Продавцы месяца</h3>
						<VerticalCarousel />
						<Link className={styles.filter__sellers} href={'/sellers'}>
							Список всех продавцов
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Filter
