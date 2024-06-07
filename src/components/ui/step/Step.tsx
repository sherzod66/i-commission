import { FC } from 'react'
import styles from './step.module.scss'

type TStepProps = {
	title: string
	description: string
}
const Step: FC<TStepProps> = ({ description, title }) => {
	return (
		<>
			<h2 className={styles.title}>{title}</h2>
			<p className={styles.description}>{description}</p>
		</>
	)
}

export default Step
