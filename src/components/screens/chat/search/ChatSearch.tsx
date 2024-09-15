import { FC, useState } from 'react'
import styles from './chatSearch.module.scss'
import Loader from '@/components/ui/loader/Loader'
import SearchIcon from '@/assets/icon/SearchIcon'

const ChatSearch: FC = () => {
	return (
		<div className={styles.search__wrapper}>
			<div className={styles.search}>
				<div className='relative'>
					{/* <Loader /> */}
					<SearchIcon />
				</div>
				<input type='text' placeholder='Поиск по сообщениям' />
			</div>
		</div>
	)
}

export default ChatSearch
