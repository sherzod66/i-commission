import { FC } from 'react'
import UserIcon from '@/assets/icon/UserIcon'
import SettingIcon from '@/assets/icon/SettingIcon'
import BasketIcon from '@/assets/icon/BasketIcon'
import MailIcon from '@/assets/icon/MailIcon'
type THeaderList = {
	id: string
	name: string
	icon: FC
	path: string
}
export const headerList: THeaderList[] = [
	{
		icon: UserIcon,
		name: 'Профиль',
		id: 'user',
		path: '/settings'
	},
	{
		icon: BasketIcon,
		id: 'myBasket',
		name: 'Мои покупки',
		path: '/basket'
	},
	{
		icon: SettingIcon,
		id: 'setting',
		name: 'Настройки',
		path: '/settings'
	}
]

export const headerHamburgerList: THeaderList[] = [
	{
		icon: UserIcon,
		name: 'Профиль',
		id: 'user',
		path: '/settings'
	},
	{
		icon: MailIcon,
		id: 'message',
		name: 'Сообщения',
		path: '/chat'
	},
	{
		icon: SettingIcon,
		id: 'setting',
		name: 'Настройки',
		path: '/settings'
	}
]
