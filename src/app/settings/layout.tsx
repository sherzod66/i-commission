import Layout from '@/components/layout/Layout'
import styles from './settings.module.scss'
import SettingsBar from '@/components/screens/settings/settings-bar/SettingsBar'

export default function SettingsLayout({ children }: { children: React.ReactNode }) {
	return (
		<Layout isShop={null}>
			<main className={styles.settings}>
				<div className={styles.settings__container}>
					<div className={styles.row__wrapper}>
						<nav className={styles.nav__bar}>
							<SettingsBar />
						</nav>
						{children}
					</div>
				</div>
			</main>
		</Layout>
	)
}
