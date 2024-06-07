'use client'
import { Dispatch, FC, SetStateAction, useState } from 'react'
import styles from './editorTable.module.scss'
import { defaultProducts } from '@/components/screens/home/card/defaultProducts'
import EditSvg from '@/assets/icon/edit.svg'
import SortArrow from '@/assets/icon/sortArrow.svg'
import cn from 'clsx'
import { IProduct } from '@/types/product.type'
import { TIsEdit } from '../useEditor'

type TEditorTableProps = {
	setEdit: Dispatch<SetStateAction<TIsEdit>>
}
const EditorTable: FC<TEditorTableProps> = ({ setEdit }) => {
	const [sorted, setSorted] = useState<boolean>(false)
	const [products, setProducts] = useState<IProduct[]>([...defaultProducts])
	const sortHandler = () => {
		if (sorted) {
			setProducts([...defaultProducts.sort((a, b) => +a.price - +b.price).reverse()])
			setSorted(!sorted)
		} else {
			setProducts([...defaultProducts.sort((a, b) => +a.price - +b.price)])
			setSorted(!sorted)
		}
	}
	return (
		<>
			<h3 className='text-text-xl mb-6 mt-[70px]'>Список всех товаров</h3>
			<div className={styles.table__header}>
				<div className={styles.table__column}>Категория</div>
				<div className={styles.table__column}>Вид</div>
				<div className={styles.table__column}>Описание</div>
				<button
					onClick={sortHandler}
					type='button'
					className={cn(styles.table__column, styles.sort)}
				>
					<p>Стоимость</p>
					<p>
						<SortArrow />
					</p>
				</button>
				<div className={styles.table__column}></div>
			</div>
			<div className={styles.product__wrapper}>
				{products
					? products.map(el => (
							<div key={el.id} className={styles.product__column}>
								<p>{el.category}</p>
								<p>{el.category}</p>
								<div className={styles.product__info}>
									<div className='w-[45px] h-[45px] mr-4'>
										<img className='image-min' src={el.imagePath} alt={el.name} />
									</div>
									<div className={styles.product__name}>
										<h4>{el.name}</h4>
										<p>Подписка на 1 год</p>
									</div>
								</div>
								<div className={styles.product__price}>
									<h4>{el.price} ₽</h4>
									<p>Цена за 1 штуку</p>
								</div>
								<button
									onClick={() => setEdit({ isShow: true, product: el })}
									type='button'
									className={styles.product__edit}
								>
									<EditSvg />
								</button>
							</div>
					  ))
					: 'Вы не загрузили ни одного товара'}
			</div>
		</>
	)
}

export default EditorTable
