import AuthLoginPass from '@/components/screens/auth/login-with-pass/AuthLoginPass'
import Recovery from '@/components/screens/auth/recovery/Recovery'
import AuthRegisterWrapper from '@/components/screens/auth/register/AuthRegisterWrapper'

import { FC } from 'react'

export type TAuthRoute = {
	id: 'register' | 'activate' | 'password-reset' | 'login-with-password'
	component: FC
}

export const authRoot: TAuthRoute[] = [
	{ id: 'register', component: AuthRegisterWrapper },
	{ id: 'password-reset', component: Recovery },
	{ id: 'login-with-password', component: AuthLoginPass }
]
