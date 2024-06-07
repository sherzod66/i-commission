'use client'
import { Dispatch, FC, SetStateAction } from 'react'
import styles from './register.module.scss'

import { useRouter } from 'next/navigation'
import { useActivate } from './useActivate'

type TAuthActivate = {
	setPage: Dispatch<SetStateAction<number>>
}
const AuthActivate: FC<TAuthActivate> = ({ setPage }) => {
	const { errors, handleSubmit, onSubmit, register, reset, watch } = useActivate()
	const router = useRouter()
	return (
		<>
			<h1 className={styles.title}>Введите код</h1>
			<p className={styles.sub_title}>Мы выслали проверочный код на указанную вами почту</p>
			<form className='w-full' onSubmit={handleSubmit(onSubmit)}>
				<div className={styles.input_wrapper}>
					<input
						type='number'
						className={styles.input_default}
						{...register('key', { required: true /*maxLength: 6*/ })}
						placeholder={'Введите код из письма'}
						name='key'
						aria-invalid={errors.key ? 'true' : 'false'}
					/>
					{errors.key && (
						<p className={styles.error} role='alert'>
							Введите код из письма
						</p>
					)}
				</div>
				<button className={styles.button_login} type='submit'>
					Далее
				</button>
				<button
					className={styles.button_register}
					type='button'
					onClick={() => setPage(prev => prev - 1)}
				>
					Назад
				</button>
			</form>
		</>
	)
}

export default AuthActivate
