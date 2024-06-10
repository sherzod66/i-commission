import { FC } from 'react'
import User from '@/assets/icon/user.svg'
import MyBasket from '@/assets/icon/myBasket.svg'
import Setting from '@/assets/icon/settings.svg'
import MessageBg from '@/assets/icon/messageBg.svg'
type THeaderList = {
	id: string
	name: string
	icon: FC
	path: string
}
export const headerList: THeaderList[] = [
	{
		icon: User,
		name: 'Профиль',
		id: 'user',
		path: '/settings'
	},
	{
		icon: MyBasket,
		id: 'myBasket',
		name: 'Мои покупки',
		path: 'orders'
	},
	{
		icon: Setting,
		id: 'setting',
		name: 'Настройки',
		path: '/settings'
	}
]

export const headerHamburgerList: THeaderList[] = [
	{
		icon: User,
		name: 'Профиль',
		id: 'user',
		path: '/settings'
	},
	{
		icon: MessageBg,
		id: 'message',
		name: 'Сообщения',
		path: '/chat'
	},
	{
		icon: Setting,
		id: 'setting',
		name: 'Настройки',
		path: '/settings'
	}
]
