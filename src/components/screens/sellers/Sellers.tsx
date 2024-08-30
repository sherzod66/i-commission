'use client'
import { FC } from 'react'
import Card from '../home/card/Card'
import { fakeSalesman } from '@/fake-data/fakeSalesman'
import { useSellers } from './useSellers'
import Filter from '@/components/ui/filter/Filter'

const Sellers: FC = () => {
	const { active, setActive } = useSellers()
	return (
		<>
			<h1>hi</h1>
			<Filter shop={null} active={active} setActive={setActive} />
			<Card title='C высшим рейтингом' isSellers={true} sellerData={fakeSalesman} />
			<Card title='Продавцы игр' isSellers={true} sellerData={fakeSalesman} />
		</>
	)
}

export default Sellers
