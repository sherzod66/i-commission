import type { Metadata } from 'next'
import { Onest } from 'next/font/google'
import './globals.scss'
import { ConfigProvider } from 'antd'
import { antTheme } from '@/assets/theme/antTheme'
import MessageWrapper from '@/components/ui/messages/MessageWrapper'
import { Providers } from './Providers'

const onest = Onest({
	subsets: ['latin', 'cyrillic'],
	weight: ['100', '200', '300', '400', '500', '600', '700'],
	variable: '--var-onest-sans'
})

export const metadata: Metadata = {
	title: 'I comission',
	description: 'Generated by create next app'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<body className={onest.variable}>
				<MessageWrapper />
				<ConfigProvider theme={antTheme}>
					<Providers>{children}</Providers>
				</ConfigProvider>
			</body>
		</html>
	)
}
