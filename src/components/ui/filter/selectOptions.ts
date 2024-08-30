import { SelectProps } from 'antd'

export const options: SelectProps['options'] = [
	{ value: 'popular', label: 'Новинки' },
	{ value: 'cheap', label: 'дешвое' },
	{ value: 'expensive', label: 'дорогое' },
	{ value: 'new', label: 'новое' }
]
