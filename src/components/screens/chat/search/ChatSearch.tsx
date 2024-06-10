import { FC, useState } from 'react'
import SearchSvg from '@/assets/icon/search.svg'
import styles from './chatSearch.module.scss'
import Loader from '@/components/ui/loader/Loader'

const ChatSearch: FC = () => {
	return (
		<div className={styles.search__wrapper}>
			<div className={styles.search}>
				<div className='relative'>
					{/* <Loader /> */}
					<SearchSvg />
				</div>
				<input type='text' placeholder='Поиск по сообщениям' />
			</div>
		</div>
	)
}

export default ChatSearch
