'use client'
import StoreIcon from '@/assets/icon/StoreIcon'
import { FC, useEffect, useState } from 'react'
import { useMe } from '@/hooks/useMe'
import Link from 'next/link'
import styles from './bar.module.scss'
import cn from 'clsx'

type TMenuItemProps = {
	pathname: string
}
const MenuItem: FC<TMenuItemProps> = ({ pathname }) => {
	const { data, loading } = useMe()
	const location = window.location.href
	useEffect(() => {}, [data])
	if (data && data.me.account.shops) {
		return (
			<li className={cn(styles.item, { [styles.active]: pathname.includes('shop') })}>
				{data.me.account.shops.edges.length > 1 ? (
					<Link href={`/settings/shop`}>
						{<StoreIcon />} Магазины
						<ul className={cn(styles.sub__list, styles.open)}>
							{data.me.account.shops.edges.map(item => (
								<li
									key={item.node.id}
									className={cn(styles.sub__item, {
										[styles.active]: location.includes(item.node.id)
									})}
								>
									<Link href={`/settings/shop?shopId=${item.node.id}`}>{item.node.code}</Link>
								</li>
							))}
						</ul>
					</Link>
				) : (
					<Link href={`/settings/shop?shopId=${data.me.account.shops.edges[0].node.id}`}>
						{<StoreIcon />} Магазин
					</Link>
				)}
			</li>
		)
	} else return ''
}

export default MenuItem
