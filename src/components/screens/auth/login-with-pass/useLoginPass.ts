import { authService } from '@/services/auth/auth.service'
import { keycloackUrl } from '@/utils/constans'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

export type TLoginInputPass = {
	email: string
	password: string
}
export const useLoginPass = () => {
	const {
		register,
		handleSubmit,
		watch,
		reset,
		formState: { errors }
	} = useForm<TLoginInputPass>()
	const [page, setPage] = useState<number>(0)
	const onSubmit: SubmitHandler<TLoginInputPass> = async data => {
		try {
			await authService.main('login', {
				email: data.email,
				password: data.password
			})
			reset({ email: '', password: '' })
			setPage(prev => prev + 1)
		} catch (e) {
			console.error('Error:', e)
		}
	}

	return {
		register,
		handleSubmit,
		watch,
		errors,
		onSubmit,
		reset,
		page,
		setPage
	}
}
