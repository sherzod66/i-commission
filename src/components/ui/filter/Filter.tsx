'use client'
import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
import styles from './filter.module.scss'
import cn from 'clsx'
import { Select } from 'antd'
import { options } from './selectOptions'
import VerticalCarousel from '@/components/ui/carousels/vertical-caroucel/VerticalCarousel'
import Link from 'next/link'
import { ICategory } from '@/types/category.type'
import CategoryCarousel from '@/components/ui/carousels/filter-carousel/CategoryCarousel'
import { IShop } from '@/types/shop.type'
import { IEdges } from '@/types/edges.type'
import { TOption } from '@/components/screens/home/useHome'

type TFilterProps = {
	shop: IShop | undefined | null
	categories: IEdges<ICategory> | undefined
	isLoading: boolean
	filterValue?: TOption
	setFilterV: Dispatch<SetStateAction<TOption>>
}
export type TCountQuantity = {
	isFocus: boolean
	quantity: number
	count: string
}

const Filter: FC<TFilterProps> = ({ shop, categories, isLoading, filterValue, setFilterV }) => {
	const [count, setCount] = useState<TCountQuantity[]>([])

	// useEffect(() => {
	// 	if (shop)
	// 		setCount([
	// 			...shop.products?.edges.map<TCountQuantity>(item => ({
	// 				count: '1',
	// 				isFocus: false
	// 				// quantity: item.quantity
	// 			}))
	// 		])
	// }, [shop])
	const handleChange = (value: string) => {
		if (value === 'cheap') {
			setFilterV(prev => ({ ...prev, price: 'ASC' }))
		} else if (value === 'expensive') {
			setFilterV(prev => ({ ...prev, price: 'DESC' }))
		}
	}
	return (
		<section className={styles.filter}>
			<div className={styles.filter__container}>
				<div className={styles.filter__row}>
					<div className={styles.filter__column}>
						<div className={styles.filter__item}>
							<h3>Фильтр товаров</h3>

							<div className={styles.filter__sort}>
								<div className={styles.sort__column}>
									<h6>Поиск</h6>
									<input
										onChange={e => setFilterV(prev => ({ ...prev, search: e.target.value }))}
										type='text'
										placeholder='Введите название категории'
									/>
								</div>
								<div className={styles.sort__column}>
									<h6>Стоимость</h6>
									<div className={styles.filter__from}>
										<input
											onChange={e => setFilterV(prev => ({ ...prev, before: +e.target.value }))}
											placeholder='От'
											type='number'
										/>
										<input
											onChange={e => setFilterV(prev => ({ ...prev, after: +e.target.value }))}
											placeholder='До'
											type='number'
										/>
									</div>
								</div>
								<div className={styles.sort__column}>
									<h6>Сортировать</h6>
									<Select
										className='w-full'
										onChange={handleChange}
										options={options}
										placeholder={'По релевантности'}
									/>
								</div>
							</div>
							<CategoryCarousel categories={categories} isLoading={isLoading} />
						</div>
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

//Популярные товары
// {shop && (
// 	<div className={styles.filter__item}>
// 		<>
// 			<h3>Популярные товары</h3>
// 			<ul className={styles.filter__categories}>
// 				<li>Категория</li>
// 				<li>Вид</li>
// 				<li>Описание</li>
// 				<li>Стоимость</li>
// 				<li>Количество</li>
// 			</ul>
// 			<div className={styles.product__body}>
// 				{shop.products?.edges.map((item, index) => (
// 					<div key={item.node.id} className={styles.product__column}>
// 						<p className={styles.column__first}>{item.node.displayName}</p>
// 						<p className={styles.column__second}>{item.node.category?.displayName}</p>
// 						<div className={styles.column__item}>
// 							<div className={styles.item__image}>
// 								<img src={item.node.image.imageMin} alt='product image' />
// 							</div>
// 							<div className={styles.item__info}>
// 								<h5>{item.node.displayName}</h5>
// 								<p>{item.node.description}</p>
// 							</div>
// 						</div>
// 						<div className={styles.column__price}>
// 							<h5>{item.node.price} ₽</h5>
// 							<p>Цена за 1 штуку</p>
// 						</div>
// 						{/* <CountQuantity count={count} setCount={setCount} index={index} /> */}
// 					</div>
// 				))}
// 			</div>
// 		</>
// 	</div>
// )}
