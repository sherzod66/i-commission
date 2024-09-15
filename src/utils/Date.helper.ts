const getHours = (h: Date | string) => {
	const hours = new Date(h).getHours()
	return hours < 10 ? `0${hours}` : hours
}
const getMin = (m: Date | string) => {
	const minutes = new Date(m).getMinutes()
	return minutes < 10 ? `0${minutes}` : minutes
}

const GetDate = (d: Date | string) => {
	const dt = new Date(d).getDate()
	return dt < 10 ? `0${dt}` : dt
}
const GetMonth = (m: Date | string) => {
	let mn = new Date(m).getMonth() + 1
	return mn <= 9 ? `0${mn}` : mn
}

export const getShopCreate = (d: Date | string): string => {
	return `${GetDate(d)} ${AllMonthRu[new Date(d).getMonth()]} ${new Date(
		d
	).getFullYear()}, ${getHours(d)}:${getMin(d)}`
}

export const getProductCreate = (d: Date | string): string => {
	return `${GetDate(d)}.${GetMonth(d)}.${new Date(d).getFullYear()}`
}

const AllMonthRu: string[] = [
	'Января',
	'Февраля',
	'Марта',
	'Апреля',
	'Мая',
	'Июня',
	'Июля',
	'Августа',
	'Сентября',
	'Октября',
	'Ноября',
	'Декабря'
]
