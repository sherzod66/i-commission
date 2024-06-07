import { authRoot } from '@/routes/authRoute'

type Props = {
	params: { id: string }
}
export default async function AuthPage({ params }: Props) {
	return (
		<>
			{authRoot.map(el => {
				if (el.id === params.id) return <el.component />
				else return ''
			})}
		</>
	)
}
