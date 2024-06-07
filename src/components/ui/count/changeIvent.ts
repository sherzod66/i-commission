import { ChangeEvent, Dispatch, SetStateAction } from 'react'

export const changeEvent = <T>(
	index: number,
	event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
	data: T[],
	name: keyof T,
	setData: Dispatch<SetStateAction<T[]>>
) => {
	const editCard = [...data]
	editCard.splice(index, 1, { ...data[index], [name]: event.target.value })
	setData(editCard)
}

export const changeBoolean = <T>(
	index: number,
	change: string | number | boolean,
	data: T[],
	name: keyof T,
	setData: Dispatch<SetStateAction<T[]>>
) => {
	const editCard = [...data]
	editCard.splice(index, 1, { ...data[index], [name]: change })
	setData(editCard)
}
