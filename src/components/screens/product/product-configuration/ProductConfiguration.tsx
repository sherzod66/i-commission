'use client'
import { FC, Fragment } from 'react'
import styles from './productConfiguration.module.scss'
import {
	EnumConfigurationGroupType,
	IConfiguration,
	IConfigurationCheckbox,
	IConfigurationNumberGroup,
	IConfigurationNumberGroupClient,
	IConfigurationSelectGroup,
	IConfigurationTextGroup,
	IConfigurationTextGroupClient,
	IProductConfigurationCheckboxGroup
} from '@/types/product.type'
import cn from 'clsx'
import { formatNumberForDisplay } from '@/utils/formatPrice'

type TProductConfigurePath = {
	configuration: IConfiguration
	checkboxValue: IProductConfigurationCheckboxGroup[]
	numberValue: IConfigurationNumberGroupClient[]
	onSelectValue: (
		selectGroup: IConfigurationSelectGroup,
		selectOption: IConfigurationCheckbox
	) => void
	onSetTextValue: (textGroup: IConfigurationTextGroup, text: string) => void
	selectValue: IConfigurationSelectGroup[]
	toggleCheckbox: (
		checkbox: IProductConfigurationCheckboxGroup,
		checkboxList: IConfigurationCheckbox
	) => void
	textValue: IConfigurationTextGroupClient[]
	onSetNumberValue: (numberGroup: IConfigurationNumberGroup, number: string) => void
	configureError: boolean
}

const ProductConfiguration: FC<TProductConfigurePath> = ({
	configuration,
	checkboxValue,
	numberValue,
	onSelectValue,
	onSetTextValue,
	selectValue,
	toggleCheckbox,
	textValue,
	onSetNumberValue,
	configureError
}) => {
	return (
		<div className={cn(styles.path, { [styles.error]: configureError })}>
			<h4 className={styles.path__title}>Конфигурация</h4>
			{configuration.groups.map((item, rootIndex) => {
				if (item.__typename === EnumConfigurationGroupType.ProductConfigurationInputTextGroup) {
					return (
						<Fragment key={item.id}>
							<h5 className={styles.path__subtitle}>{item.displayName}</h5>
							<div className={styles.path__text}>
								<input
									onChange={e => onSetTextValue(item, e.target.value)}
									value={textValue.find(elem => elem.id === item.id)?.value || ''}
									placeholder={item.displayName}
									type='text'
									id='text-label'
								/>
							</div>
						</Fragment>
					)
				} else if (item.__typename === EnumConfigurationGroupType.ProductConfigurationSelectGroup) {
					return (
						<Fragment key={item.id}>
							<h5 className={styles.path__subtitle}>{item.displayName}</h5>
							<div className={styles.path__categories}>
								{item.list.map((elem, index) => {
									const findGroup =
										selectValue.length > 0 ? selectValue.findIndex(have => have.id === item.id) : 0
									const findListIndex =
										selectValue.length > 0
											? selectValue[findGroup].list.findIndex(l => l.id === elem.id)
											: -1
									return (
										<button
											key={elem.id}
											onClick={() => onSelectValue(item, elem)}
											type='button'
											className={cn(styles.categories__column, {
												[styles.active]: findListIndex >= 0
											})}
										>
											{elem.displayName}
										</button>
									)
								})}
							</div>
						</Fragment>
					)
				} else if (
					item.__typename === EnumConfigurationGroupType.ProductConfigurationCheckboxGroup
				) {
					return (
						<Fragment key={item.id}>
							<h5 className={styles.path__subtitle}>{item.displayName}</h5>
							<div className={styles.path__categories}>
								{item.list.map((elem, index) => {
									const findGroup =
										checkboxValue.length > 0
											? checkboxValue.findIndex(have => have.id === item.id)
											: 0
									const findListIndex =
										checkboxValue.length > 0
											? checkboxValue[findGroup].list.findIndex(l => l.id === elem.id)
											: -1
									return (
										<button
											key={elem.id}
											onClick={() => toggleCheckbox(item, elem)}
											type='button'
											className={cn(styles.categories__column, {
												[styles.active]: findListIndex >= 0
											})}
										>
											{elem.displayName}
										</button>
									)
								})}
							</div>
						</Fragment>
					)
				} else if (
					item.__typename === EnumConfigurationGroupType.ProductConfigurationInputNumberGroup
				) {
					const numberValueFind = numberValue.find(elem => elem.id === item.id)
					return (
						<Fragment key={item.id}>
							<h5 className={styles.path__subtitle}>{item.displayName}</h5>
							<div className={styles.number__group_row}>
								<div className={styles.number__group_column}>
									<label htmlFor={`pay${item.id}`}>Заплачу</label>
									<input
										onChange={e => onSetNumberValue(item, e.target.value)}
										value={formatNumberForDisplay(numberValueFind?.value || '')}
										className={styles.number__input}
										type='text'
									/>
								</div>
								<div className={styles.number__group_column}>
									<label htmlFor={`pay${item.id}`}>Получу</label>
									<input
										value={formatNumberForDisplay(
											(numberValueFind && `${+numberValueFind.value * numberValueFind.price}`) || ''
										)}
										className={styles.number__input}
										type='text'
										disabled
									/>
								</div>
							</div>
						</Fragment>
					)
				}
			})}
		</div>
	)
}

export default ProductConfiguration
