'use client'
import { FC, HTMLInputTypeAttribute, useRef, useState } from 'react'
import { FieldErrors, UseFormRegister, UseFormReset } from 'react-hook-form'
import styles from './filed.module.scss'
import cn from 'clsx'
import { TLoginInputPass } from '@/components/screens/auth/login-with-pass/useLoginPass'
import Image from 'next/image'

type TFiledProps = {
	type: HTMLInputTypeAttribute
	name: string
	register: UseFormRegister<TLoginInputPass>
	errors: FieldErrors<TLoginInputPass>
	requiredD: boolean | string
	rest: UseFormReset<TLoginInputPass>
	placeholder: string
	filed: keyof TLoginInputPass
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
	const [isShow, setIsShow] = useState<boolean>(false)
	const changeType = () => {
		setIsShow(!isShow)
	}
	return (
		<div className={cn(styles.input)}>
			{errors[filed] && (
				<p className={styles.error__alert} role='alert'>
					{errors[filed]?.message}
				</p>
			)}
			<div className={styles.input_wrapper}>
				<input
					type={isShow ? 'text' : type}
					className={cn(styles.input_default, { [styles.error]: errors[filed] })}
					{...register(filed, { required: requiredD, maxLength })}
					placeholder={placeholder}
					{...rest}
					name={name}
					aria-invalid={errors[filed] ? 'true' : 'false'}
				/>
				{type === 'password' && (
					<button onClick={changeType} type='button' className={styles.pass}>
						{isShow ? (
							<Image
								src={'/icon/Toggle=on.svg'}
								alt='icon'
								draggable={false}
								width={24}
								height={24}
							/>
						) : (
							<Image
								src={'/icon/Toggle=off.svg'}
								alt='icon'
								draggable={false}
								width={24}
								height={24}
							/>
						)}
					</button>
				)}
			</div>
		</div>
	)
}

export default Filed
