import ChatFooter from '@/components/screens/chat/second-column/chat-footer/ChatFooter'
import ChatHeader from '@/components/screens/chat/second-column/chat-header/ChatHeader'
import Messages from '@/components/screens/chat/second-column/messages/Messages'
import cn from 'clsx'
import styles from './pageRom.module.scss'

type Props = {
	params: { id: string }
}
export default function PageRoom({ params }: Props) {
	return (
		<div className={cn(styles.chat__second, { [styles.show]: params.id })}>
			<ChatHeader />
			<Messages />
			<ChatFooter />
		</div>
	)
}
