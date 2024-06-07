import { FC } from 'react'
import styles from './recovery.module.scss'
import { TResetProps } from './recoveryType'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import Step from '@/components/ui/step/Step'

const SecondStep: FC<TResetProps> = ({ setStep, step }) => {
	const {
		register,
		handleSubmit,
		watch,
		reset,
		formState: { errors }
	} = useForm<{ key: string }>()
	const navigate = useRouter()
	const onSubmit: SubmitHandler<{ key: string }> = data => {
		console.log(data)
		setStep(prev => prev + 1)
	}
	return (
		<div className='animate-fade'>
			<Step description='Введите код который мы выслали на указанную вами почту:' title='2 Шаг' />
			<form onSubmit={handleSubmit(onSubmit)}>
				<div>
					<input
						{...register('key', { required: 'Введите код подтверждения' })}
						placeholder='Код подтверждения'
						className='input-default block'
						type='number'
					/>
					{errors.key && (
						<p className='text-orange-900 my-1 animate-fade' role='alert'>
							{errors.key?.message}
						</p>
					)}
				</div>
				<button className='btn-primary rounded-12xl mt-6 transition-colors' type='submit'>
					Далее
				</button>
				<button
					className='btn-primary-opacity rounded-12xl mt-2 transition-colors'
					type='button'
					onClick={() => setStep(prev => prev - 1)}
				>
					Назад
				</button>
			</form>
		</div>
	)
}

export default SecondStep
