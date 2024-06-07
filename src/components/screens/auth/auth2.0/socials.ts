import Vk from '@/assets/icon/vk.svg'
import Tg from '@/assets/icon/tg.svg'
import Yandex from '@/assets/icon/yandex.svg'
import Google from '@/assets/icon/google.svg'
import { FC } from 'react'
type TSocial = {
	imagePath: FC
	name: string
}

export const socials: TSocial[] = [
	{ imagePath: Vk, name: 'vk' },
	{ imagePath: Tg, name: 'tg' },
	{ imagePath: Yandex, name: 'yandex' },
	{ imagePath: Google, name: 'google' }
]
