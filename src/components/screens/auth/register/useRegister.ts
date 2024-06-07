import { Dispatch, SetStateAction, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

export type TRegisterInput = {
	name: string
	email: string
	password: string
	checked: boolean
}
export const useRegister = (setPage: Dispatch<SetStateAction<number>>) => {
	const {
		register,
		handleSubmit,
		watch,
		reset,
		formState: { errors }
	} = useForm<TRegisterInput>()
	const onSubmit: SubmitHandler<TRegisterInput> = data => {
		console.log(data)
		setPage(prev => prev + 1)
	}

	return {
		register,
		handleSubmit,
		watch,
		errors,
		onSubmit,
		reset
	}
}
