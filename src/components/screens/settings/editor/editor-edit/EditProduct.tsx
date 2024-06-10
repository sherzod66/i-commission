'use client'
import { ChangeEvent, Dispatch, DragEvent, FC, SetStateAction, useState } from 'react'
import styles from '../add-product/addProduct.module.scss'
import { LeftOutlined } from '@ant-design/icons'
import cn from 'clsx'
import { Select } from 'antd'
import { fileReader } from '@/utils/fileReader'
import Dragger from '@/components/ui/dragger/Dragger'
import Loader from '@/components/ui/loader/Loader'
import { useEditProduct } from './useEditProduct'
import { TIsEdit } from '../useEditor'

type TEditProductProps = {
	setIsEdit: Dispatch<SetStateAction<TIsEdit>>
	editProduct: TIsEdit
}
const EditProduct: FC<TEditProductProps> = ({ setIsEdit, editProduct }) => {
	const {
		delCoverImage,
		dragDropHandler,
		dragLeaveHandler,
		dragStarHandler,
		inputImageHandler,
		onChangeBgHandler,
		avatar,
		isDragger,
		handleChange,
		product
	} = useEditProduct(editProduct)
	return (
		<div className={styles.add}>
			<div className={styles.add__column}>
				<div className={styles.add__head}>
					<button onClick={() => setIsEdit(prev => ({ ...prev, isShow: false }))} type='button'>
						<LeftOutlined />
					</button>
					<h2 className='text-text-xl mb-6'>Редактирование товара</h2>
				</div>
				<form>
					<div className={styles.add__row}>
						<div className={styles.add__input_column}>
							<p>Категория</p>
							<Select
								onChange={v => handleChange<string>('category', v)}
								style={{ width: '100%' }}
							/>
						</div>
						<div className={styles.add__input_column}>
							<p>Вид</p>
							<Select onChange={v => handleChange<string>('type', v)} style={{ width: '100%' }} />
						</div>
					</div>
					<h2 className='text-text-xl mt-11 mb-6'>Что получит покупатель</h2>
					<div className={styles.add__row}>
						<div className={styles.add__input_column}>
							<p>Логин</p>
							<input
								value={product.login}
								onChange={e => handleChange<string>('login', e.target.value)}
								type='text'
								placeholder='Укажите логин'
							/>
						</div>
						<div className={styles.add__input_column}>
							<p>Пароль</p>
							<input
								value={product.password}
								onChange={e => handleChange<string>('password', e.target.value)}
								type='text'
								placeholder='Укажите пароль'
							/>
						</div>
					</div>
					<h2 className='text-text-xl mt-11 mb-6'>Информация о товаре</h2>
					<div className={styles.add__row}>
						<div className={styles.add__input_column}>
							<p>Заголовок</p>
							<input
								value={product.name}
								onChange={e => handleChange<string>('name', e.target.value)}
								type='text'
								placeholder='Название товара'
							/>
						</div>
						<div className={styles.add__input_column}>
							<p>Описание</p>
							<input
								value={product.description}
								onChange={e => handleChange<string>('description', e.target.value)}
								type='text'
								placeholder='Короткое описание товара'
							/>
						</div>
						<div className={styles.add__input_column}>
							<p>Количество</p>
							<input
								value={product.quantity}
								onChange={e => handleChange<string>('quantity', e.target.value)}
								type='number'
								placeholder='Количество товара'
							/>
						</div>
						<div className={styles.add__input_column}>
							<p>Стоимость</p>
							<input
								value={product.price}
								onChange={e => handleChange<string>('price', e.target.value)}
								type='number'
								placeholder='За 1 единицу'
							/>
						</div>
					</div>
					<button type='submit' className={styles.add__button}>
						Изменить
						{/* <Loader /> */}
					</button>
				</form>
			</div>
			<div className={styles.add__column_second}>
				<div className={styles.row}>
					<div className={styles.image}>
						<img src={avatar ? fileReader(avatar) : product.imagePath} alt='avatar' />
					</div>
					<div className={styles.row__column}>
						<h4>Изменить фотографию</h4>
						<div className={styles.bg_header_active}>
							<button onClick={delCoverImage} type='button'>
								Удалить
							</button>
							<button onClick={onChangeBgHandler} type='button'>
								Загрузить
							</button>
						</div>
					</div>
				</div>
				<Dragger
					dragDropHandler={dragDropHandler}
					dragLeaveHandler={dragLeaveHandler}
					dragStarHandler={dragStarHandler}
					inputImageHandler={inputImageHandler}
					isDragger={isDragger}
					description='(Макс. размер 200x200px)'
					label='product-preview'
				/>
				{avatar && (
					<img
						id='avatar'
						className='absolute left-0 top-0 opacity-0 invisible'
						src={avatar && fileReader(avatar)}
						alt=''
					/>
				)}
			</div>
		</div>
	)
}

export default EditProduct
