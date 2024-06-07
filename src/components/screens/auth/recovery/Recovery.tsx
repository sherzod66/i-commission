'use client'
import { FC } from 'react'
import { useRecovery } from './useRecovery'
import styles from './recovery.module.scss'
import FirstStep from './FirstStep'
import SecondStep from './SecondStep'
import ThirdStep from './ThirdStep'

const Recovery: FC = () => {
	const { setStep, step } = useRecovery()
	return (
		<>
			<h1 className={styles.title}>Восстановление пароля</h1>
			<p className={styles.sub_title}>Следуйте данным шагам</p>
			{step === 0 && <FirstStep setStep={setStep} step={step} />}
			{step === 1 && <SecondStep setStep={setStep} step={step} />}
			{step === 2 && <ThirdStep setStep={setStep} step={step} />}
		</>
	)
}

export default Recovery
