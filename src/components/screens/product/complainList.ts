import AuthorIcon from '@/assets/icon/AuthorIcon'
import ComplainBlackIcon from '@/assets/icon/ComplainBlackIcon'
import DrugsIcon from '@/assets/icon/DrugsIcon'
import PistolIcon from '@/assets/icon/PistolIcon'
import PornIcon from '@/assets/icon/PornIcon'
import { FC } from 'react'

type THeaderList = {
	id: string
	name: string
	icon: FC
}
export const complainList: THeaderList[] = [
	{
		icon: DrugsIcon,
		name: 'Наркотики',
		id: 'drugs'
	},
	{
		icon: PornIcon,
		id: 'porn',
		name: 'Порнография'
	},
	{
		icon: AuthorIcon,
		id: 'author',
		name: 'Авторсое право'
	},
	{
		icon: PistolIcon,
		id: 'pistol',
		name: 'Насилие'
	},
	{
		icon: ComplainBlackIcon,
		id: 'other',
		name: 'Другое'
	}
]
