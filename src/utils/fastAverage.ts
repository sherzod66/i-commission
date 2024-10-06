import { FastAverageColor } from 'fast-average-color'

export const getColorIsDark = async (imagePath: string): Promise<boolean> => {
	const fac = new FastAverageColor()
	let isDark: boolean = false
	await fac
		.getColorAsync(imagePath)
		.then(color => {
			isDark = color.isDark
		})
		.catch(e => {
			console.log(e)
		})

	return isDark
}
