'use client'
import { Dispatch, FC, SetStateAction } from 'react'
import styles from '../../create-product/default-product/defaultP.module.scss'
import cn from 'clsx'
import { Controller } from 'react-hook-form'
import { Select, Skeleton } from 'antd'
import Loader from '@/components/ui/loader/Loader'
import { EnumProductTypeName } from '@/types/product.type'
import { configurationSelect, useConfigurableUpdate } from './useConfigurableUpdate'
import AddConfigurationIcon from '@/assets/icon/AddConfigurationIcon'
import SelectGroup from './configure-groups/SelectGroup'
import { cleanNumber, formatNumberForDisplay } from '@/utils/formatPrice'
import CheckboxGroup from './configure-groups/CheckboxGroup'
import NumberGroup from './configure-groups/NumberGroup'
import TextGroup from './configure-groups/TextGroup'
import ProductImagePicker from '../../create-product/product-image/ProductImagePicker'

const ConfigurableProductUpdate: FC = () => {
	const {
		errors,
		handleSubmit,
		onSubmit,
		register,
		categorySelectOptions,
		control,
		uploadLoading,
		loading,
		createMiddleEntity,
		checkboxValues,
		middleState,
		numberValues,
		orderGroup,
		selectValues,
		textValues,
		setMiddleValue,
		selectOnChange,
		setSelectValues,
		setCheckboxValues,
		setNumberValues,
		setTextValues,
		imageUrl,
		setImageUrl,
		getCategoryOption,
		productLoading
	} = useConfigurableUpdate()
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
											value: /^[0-9]*\.?[0-9]*$/,
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
							<div className={styles.configurations}>
								{orderGroup.map((item, index) => {
									const checkboxIndex = checkboxValues.findIndex(findItem => findItem.id === item)
									const selectIndex = selectValues.findIndex(findItem => findItem.id === item)
									const numberIndex = numberValues.findIndex(findItem => findItem.id === item)
									const textIndex = textValues.findIndex(findItem => findItem.id === item)
									const middleIndex = middleState.findIndex(findItem => findItem.id === item)
									if (checkboxIndex >= 0) {
										return (
											<CheckboxGroup
												key={item}
												CheckboxGroup={checkboxValues[checkboxIndex]}
												currentGroupIndex={checkboxIndex}
												groupOrderIndex={index}
												selectOnChange={selectOnChange}
												checkboxValues={checkboxValues}
												setCheckboxValues={setCheckboxValues}
											/>
										)
									}
									if (selectIndex >= 0) {
										return (
											<SelectGroup
												key={item}
												SelectGroup={selectValues[selectIndex]}
												groupOrderIndex={index}
												selectOnChange={selectOnChange}
												currentGroupIndex={selectIndex}
												setSelectValues={setSelectValues}
												selectValues={selectValues}
											/>
										)
									}
									if (numberIndex >= 0) {
										return (
											<NumberGroup
												key={item}
												NumberGroup={numberValues[numberIndex]}
												currentGroupIndex={numberIndex}
												groupOrderIndex={index}
												numberValues={numberValues}
												selectOnChange={selectOnChange}
												setNumberValues={setNumberValues}
											/>
										)
									}
									if (textIndex >= 0) {
										return (
											<TextGroup
												key={item}
												TextGroup={textValues[textIndex]}
												currentGroupIndex={textIndex}
												groupOrderIndex={index}
												selectOnChange={selectOnChange}
												setTextValues={setTextValues}
												textValues={textValues}
											/>
										)
									}
									if (middleIndex >= 0) {
										return (
											<div key={item} className={styles.configuration__item}>
												<h5 className={styles.configuration__title}>Конфигурация №{index + 1}</h5>
												<div className={styles.configuration__head}>
													<div className={styles.had__input}>
														<label htmlFor={`configuration-name-${item}`}>Название пункта</label>
														<input
															value={middleState[middleIndex].displayName}
															onChange={e => setMiddleValue(middleIndex, e, 'displayName')}
															id={`configuration-name-${item}`}
															placeholder='Название'
															type='text'
														/>
													</div>
													<div className={styles.head__type}>
														<label htmlFor={`configuration-type-${item}`}>Тип конфигурации</label>
														<Select
															style={{ width: '100%', height: '49px' }}
															options={configurationSelect}
															id={`configuration-type-${item}`}
															placeholder='Тип конфигурации'
															onChange={(value, option) =>
																selectOnChange(value, 'middle', middleIndex)
															}
														/>
													</div>
												</div>
											</div>
										)
									}
								})}
							</div>
							<button
								onClick={createMiddleEntity}
								type='button'
								className={styles.add__configuration}
							>
								<div className={styles.configuration__icon}>
									<AddConfigurationIcon />
								</div>
								<p className={styles.configuration__text}>Добавить конфигурацию</p>
							</button>
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

export default ConfigurableProductUpdate

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
	{ subTitle: true, text: 'Древо товаров:' },
	{
		subTitle: false,
		text: '- Тут должно быть достаточно подробно расписано что такое конфигурация и древо товаров и какая между ними разница (либо же для чего используется последнее).'
	},
	{ subTitle: true, text: 'Надбавочная стоимость:' },
	{
		subTitle: false,
		text: '- Опции могут иметь надбавочную стоисость относительно цены товара. Однако вы можете оставить поле пустим, либо со значением 0, тогда надбавочная стоимость не будет применена на этой опции товара.'
	}
]
