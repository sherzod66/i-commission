export const fileReader = (file: File): string => {
	const render = URL.createObjectURL(file)
	return render
}
