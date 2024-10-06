'use client'
import { FC } from 'react'
import cn from 'clsx'
import styles from './participants.module.scss'
import UsersIcon from '@/assets/icon/UsersIcon'
import Search from '@/components/layout/header/search/Search'
import { useParticipants } from './useParticipants'
import { Skeleton } from 'antd'
import ExitIcon from '@/assets/icon/ExitIcon'

const Participants: FC = () => {
	const { navigate } = useParticipants()
	return (
		<main className={styles.main}>
			<div className={styles.main__head}>
				<h2 className={styles.head__title}>
					Участники <span>3</span>
				</h2>
				<div className={styles.head__group}>
					<button
						// onClick={() => navigate.push(`/settings/create-product?shopId=${shopId}`)}
						type='button'
						className={styles.head__create}
					>
						<UsersIcon /> Добавить
					</button>
					<Search show={true} placeholder='Поиск участников' />
				</div>
			</div>
			<section className={styles.main__table_head}>
				<div className={styles.table_head_column}>Имя</div>
				<div className={styles.table_head_column}>Присоединился</div>
				<div className={styles.table_head_column}>Роль</div>
				<div className={styles.table_head_column}>Опции</div>
			</section>
			<section className={styles.main__table}>
				{/* <Skeleton loading={loading} active paragraph={{ rows: 20, width: '100%' }} title={false} /> */}
				<div className={styles.table__column}>
					<div className={styles.table__item_image}>
						<div className={styles.image}>
							<img
								src='/image/avatar.png'
								// alt={item.node.displayName}
								className={styles.product__image}
							/>
						</div>
						<div className={styles.info}>
							<h4 className={styles.displayName}>nokia tips</h4>
							<p className={styles.email}>pinustechtips@yandex.ru</p>
						</div>
					</div>
					<div className={styles.table__item}>
						<p className={styles.product__name}>17.08.2024 (28 дней назад)</p>
					</div>
					<div className={styles.table__item}>
						<p className={styles.product__name}>Участник</p>
					</div>

					<div className={styles.table__options}>
						<button type='button' className={styles.option__button}>
							<ExitIcon />
						</button>
					</div>
				</div>
				<div className={styles.table__column}>
					<div className={styles.table__item_image}>
						<div className={styles.image}>
							<img
								src='/image/avatar.png'
								// alt={item.node.displayName}
								className={styles.product__image}
							/>
						</div>
						<div className={styles.info}>
							<h4 className={styles.displayName}>nokia tips</h4>
							<p className={styles.email}>pinustechtips@yandex.ru</p>
						</div>
					</div>
					<div className={styles.table__item}>
						<p className={styles.product__name}>17.08.2024 (28 дней назад)</p>
					</div>
					<div className={styles.table__item}>
						<p className={styles.product__name}>Участник</p>
					</div>

					<div className={styles.table__options}>
						<button type='button' className={styles.option__button}>
							<ExitIcon />
						</button>
					</div>
				</div>

				{/* <Modal
					title='Сделать скидку'
					onClose={onClose}
					isOpen={isOpenDiscount.isOpen}
					close={true}
					titleStyle={{ fontSize: '24px', fontWeight: '500' }}
				>
					{isOpenDiscount.product && (
						<AddRemoveDiscount close={onClose} product={isOpenDiscount.product} />
					)}
				</Modal> */}
			</section>
		</main>
	)
}

export default Participants
//TODO: На потом
// {data && data.shop.products
// 	? data.shop.products.edges.map(item => (
// <div className={styles.table__column} key={item.node.id}>
// 	<div className={styles.table__item_image}>
// 		<img
// 			src={item.node.image.imageMin}
// 			alt={item.node.displayName}
// 			className={styles.product__image}
// 		/>
// 	</div>
// 	<div className={styles.table__item}>
// 		<p className={styles.product__name}>{item.node.displayName}</p>
// 		<p className={styles.product__category}>{item.node.category?.displayName}</p>
// 	</div>
// 	<div className={styles.table__item}>
// 		{item.node.__typename === EnumProductTypeName.ActivationCodeProduct ? (
// 			<DraftIcon />
// 		) : (
// 			<FolderDataIcon />
// 		)}
// 	</div>
// 	<div className={styles.table__item}>
// 		<CheckIcon />
// 	</div>
// 	<div className={styles.table__item}>
// 		<p className={styles.product__created}>{getProductCreate(item.node.createdAt)}</p>
// 	</div>
// 	<div className={styles.table__item}>Осталось товара</div>
// 	<div className={styles.table__item}>
// 		<span className={cn(styles.price, { [styles.sale]: item.node.oldPrice })}>
// 			{formatPrice(item.node.price)}
// 		</span>
// 		{item.node.oldPrice && (
// 			<span className={styles.old__price}>{formatPrice(item.node.oldPrice)}</span>
// 		)}
// 		<button
// 			onClick={() => onOpen(item.node)}
// 			className={styles.edit__price}
// 			type='button'
// 		>
// 			<PenTransparentIcon />
// 		</button>
// 	</div>
// 	<div className={styles.table__options}>
// 		<button
// 			onClick={() =>
// 				navigate.push(
// 					`/settings/${
// 						item.node.__typename === EnumProductTypeName.ActivationCodeProduct
// 							? 'update-activation-product'
// 							: 'update-configurable-product'
// 					}?shopId=${shopId}&productId=${item.node.id}`
// 				)
// 			}
// 			type='button'
// 			className={styles.option__button}
// 		>
// 			<BoxEditIcon />
// 		</button>
// 		<button type='button' className={styles.option__button}>
// 			<DeleteIcon />
// 		</button>
// 	</div>
// </div>
// 		))
// 	: ''}
