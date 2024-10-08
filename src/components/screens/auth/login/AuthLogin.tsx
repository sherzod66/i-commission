'use client'
import { FC } from 'react'
import { useLogin } from './useLogin'
import styles from './login.module.scss'
import Auth2 from '../auth2.0/Auth2.0'
import { useRouter } from 'next/navigation'
import AuthActivate from '../activate/AuthActivate'
import Image from 'next/image'
import cn from 'clsx'

const AuthLogin: FC = () => {
	const { errors, handleSubmit, onSubmit, register, watch, reset, page, setPage } = useLogin()
	const router = useRouter()

	return (
		<>
			{page ? (
				<AuthActivate setPage={setPage} />
			) : (
				<>
					<div className={styles.logo}>
						<Image draggable={false} src={'/logo/Logo.svg'} alt='Logo' width={117.25} height={98} />
					</div>

					<h1 className={styles.title}>Авторизация</h1>
					<p className={styles.sub_title}>
						Зарегистрируйтесь или войдите в аккаунт просто указав свою почту.
					</p>
					<form className='w-full' onSubmit={handleSubmit(onSubmit)}>
						<div className={cn(styles.input_wrapper)}>
							{errors['email'] && (
								<p className={styles.error__alert} role='alert'>
									{errors['email']?.message}
								</p>
							)}
							<input
								type='email'
								className={cn(styles.input_default, { [styles.error]: errors['email'] })}
								{...register('email', { required: 'Вы не ввели почту' })}
								placeholder={'Ваша почта'}
								name={'email'}
								aria-invalid={errors['email'] ? 'true' : 'false'}
							/>
						</div>
						<button className={styles.button_login} type='submit'>
							Авторизоваться с почтой
						</button>
						<button
							className={styles.button_register}
							type='button'
							onClick={() => router.push('/auth/login-with-password')}
						>
							Войти с помощью пароля
						</button>
					</form>
					<Auth2 />
				</>
			)}
		</>
	)
}

export default AuthLogin

// 'use client'
// import { FC } from 'react'
// import { useLogin } from './useLogin'
// import styles from './login.module.scss'
// import Filed from '@/components/ui/Filed/Filed'
// import Link from 'next/link'
// import Auth2 from '../auth2.0/Auth2.0'
// import { useRouter } from 'next/navigation'
// import AuthActivate from '../activate/AuthActivate'

// const AuthLogin: FC = () => {
// 	const { errors, handleSubmit, onSubmit, register, watch, reset, page, setPage } = useLogin()
// 	const router = useRouter()
// 	return (
// 		<>
// 			{page ? (
// 				<AuthActivate setPage={setPage} />
// 			) : (
// 				<>
// 					<h1 className={styles.title}>Войдите в свой аккаунт</h1>
// 					<p className={styles.sub_title}>
// 						Введите свои учетные данные для доступа к вашей учетнойй записи
// 					</p>
// 					<form className='w-full' onSubmit={handleSubmit(onSubmit)}>
// 						<Filed
// 							errors={errors}
// 							filed='email'
// 							name='email'
// 							placeholder='Ваш логин'
// 							register={register}
// 							requiredD='Вы не ввели почту'
// 							rest={reset}
// 							type='email'
// 						/>
// 						<Filed
// 							errors={errors}
// 							filed='password'
// 							name='password'
// 							placeholder='Ваш пароль'
// 							register={register}
// 							requiredD='Вы не ввели пароль'
// 							rest={reset}
// 							type='password'
// 						/>
// 						<Link className={styles.reset} href={'/auth/password-reset'}>
// 							Забыли пароль?
// 						</Link>
// 						<button className={styles.button_login} type='submit'>
// 							Войти
// 						</button>
// 						<button
// 							className={styles.button_register}
// 							type='button'
// 							onClick={() => router.push('/auth/register')}
// 						>
// 							Регистрация
// 						</button>
// 					</form>
// 					<Auth2 />
// 				</>
// 			)}
// 		</>
// 	)
// }

// export default AuthLogin
