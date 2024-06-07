'use client'
import { FC, useState } from 'react'
import styles from './header.module.scss'
import Link from 'next/link'
import TgOpacity from '@/assets/icon/tg-opacity.svg'
import Search from './search/Search'
import HeaderProfile from './header-profile/HeaderProfile'
import { useAuth } from '@/hooks/useAuth'
import cn from 'clsx'
import HamburgerList from './hamburger-list/HamburgerList'

const Header: FC<{ background: boolean }> = ({ background }) => {
	const { auth } = useAuth()
	const [burger, setBurger] = useState(false)
	return (
		<header className={cn(styles.header, { [styles.bg]: background })}>
			<div className={styles.header__container}>
				<nav className={styles.header__row}>
					<div className={styles.header__first}>
						<Link href={'/'} className={styles.header__logo}>
							I commission
						</Link>
						<Search show={false} />
						<div className={styles.header__social}>
							<a href='#'>
								<TgOpacity /> <span>Чат-Бот поддержка в telegram</span>
							</a>
						</div>
					</div>
					<div className={styles.header__second}>
						<Link className={styles.header__open} href={'/'}>
							Открыть свой магазин
						</Link>
						{auth.auth ? (
							<HeaderProfile />
						) : (
							<Link className={styles.header__auth} href={'/auth'}>
								Авторизация
							</Link>
						)}
						{auth.auth && (
							<div
								onClick={() => setBurger(!burger)}
								className={cn(styles.burger, { [styles.active]: burger })}
							>
								<span></span>
							</div>
						)}
					</div>
					<HamburgerList active={burger} setBurger={setBurger} />
				</nav>
			</div>
		</header>
	)
}

export default Header
