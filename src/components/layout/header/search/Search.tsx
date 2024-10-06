import { FC } from 'react'
import styles from './search.module.scss'
import cn from 'clsx'
import SearchIcon from '@/assets/icon/SearchIcon'

const Search: FC<{ show: boolean; full?: boolean; placeholder: string }> = ({
	show,
	full,
	placeholder
}) => {
	return (
		<div className={cn(styles.search, { [styles.show]: show, [styles.full]: full })}>
			<div>
				<SearchIcon />
			</div>
			<input type='text' placeholder={placeholder} />
		</div>
	)
}

export default Search
