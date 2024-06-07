import { SelectProps } from 'antd'

export const options: SelectProps['options'] = [
	{ value: 'popular', label: 'популярное' },
	{ value: 'cheap', label: 'дешвое' },
	{ value: 'expensive', label: 'дорогое' },
	{ value: 'new', label: 'новое' }
]
