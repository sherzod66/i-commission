'use client'
import { FC, HTMLInputTypeAttribute } from 'react'
import { FieldErrors, UseFormRegister, UseFormReset } from 'react-hook-form'
import { TLoginInput } from '../../screens/auth/login/useLogin'
import styles from './filed.module.scss'

type TFiledProps = {
	type: HTMLInputTypeAttribute
	name: string
	register: UseFormRegister<TLoginInput>
	errors: FieldErrors<TLoginInput>
	requiredD: boolean | string
	rest: UseFormReset<TLoginInput>
	placeholder: string
	filed: keyof TLoginInput
	maxLength?: number
}

const Filed: FC<TFiledProps> = ({
	name,
	register,
	type,
	errors,
	requiredD,
	filed,
	placeholder,
	rest,
	maxLength
}) => {
	return (
		<div className={styles.input_wrapper}>
			<input
				type={type}
				className={styles.input_default}
				{...register(filed, { required: requiredD, maxLength })}
				placeholder={placeholder}
				{...rest}
				name={name}
				aria-invalid={errors[filed] ? 'true' : 'false'}
			/>
			{errors[filed] && (
				<p className={styles.error} role='alert'>
					{errors[filed]?.message}
				</p>
			)}
		</div>
	)
}

export default Filed
