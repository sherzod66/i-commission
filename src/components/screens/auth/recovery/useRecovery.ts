import { useMemo, useState } from 'react'

export const useRecovery = () => {
	const [step, setStep] = useState<number>(0)
	return useMemo(() => ({ step, setStep }), [step])
}
