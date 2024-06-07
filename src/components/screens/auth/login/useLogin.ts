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
	const onSubmit: SubmitHandler<TLoginInput> = data => {
		console.log(data)
		setPage(prev => prev + 1)
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
