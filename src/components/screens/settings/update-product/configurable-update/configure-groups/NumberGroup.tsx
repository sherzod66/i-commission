import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react'
import styles from './configureGroups.module.scss'
import { IConfigurationCheckbox, IConfigurationNumberGroup, TGroupType } from '@/types/product.type'
import { configurationSelect } from '../useConfigurableUpdate'
import { Select } from 'antd'
import { cleanNumber, containsLetters, formatNumberForDisplay } from '@/utils/formatPrice'

type NumberGroupProps = {
	NumberGroup: IConfigurationNumberGroup
	groupOrderIndex: number
	selectOnChange: (
		nextType: TGroupType,
		currentType: 'checkbox' | 'select' | 'text' | 'numbers' | 'middle',
		currentGroupIndex: number
	) => void
	currentGroupIndex: number
	setNumberValues: Dispatch<SetStateAction<IConfigurationNumberGroup[]>>
	numberValues: IConfigurationNumberGroup[]
}

const NumberGroup: FC<NumberGroupProps> = ({
	NumberGroup,
	groupOrderIndex,
	selectOnChange,
	currentGroupIndex,
	numberValues,
	setNumberValues
}) => {
	const setNumberValue = (
		event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
		name: keyof IConfigurationNumberGroup,
		isNumber: boolean
	) => {
		const editNumber = [...numberValues]
		if (isNumber) {
			if (!containsLetters(event.target.value)) {
				const clearSpace = cleanNumber(event.target.value)
				editNumber.splice(currentGroupIndex, 1, {
					...numberValues[currentGroupIndex],
					[name]: +clearSpace
				})
			}
		} else {
			editNumber.splice(currentGroupIndex, 1, {
				...numberValues[currentGroupIndex],
				[name]: event.target.value
			})
		}
		setNumberValues(editNumber)
	}

	return (
		<div className={styles.configuration__item}>
			<h5 className={styles.configuration__title}>Конфигурация №{groupOrderIndex + 1}</h5>
			<div className={styles.configuration__head}>
				<div className={styles.had__input}>
					<label htmlFor={`number-displayName-${groupOrderIndex}`}>Название пункта</label>
					<input
						value={NumberGroup.displayName}
						onChange={e => setNumberValue(e, 'displayName', false)}
						id={`number-displayName-${groupOrderIndex}`}
						placeholder='Название'
						type='text'
					/>
				</div>
				<div className={styles.head__type}>
					<label htmlFor={`configuration-type-${groupOrderIndex}`}>Тип конфигурации</label>
					<Select
						style={{ width: '100%', height: '49px' }}
						options={configurationSelect}
						defaultValue={'numbers'}
						id={`configuration-type-${groupOrderIndex}`}
						placeholder='Тип конфигурации'
						onChange={(value, option) =>
							selectOnChange(value as TGroupType, 'numbers', currentGroupIndex)
						}
					/>
				</div>
			</div>
			<div className={styles.number__options}>
				<div className={styles.column}>
					<label htmlFor={`number-price-${NumberGroup.id}`}>Стоимость за штуку</label>
					<input
						value={formatNumberForDisplay(`${NumberGroup.price}`)}
						onChange={e => setNumberValue(e, 'price', true)}
						id={`number-price-${NumberGroup.id}`}
						placeholder='Название'
						type='text'
					/>
				</div>
				<div className={styles.column}>
					<label htmlFor={`number-defaultAmount-${NumberGroup.id}`}>Количество по умолчанию</label>
					<input
						value={formatNumberForDisplay(`${NumberGroup.defaultAmount}`)}
						onChange={e => setNumberValue(e, 'defaultAmount', true)}
						id={`number-defaultAmount-${NumberGroup.id}`}
						placeholder='Количество по умолчанию'
						type='number'
					/>
				</div>
				<div className={styles.column}>
					<label htmlFor={`number-min-${NumberGroup.id}`}>Минимальное количество</label>
					<input
						value={formatNumberForDisplay(`${NumberGroup.min}`)}
						onChange={e => setNumberValue(e, 'min', true)}
						id={`number-min-${NumberGroup.id}`}
						placeholder='Название'
						type='text'
					/>
				</div>
				<div className={styles.column}>
					<label htmlFor={`number-max-${NumberGroup.id}`}>Максимальное количество</label>
					<input
						value={formatNumberForDisplay(`${NumberGroup.max}`)}
						onChange={e => setNumberValue(e, 'max', true)}
						id={`number-max-${NumberGroup.id}`}
						placeholder='Название'
						type='text'
					/>
				</div>
			</div>
		</div>
	)
}

export default NumberGroup
