'use client'
import { Dispatch, FC, SetStateAction, useState } from 'react'
import styles from './productSelect.module.scss'
import { EnumProductTypeName } from '@/types/product.type'
import cn from 'clsx'
import { useRouter } from 'next/navigation'

type TProductTypeSelectProps = {
	setType: Dispatch<SetStateAction<EnumProductTypeName | null>>
}
const ProductTypeSelect: FC<TProductTypeSelectProps> = ({ setType }) => {
	const [productType, setProductType] = useState<EnumProductTypeName | null>(null)
	const navigate = useRouter()
	const onNext = () => {
		if (productType !== null) {
			setType(productType)
		} else {
			//
		}
	}
	return (
		<div className={styles.type}>
			<div className={styles.type__container}>
				<div className={styles.type__row}>
					<div
						className={cn(styles.type__column, {
							[styles.select]: productType === EnumProductTypeName.ActivationCodeProduct
						})}
						onClick={() => setProductType(EnumProductTypeName.ActivationCodeProduct)}
					>
						<div className={styles.type__image}>
							<img src='/image/createActivationCodeProduct.png' alt='image' />
						</div>
						<div className={styles.type__info}>
							<h3 className={styles.type__title}>Обычный товар</h3>
							<p className={styles.description}>
								Обычный товар. Выдается вручную либо в виде строки из текстового файла.
							</p>
						</div>
					</div>
					<div
						onClick={() => setProductType(EnumProductTypeName.ConfigurableProduct)}
						className={cn(styles.type__column, {
							[styles.select]: productType === EnumProductTypeName.ConfigurableProduct
						})}
					>
						<div className={styles.type__image}>
							<img src='/image/createConfigurableProduct.png' alt='image' />
						</div>
						<div className={styles.type__info}>
							<h3 className={styles.type__title}>Товар с конфигурацией</h3>
							<p className={styles.description}>
								Товары с конфигурацией имеют несколько настраиваемых вариаций товара. Товар выдается
								вручную.
							</p>
						</div>
					</div>
				</div>
				<div className={styles.type__buttons}>
					<button onClick={() => navigate.back()} type='button' className={styles.type__button}>
						Отмена
					</button>
					<button onClick={onNext} type='button' className={cn(styles.type__button, styles.orange)}>
						Далее
					</button>
				</div>
			</div>
		</div>
	)
}

export default ProductTypeSelect
