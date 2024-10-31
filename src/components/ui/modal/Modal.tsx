'use client'
import { CSSProperties, FC, MouseEvent } from 'react'
import styles from './modal.module.scss'
import CloseIcon from '@/assets/icon/CloseIcon'
import cn from 'clsx'
type TModalProps = {
	onClose: () => void
	isOpen: boolean
	children: React.ReactNode
	title: string
	description?: string
	close?: boolean
	titleStyle: CSSProperties
	contentWidth?: string
}

const Modal: FC<TModalProps> = ({
	children,
	isOpen,
	onClose,
	title,
	close,
	description,
	titleStyle,
	contentWidth = '500px'
}) => {
	return (
		<>
			{isOpen && (
				<dialog
					onClick={e => !(e.target as HTMLElement).closest('#dialog-modal') && onClose()}
					open={true}
					className={styles.dialog}
				>
					<div style={{ width: contentWidth }} id='dialog-modal' className={styles.dialog__body}>
						<div className={cn(styles.body__head, { [styles.close]: close })}>
							<h3 style={titleStyle} className={styles.head__title}>
								{title}
							</h3>
							{close && (
								<button onClick={onClose} className={styles.head__button} type='button'>
									<CloseIcon />
								</button>
							)}
						</div>
						{description && <h5 className={styles.head__description}>{description}</h5>}
						{children}
					</div>
				</dialog>
			)}
		</>
	)
}

export default Modal
