import { FC } from 'react'

const PlusPlaceHolder: FC = () => {
	return (
		<svg width='45' height='45' viewBox='0 0 45 45' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<rect x='0.5' y='0.5' width='44' height='44' rx='9.5' stroke='#E3E3E3' />
			<path d='M23 13V33' stroke='#E3E3E3' stroke-width='2' stroke-linecap='round' />
			<path d='M33 23L13 23' stroke='#E3E3E3' stroke-width='2' stroke-linecap='round' />
		</svg>
	)
}

export default PlusPlaceHolder
