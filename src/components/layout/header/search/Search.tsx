import { FC } from 'react'
import styles from './search.module.scss'
import SearchSvg from '@/assets/icon/search.svg'
import cn from 'clsx'

const Search: FC<{ show: boolean; full?: boolean }> = ({ show, full }) => {
	return (
		<div className={cn(styles.search, { [styles.show]: show, [styles.full]: full })}>
			<div>
				<SearchSvg />
			</div>
			<input type='text' placeholder='Поиск товара' />
		</div>
	)
}

export default Search
