'use client'
import { FC, useState } from 'react'
import AuthRegister from './AuthRegister'
import AuthActivate from '../activate/AuthActivate'

const AuthRegisterWrapper: FC = () => {
	const [page, setPage] = useState<number>(0)
	return <>{page ? <AuthActivate setPage={setPage} /> : <AuthRegister setPage={setPage} />}</>
}

export default AuthRegisterWrapper
