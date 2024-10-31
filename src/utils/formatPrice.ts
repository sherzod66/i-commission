export const formatPrice = (price: number) =>
	new Intl.NumberFormat('ru', {
		style: 'currency',
		currency: 'RUB',
		minimumFractionDigits: 0
	}).format(price ? price : 0)

// Функция для форматирования числа для отображения
export const formatNumberForDisplay = (value: string): string => {
	return value.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

// Функция для очистки числа от пробелов перед сохранением
export const cleanNumber = (value: string): string => {
	return value.replace(/\s/g, '')
}

export const containsLetters = (value: string): boolean => {
	return /[a-zA-Z]/.test(value)
}

export const containsNumbers = (value: string): boolean => {
	return /^[0-9]*\.?[0-9]*$/.test(value)
}
