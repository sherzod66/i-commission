import { SubmitHandler, useForm } from 'react-hook-form'

export type TActivate = {
	key: number
}
export const useActivate = () => {
	const {
		register,
		handleSubmit,
		watch,
		reset,
		formState: { errors }
	} = useForm<TActivate>()
	const onSubmit: SubmitHandler<TActivate> = data => console.log(data)

	return {
		register,
		handleSubmit,
		watch,
		errors,
		onSubmit,
		reset
	}
}
