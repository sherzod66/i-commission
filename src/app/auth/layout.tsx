import styles from './auth.module.scss'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
	return (
		<main className={styles.auth}>
			<div className={styles.auth__content}>{children}</div>
		</main>
	)
}
