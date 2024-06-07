import { FC } from 'react'
import styles from './loader.module.scss'

const Loader: FC = () => {
	return (
		<div className={styles.loading}>
			<div className={styles.spinner}></div>
		</div>
	)
}

export default Loader
