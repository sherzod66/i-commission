import AuthLogin from '@/components/screens/auth/login/AuthLogin'
import { Metadata } from 'next'
import { FC } from 'react'

export const metadata: Metadata = {
	title: 'I commision | Вход в систему'
}

const page: FC = () => {
	return <AuthLogin />
}

export default page
