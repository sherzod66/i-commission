'use client'
import { Dispatch, FC, SetStateAction } from 'react'
import Auth2 from '../auth2.0/Auth2.0'
import FiledRegister from '@/components/ui/Filed/FiledRegister'
import styles from './register.module.scss'
import { useRegister } from './useRegister'
import { useRouter } from 'next/navigation'

type TAuthRegister = {
	setPage: Dispatch<SetStateAction<number>>
}
const AuthRegister: FC<TAuthRegister> = ({ setPage }) => {
	const { errors, handleSubmit, onSubmit, register, reset, watch } = useRegister(setPage)
	const router = useRouter()
	return (
		<>
			<h1 className={styles.title}>Регистрация</h1>
			<p className={styles.sub_title}>
				Вы можете зарегистрироваться или войти с помощью соц. сетей
			</p>
			<form className='w-full' onSubmit={handleSubmit(onSubmit)}>
				<FiledRegister
					errors={errors}
					filed='name'
					name='name'
					placeholder='Имя или логин'
					register={register}
					requiredD='Введите логин или имя'
					rest={reset}
					type='text'
					maxLength={16}
				/>
				<FiledRegister
					errors={errors}
					filed='email'
					name='email'
					placeholder='Почта'
					register={register}
					requiredD='Введите почту'
					rest={reset}
					type='email'
				/>
				<FiledRegister
					errors={errors}
					filed='password'
					name='password'
					placeholder='Пароль'
					register={register}
					requiredD='Вы не ввели пароль'
					rest={reset}
					type='password'
				/>
				<div className='flex mb-6 px-4'>
					<input
						id='default-checkbox'
						type='checkbox'
						{...(register('checked'), { required: true })}
						value='A'
						name='checkbox'
					/>
					<label id='default-checkbox' className='ms-2 text-text-12 font-normal text-black-300'>
						С лицензионным соглашением, включая агентский договор, правилами сайтаознакомился,
						принимаю в полном объеме
					</label>
				</div>
				<button className={styles.button_login} type='submit'>
					Далее
				</button>
				<button className={styles.button_register} type='button' onClick={() => router.back()}>
					Назад
				</button>
			</form>
			<Auth2 />
		</>
	)
}

export default AuthRegister
