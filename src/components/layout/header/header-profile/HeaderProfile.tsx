import { FC } from 'react'
import styles from './headerProfile.module.scss'
import Link from 'next/link'
import Basket from '@/assets/icon/basket.svg'
import Chat from '@/assets/icon/message.svg'
import { headerList } from './headerList'
import HelpIcon from '@/assets/icon/help.svg'
import Exit from '@/assets/icon/exit.svg'

const HeaderProfile: FC = () => {
	return (
		<div className={styles.user__info}>
			<p className={styles.money}>
				1700 <span>₽</span>
			</p>
			<Link className={styles.header__icon} href={'/basket'}>
				<Basket /> <span>10</span>
			</Link>
			<Link className={styles.header__icon} href={'/chat'}>
				<Chat />
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
							<Link href='/help'>
								<span>{<HelpIcon />}</span> Помощь
							</Link>
						</li>
						<li className='w-full h-[2px] bg-f4f4 my-1'></li>
						<li className={styles.list_ex}>
							<span>{<Exit />}</span> Выйти
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default HeaderProfile
