import { FC } from 'react'
import styles from './auth2.0.module.scss'
import { socials } from './socials'
import Image from 'next/image'

const Auth2: FC = () => {
	return (
		<div className={styles.social}>
			<p className={styles.is_social}>Или войдите с помощью</p>
			<div className={styles.socials}>
				{socials.map(item => (
					<button key={item.name} className={styles.social_item}>
						<item.imagePath />
					</button>
				))}
			</div>
		</div>
	)
}

export default Auth2
