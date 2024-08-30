import Layout from '@/components/layout/Layout'
import BalanceHeader from '@/components/screens/balance/balance-header/BalanceHeader'
import BalanceTable from '@/components/screens/balance/balance-table/BalanceTable'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'I commision | Баланс'
}

export default function BalancePage() {
	return (
		<Layout isShop={null}>
			<h1>hi</h1>
			{/* <BalanceHeader />
			<BalanceTable /> */}
		</Layout>
	)
}
