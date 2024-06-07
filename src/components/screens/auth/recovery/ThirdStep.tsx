import { FC } from 'react'
import styles from './recovery.module.scss'
import { TResetProps } from './recoveryType'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import Step from '@/components/ui/step/Step'

const ThirdStep: FC<TResetProps> = ({ setStep, step }) => {
	const {
		register,
		handleSubmit,
		watch,
		reset,
		formState: { errors }
	} = useForm<{ password: string }>()
	const navigate = useRouter()
	const onSubmit: SubmitHandler<{ password: string }> = data => {
		console.log(data)
		navigate.push('/auth')
	}
	return (
		<div className='animate-fade'>
			<Step description='Придумайте новый пароль для вашего аккаунта' title='3 Шаг' />
			<form onSubmit={handleSubmit(onSubmit)}>
				<div>
					<input
						{...register('password', { required: 'Введите пароль' })}
						placeholder='Пароль'
						className='input-default block'
						name='password'
						type='password'
					/>
					{errors.password && (
						<p className='text-orange-900 my-1 animate-fade' role='alert'>
							{errors.password?.message}
						</p>
					)}
				</div>
				<button className='btn-primary rounded-12xl mt-6 transition-colors' type='submit'>
					Далее
				</button>
				<button
					className='btn-primary-opacity rounded-12xl mt-2 transition-colors'
					type='button'
					onClick={() => setStep(0)}
				>
					Назад
				</button>
			</form>
		</div>
	)
}

export default ThirdStep
