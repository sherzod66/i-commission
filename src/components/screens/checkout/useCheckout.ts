import { EnumPayment } from '@/components/ui/payment-method/paymentMethods'
import { useMemo, useState } from 'react'

export const useCheckout = () => {
	const [method, setMethod] = useState<EnumPayment | null>(null)

	const changeMethod = (v: EnumPayment) => setMethod(v)

	return useMemo(() => ({ method, changeMethod }), [method])
}
