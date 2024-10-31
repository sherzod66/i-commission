'use client'
import { FC } from 'react'
import styles from './product.module.scss'
import { useProduct } from './useProduct'
import { Breadcrumb } from 'antd'
import Link from 'next/link'
import NotFound from '@/app/not-found'
import Loading from '@/app/loading'
import { BiCopy } from 'react-icons/bi'
import ComplainIcon from '@/assets/icon/ComplainIcon'
import { useOnClickOutside } from '@/hooks/useOnClickOutside'
import cn from 'clsx'
import CloseIcon from '@/assets/icon/CloseIcon'
import { complainList } from './complainList'
import BasketIcon from '@/assets/icon/BasketIcon'
import StarsIcon from '@/assets/icon/StarsIcon'
import StarProductIcon from '@/assets/icon/StarProductIcon'
import FavoriteIcn from '@/assets/icon/FavoriteIcn'
import SalesmanInfo from './salesman-info/SalesmanInfo'
import ProductConfiguration from './product-configuration/ProductConfiguration'
import { formatPrice } from '@/utils/formatPrice'
import ProductDiscount from './product-discount/ProductDiscount'
import ProductPrice from './product-price/ProductPrice'
import Reviews from '../salesman/reviews/Reviews'

const Product: FC = () => {
	const {
		data,
		loading,
		copyText,
		count,
		setCount,
		checkboxValue,
		numberValue,
		onSelectValue,
		onSetTextValue,
		selectValue,
		toggleCheckbox,
		onToggleBasket,
		textValue,
		onSetNumberValue,
		configureError
	} = useProduct()
	const { isShow, ref, setIsShow } = useOnClickOutside(false)
	return (
		<>
			{loading && <Loading />}
			{data ? (
				<main className={styles.product}>
					<div className={styles.product__container}>
						<div className={styles.head}>
							<Breadcrumb
								items={[
									{ title: <Link href={'/'}>Главная</Link> },
									{ title: <Link href={'/catalog'}>{data.product.category?.displayName}</Link> },
									{ title: data.product.displayName }
								]}
							/>
							<div className={styles.head__column}>
								<button
									onClick={() => copyText(data.product.id)}
									type='button'
									className={styles.column__article}
								>
									<BiCopy /> Артикул: {data.product.id}
								</button>
								<div className={styles.column__complain}>
									<button
										onClick={() => setIsShow(!isShow)}
										type='button'
										className={styles.complain__btn}
									>
										<ComplainIcon /> Пожаловаться
									</button>
									<div ref={ref} className={cn(styles.menu, { [styles.show]: isShow })}>
										<ul className={styles.list}>
											<li className={styles.list_title}>
												<span>Пожаловаться</span>
												<button type='button' onClick={() => setIsShow(false)}>
													<CloseIcon />
												</button>
											</li>
											<li className='w-full h-[2px] bg-f4f4 my-1'></li>
											{complainList.map(item => (
												<li key={item.id} className={styles.list_el}>
													<button type='button'>
														<span>
															<item.icon />
														</span>
														{item.name}
													</button>
												</li>
											))}
										</ul>
									</div>
								</div>
							</div>
						</div>
						<h2 className={styles.product__name}>{data.product.displayName}</h2>
						<div className={styles.product__info}>
							<div className={styles.info__rate}>
								<StarProductIcon /> 4.8
							</div>
							<p className={styles.info__text}>2 407 оценок продавца</p>
							<p className={styles.info__text}>
								<BasketIcon /> 10 582 продано
							</p>
							<p className={styles.info__text}>
								<StarsIcon />
								312 в избранных
							</p>
						</div>
						<div className={styles.product__row}>
							<div className={styles.first__column}>
								<div className={styles.product__preview}>
									<button type='button' className={styles.product__favorite}>
										<FavoriteIcn />
									</button>
									<div id='product-image-wrapper-preview' className={styles.product__image_wrapper}>
										<img draggable={false} src={data.product.image.url} alt='product-image' />
										<span className={styles.product__price}>{formatPrice(data.product.price)}</span>
										<span className={styles.product__name}>{data.product.displayName}</span>
									</div>
								</div>
								<div className={styles.product__description}>
									<h4>Описание</h4>
									<p>{data.product.description}</p>
								</div>
								{data.product.configuration && <SalesmanInfo shop={data.product.shop} />}
							</div>
							<div className={styles.second__column}>
								{data.product.oldPrice && <ProductDiscount product={data.product} />}
								<ProductPrice
									onToggleBasket={onToggleBasket}
									product={data.product}
									count={count}
									setCount={setCount}
								/>
								{data.product.configuration && (
									<ProductConfiguration
										configuration={data.product.configuration}
										checkboxValue={checkboxValue}
										numberValue={numberValue}
										onSelectValue={onSelectValue}
										onSetTextValue={onSetTextValue}
										selectValue={selectValue}
										toggleCheckbox={toggleCheckbox}
										textValue={textValue}
										onSetNumberValue={onSetNumberValue}
										configureError={configureError}
									/>
								)}
								{!data.product.configuration && <SalesmanInfo shop={data.product.shop} />}
							</div>
						</div>
					</div>
					<Reviews title='Отзывы о товаре' />
				</main>
			) : (
				<NotFound />
			)}
		</>
	)
}

export default Product
