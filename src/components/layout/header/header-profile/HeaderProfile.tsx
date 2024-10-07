'use client'
import { FC } from 'react'
import styles from './headerProfile.module.scss'
import Link from 'next/link'
import { headerList } from './headerList'
import { removeFromStorage } from '@/services/auth/auth.helper'
import { useBasketStore } from '@/store/basketStore/useBasketStore'
import BasketIcon from '@/assets/icon/BasketIcon'
import MailIcon from '@/assets/icon/MailIcon'
import { useApolloClient } from '@apollo/client'
import { ME } from '@/services/user/user.service'

const HeaderProfile: FC = () => {
	const client = useApolloClient()
	const basket = useBasketStore(store => store.basket)
	const logout = () => {
		removeFromStorage()
		client.refetchQueries({
			include: [ME]
		})
	}
	return (
		<div className={styles.user__info}>
			<Link href={'/balance'} className={styles.money}>
				1700 <span>₽</span>
			</Link>
			<Link className={styles.header__icon} href={'/basket'}>
				<BasketIcon /> <span>{basket.length}</span>
			</Link>
			<Link className={styles.header__icon} href={'/chat'}>
				<MailIcon />
				<span>0</span>
			</Link>
			<div className={styles.avatar}>
				<img src='/image/avatars.png' alt='avatar not found' />
				<div className={styles.menu}>
					<ul className={styles.list}>
						{headerList.map(el => (
							<li className={styles.list_el} key={el.id}>
								<Link href={el.path}>
									<span>{<el.icon />}</span> {el.name}
								</Link>
							</li>
						))}
						<li className='w-full h-[2px] bg-f4f4 my-1'></li>
						<li className={styles.list_el}>
							<Link href='/faq'>
								<span>
									<i className='icon-help'></i>
								</span>{' '}
								Помощь
							</Link>
						</li>
						<li className='w-full h-[2px] bg-f4f4 my-1'></li>
						<li onClick={logout} className={styles.list_ex}>
							<span>
								<i className='icon-exit'></i>
							</span>
							Выйти
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default HeaderProfile
