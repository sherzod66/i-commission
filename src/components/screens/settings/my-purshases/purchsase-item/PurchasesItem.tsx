'use client'
import { FC, useState } from 'react'
import styles from './purchasesItem.module.scss'
import cn from 'clsx'
import Link from 'next/link'
import ChatIcon from '@/assets/icon/ChatIcon'

const PurchasesItem: FC<{ paid: boolean }> = ({ paid }) => {
	const [isShow, setIsShow] = useState<boolean>(false)
	return (
		<div className={styles.purchase}>
			<div className={styles.purchase__info}>
				<h4 className={styles.title}>Заказ №AAB0521</h4>
				<div className={styles.info__detail}>
					<p>Дата создания:</p>
					<p>14:54 09.08.2025</p>
					<p>Стоимость</p>
					<p>23, 980 ₽ </p>
				</div>
				<button disabled={paid} type='button' className={cn(styles.btn, { [styles.paid]: paid })}>
					Оплатить
				</button>
				<button
					onClick={() => setIsShow(!isShow)}
					type='button'
					className={cn(styles.btn, styles.opacity)}
				>
					Подробнее о заказе
				</button>
			</div>
			<div className={cn(styles.purchase__result, { [styles.show]: isShow })}>
				<h4 className={styles.result__title}>Стоимость</h4>
				<div className={styles.result__detail}>
					<p className={styles.result__text}>Предварительно:</p>
					<p className={styles.result__text}>25, 060 ₽</p>
					<p className={styles.result__text}>Скидка</p>
					<p className={cn(styles.result__text, styles.discount)}>-1, 080 ₽</p>
					<p className={cn(styles.result__text, styles.bold)}>Всего</p>
					<p className={cn(styles.result__text, styles.bold)}>11, 030 ₽</p>
				</div>
			</div>
			<div className={cn(styles.purchase__product__min, { [styles.no_show]: isShow })}>
				<h4 className={styles.title_min}>
					Товары <span>(13)</span>
				</h4>
				<div className={styles.products__head}>
					<p>Товары</p>
					<p>Продавец</p>
					<p>Итоговая цена</p>
				</div>
				<div className={styles.product__row}>
					<div className={styles.product__info}>
						<div className={styles.product__preview}>
							<img src='/image/imagePMin.png' alt='preview' />
						</div>
						<div className={styles.product__name}>
							<h5 className={styles.name}>Chat GPT</h5>
							<p className={styles.product__description}>
								GPT 4o / Подписка на 1 ggggggggghhhhggggg
							</p>
						</div>
					</div>
					<p className={styles.product__owner}>Shop V</p>
					<div className={styles.product__price}>
						<p className={styles.price}>4, 322 ₽</p>
						<p className={styles.product__quantity}>Цена за 3 штуки</p>
					</div>
				</div>
				<div className={styles.product__row}>
					<div className={styles.product__info}>
						<div className={styles.product__preview}>
							<img src='/image/imagePMin.png' alt='preview' />
						</div>
						<div className={styles.product__name}>
							<h5 className={styles.name}>Chat GPT</h5>
							<p className={styles.product__description}>
								GPT 4o / Подписка на 1 ggggggggghhhhggggg
							</p>
						</div>
					</div>
					<p className={styles.product__owner}>Shop V</p>
					<div className={styles.product__price}>
						<p className={styles.price}>4, 322 ₽</p>
						<p className={styles.product__quantity}>Цена за 3 штуки</p>
					</div>
				</div>
				<div className={styles.product__row}>
					<div className={styles.product__info}>
						<div className={styles.product__preview}>
							<img src='/image/imagePMin.png' alt='preview' />
						</div>
						<div className={styles.product__name}>
							<h5 className={styles.name}>Chat GPT</h5>
							<p className={styles.product__description}>
								GPT 4o / Подписка на 1 ggggggggghhhhggggg
							</p>
						</div>
					</div>
					<p className={styles.product__owner}>Shop V</p>
					<div className={styles.product__price}>
						<p className={styles.price}>4, 322 ₽</p>
						<p className={styles.product__quantity}>Цена за 3 штуки</p>
					</div>
				</div>
				<div className={styles.blur}>
					<p>И еще 11 товаров</p>
				</div>
			</div>
			<div className={cn(styles.purchase__product__all, { [styles.show]: isShow })}>
				<h4 className={styles.title}>Товары</h4>
				{fakeProduct.map(item => (
					<>
						<div className={styles.salesman}>
							<div className={styles.salesman__item}>
								<div className={styles.salesman__logo}>
									<img src={item.shop.image.url} alt='' />
								</div>
							</div>
							<div className={styles.salesman__item}>
								<p>Продавец</p>
								<h4>{item.shop.displayName}</h4>
								<Link href={'/' + item.shop.displayName}>Перейти в магазин</Link>
							</div>
						</div>
						{item.products.map(elem => (
							<div className={styles.detail__row}>
								<div className={styles.detail__first}>
									<div className={styles.first__head}>
										<div className={styles.first__image}>
											<img src='/image/imagePMin.png' alt='' />
										</div>
										<div className={styles.head__info}>
											<h5 className={styles.first__bold_text}>{elem.display}</h5>
											<p className={styles.first__category}>{elem.category}</p>
										</div>
									</div>
									<h5 className={styles.first__bold_text}>Товар:</h5>
									{elem.received ? (
										<h4 className={styles.first__text_xl}>
											Login: {elem.param.login} Password: {elem.param.password}
										</h4>
									) : (
										<h4 className={styles.first__text_xl}>{elem.id}</h4>
									)}
									<h5 className={styles.first__bold_text}>Инструкция:</h5>
									<p className='text-text-default mt-1 leading-normal'>{elem.instruction}</p>
								</div>
								<div className={styles.detail__second}>
									<button type='button' className={cn(styles.second__button, styles.chat)}>
										<ChatIcon /> Перейти в чат
									</button>
									{elem.received ? (
										<button type='button' className={cn(styles.second__button, styles.disabled)}>
											Товар получен
										</button>
									) : (
										<button type='button' className={styles.second__button}>
											Подтвердить получение
										</button>
									)}
									{elem.received && elem.feedback && (
										<button type='button' className={cn(styles.second__button, styles.disabled)}>
											Отзыв оставлен
										</button>
									)}
									{elem.received && !elem.feedback && (
										<button type='button' className={cn(styles.second__button)}>
											Оставить отзыв
										</button>
									)}
								</div>
							</div>
						))}
					</>
				))}
			</div>
		</div>
	)
}

export default PurchasesItem

const fakeProduct = [
	{
		shop: {
			displayName: 'NAVIFORCE',
			image: {
				url: '/image/shop.png'
			}
		},
		products: [
			{
				id: 'Q1IOE7-2XO4RP-X51ELE-TT5R3L-OE3KG0',
				instruction: 'Введите код для активации в Steam',
				feedback: false,
				received: false,
				display: 'Chat GPT',
				category: 'GPT 4o / Подписка на 1 год / Энтерпрайс версия',
				param: {
					login: '4ccgpt4o@gmail.com',
					password: '$(n3@#bk7ds&8'
				}
			},
			{
				id: 'Q1IOE7-2XO4RP-X51ELE-TT5R3L-OE3KG0',
				instruction: 'Введите код для активации в Steam',
				feedback: false,
				received: true,
				param: {
					login: '4ccgpt4o@gmail.com',
					password: '$(n3@#bk7ds&8'
				},
				display: 'Chat GPT',
				category: 'GPT 4o / Подписка на 1 год / Энтерпрайс версия'
			}
		]
	},
	{
		shop: {
			displayName: 'NAVIFORCE',
			image: {
				url: '/image/shop.png'
			}
		},
		products: [
			{
				id: 'Q1IOE7-2XO4RP-X51ELE-TT5R3L-OE3KG0',
				instruction: 'Введите код для активации в Steam',
				feedback: true,
				received: true,
				display: 'Chat GPT',
				category: 'GPT 4o / Подписка на 1 год / Энтерпрайс версия',
				param: {
					login: '4ccgpt4o@gmail.com',
					password: '$(n3@#bk7ds&8'
				}
			}
		]
	}
]
