'use client'
import { FC } from 'react'
import { useRecovery } from './useRecovery'
import styles from './recovery.module.scss'
import FirstStep from './FirstStep'
import SecondStep from './SecondStep'
import AuthExpired from '../activate/AuthExpired'
import AuthActivate from '../activate/AuthActivate'

const Recovery: FC = () => {
	const { setStep, step } = useRecovery()
	return (
		<>
			{step === 0 && (
				<>
					<h1 className={styles.title}>Восстановление</h1>
					<p className={styles.sub_title}>Следуйте данным шагам</p>
				</>
			)}
			{step === 0 && <FirstStep setStep={setStep} step={step} />}
			{step === 1 && <AuthActivate />}
			{step === 2 && <AuthExpired />}
		</>
	)
}

export default Recovery
