import PaymentMethod from '@/components/ui/payment-method/PaymentMethod'
import { paymentMethodList } from '@/components/ui/payment-method/paymentMethods'

export default function PaymentPage() {
	return (
		<div className='flex w-full'>
			<h1>hh</h1>
			{/* {paymentMethodList.map(item => (
				<PaymentMethod
					key={item.id}
					description={item.description}
					imagePath={item.imagePath}
					label={item.label}
					size={item.size}
					value={item.value}
					design={item.design}
					designSecond={item.designSecond}
				/>
			))} */}
		</div>
	)
}
