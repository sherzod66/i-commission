import NotificationIcon from '@/assets/icon/NotificationIcon'
import OrderIcon from '@/assets/icon/OrderIcon'
import ProductsIcon from '@/assets/icon/ProductsIcon'
import PurchasesIcon from '@/assets/icon/PurchasesIcon'
import StoreIcon from '@/assets/icon/StoreIcon'
import UserIcon from '@/assets/icon/UserIcon'
import { FC } from 'react'
import Profile from '../profile/Profile'
import UsersIcon from '@/assets/icon/UsersIcon'
import SettingsProducts from '../products/SettingsProducts'
import CreateProduct from '../create-product/CreateProduct'
import StarLk from '@/assets/icon/StarLk'

type TSettingsBarList = {
	path: string
	label: string
	icon: FC
	component?: FC
	isShow: boolean
}
export const settingBarUserList: TSettingsBarList[] = [
	{ label: 'Уведомления', icon: NotificationIcon, path: 'notification', isShow: true },
	{ label: 'Мои покупки', icon: PurchasesIcon, path: 'purchases', isShow: true },
	{ label: 'Избранное', icon: StarLk, path: 'favorites', isShow: true },
	{ label: 'Профиль', icon: UserIcon, path: 'profile', component: Profile, isShow: true }
]

export const settingBarSellerList: TSettingsBarList[] = [
	{ label: 'Магазин', icon: StoreIcon, path: 'shop', isShow: true },
	{ label: 'Заказы', icon: OrderIcon, path: 'orders', isShow: true },
	{
		label: 'Товары',
		icon: ProductsIcon,
		path: 'products',
		component: SettingsProducts,
		isShow: true
	},
	{ label: 'Участники', icon: UsersIcon, path: 'participant', isShow: true },
	{
		label: 'Создать товар',
		icon: UsersIcon,
		path: 'create-product',
		isShow: false,
		component: CreateProduct
	}
]
