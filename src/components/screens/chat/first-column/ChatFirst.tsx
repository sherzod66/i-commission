'use client'
import { FC } from 'react'
import ChatSearch from '../search/ChatSearch'
import ChatSort from '../sort/ChatSort'
import UserList from '../user-list/UserList'

const ChatFirst: FC = () => {
	return (
		<>
			<ChatSearch />
			<ChatSort />
			<UserList />
		</>
	)
}

export default ChatFirst
