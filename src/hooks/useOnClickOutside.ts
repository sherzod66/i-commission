import { useEffect, useRef, useState } from 'react'

export const useOnClickOutside = (initialValue: boolean) => {
	const [isShow, setIsShow] = useState<boolean>(initialValue)
	const ref = useRef<HTMLDivElement>(null)

	const handelClick = (e: MouseEvent) => {
		if (ref && !ref.current?.contains(e.target as Node)) {
			setIsShow(false)
		}
	}

	useEffect(() => {
		document.addEventListener('click', handelClick, true)
		return () => {
			document.removeEventListener('click', handelClick, true)
		}
	})
	return { ref, isShow, setIsShow }
}
