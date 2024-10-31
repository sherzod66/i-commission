import { FC } from 'react'
import styles from './settingOrders.module.scss'
import BoxAdd from '@/assets/icon/BoxAdd'
import Search from '@/components/layout/header/search/Search'
import { Skeleton } from 'antd'
import { formatPrice } from '@/utils/formatPrice'
import cn from 'clsx'
import { getProductCreate } from '@/utils/Date.helper'

const SettingOrders: FC = () => {
	return (
		<main className={styles.main}>
			<div className={styles.main__head}>
				<div className={styles.head__row}>
					<h2 className={styles.head__title}>
						Заказы <span>20</span>
					</h2>
					<div className={styles.head__group}>
						<button type='button' className={styles.head__create}>
							<BoxAdd /> Добавить
						</button>
						<Search show={true} placeholder='Поиск товаров' />
					</div>
				</div>

				<section className={styles.main__table_head}>
					<div className={styles.table_head_column}>Обл.</div>
					<div className={styles.table_head_column}>Названи Категория</div>
					<div className={styles.table_head_column}>Вид</div>
					<div className={styles.table_head_column}>Статус</div>
					<div className={styles.table_head_column}>Айди заказа</div>
					<div className={styles.table_head_column}>Дата</div>
					<div className={styles.table_head_column}>Кол-во товаров</div>
					<div className={styles.table_head_column}>Оплачено</div>
					<div className={styles.table_head_column}>Опции</div>
				</section>
			</div>

			<section className={styles.main__table}>
				{/* <Skeleton loading={loading} active paragraph={{ rows: 20, width: '100%' }} title={false} /> */}
				{/* {data && data.shop.products
					? data.shop.products.edges.map(item => (
							<div className={styles.table__column} key={item.node.id}>
								<div className={styles.table__item_image}>
									<img
										src={item.node.image.imageMin}
										alt={item.node.displayName}
										className={styles.product__image}
									/>
								</div>
								<div className={styles.table__item}>
									<p className={styles.product__name}>{item.node.displayName}</p>
									<p className={styles.product__category}>{item.node.category?.displayName}</p>
								</div>
								<div className={styles.table__item}>
									{item.node.__typename === EnumProductTypeName.ActivationCodeProduct ? (
										<DraftIcon />
									) : (
										<FolderDataIcon />
									)}
								</div>
								<div className={styles.table__item}>
									<CheckIcon />
								</div>
								<div className={styles.table__item}>
									<p className={styles.product__created}>{getProductCreate(item.node.createdAt)}</p>
								</div>
								<div className={styles.table__item}>Осталось товара</div>
								<div className={styles.table__item}>
									<span className={cn(styles.price, { [styles.sale]: item.node.oldPrice })}>
										{formatPrice(item.node.price)}
									</span>
									{item.node.oldPrice && (
										<span className={styles.old__price}>{formatPrice(item.node.oldPrice)}</span>
									)}
									<button
										onClick={() => onOpen(item.node)}
										className={styles.edit__price}
										type='button'
									>
										<PenTransparentIcon />
									</button>
								</div>
								<div className={styles.table__options}>
									<button type='button' className={styles.option__button}>
										<BoxEditIcon />
									</button>
									<button type='button' className={styles.option__button}>
										<DeleteIcon />
									</button>
								</div>
							</div>
					  ))
					: ''} */}
			</section>
		</main>
	)
}

export default SettingOrders
