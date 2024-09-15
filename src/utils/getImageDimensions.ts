export function getImageDimensions(url: string): Promise<{ width: number; height: number }> {
	return new Promise((resolve, reject) => {
		const img = new Image()
		img.onload = () => {
			resolve({ width: img.width, height: img.height })
		}
		img.onerror = error => {
			reject(new Error(`Ошибка загрузки изображения: ${error}`))
		}
		img.src = url
	})
}
