import type { Metadata } from 'next'
import Link from 'next/link'
import styles from '@/assets/styles/notFound.module.scss'
import Loading from './loading'
import Layout from '@/components/layout/Layout'
export const metadata: Metadata = {
	title: 'Not found',
	description: ''
}

function NotFound() {
	return (
		<Layout isShop={null}>
			<main className={styles.not_found}>
				<div className={styles.not_found__body}>
					<h1>404</h1>
					<p>Страница не найдена</p>
					<Link href={'/'}> На главную</Link>
				</div>
			</main>
		</Layout>
	)
}
export default NotFound
