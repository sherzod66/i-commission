import { authService } from '@/services/auth/auth.service'
import { keycloackUrl } from '@/utils/constans'
import { useMemo, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

export type TLoginInput = {
	email: string
	password: string
}
export const useLogin = () => {
	const {
		register,
		handleSubmit,
		watch,
		reset,
		formState: { errors }
	} = useForm<TLoginInput>()
	const [page, setPage] = useState<number>(0)
	const onSubmit: SubmitHandler<TLoginInput> = async data => {
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
