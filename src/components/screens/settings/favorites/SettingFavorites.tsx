import { FC } from 'react'
import styles from './settingFavorites.module.scss'
import Search from '@/components/layout/header/search/Search'
import FavoritesItem from '@/components/ui/favotites-item/FavoritesItem'
import BasketIcon from '@/assets/icon/BasketIcon'

const favorites = Array(2).fill('jj')

const SettingFavorites: FC = () => {
	return (
		<main className={styles.main}>
			<div className={styles.main__head}>
				<h2 className={styles.head__title}>
					Избранные <span>3</span>
				</h2>
				<Search show={true} placeholder='Поиск товара в избранных' />
			</div>
			<div className={styles.favorites__column}>
				{favorites.length > 0 ? (
					favorites.map(item => <FavoritesItem />)
				) : (
					<div className={styles.empty}>
						<BasketIcon />
						<p>У вас нету ни одного товара в избранных</p>
					</div>
				)}
			</div>
		</main>
	)
}

export default SettingFavorites
