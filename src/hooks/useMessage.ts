import { useMessagesStore } from '@/store/messageStore/messageStore'
import { TMessage } from '@/types/message.type'

export const useMessage = () => {
	const addMess = useMessagesStore(state => state.pushMessages)
	const allMess = useMessagesStore(state => state.messages)
	const removeMessage = useMessagesStore(state => state.removeMessage)

	const handelAdd = (value: TMessage) => {
		addMess(value)
		setTimeout(() => {
			const find = allMess.findIndex(item => item.key === value.key)
			removeMessage(find)
		}, 4500)
	}

	return { handelAdd }
}
