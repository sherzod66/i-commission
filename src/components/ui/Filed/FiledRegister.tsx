'use client'
import { FC, HTMLInputTypeAttribute } from 'react'
import { FieldErrors, UseFormRegister, UseFormReset } from 'react-hook-form'
import styles from './filed.module.scss'
import { TRegisterInput } from '@/components/screens/auth/register/useRegister'

type TFiledProps = {
	type: HTMLInputTypeAttribute
	name: string
	register: UseFormRegister<TRegisterInput>
	errors: FieldErrors<TRegisterInput>
	requiredD: boolean | string
	rest: UseFormReset<TRegisterInput>
	placeholder: string
	filed: keyof TRegisterInput
	maxLength?: number
}

const FiledRegister: FC<TFiledProps> = ({
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

export default FiledRegister
