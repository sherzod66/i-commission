import { Dispatch, SetStateAction } from 'react'

export type TResetProps = {
	setStep: Dispatch<SetStateAction<number>>
	step: number
}
