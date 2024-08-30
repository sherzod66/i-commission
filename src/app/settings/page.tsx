import Layout from '@/components/layout/Layout'
import Settings from '@/components/screens/settings/Settings'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'I commision | Настройки'
}

export default function SettingsPage() {
	return (
		<Layout isShop={null}>
			<h1>hi</h1>
			{/* <Settings /> */}
		</Layout>
	)
}
