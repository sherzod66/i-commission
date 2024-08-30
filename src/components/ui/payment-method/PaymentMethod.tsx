import { CSSProperties, FC, Fragment } from 'react'
import { EnumPayment } from './paymentMethods'
import styles from './paymentMethod.module.scss'
type TPaymentProps = {
	value: EnumPayment
	label: string
	description: string
	imagePath: string[]
	size: string
	design: CSSProperties
	designSecond?: CSSProperties
}
const PaymentMethod: FC<TPaymentProps> = ({
	description,
	imagePath,
	label,
	size,
	value,
	design,
	designSecond
}) => {
	return (
		<div className={styles.item} style={{ flex: `0 1 ${size}` }}>
			<div className={styles.item__info}>
				<h4 className={styles.item__title}>{label}</h4>
				<p className={styles.item__description}>{description}</p>
			</div>
			<div className={styles.item__images}>
				{imagePath.map((image, index) => (
					<img
						key={index}
						style={index > 0 ? designSecond : design}
						draggable={false}
						src={image}
						alt='label'
					/>
				))}
			</div>
		</div>
	)
}

export default PaymentMethod
