import { FC } from 'react'
import styles from './recovery.module.scss'
import { TResetProps } from './recoveryType'
import Step from '@/components/ui/step/Step'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'

const FirstStep: FC<TResetProps> = ({ setStep, step }) => {
	const {
		register,
		handleSubmit,
		watch,
		reset,
		formState: { errors }
	} = useForm<{ email: string }>()
	const navigate = useRouter()
	const onSubmit: SubmitHandler<{ email: string }> = data => {
		console.log(data)
		setStep(prev => prev + 1)
	}
	return (
		<div className='animate-fade'>
			<Step description='Введите почту указанную вами при регистрации' title='1 Шаг' />
			<form onSubmit={handleSubmit(onSubmit)}>
				<div>
					<input
						{...register('email', { required: 'Введите почту' })}
						placeholder='Введите почту'
						className='input-default block'
						type='email'
					/>
					{errors.email && (
						<p className='text-orange-900 my-1 animate-fade' role='alert'>
							{errors.email?.message}
						</p>
					)}
				</div>
				<button className='btn-primary rounded-12xl mt-6 transition-colors' type='submit'>
					Далее
				</button>
				<button
					className='btn-primary-opacity rounded-12xl mt-2 transition-colors'
					type='button'
					onClick={() => navigate.back()}
				>
					Назад
				</button>
			</form>
		</div>
	)
}

export default FirstStep
