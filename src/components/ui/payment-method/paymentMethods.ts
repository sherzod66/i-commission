import { CSSProperties } from 'react'

type TPaymentMethod = {
	id: number
	value: EnumPayment
	label: string
	description: string
	imagePath: string[]
	size: string
	design: CSSProperties
	designSecond?: CSSProperties
}

export enum EnumPayment {
	'BALANCE' = 'balance',
	'BANK_CARD' = 'bankCard',
	'CRYPTOCURRENCY' = 'cryptocurrency'
}

export const paymentMethodList: TPaymentMethod[] = [
	{
		id: 0,
		imagePath: ['/payment-image/grayCard.png', '/payment-image/greenCard.png'],
		value: EnumPayment.BANK_CARD,
		description: 'Безопасная оплата любой русской картой',
		label: 'Банковская карта',
		size: '39%',
		design: {
			position: 'absolute',
			left: '-60px',
			top: '0px'
		},
		designSecond: {
			position: 'absolute',
			left: '0px',
			top: '22px',
			zIndex: 1
		}
	},
	{
		id: 1,
		imagePath: ['/payment-image/cryptocurrency.png'],
		value: EnumPayment.CRYPTOCURRENCY,
		description: 'Быстрая оплата удобной вам криптовалютой',
		label: 'Криптоваютой',
		size: '39%',
		design: {
			position: 'absolute',
			top: '10px',
			zIndex: 0
		}
	},
	{
		id: 2,
		imagePath: ['/payment-image/balanceCard.png'],
		value: EnumPayment.BALANCE,
		description: 'Оплата балансом',
		label: 'С Баланса',
		size: '18%',
		design: {
			position: 'absolute',
			left: '-70px',
			zIndex: 0
		}
	}
]
