'use client'
import { FC } from 'react'
import { useLogin } from './useLogin'
import styles from './login.module.scss'
import Filed from '@/components/ui/Filed/Filed'
import Link from 'next/link'
import Auth2 from '../auth2.0/Auth2.0'
import { useRouter } from 'next/navigation'
import AuthActivate from '../activate/AuthActivate'

const AuthLogin: FC = () => {
	const { errors, handleSubmit, onSubmit, register, watch, reset, page, setPage } = useLogin()
	const router = useRouter()
	return (
		<>
			{page ? (
				<AuthActivate setPage={setPage} />
			) : (
				<>
					<h1 className={styles.title}>Войдите в свой аккаунт</h1>
					<p className={styles.sub_title}>
						Введите свои учетные данные для доступа к вашей учетнойй записи
					</p>
					<form className='w-full' onSubmit={handleSubmit(onSubmit)}>
						<Filed
							errors={errors}
							filed='email'
							name='email'
							placeholder='Ваш логин'
							register={register}
							requiredD='Вы не ввели почту'
							rest={reset}
							type='email'
						/>
						<Filed
							errors={errors}
							filed='password'
							name='password'
							placeholder='Ваш пароль'
							register={register}
							requiredD='Вы не ввели пароль'
							rest={reset}
							type='password'
						/>
						<Link className={styles.reset} href={'/auth/password-reset'}>
							Забыли пароль?
						</Link>
						<button className={styles.button_login} type='submit'>
							Войти
						</button>
						<button
							className={styles.button_register}
							type='button'
							onClick={() => router.push('/auth/register')}
						>
							Регистрация
						</button>
					</form>
					<Auth2 />
				</>
			)}
		</>
	)
}

export default AuthLogin
