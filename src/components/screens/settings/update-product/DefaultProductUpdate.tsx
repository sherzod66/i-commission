'use client'
import { FC } from 'react'
import styles from '../create-product/default-product/defaultP.module.scss'
import cn from 'clsx'
import { Controller } from 'react-hook-form'
import { Select, Skeleton } from 'antd'
import Loader from '@/components/ui/loader/Loader'
import { cleanNumber, formatNumberForDisplay } from '@/utils/formatPrice'
import ProductImagePicker from '../create-product/product-image/ProductImagePicker'
import { useDefaultUpdate } from './useDefaultUpdate'

const DefaultProductUpdate: FC = () => {
	const {
		errors,
		handleSubmit,
		onSubmit,
		register,
		categorySelectOptions,
		control,
		uploadLoading,
		loading,
		imageUrl,
		setImageUrl,
		getCategoryOption,
		productLoading
	} = useDefaultUpdate()
	return (
		<>
			{productLoading && (
				<div className='w-full h-full bg-white rounded-6xl p-6'>
					<Skeleton
						loading={productLoading}
						active
						paragraph={{ rows: 25, width: '100%' }}
						title={false}
					/>
				</div>
			)}
			{!productLoading && (
				<>
					<div className={styles.first__column}>
						<h4 className={styles.title}>Основная информация</h4>
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className={styles.input__wrapper}>
								<label htmlFor='product-name'>Название товара</label>
								<input
									{...register('displayName', { required: 'Вы забыли написать название товара' })}
									id='product-name'
									placeholder='Название'
									type='text'
								/>
								{errors.displayName && (
									<p className={styles.error__alert} role='alert'>
										{errors.displayName?.message}
									</p>
								)}
							</div>
							<div className={styles.input__wrapper}>
								<label htmlFor='product-description'>Описание товара</label>
								<textarea
									placeholder='Описание должно содержать не более 250 символов.'
									{...register('description', {
										required: 'Вы забыли написать описание товара',
										maxLength: 250
									})}
									id='product-description'
								/>
								{errors.description && (
									<p className={styles.error__alert} role='alert'>
										{errors.description?.message}
									</p>
								)}
							</div>
							<div className={cn(styles.input__wrapper, styles.min)}>
								<label htmlFor='product-price'>Стоимость товара за единицу</label>
								<Controller
									name='price'
									control={control}
									rules={{
										required: 'Вы забыли написать стоимость товара',
										pattern: {
											value: /^[0-9]+$/,
											message: 'Только числа'
										}
									}}
									render={({ field: { onChange, onBlur, value } }) => (
										<input
											value={formatNumberForDisplay(String(value))} // Отображаем отформатированное значение
											onChange={e => {
												const cleanedValue = cleanNumber(e.target.value) // Убираем пробелы
												onChange(+cleanedValue) // Сохраняем чистое число в state
											}}
											id='product-price'
											placeholder='мин. 49, макс. 39, 900  ₽'
											type='text'
											onBlur={onBlur} // Вызываем onBlur для корректной работы валидации
										/>
									)}
								/>
								<span className='absolute right-3 top-[43px] text-text-lg'>₽</span>
								{errors.price && (
									<p className={styles.error__alert} role='alert'>
										{errors.price?.message}
									</p>
								)}
							</div>
							<div className={styles.select__wrapper}>
								<Controller
									name='categoryId'
									control={control}
									rules={{ required: 'Вы не выбрали категорий' }}
									render={({ field }) => (
										<div className={styles.select__column}>
											<label htmlFor='select-category'>Категория</label>
											<Select
												id='select-category'
												options={categorySelectOptions}
												value={getCategoryOption()}
												style={{ width: '100%' }}
												onChange={(e, options) => field.onChange((options as { id: string }).id)}
											/>
											{errors.categoryId && (
												<p className={styles.error__alert} role='alert'>
													{errors.categoryId?.message}
												</p>
											)}
										</div>
									)}
								/>
							</div>
							<div className={styles.input__wrapper}>
								<label htmlFor='product-instruction'>Инструкция для пользователя</label>
								<textarea
									placeholder='Опишите что пользователь должен сделать после покупки'
									{...register('usageInstruction', {
										required: false
									})}
									id='product-instruction'
								/>
								{errors.description && (
									<p className={styles.error__alert} role='alert'>
										{errors.description?.message}
									</p>
								)}
							</div>
							<div className={styles.buttons__actions}>
								<button type='button' className={styles.cancel}>
									Отменить
								</button>
								<div className={styles.create__button}>
									{uploadLoading || loading ? (
										<Loader />
									) : (
										<button
											disabled={uploadLoading || loading}
											type='submit'
											className={styles.create}
										>
											Редактировать товар
										</button>
									)}
								</div>
							</div>
						</form>
					</div>
					<div className={styles.second__column}>
						<div className={styles.product__image}>
							<ProductImagePicker control={control} imageUrl={imageUrl} setImageUrl={setImageUrl} />
						</div>
						<div className={styles.product__info}>
							<h4 className={styles.title}>Правила</h4>
							{rules.map((item, index) => (
								<p key={index} className={cn(styles.text, { [styles.subtitle]: item.subTitle })}>
									{item.text}
								</p>
							))}
						</div>
					</div>
				</>
			)}
		</>
	)
}

export default DefaultProductUpdate

const rules: { subTitle: boolean; text: string }[] = [
	{
		subTitle: false,
		text: 'Перед отправкой товара на рассмотрение, пожалуйста ознакомьтесь с данными правилами.'
	},
	{ subTitle: true, text: 'Обложка товара:' },
	{
		subTitle: false,
		text: ' - Обложка должна быть расширением 16х9. Минимальный размер обложки 512х1024px, максимальный размер 2048х4096px. Изображение может иметь илюстративный характер но должно относится с товару. На обложке НЕ могут быть указаны ссылки на соц.сети, теги, ники и личные данные.'
	},
	{ subTitle: true, text: 'Файлы:' },
	{
		subTitle: false,
		text: '- Загружаемый файл формата .txt не должен привышать 5мб, должен содержать в себе выдаваемый товар. Форматирование должно быть следующим: один товар - одна строчка.'
	}
]
