import { TMessage } from '@/types/message.type'
import { create } from 'zustand'

type Store = {
	messages: TMessage[]
	pushMessages: (newMess: TMessage) => void
	removeMessage: (index: number) => void
}

export const useMessagesStore = create<Store>(set => ({
	messages: [],
	pushMessages: (newMess: TMessage) =>
		set(state => ({
			messages: [...state.messages, { ...newMess, life: Date.now() }]
		})),
	removeMessage: index =>
		set(state => {
			state.messages.splice(index, 1)
			return { messages: [...state.messages] }
		})
}))
