'use client'
import { FC } from 'react'
import styles from './settingProducts.module.scss'
import BoxAdd from '@/assets/icon/BoxAdd'
import Search from '@/components/layout/header/search/Search'
import { useSettingProducts } from './useSettingProducts'
import CheckIcon from '@/assets/icon/CheckIcon'
import { getProductCreate } from '@/utils/Date.helper'
import cn from 'clsx'
import { formatPrice } from '@/utils/formatPrice'
import PenTransparentIcon from '@/assets/icon/PenTransparentIcon'
import BoxEditIcon from '@/assets/icon/BoxEditIcon'
import DeleteIcon from '@/assets/icon/DeleteIcon'

const SettingsProducts: FC = () => {
	const { data, loading, navigate, shopId } = useSettingProducts()
	return (
		<main className={styles.main}>
			<div className={styles.main__head}>
				<h2 className={styles.head__title}>
					Список всех товаров <span>{data?.shop.products?.edges.length}</span>
				</h2>
				<div className={styles.head__group}>
					<button
						onClick={() => navigate.push(`/settings/create-product?shopId=${shopId}`)}
						type='button'
						className={styles.head__create}
					>
						<BoxAdd /> Добавить
					</button>
					<Search show={true} />
				</div>
			</div>
			<section className={styles.main__table_head}>
				<div className={styles.table_head_column}>Обл.</div>
				<div className={styles.table_head_column}>Название Категория</div>
				<div className={styles.table_head_column}>Вид</div>
				<div className={styles.table_head_column}>Статус</div>
				<div className={styles.table_head_column}>Дата</div>
				<div className={styles.table_head_column}>Осталось товара</div>
				<div className={styles.table_head_column}>Стоимость</div>
				<div className={styles.table_head_column}>Опции</div>
			</section>
			<section className={styles.main__table}>
				{data && data.shop.products
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
								<div className={styles.table__item}>Вид</div>
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
									<button className={styles.edit__price} type='button'>
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
					: 'product not found'}
			</section>
		</main>
	)
}

export default SettingsProducts
