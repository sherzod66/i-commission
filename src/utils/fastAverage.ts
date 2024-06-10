import { FastAverageColor } from 'fast-average-color'

export const getColor = async (imagePath: string): Promise<string> => {
	const fac = new FastAverageColor()
	let colorBg = ''
	await fac
		.getColorAsync(imagePath)
		.then(color => {
			//color.isDark ? '#fff' : '#000';
			console.log('Average color', color.hex)
			colorBg = color.hex
		})
		.catch(e => {
			console.log(e)
		})

	return colorBg
}
