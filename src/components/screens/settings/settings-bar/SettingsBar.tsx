'use client'
import { FC } from 'react'
import styles from './bar.module.scss'
import Link from 'next/link'
import { useMe } from '@/hooks/useMe'
import { Skeleton } from 'antd'
import { usePathname } from 'next/navigation'
import cn from 'clsx'
import { settingBarSellerList, settingBarUserList } from './SettingBarList'

const SettingsBar: FC = () => {
	const pathName = usePathname()
	const { data, loading } = useMe()
	return (
		<>
			<Skeleton loading={loading} active paragraph={{ rows: 17, width: '100%' }} title={false} />
			{data && (
				<ul className={styles.nav__list}>
					<li className={cn(styles.item, { [styles.active]: pathName === '/settings' })}>
						<Link href={`/settings`}>
							<i className='icon-dashboard'></i> Дашборд
						</Link>
					</li>
					{settingBarUserList.map(item => (
						<li
							className={cn(styles.item, { [styles.active]: pathName.includes(item.path) })}
							key={item.path}
						>
							<Link href={`/settings/${item.path}`}>
								{<item.icon />} {item.label}
							</Link>
						</li>
					))}
					{data.me.permissions.includes('shop.create') && (
						<>
							<li className={styles.list__line}></li>
							{settingBarSellerList.map(item => {
								return (
									item.isShow && (
										<li
											className={cn(styles.item, { [styles.active]: pathName.includes(item.path) })}
											key={item.path}
										>
											<Link
												href={`/settings/${item.path}${
													item.path.includes('products')
														? `?shopId=${data.me.account.shops?.edges[0].node.id}`
														: ''
												}`}
											>
												{<item.icon />} {item.label}
											</Link>
										</li>
									)
								)
							})}
						</>
					)}
				</ul>
			)}
		</>
	)
}

export default SettingsBar
