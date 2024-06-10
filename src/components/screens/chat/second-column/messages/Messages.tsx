import { FC } from 'react'
import styles from './messages.module.scss'
import cn from 'clsx'

const Messages: FC = () => {
	return (
		<div className={styles.messages}>
			<div className={styles.messages__sticky}>
				<span>Среда, 10 апреля</span>
			</div>
			<div
				className={cn(
					styles.messages__body,
					{
						[styles.im]: false
					},
					{
						[styles.no_mi]: true
					}
				)}
			>
				<div className={styles.user__avatar}>
					<img src='/image/imagePMin.png' alt='avatar' />
				</div>
				<div className={styles.messages__item}>
					<p>Здравствуйте! На вашем маркетплейсе есть интересующий меня товар?</p>
				</div>
				<p className={styles.message__date}>14:05</p>
			</div>
			<div
				className={cn(
					styles.messages__body,
					{
						[styles.im]: true
					},
					{
						[styles.no_mi]: false
					}
				)}
			>
				<p className={styles.message__date}>14:05</p>
				<div className={styles.messages__item}>
					<p>Здравствуйте! На вашем маркетплейсе есть интересующий меня товар?</p>
				</div>
			</div>
			<div
				className={cn(
					styles.messages__body,
					{
						[styles.im]: false
					},
					{
						[styles.no_mi]: true
					}
				)}
			>
				<div className={styles.user__avatar}>
					<img src='/image/imagePMin.png' alt='avatar' />
				</div>
				<div className={styles.messages__item}>
					<p>Здравствуйте! На вашем маркетплейсе есть интересующий меня товар?</p>
				</div>
				<p className={styles.message__date}>14:05</p>
			</div>
			<div className={styles.messages__sticky}>
				<span>Среда, 11 апреля</span>
			</div>
			<div
				className={cn(
					styles.messages__body,
					{
						[styles.im]: true
					},
					{
						[styles.no_mi]: false
					}
				)}
			>
				<p className={styles.message__date}>14:05</p>
				<div className={styles.messages__item}>
					<p>Здравствуйте! На вашем маркетплейсе есть интересующий меня товар?</p>
				</div>
			</div>
			<div
				className={cn(
					styles.messages__body,
					{
						[styles.im]: false
					},
					{
						[styles.no_mi]: true
					}
				)}
			>
				<div className={styles.user__avatar}>
					<img src='/image/imagePMin.png' alt='avatar' />
				</div>
				<div className={styles.messages__item}>
					<p>Здравствуйте! На вашем маркетплейсе есть интересующий меня товар?</p>
				</div>
				<p className={styles.message__date}>14:05</p>
			</div>
			<div
				className={cn(
					styles.messages__body,
					{
						[styles.im]: true
					},
					{
						[styles.no_mi]: false
					}
				)}
			>
				<p className={styles.message__date}>14:05</p>
				<div className={styles.messages__item}>
					<p>Здравствуйте! На вашем маркетплейсе есть интересующий меня товар?</p>
				</div>
			</div>
			<div
				className={cn(
					styles.messages__body,
					{
						[styles.im]: false
					},
					{
						[styles.no_mi]: true
					}
				)}
			>
				<div className={styles.user__avatar}>
					<img src='/image/imagePMin.png' alt='avatar' />
				</div>
				<div className={styles.messages__item}>
					<p>Здравствуйте! На вашем маркетплейсе есть интересующий меня товар?</p>
				</div>
				<p className={styles.message__date}>14:05</p>
			</div>
			<div
				className={cn(
					styles.messages__body,
					{
						[styles.im]: true
					},
					{
						[styles.no_mi]: false
					}
				)}
			>
				<p className={styles.message__date}>14:05</p>
				<div className={styles.messages__item}>
					<p>Здравствуйте! На вашем маркетплейсе есть интересующий меня товар?</p>
				</div>
			</div>
			<div
				className={cn(
					styles.messages__body,
					{
						[styles.im]: false
					},
					{
						[styles.no_mi]: true
					}
				)}
			>
				<div className={styles.user__avatar}>
					<img src='/image/imagePMin.png' alt='avatar' />
				</div>
				<div className={styles.messages__item}>
					<p>Здравствуйте! На вашем маркетплейсе есть интересующий меня товар?</p>
				</div>
				<p className={styles.message__date}>14:05</p>
			</div>
			<div
				className={cn(
					styles.messages__body,
					{
						[styles.im]: true
					},
					{
						[styles.no_mi]: false
					}
				)}
			>
				<p className={styles.message__date}>14:05</p>
				<div className={styles.messages__item}>
					<p>Здравствуйте! На вашем маркетплейсе есть интересующий меня товар?</p>
				</div>
			</div>
			<div
				className={cn(
					styles.messages__body,
					{
						[styles.im]: false
					},
					{
						[styles.no_mi]: true
					}
				)}
			>
				<div className={styles.user__avatar}>
					<img src='/image/imagePMin.png' alt='avatar' />
				</div>
				<div className={styles.messages__item}>
					<p>Здравствуйте! На вашем маркетплейсе есть интересующий меня товар?</p>
				</div>
				<p className={styles.message__date}>14:05</p>
			</div>
			<div
				className={cn(
					styles.messages__body,
					{
						[styles.im]: true
					},
					{
						[styles.no_mi]: false
					}
				)}
			>
				<p className={styles.message__date}>14:05</p>
				<div className={styles.messages__item}>
					<p>Здравствуйте! На вашем маркетплейсе есть интересующий меня товар?</p>
				</div>
			</div>
			<div
				className={cn(
					styles.messages__body,
					{
						[styles.im]: false
					},
					{
						[styles.no_mi]: true
					}
				)}
			>
				<div className={styles.user__avatar}>
					<img src='/image/imagePMin.png' alt='avatar' />
				</div>
				<div className={styles.messages__item}>
					<p>Здравствуйте! На вашем маркетплейсе есть интересующий меня товар?</p>
				</div>
				<p className={styles.message__date}>14:05</p>
			</div>
			<div
				className={cn(
					styles.messages__body,
					{
						[styles.im]: true
					},
					{
						[styles.no_mi]: false
					}
				)}
			>
				<p className={styles.message__date}>14:05</p>
				<div className={styles.messages__item}>
					<p>Здравствуйте! На вашем маркетплейсе есть интересующий меня товар?</p>
				</div>
			</div>
			<div
				className={cn(
					styles.messages__body,
					{
						[styles.im]: false
					},
					{
						[styles.no_mi]: true
					}
				)}
			>
				<div className={styles.user__avatar}>
					<img src='/image/imagePMin.png' alt='avatar' />
				</div>
				<div className={styles.messages__item}>
					<p>Здравствуйте! На вашем маркетплейсе есть интересующий меня товар?</p>
				</div>
				<p className={styles.message__date}>14:05</p>
			</div>
			<div
				className={cn(
					styles.messages__body,
					{
						[styles.im]: true
					},
					{
						[styles.no_mi]: false
					}
				)}
			>
				<p className={styles.message__date}>14:05</p>
				<div className={styles.messages__item}>
					<p>Здравствуйте! На вашем маркетплейсе есть интересующий меня товар?</p>
				</div>
			</div>
			<div
				className={cn(
					styles.messages__body,
					{
						[styles.im]: false
					},
					{
						[styles.no_mi]: true
					}
				)}
			>
				<div className={styles.user__avatar}>
					<img src='/image/imagePMin.png' alt='avatar' />
				</div>
				<div className={styles.messages__item}>
					<p>Здравствуйте! На вашем маркетплейсе есть интересующий меня товар?</p>
				</div>
				<p className={styles.message__date}>14:05</p>
			</div>
			<div
				className={cn(
					styles.messages__body,
					{
						[styles.im]: true
					},
					{
						[styles.no_mi]: false
					}
				)}
			>
				<p className={styles.message__date}>14:05</p>
				<div className={styles.messages__item}>
					<p>Здравствуйте! На вашем маркетплейсе есть интересующий меня товар?</p>
				</div>
			</div>
			<div
				className={cn(
					styles.messages__body,
					{
						[styles.im]: false
					},
					{
						[styles.no_mi]: true
					}
				)}
			>
				<div className={styles.user__avatar}>
					<img src='/image/imagePMin.png' alt='avatar' />
				</div>
				<div className={styles.messages__item}>
					<p>Здравствуйте! На вашем маркетплейсе есть интересующий меня товар?</p>
				</div>
				<p className={styles.message__date}>14:05</p>
			</div>
			<div
				className={cn(
					styles.messages__body,
					{
						[styles.im]: true
					},
					{
						[styles.no_mi]: false
					}
				)}
			>
				<p className={styles.message__date}>14:05</p>
				<div className={styles.messages__item}>
					<p>Здравствуйте! На вашем маркетплейсе есть интересующий меня товар?</p>
				</div>
			</div>
			<div
				className={cn(
					styles.messages__body,
					{
						[styles.im]: false
					},
					{
						[styles.no_mi]: true
					}
				)}
			>
				<div className={styles.user__avatar}>
					<img src='/image/imagePMin.png' alt='avatar' />
				</div>
				<div className={styles.messages__item}>
					<p>Здравствуйте! На вашем маркетплейсе есть интересующий меня товар?</p>
				</div>
				<p className={styles.message__date}>14:05</p>
			</div>
			<div
				className={cn(
					styles.messages__body,
					{
						[styles.im]: true
					},
					{
						[styles.no_mi]: false
					}
				)}
			>
				<p className={styles.message__date}>14:05</p>
				<div className={styles.messages__item}>
					<p>Здравствуйте! На вашем маркетплейсе есть интересующий меня товар?</p>
				</div>
			</div>
			<div
				className={cn(
					styles.messages__body,
					{
						[styles.im]: false
					},
					{
						[styles.no_mi]: true
					}
				)}
			>
				<div className={styles.user__avatar}>
					<img src='/image/imagePMin.png' alt='avatar' />
				</div>
				<div className={styles.messages__item}>
					<p>Здравствуйте! На вашем маркетплейсе есть интересующий меня товар?</p>
				</div>
				<p className={styles.message__date}>14:05</p>
			</div>
			<div
				className={cn(
					styles.messages__body,
					{
						[styles.im]: true
					},
					{
						[styles.no_mi]: false
					}
				)}
			>
				<p className={styles.message__date}>14:05</p>
				<div className={styles.messages__item}>
					<p>Здравствуйте! На вашем маркетплейсе есть интересующий меня товар?</p>
				</div>
			</div>
		</div>
	)
}

export default Messages
