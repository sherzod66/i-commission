'use client'
import { FC } from 'react'
import styles from './footer.module.scss'
import Link from 'next/link'
import { footerList } from './footerList'
import { useAuth } from '@/hooks/useAuth'
import SearchIcon from '@/assets/icon/SearchIcon'
import TgOpacityIcon from '@/assets/icon/TgOpacityIcon'

const Footer: FC = () => {
	const { auth } = useAuth()
	return (
		<footer className={styles.footer}>
			<div className={styles.footer__container}>
				<div className={styles.footer__row}>
					<div className={styles.footer__column}>
						<Link className={styles.logo} href={'/'}>
							I Commission
						</Link>
						<div className={styles.search}>
							<div>
								<SearchIcon />
							</div>
							<input type='text' placeholder='Поиск товара' />
						</div>
					</div>
					<div className={styles.footer__column}>
						<h3>Разделы</h3>
						<ul className={styles.footer__list}>
							{footerList.sections.map((el, i) => (
								<li key={i}>
									<Link href={el.path}>{el.name}</Link>
								</li>
							))}
						</ul>
					</div>
					<div className={styles.footer__column}>
						<h3>Поддержка</h3>
						<ul className={styles.footer__list}>
							{footerList.support.map((el, i) => (
								<li key={i}>
									<Link href={el.path}>{el.name}</Link>
								</li>
							))}
						</ul>
					</div>
					<div className={styles.footer__column}>
						<Link className={styles.header__open} href={'/'}>
							Открыть свой магазин
						</Link>
						{!auth.auth && (
							<Link className={styles.header__auth} href={'/auth'}>
								Авторизация
							</Link>
						)}
					</div>
				</div>
				<div className={styles.row2}>
					<div className={styles.row2__column}>
						<span>© I comission 2024</span>
						<Link href={'/'}>· Политика конфиденциальности</Link>
					</div>
					<div className={styles.row2__column}>
						<div className={styles.header__social}>
							<a href='#'>
								<TgOpacityIcon /> <span>Чат-Бот поддержка в telegram</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
