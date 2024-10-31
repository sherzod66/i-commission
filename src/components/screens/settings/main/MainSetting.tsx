'use client'
import { FC } from 'react'
import styles from './mainSetting.module.scss'
import cn from 'clsx'
import { useMainSetting } from './useMainSetting'
import Modal from '@/components/ui/modal/Modal'
import dynamic from 'next/dynamic'

const CreateShop = dynamic(() => import('@/components/ui/modal-content/create-shop/CreateShop'), {
	ssr: false
})

const MainSetting: FC = () => {
	const { isCreate, onToggleModal, data } = useMainSetting()
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
				{!data?.me.account.shops && (
					<div className={styles.actions__column}>
						<div className={styles.action__item}>
							<button
								onClick={onToggleModal}
								type='button'
								className={cn(styles.offers, styles.orange)}
							>
								<span>Открыть Магазин</span>
							</button>
						</div>
					</div>
				)}
				<div className={styles.actions__column}>
					<div className={styles.action__item}>
						<button type='button' className={cn(styles.offers, styles.black)}>
							<span>Войти в Магазин</span>
						</button>
					</div>
				</div>
			</div>
			<Modal
				isOpen={isCreate}
				onClose={onToggleModal}
				title='Открытие магазина'
				titleStyle={{ fontSize: '32px' }}
				close
				contentWidth='720px'
			>
				<CreateShop onToggleModal={onToggleModal} />
			</Modal>
		</main>
	)
}

export default MainSetting

// type TActionsList = {
// 	title: string,
// 	subTitle: string,

// }
