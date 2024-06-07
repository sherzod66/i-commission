import { Dispatch, FC, SetStateAction } from 'react'
import cn from 'clsx'
import styles from './switch.module.scss'

type TSwitchProps = {
	sw: boolean
	setSw: Dispatch<SetStateAction<boolean>>
	swFirst: string
	swSecond: string
	fixed: boolean
}
const Switch: FC<TSwitchProps> = ({ setSw, sw, swFirst, swSecond, fixed }) => {
	return (
		<div
			className={cn(styles.second, {
				[styles.orange]: sw
			})}
		>
			<button
				type='button'
				onClick={() => setSw(true)}
				className={cn(styles.filter__button, { [styles.white]: sw }, { [styles.fixed]: fixed })}
			>
				{swFirst}
			</button>
			<button
				type='button'
				onClick={() => setSw(false)}
				className={cn(styles.filter__button, { [styles.white]: !sw }, { [styles.fixed]: fixed })}
			>
				{swSecond}
			</button>
		</div>
	)
}

export default Switch
