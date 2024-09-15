import { FC } from 'react'
import styles from './search.module.scss'
import cn from 'clsx'
import SearchIcon from '@/assets/icon/SearchIcon'

const Search: FC<{ show: boolean; full?: boolean }> = ({ show, full }) => {
	return (
		<div className={cn(styles.search, { [styles.show]: show, [styles.full]: full })}>
			<div>
				<SearchIcon />
			</div>
			<input type='text' placeholder='Поиск товара' />
		</div>
	)
}

export default Search
