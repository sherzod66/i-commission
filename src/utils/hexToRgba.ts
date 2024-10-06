export function hexToRgba(hex: string, alpha: number): string {
	// Убираем символ #, если он присутствует
	hex = hex.replace('#', '')

	// Если цвет в формате #RGB, расширяем его до #RRGGBB
	if (hex.length === 3) {
		hex = hex
			.split('')
			.map(char => char + char)
			.join('')
	}

	// Получаем значения r, g, b
	const r = parseInt(hex.substring(0, 2), 16)
	const g = parseInt(hex.substring(2, 4), 16)
	const b = parseInt(hex.substring(4, 6), 16)

	// Формируем строку в формате rgba
	return `rgba(${r}, ${g}, ${b}, ${alpha})`
}
