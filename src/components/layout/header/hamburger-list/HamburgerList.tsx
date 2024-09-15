import { Dispatch, FC, SetStateAction } from 'react'
import styles from './hamburgerList.module.scss'
import Search from '../search/Search'
import { headerHamburgerList } from '../header-profile/headerList'
import Link from 'next/link'
import cn from 'clsx'
import TgOpacityIcon from '@/assets/icon/TgOpacityIcon'
import BasketIcon from '@/assets/icon/BasketIcon'

type THamburgerListProps = {
	active: boolean
	setBurger: Dispatch<SetStateAction<boolean>>
}
const HamburgerList: FC<THamburgerListProps> = ({ active, setBurger }) => {
	return (
		<aside
			onClick={e => !(e.target as HTMLElement).closest('#content-list') && setBurger(false)}
			className={cn(styles.aside, { [styles.active]: active })}
		>
			<div id='content-list' className={cn(styles.aside__content, { [styles.active]: active })}>
				<Search show={true} full={true} />
				<div className={styles.avatar}>
					<div className={styles.avatar__first}>
						<div className={styles.avatar__image}>
							<img src='/image/avatars.png' alt='avatar not found' />
						</div>
						<p>ShopV</p>
					</div>
					<Link href={'/balance'} className={styles.money}>
						1700 <span>₽</span>
					</Link>
				</div>
				<ul className={styles.aside__list}>
					{headerHamburgerList.map(el => (
						<li className={styles.list_el} key={el.id}>
							<Link href={el.path}>
								<span>{<el.icon />}</span> {el.name}
							</Link>
						</li>
					))}
					<li className='w-full h-[2px] bg-line my-1'></li>
					<li className={styles.list_el}>
						<Link href='/basket'>
							<span>{<BasketIcon />}</span> Корзина
						</Link>
					</li>
					<li className={styles.list_el}>
						<Link href='/faq'>
							<span>
								<i className='icon-help'></i>
							</span>{' '}
							Помощь
						</Link>
					</li>
					<li className='w-full h-[2px] bg-line my-1'></li>
					<li className={styles.list_ex}>
						<span>
							<i className='icon-exit'></i>
						</span>{' '}
						Выйти
					</li>
				</ul>
				<Link className={styles.header__open} href={'/'}>
					Открыть свой магазин
				</Link>

				<div className={styles.header__social}>
					<a href='#'>
						<TgOpacityIcon /> <span>Чат-Бот поддержка в telegram</span>
					</a>
				</div>
			</div>
		</aside>
	)
}

export default HamburgerList
