'use client'
import { FC } from 'react'
import { useCreateProduct } from './useCreateProduct'
import styles from './createProduct.module.scss'
import ProductTypeSelect from './product-type/ProductTypeSelect'
import { EnumProductTypeName } from '@/types/product.type'
import DefaultProduct from './default-product/DefaultProduct'
import ConfigurableProduct from './configurable-product/ConfigurableProduct'

const CreateProduct: FC = () => {
	const { productType, setProductType } = useCreateProduct()
	return (
		<main className={styles.product}>
			{productType === null && <ProductTypeSelect setType={setProductType} />}
			{productType === EnumProductTypeName.createActivationCodeProduct && (
				<DefaultProduct setType={setProductType} />
			)}
			{productType === EnumProductTypeName.createConfigurableProduct && (
				<ConfigurableProduct setType={setProductType} />
			)}
		</main>
	)
}

export default CreateProduct
