'use client'
import { FC, useEffect } from 'react'
import styles from './messages.module.scss'
import { useMessagesStore } from '@/store/messageStore/messageStore'
import Success from '@/assets/messages/Success.svg'
import Info from '@/assets/messages/Info.svg'
import Warning from '@/assets/messages/Warning.svg'
import Error from '@/assets/messages/Error.svg'

const MessageWrapper: FC = () => {
	const messages = useMessagesStore(state => state.messages)
	console.log(messages)
	const PushMessage = useMessagesStore(state => state.pushMessages)
	const removeMessage = useMessagesStore(state => state.removeMessage)
	useEffect(() => {
		const timeOut = setTimeout(() => {
			messages.forEach((item, index) => {
				if (item.life) {
					// console.log('TimeOut')
					let dateInfo = Date.now() - item.life
					if (dateInfo > 4000) {
						const elem = document.getElementById(`message-${index}`)
						elem?.classList.add(styles.remove)
					}
				}
			})
			return () => clearTimeout(timeOut)
		}, 4000)

		if (messages.length > 0) {
			messages.forEach((item, index) => {
				if (item.life) {
					console.log('dddddd')
					const dateLife = Date.now() - item.life
					if (dateLife > 3500) {
						removeMessage(index)
					}
				}
			})
		}
	}, [messages])
	return (
		<div className={styles.fix_container}>
			{messages.map((item, index) => (
				<div id={`message-${index}`} key={index} className={styles.message}>
					<div className={styles.message__row}>
						<div className={styles.message__type}>
							{item.type === 'success' && <Success />}
							{item.type === 'info' && <Info />}
							{item.type === 'warning' && <Warning />}
							{item.type === 'error' && <Error />}
						</div>
						<h4>{item.title}</h4>
					</div>
					<p>{item.description}</p>
				</div>
			))}
		</div>
	)
}

export default MessageWrapper
