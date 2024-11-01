'use client'
import {
	ChangeEvent,
	Dispatch,
	FC,
	KeyboardEvent,
	SetStateAction,
	useEffect,
	useRef,
	useState
} from 'react'
import styles from './search.module.scss'
import { IEdges } from '@/types/edges.type'
import { IProduct } from '@/types/product.type'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import cn from 'clsx'
import Loader from '../loader/Loader'
import SearchIcon from '@/assets/icon/SearchIcon'
import SearchBig from '@/assets/icon/SearchBig.svg'

type TSearchProduct = {
	data: { activeProducts: IEdges<IProduct> } | undefined
	searchValue: string
	isLoading: boolean
	setSearchValue: Dispatch<SetStateAction<string>>
}

const SearchProduct: FC<TSearchProduct> = ({ data, searchValue, setSearchValue, isLoading }) => {
	const navigate = useRouter()
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const ref = useRef<HTMLDivElement | null>(null)

	const handelClick = (e: MouseEvent) => {
		const eventTarget = e.target
		if (ref && !ref.current?.contains(eventTarget as Node)) {
			setIsOpen(false)
		}
	}

	useEffect(() => {
		document.addEventListener('click', handelClick, true)
		return () => {
			document.removeEventListener('click', handelClick, true)
		}
	})

	const [selectedIndex, setSelectIndex] = useState<number>(-1)

	const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
		switch (event.key) {
			case 'ArrowDown':
				// Перемещаемся вниз по списку
				if (data && data.activeProducts) {
					if (selectedIndex < data.activeProducts.edges.length - 1) {
						setSelectIndex(selectedIndex + 1)
					}
				}
				break

			case 'ArrowUp':
				// Перемещаемся вверх по списку
				if (selectedIndex > 0) {
					setSelectIndex(selectedIndex - 1)
				}
				break

			case 'Enter':
				// Подтверждаем выбор
				if (selectedIndex >= 0) {
					navigate.push(
						`/search/?displayName=${data?.activeProducts.edges[selectedIndex].node.displayName}&category=${data?.activeProducts.edges[selectedIndex].node.category?.code}`
					)
				} else {
					navigate.push(`/search/?displayName=${searchValue}`)
				}
				break

			case 'Escape':
				// Скрываем список
				setIsOpen(false)
				break

			default:
				break
		}
	}
	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value)
	}
	return (
		<div ref={ref} className={styles.search}>
			<div className={styles.search__field}>
				<label htmlFor='search'>
					<SearchIcon />
				</label>
				<input
					className={styles.search__input}
					type='text'
					value={searchValue}
					name='search'
					id='search'
					placeholder='Поиск товара'
					onKeyDown={onKeyDown}
					onChange={onChange}
					onFocus={() => setIsOpen(true)}
				/>
				<button className={styles.search__button} type='button'>
					<SearchBig />
				</button>
			</div>
			<div className={styles.search__help}>
				{isLoading && (
					<div className='h-13 relative'>
						<Loader black={true} />
					</div>
				)}

				{isOpen && (
					<ul className={styles.help__list}>
						{data && data.activeProducts ? (
							data?.activeProducts.edges ? (
								data.activeProducts.edges.map((item, index) => (
									<li
										key={index}
										className={cn(styles.list__li, {
											[styles.selected]: selectedIndex === index
										})}
									>
										<Link
											href={`/search/?displayName=${data?.activeProducts.edges[index].node.displayName}&category=${data?.activeProducts.edges[index].node.category?.code}`}
										>
											<SearchIcon /> <span>{item.node.displayName}</span>
										</Link>
									</li>
								))
							) : (
								<li className={styles.list__li}>Ничего не найденно</li>
							)
						) : (
							<li className={styles.list__li}>Ничего не найденно</li>
						)}
					</ul>
				)}
			</div>
		</div>
	)
}

export default SearchProduct
