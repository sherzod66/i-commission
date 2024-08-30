import { FC } from 'react'
import styles from './layout.module.scss'
import Header from './header/Header'
import Footer from './footer/Footer'
import { IShop } from '@/types/shop.type'
import ActivateSvg from '@/assets/icon/activate.svg'
import ArrowUp from '@/assets/icon/arrowUp.svg'
import { Rate } from 'antd'
import Link from 'next/link'
import cn from 'clsx'
import InfoSalesman from './InfoSalesman'
import { getShopCreate } from '@/utils/Date.helper'
type TLayout = {
	children: JSX.Element[] | JSX.Element | React.ReactElement | React.ReactElement[] | string
	image?: string
	title?: string
	isShop: IShop | null
	description?: string
}
const Layout: FC<TLayout> = ({ children, image, title, isShop, description }) => {
	return (
		<>
			{image && (
				<>
					<div className={cn(styles.back_image, { [styles.shop]: isShop })}>
						<img src={image} alt='background' />
					</div>
					<div className={styles.tittle}>
						<div className={styles.title__container}>
							<div className={styles.title__row}>
								<div className={styles.tittle__column}>
									{isShop && (
										<div className={styles.title__image}>
											<img src='/image/shopCover.png' alt='Shop image' />
										</div>
									)}
									<div className={styles.title_title}>
										<h1>
											{isShop?.displayName ? isShop.displayName : title}
											<span>{isShop?.active && <ActivateSvg />}</span>
										</h1>
										{isShop && <p>Описание магазиан</p>}
										{description && (
											<p>
												По запросу “Аккаунт ВК с голосами” с фильтром “Для работы” начиная от 10руб
												до 1000руб
											</p>
										)}
									</div>
								</div>
								<div className={styles.title__column2}>
									{isShop ? (
										<>
											<div className={styles.title__itemSh}>
												<p>Рейтинг продавца</p>
												<div className={styles.rate}>
													<Rate
														className='my-2 text-black-900 mobile:text-text-sm'
														disabled
														defaultValue={2.5}
														allowHalf
													/>
													<p>{2.5}</p>
												</div>
												<p>Всего 1523 отзыва</p>
											</div>
											<div className={styles.title__itemSh}>
												<p>Дата регистрации</p>
												<h5>{getShopCreate(isShop.createdAt)}</h5>
												<p>
													{new Date().getFullYear() === new Date(isShop.createdAt).getFullYear()
														? 'В этом году'
														: `${
																new Date().getFullYear() - new Date(isShop.createdAt).getFullYear()
														  } года назад`}
												</p>
											</div>
											<div className={styles.title__item_catalog}>
												<div className={styles.catalog__title}>
													<h3>Каталог</h3>
													<Link href={'/catalogs'}>
														<ArrowUp />
													</Link>
												</div>
												<p>Каталог товаров от других продавцов</p>
											</div>
										</>
									) : (
										<InfoSalesman />
									)}
								</div>
							</div>
						</div>
					</div>
				</>
			)}
			<Header background={image ? false : true} />
			{children}
			<Footer />
		</>
	)
}

export default Layout
