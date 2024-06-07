import styles from '@/assets/styles/loader.module.scss'
export default function Loading() {
	return (
		<main className={styles.loader}>
			<div className={styles.animate}>
				<span className={styles.letter}>I</span>
				<span className={styles.letter}> </span>
				<span className={styles.letter}>c</span>
				<span className={styles.letter}>o</span>
				<span className={styles.letter}>m</span>
				<span className={styles.letter}>m</span>
				<span className={styles.letter}>s</span>
				<span className={styles.letter}>s</span>
				<span className={styles.letter}>i</span>
				<span className={styles.letter}>o</span>
				<span className={styles.letter}>n</span>
			</div>
			<p>Страница загружается...</p>
		</main>
	)
}
