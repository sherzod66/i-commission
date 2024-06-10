import Layout from '@/components/layout/Layout'
import styles from './chatLayout.module.scss'
import ChatFirst from '@/components/screens/chat/first-column/ChatFirst'
import { useParams } from 'next/navigation'

type Props = {
	children: React.ReactNode
}

export default function ChatLayout({ children }: Props) {
	return (
		<Layout isShop={null}>
			<main className={styles.chat}>
				<div className={styles.chat__container}>
					<div className={styles.chat__row}>
						<div className={styles.chat__firs}>
							<ChatFirst />
						</div>
						{children}
					</div>
				</div>
			</main>
		</Layout>
	)
}
