import { FC } from 'react'
import styles from './layout.module.scss'
import Header from './header/Header'
import Footer from './footer/Footer'
import { ISalesman } from '@/types/shop.type'
import ActivateSvg from '@/assets/icon/activate.svg'
import ArrowUp from '@/assets/icon/arrowUp.svg'
import { Rate } from 'antd'
import Link from 'next/link'
import cn from 'clsx'
type TLayout = {
	children: JSX.Element[] | JSX.Element | React.ReactElement | React.ReactElement[] | string
	image?: string
	title?: string
	isShop: null | ISalesman
}
const Layout: FC<TLayout> = ({ children, image, title, isShop }) => {
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
											<img src={isShop.imagePath} alt='Shop image' />
										</div>
									)}
									<div className={styles.title_title}>
										<h1>
											{isShop?.name ? isShop.name : title}
											<span>{isShop?.activate && <ActivateSvg />}</span>
										</h1>
										{isShop && <p>{isShop.description}</p>}
									</div>
								</div>
								<div className={styles.title__column2}>
									{isShop ? (
										<>
											<div className={styles.title__item_catalog}>
												<div className={styles.catalog__title}>
													<h3>Каталог</h3>
													<Link href={'/catalogs'}>
														<ArrowUp />
													</Link>
												</div>
												<p>Каталог товаров от других продавцов</p>
											</div>
											<div className={styles.title__itemSh}>
												<p>Дата регистрации</p>
												<h5>13 марта 2024, 10:52</h5>
												<p>В этом году</p>
											</div>
											<div className={styles.title__itemSh}>
												<p>Рейтинг продавца</p>
												<div className={styles.rate}>
													<Rate
														className='my-2 text-black-900 mobile:text-text-sm'
														disabled
														defaultValue={isShop.rate}
														allowHalf
													/>
													<p>{isShop.rate}</p>
												</div>
												<p>Всего 1523 отзыва</p>
											</div>
										</>
									) : (
										<>
											<div className={styles.title__item}>
												<p>Количество продавцов</p>
												<h5>24</h5>
											</div>
											<div className={styles.title__item}>
												<p>Количество товаров</p>
												<h5>2342</h5>
											</div>
										</>
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
