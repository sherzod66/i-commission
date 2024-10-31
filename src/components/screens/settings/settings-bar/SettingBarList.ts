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
import DefaultProductUpdate from '../update-product/DefaultProductUpdate'
import ConfigurableProductUpdate from '../update-product/configurable-update/ConfigurableProductUpdate'
import SettingShop from '../shop/SettingShop'
import Participants from '../participants/Participants'
import SettingFavorites from '../favorites/SettingFavorites'
import SettingNotification from '../notification/SettingNotification'
import MyPurchases from '../my-purshases/MyPurchases'
import SettingOrders from '../orders/SettingOrders'

type TSettingsBarList = {
	path: string
	label: string
	icon: FC
	component?: FC
	isShow: boolean
}
export const settingBarUserList: TSettingsBarList[] = [
	{
		label: 'Уведомления',
		icon: NotificationIcon,
		path: 'notification',
		isShow: true,
		component: SettingNotification
	},
	{
		label: 'Мои покупки',
		icon: PurchasesIcon,
		path: 'purchases',
		isShow: true,
		component: MyPurchases
	},
	{
		label: 'Избранное',
		icon: StarLk,
		path: 'favorites',
		isShow: true,
		component: SettingFavorites
	},
	{ label: 'Профиль', icon: UserIcon, path: 'profile', component: Profile, isShow: true }
]

export const settingBarSellerList: TSettingsBarList[] = [
	{ label: 'Магазин', icon: StoreIcon, path: 'shop', isShow: true, component: SettingShop },
	{ label: 'Заказы', icon: OrderIcon, path: 'orders', isShow: true, component: SettingOrders },
	{
		label: 'Товары',
		icon: ProductsIcon,
		path: 'products',
		component: SettingsProducts,
		isShow: true
	},
	{
		label: 'Участники',
		icon: UsersIcon,
		path: 'participant',
		isShow: true,
		component: Participants
	},
	{
		label: 'Создать товар',
		icon: UsersIcon,
		path: 'create-product',
		isShow: false,
		component: CreateProduct
	},
	{
		label: 'Обновление обычного товара',
		icon: UsersIcon,
		path: 'update-activation-product',
		isShow: false,
		component: DefaultProductUpdate
	},
	{
		label: 'Обновление товара с конфигурациями',
		icon: UsersIcon,
		path: 'update-configurable-product',
		isShow: false,
		component: ConfigurableProductUpdate
	}
]
