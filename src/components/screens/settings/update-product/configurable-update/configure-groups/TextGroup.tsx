import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react'
import styles from './configureGroups.module.scss'
import { configurationSelect } from '../useConfigurableUpdate'
import { Select } from 'antd'
import { IConfigurationTextGroup, TGroupType } from '@/types/product.type'

type TextGroupProps = {
	TextGroup: IConfigurationTextGroup
	groupOrderIndex: number
	selectOnChange: (
		nextType: TGroupType,
		currentType: 'checkbox' | 'select' | 'text' | 'numbers' | 'middle',
		currentGroupIndex: number
	) => void
	currentGroupIndex: number
	setTextValues: Dispatch<SetStateAction<IConfigurationTextGroup[]>>
	textValues: IConfigurationTextGroup[]
}

const TextGroup: FC<TextGroupProps> = ({
	TextGroup,
	groupOrderIndex,
	selectOnChange,
	currentGroupIndex,
	setTextValues,
	textValues
}) => {
	const setTextValue = (
		event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
		name: keyof IConfigurationTextGroup
	) => {
		const editText = [...textValues]
		editText.splice(currentGroupIndex, 1, {
			...textValues[currentGroupIndex],
			[name]: event.target.value
		})
		setTextValues(editText)
	}

	return (
		<div className={styles.configuration__item}>
			<h5 className={styles.configuration__title}>Конфигурация №{groupOrderIndex + 1}</h5>
			<div className={styles.configuration__head}>
				<div className={styles.had__input}>
					<label htmlFor={`text-displayName-${groupOrderIndex}`}>Название пункта</label>
					<input
						value={TextGroup.displayName}
						onChange={e => setTextValue(e, 'displayName')}
						id={`text-displayName-${groupOrderIndex}`}
						placeholder='Название'
						type='text'
					/>
				</div>
				<div className={styles.head__type}>
					<label htmlFor={`configuration-type-${groupOrderIndex}`}>Тип конфигурации</label>
					<Select
						style={{ width: '100%', height: '49px' }}
						options={configurationSelect}
						defaultValue={'text'}
						id={`configuration-type-${groupOrderIndex}`}
						placeholder='Тип конфигурации'
						onChange={(value, option) =>
							selectOnChange(value as TGroupType, 'text', currentGroupIndex)
						}
					/>
				</div>
			</div>
			<div className={styles.number__options}>
				<div className={styles.column}>
					<label htmlFor={`text-price-${TextGroup.id}`}>Регулярное выражение</label>
					<input
						value={TextGroup.regex}
						onChange={e => setTextValue(e, 'regex')}
						id={`text-price-${TextGroup.id}`}
						placeholder='/^[0-9]*\.?[0-9]*$/'
						type='text'
					/>
				</div>
				<div className={styles.column}>
					<label htmlFor={`text-defaultAmount-${TextGroup.id}`}>
						Сообщение при некорректном вводе регулярного выражения
					</label>
					<input
						value={TextGroup.errorMessage}
						onChange={e => setTextValue(e, 'errorMessage')}
						id={`tex-error-message-${TextGroup.id}`}
						placeholder='Сообщение ошибки'
						type='text'
					/>
				</div>
			</div>
		</div>
	)
}

export default TextGroup
