import MainSetting from '@/components/screens/settings/main/MainSetting'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'I commision | Настройки'
}

export default function SettingsPage() {
	return <MainSetting />
}
