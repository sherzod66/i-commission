import { FC } from 'react'
import styles from './mainSetting.module.scss'
import cn from 'clsx'
import Link from 'next/link'

const MainSetting: FC = () => {
	return (
		<main className={styles.main}>
			<div className={styles.main__actions}>
				<div className={cn(styles.actions__column, styles.big)}>
					<div className={styles.action__item}>
						<img draggable={false} src='/image/action_image1.png' alt='image' />
						<div className={styles.item__info}>
							<h4 className={styles.title}>Преобретено товаров:</h4>
							<div className={styles.action}>
								<p>12</p> <span>Шт.</span>
							</div>
							<h4 className={styles.subtitle}>За всё время</h4>
						</div>
					</div>
				</div>
				<div className={cn(styles.actions__column, styles.big)}>
					<div className={styles.action__item}>
						<img draggable={false} src='/image/action_image2.png' alt='image' />
						<div className={styles.item__info}>
							<h4 className={styles.title}>Секономлено на скидках:</h4>
							<div className={styles.action}>
								<p>3, 120</p> <span>руб.</span>
							</div>
							<h4 className={styles.subtitle}>За этот год</h4>
						</div>
					</div>
				</div>
				<div className={styles.actions__column}>
					<div className={styles.action__item}>
						<div className={styles.item__info}>
							<h4 className={styles.title}>Продано товаров::</h4>
							<div className={styles.action}>
								<p>0</p> <span>Шт</span>
							</div>
							<h4 className={styles.subtitle}>За этот год</h4>
						</div>
					</div>
				</div>
				<div className={styles.actions__column}>
					<div className={styles.action__item}>
						<div className={styles.item__info}>
							<h4 className={styles.title}>Заработано всего:</h4>
							<div className={styles.action}>
								<p>0</p> <span>Руб</span>
							</div>
							<h4 className={styles.subtitle}>За этот год</h4>
						</div>
					</div>
				</div>
				<div className={styles.actions__column}>
					<div className={styles.action__item}>
						<Link className={cn(styles.offers, styles.orange)} href={'/'}>
							<span>Открыть Магазин</span>
						</Link>
					</div>
				</div>
				<div className={styles.actions__column}>
					<div className={styles.action__item}>
						<Link className={cn(styles.offers, styles.black)} href={'/'}>
							<span>Войти в Магазин</span>
						</Link>
					</div>
				</div>
			</div>
		</main>
	)
}

export default MainSetting

// type TActionsList = {
// 	title: string,
// 	subTitle: string,

// }
