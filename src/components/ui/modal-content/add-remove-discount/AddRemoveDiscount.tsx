'use client'
import { ChangeEvent, FC, FormEvent, useState } from 'react'
import styles from './discountModal.module.scss'
import Loader from '../../loader/Loader'
import { useMutation } from '@apollo/client'
import {
	UPDATE_DISCOUNT_ACTIVE_CODE,
	UPDATE_DISCOUNT_CONFIGURABLE
} from '@/services/product/products.service'
import { IProduct } from '@/types/product.type'
import { containsLetters, formatPrice } from '@/utils/formatPrice'
import { GET_SHOP_PRODUCTS } from '@/services/shop/shop.service'

const whatIsType = {
	ActivationCodeProduct: UPDATE_DISCOUNT_ACTIVE_CODE,
	ConfigurableProduct: UPDATE_DISCOUNT_CONFIGURABLE
}
type TAddRemoveDiscountProps = {
	product: IProduct
	close: () => void
}

const AddRemoveDiscount: FC<TAddRemoveDiscountProps> = ({ product, close }) => {
	const [discountValue, setDiscountValue] = useState<{ percent: number; price: number }>({
		percent: 0,
		price: 0
	})
	const [mutate, { loading }] = useMutation<
		IProduct,
		{ id: string; oldPrice: number | null; price: number }
	>(whatIsType[product.__typename], {
		refetchQueries: [GET_SHOP_PRODUCTS],
		onCompleted: () => close()
	})

	function changePrice(e: ChangeEvent<HTMLInputElement>) {
		const value = e.target.value
		if (!containsLetters(value)) {
			setDiscountValue({
				price: +value,
				percent: Math.round((+value / product.price) * 100)
			})
		}
	}
	function changePercent(e: ChangeEvent<HTMLInputElement>) {
		const value = e.target.value
		if (!containsLetters(value)) {
			setDiscountValue({
				price: Math.round((product.price * +value) / 100),
				percent: +value
			})
		}
	}

	const submit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (product.oldPrice) {
			mutate({
				variables: {
					id: product.id,
					oldPrice: null,
					price: product.oldPrice
				}
			})
		} else {
			if (discountValue.percent > 0 && discountValue.price > 0) {
				mutate({
					variables: {
						id: product.id,
						oldPrice: product.price,
						price: product.price - discountValue.price
					}
				})
			}
		}
	}

	return (
		<form onSubmit={submit}>
			<p className='text-text-sm text-black-300 leading-normal mb-3'>
				{product.oldPrice
					? 'При отмене скидки товар сразу возвращает оригинальную цену. При этом накладывавется небольшое пинальти чтобы предотвратить умышленное введение покупателей в заблуждение. Вы не сможете применять скидки к товарам 3 дней.'
					: 'Скидку можно применить спустя 7 дней после создания товара.'}
			</p>
			{!product.oldPrice && (
				<div className={styles.input__wrapper}>
					<div className={styles.input__column}>
						<label htmlFor='percent-input'>В процентах</label>
						<input
							id='percent-input'
							onChange={changePercent}
							value={discountValue.percent}
							type='text'
							placeholder='0'
						/>
						<span className='absolute right-3 top-[37px] text-text-lg'>%</span>
					</div>
					<div className={styles.input__column}>
						<label htmlFor='ruble-input'>В рублях</label>
						<input
							onChange={changePrice}
							id='ruble-input'
							value={discountValue.price}
							type='text'
							placeholder='0'
						/>
						<span className='absolute right-3 top-[37px] text-text-lg'>₽</span>
					</div>
				</div>
			)}
			<div className={styles.row__info}>
				<p className={styles.default__info}>Стоимость:</p>
				<p className={styles.default__info}>
					{formatPrice(product.oldPrice ? product.oldPrice : product.price)}
				</p>
			</div>
			<div className={styles.row__info}>
				<p className={styles.default__info}>Скидка:</p>
				{product.oldPrice ? (
					<p className={styles.discount__info}>
						-{Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}% (-
						{formatPrice(product.oldPrice - product.price)})
					</p>
				) : (
					<p className={styles.discount__info}>
						-{discountValue.percent}% (-{formatPrice(discountValue.price)})
					</p>
				)}
			</div>
			<div className={styles.row__info}>
				<p className={styles.final__price}>Итоговая цена:</p>
				<p className={styles.final__price}>{formatPrice(product.price - discountValue.price)}</p>
			</div>
			<p className='my-[32px] text-lg text-black-300'>
				Если вы хотите изменить общую цену товара то перейдите в настройки товара в столбце “Опции”.
			</p>
			<div className={styles.buttons__actions}>
				<button onClick={close} type='button' className={styles.cancel}>
					Отменить
				</button>
				<div className={styles.create__button}>
					{loading ? (
						<Loader />
					) : (
						<button disabled={loading} type='submit' className={styles.create}>
							{product.oldPrice ? 'Отменить скидку' : 'Сделать скидку'}
						</button>
					)}
				</div>
			</div>
		</form>
	)
}

export default AddRemoveDiscount
