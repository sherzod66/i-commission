import { FC } from 'react'
import styles from './favoritesItem.module.scss'
import Image from 'next/image'
import cn from 'clsx'

const FavoritesItem: FC = () => {
	return (
		<div className={styles.favorites__row}>
			<div className={styles.favorites__product}>
				<div className={styles.product__image}>
					<img src='/image/imagePMin.png' alt='image' />
				</div>
				<div className={styles.product__info}>
					<h5 className={styles.product__name}>Chat GPT</h5>
					<p className={styles.product__categories}>GPT 4o / Подписка на 1 год</p>
					<p className={styles.product__sales}>
						<Image src={'/icon/basket.svg'} alt='icon' width={12} height={17} />
						<span>10 582 продано</span>
					</p>
					<p className={styles.product__price}>
						Цена: <span>4, 322 ₽</span>
					</p>
				</div>
			</div>
			<div className={styles.favorites__sellers}>
				<p className={styles.sellers__title}>Продавец:</p>
				<p className={styles.sellers__value}>Shop V</p>
				<p className={styles.sellers__title}>В наличии:</p>
				<p className={styles.sellers__value}>104 шт</p>
			</div>
			<div className={styles.favorites__actions}>
				<button type='button' className={cn(styles.actions__button, { [styles.disabled]: true })}>
					Добавить в корзину
				</button>
				<button type='button' className={styles.actions__button}>
					Удалить
				</button>
			</div>
		</div>
	)
}

export default FavoritesItem
