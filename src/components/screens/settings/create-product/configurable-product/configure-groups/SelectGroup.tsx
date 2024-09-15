import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react'
import styles from './configureGroups.module.scss'
import { IConfigurationCheckbox, IConfigurationSelectGroup, TGroupType } from '@/types/product.type'
import { configurationSelect } from '../useConfigurableProduct'
import { Select } from 'antd'
import AddPlusCircle from '@/assets/icon/AddPlusCircle'
import DeleteIcon from '@/assets/icon/DeleteIcon'
import { generateId } from '@/utils/generateId'
import { cleanNumber, containsLetters, formatNumberForDisplay } from '@/utils/formatPrice'

type TSelectGroupProps = {
	SelectGroup: IConfigurationSelectGroup
	groupOrderIndex: number
	selectOnChange: (
		nextType: TGroupType,
		currentType: 'checkbox' | 'select' | 'text' | 'numbers' | 'middle',
		currentGroupIndex: number
	) => void
	currentGroupIndex: number
	setSelectValues: Dispatch<SetStateAction<IConfigurationSelectGroup[]>>
	selectValues: IConfigurationSelectGroup[]
}

const SelectGroup: FC<TSelectGroupProps> = ({
	SelectGroup,
	groupOrderIndex,
	selectOnChange,
	currentGroupIndex,
	selectValues,
	setSelectValues
}) => {
	const addOption = () => {
		const optionId = generateId()
		const copySelect = [...selectValues]
		const mutate = { ...selectValues[currentGroupIndex] }
		mutate.list.push({ displayName: '', id: optionId, price: 0 })
		mutate.defaultSelect = optionId
		copySelect.splice(currentGroupIndex, 1, mutate)
		setSelectValues(copySelect)
	}
	const setSelectValue = (
		event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
		name: keyof Omit<IConfigurationSelectGroup, 'list'>
	) => {
		const editSelect = [...selectValues]
		editSelect.splice(currentGroupIndex, 1, {
			...selectValues[currentGroupIndex],
			[name]: event.target.value
		})
		setSelectValues(editSelect)
	}
	const setOptionValue = (
		optionValueIndex: number,
		event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
		name: keyof IConfigurationCheckbox,
		isNumber: boolean
	) => {
		const editOption = [...SelectGroup.list]
		if (isNumber) {
			if (!containsLetters(event.target.value)) {
				const clearSpace = cleanNumber(event.target.value)
				editOption.splice(optionValueIndex, 1, {
					...editOption[optionValueIndex],
					[name]: +clearSpace
				})
			}
		} else {
			editOption.splice(optionValueIndex, 1, {
				...editOption[optionValueIndex],
				[name]: event.target.value
			})
		}
		const editSelect = [...selectValues]
		editSelect.splice(currentGroupIndex, 1, {
			...selectValues[currentGroupIndex],
			list: editOption
		})
		setSelectValues(editSelect)
	}

	const deleteOption = (optionValueIndex: number) => {
		if (SelectGroup.list) {
			const editOption = [...SelectGroup.list]
			editOption.splice(optionValueIndex, 1)
			const editSelect = [...selectValues]
			editSelect.splice(currentGroupIndex, 1, {
				...selectValues[currentGroupIndex],
				list: editOption
			})
			setSelectValues(editSelect)
		}
	}
	return (
		<div className={styles.configuration__item}>
			<h5 className={styles.configuration__title}>Конфигурация №{groupOrderIndex + 1}</h5>
			<div className={styles.configuration__head}>
				<div className={styles.had__input}>
					<label htmlFor={`configuration-name-${groupOrderIndex}`}>Название пункта</label>
					<input
						value={SelectGroup.displayName}
						onChange={e => setSelectValue(e, 'displayName')}
						id={`configuration-name-${groupOrderIndex}`}
						placeholder='Название'
						type='text'
					/>
				</div>
				<div className={styles.head__type}>
					<label htmlFor={`configuration-type-${groupOrderIndex}`}>Тип конфигурации</label>
					<Select
						style={{ width: '100%', height: '49px' }}
						options={configurationSelect}
						defaultValue={'select'}
						id={`configuration-type-${groupOrderIndex}`}
						placeholder='Тип конфигурации'
						onChange={(value, option) =>
							selectOnChange(value as TGroupType, 'select', currentGroupIndex)
						}
					/>
				</div>
			</div>
			<div className={styles.options}>
				{SelectGroup.list && SelectGroup.list.length > 0 && (
					<h5 className={styles.options__title}>Опции пользователя</h5>
				)}
				{SelectGroup.list &&
					SelectGroup.list.map((selectOption, selectOptionIndex) => (
						<div key={selectOption.id} className={styles.option__row}>
							<div className={styles.column__first}>
								<label htmlFor={`select-option-${selectOption.id}`}>
									Опция {selectOptionIndex + 1}
								</label>
								<input
									value={selectOption.displayName}
									onChange={e => setOptionValue(selectOptionIndex, e, 'displayName', false)}
									id={`select-option-${selectOption.id}`}
									placeholder='Название'
									type='text'
								/>
							</div>
							<div className={styles.column__second}>
								<label htmlFor={`select-option-price-${selectOption.id}`}>
									Надбавочная стоимость
								</label>
								<input
									value={formatNumberForDisplay(`${selectOption.price}`)}
									onChange={e => setOptionValue(selectOptionIndex, e, 'price', true)}
									id={`select-option-price-${selectOption.id}`}
									placeholder='+0'
									type='text'
								/>
								<span className='absolute right-3 top-[38px] text-text-lg'>₽</span>
							</div>

							{selectOptionIndex >= 1 && (
								<button
									onClick={() => deleteOption(selectOptionIndex)}
									type='button'
									className={styles.delete__option}
								>
									<DeleteIcon />
								</button>
							)}
						</div>
					))}
			</div>
			<button onClick={addOption} type='button' className={styles.add__option}>
				<div className={styles.option__icon}>
					<AddPlusCircle />
				</div>
				<p className={styles.option__text}>Добавить опцию</p>
			</button>
		</div>
	)
}

export default SelectGroup
