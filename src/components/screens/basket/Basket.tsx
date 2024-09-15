'use client'
import { FC } from 'react'
import styles from './basket.module.scss'
import cn from 'clsx'
import { Checkbox, Popconfirm, Rate } from 'antd'
import { IBasketHook, useBasket } from './useBasket'
import CountQuantityBasket from '@/components/ui/count/CountQuantityBasket'
import Link from 'next/link'
import { countBasketPrice } from '@/utils/countBasketPrie'
import BasketIcon from '@/assets/icon/BasketIcon'

const Basket: FC = () => {
	const {
		basket,
		setBasket,
		selectAll,
		setSelectAll,
		confirm,
		confirmSelect,
		changeCheckBox,
		navigate
	} = useBasket()
	return (
		<section className={styles.basket}>
			<div className={styles.basket__container}>
				<div className={styles.basket__row}>
					<div className={styles.basket__column}>
						<div className={styles.basket__title}>
							<h1>Корзина</h1> <p>{basket.length}</p>
						</div>

						<div className={styles.basket__item}>
							<div className={styles.basket__bar}>
								<div className={styles.bar__column}>
									<Checkbox
										value={'select-all'}
										checked={selectAll.isSelect}
										disabled={basket.length === 0}
										onChange={() =>
											setSelectAll({ isRadioClick: true, isSelect: !selectAll.isSelect })
										}
										className='mr-2'
									/>
									<span>Выбрать все</span>
								</div>
								{selectAll.isSelect && (
									<Popconfirm
										title='Удалить все товары'
										description='Вы уверенны что хотите удалить все товары?'
										onConfirm={confirm}
										okText='Да'
										cancelText='Нет'
									>
										<button className={styles.bar__remove}>Удалить все товары</button>
									</Popconfirm>
								)}
								{!selectAll.isSelect && basket.some(el => el.selected) && (
									<Popconfirm
										title='Удалить выбранное'
										description='Вы уверенны что хотите удалить выбранные товары?'
										onConfirm={confirmSelect}
										okText='Да'
										cancelText='Нет'
									>
										<button className={styles.bar__remove}>Удалить выбранное</button>
									</Popconfirm>
								)}
							</div>

							<ul className={styles.basket__products_list}>
								{basket.length > 0 ? (
									basket.map((el, index) => (
										<li
											className={cn(styles.basket__product, {
												[styles.selected]: basket[index].selected
											})}
											key={el.id}
										>
											<Checkbox
												onChange={() => changeCheckBox(index)}
												checked={basket[index].selected}
											/>
											<div className={styles.basket__product_product}>
												<div className={styles.basket__product_image}>
													<img src={el.image.imageMin} alt='image' />
												</div>
												<div className={styles.basket__product_info}>
													<h4>{el.displayName}</h4>
													<p>Подписка на 1 год</p>
												</div>
											</div>
											<div className={styles.basket__product_price}>
												<h5>{el.price * +basket[index].count} ₽</h5>
												<p>
													Цена за {basket[index].count} штук
													{+basket[index].count > 1 ? (+basket[index].count > 4 ? '' : 'и') : 'у'}
												</p>
											</div>
											<div className={styles.basket__product_count}>
												<CountQuantityBasket count={basket} index={index} setCount={setBasket} />
											</div>
										</li>
									))
								) : (
									<div className={styles.basket__empty}>
										<div className={styles.empty_svg}>
											<BasketIcon />
										</div>
										<h6 className='text-text-lg text-black-300'>Корзина пуста</h6>
										<Link className={styles.empty_home} href={'/'}>
											В магазин
										</Link>
									</div>
								)}
							</ul>
						</div>
					</div>
					<div className={cn(styles.basket__column, styles.second)}>
						<div className={styles.decor__item}>
							<h4>Краткий итог</h4>
							{basket.length > 0 && (
								<>
									<div className={styles.item__row}>
										<div className={styles.item__row_info}>Предварительно:</div>
										<div className={styles.item__row_value}>{countBasketPrice(basket)} ₽</div>
									</div>
									<div className={styles.item__row}>
										<div className={styles.item__row_info}>Скидка:</div>
										<div className={styles.item__row_discount}>-1, 030 ₽</div>
									</div>
								</>
							)}
							<div className={styles.item__row}>
								<div className={styles.item__row_summary}>Всего:</div>
								<div className={styles.item__row_summary_price}>{countBasketPrice(basket)} ₽</div>
							</div>
							<button
								disabled={basket.length === 0}
								className={cn(styles.item__buy, { [styles.disabled]: basket.length === 0 })}
								type='button'
							>
								Купить ({basket.length})
							</button>
						</div>
						<div className={styles.decor__item}>
							<div className={styles.seller__row}>
								<h4>Продавцы</h4>
								{/* TODO: сделать склонение продавцов */}
								<p>5 продавцов</p>
							</div>
							<ul className={styles.decor__sellers}>
								{basket.map(item => (
									<li className={styles.decor__seller} key={item.id}>
										<div className={styles.salesman_info}>
											<div className={styles.salesman__image}>
												<img draggable={false} src={item.image.imageMin} alt='salesman' />
											</div>
											<h6>{item.displayName}</h6>
										</div>
										<div className={styles.salesman__rate}>
											<Rate
												className='text-black-900 text-text-sm'
												disabled
												defaultValue={6}
												allowHalf
											/>
											<div className={styles.salesman__reviews}>+2234</div>
											<p>Рейтинг продавца</p>
										</div>
									</li>
								))}
							</ul>
							<button className={styles.see__all} type='button'>
								Посмотреть всех
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Basket
