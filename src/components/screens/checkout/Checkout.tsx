'use client'
import { FC } from 'react'
import styles from './checkout.module.scss'
import { paymentMethodList } from '@/components/ui/payment-method/paymentMethods'
import PaymentMethod from '@/components/ui/payment-method/PaymentMethod'
import cn from 'clsx'
import { useCheckout } from './useCheckout'
import SalesmanItem from '@/components/ui/sellesman-item/SalesmanItem'

const Checkout: FC = () => {
	const { method, changeMethod } = useCheckout()
	return (
		<>
			<section className={styles.checkout}>
				<div className={styles.checkout__container}>
					<div className={styles.checkout__row}>
						<div className={styles.checkout__first_column}>
							<div className={styles.first__title}>Выберите способ оплаты</div>
							<div className={styles.first__payment_method}>
								{paymentMethodList.map(item => (
									<PaymentMethod
										key={item.id}
										description={item.description}
										design={item.design}
										imagePath={item.imagePath}
										label={item.label}
										size={item.size}
										value={item.value}
										designSecond={item.designSecond}
										selected={method === item.value}
										changeMethod={changeMethod}
									/>
								))}
							</div>
						</div>
						<div className={styles.checkout__second_column}>
							<h4 className={styles.second__title}>Краткий итог</h4>
							<div className={styles.result__detail}>
								<p className={styles.result__text}>Предварительно:</p>
								<p className={styles.result__text}>25, 060 ₽</p>
								<p className={styles.result__text}>Скидка</p>
								<p className={cn(styles.result__text, styles.discount)}>-1, 080 ₽</p>
								<p className={cn(styles.result__text, styles.bold)}>Всего</p>
								<p className={cn(styles.result__text, styles.bold)}>11, 030 ₽</p>
							</div>
							<button className={styles.btn_pay} type='button'>
								Оплатить
							</button>
						</div>
					</div>
				</div>
			</section>
			<section className={styles.product_view}>
				<div className={styles.product_view__container}>
					<div className={styles.product_view__row}>
						<div className={styles.product__first_column}>
							<div className={styles.first__title}>
								Товары к оплате <span>4</span>
							</div>
						</div>
						<div className={styles.product__second_column}></div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Checkout
