'use client'
import Layout from '@/components/layout/Layout'
import styles from './faqLayout.module.scss'
import { Segmented } from 'antd'
import Link from 'next/link'
import { useParams } from 'next/navigation'

type Props = {
	children: React.ReactNode
}

export default function FaqLayout({ children }: Props) {
	const params = useParams()
	return (
		<Layout isShop={null}>
			<main className={styles.faq}>
				<div className={styles.faq__container}>
					<h1 className='text-title font-medium mb-4'>Вопросы и ответы</h1>
					<div className={styles.segmented__wrapper}>
						<Segmented
							className='font-medium'
							value={params.id === 'seller' ? 'seller' : 'buyer'}
							options={[
								{
									label: (
										<Link className='block hover:text-black-900' href={'/faq'}>
											Покупателю
										</Link>
									),
									value: 'buyer'
								},
								{
									label: (
										<Link className='block hover:text-black-900' href={'/faq/seller'}>
											Продавцу
										</Link>
									),
									value: 'seller'
								}
							]}
							block
						/>
					</div>
					{children}
				</div>
			</main>
		</Layout>
	)
}
