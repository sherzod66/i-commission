'use client'
import { FC } from 'react'
import styles from './personally.module.scss'
import ActivateSvg from '@/assets/icon/activateSm.svg'
import { usePersonal } from './usePersonal'
import cn from 'clsx'
import DownloadSvg from '@/assets/icon/download.svg'
import { fileReader } from '@/utils/fileReader'
import Dragger from '@/components/ui/dragger/Dragger'
import UserAvatar from './user-avatar/UserAvatar'
const clientPath = process.env.NEXT_PUBLIC_CLIENT_API?.split('//')

const Personally: FC = () => {
	const {
		setUserInfo,
		userInfo,
		coverBg,
		dragLeaveHandler,
		dragStarHandler,
		dragDropHandler,
		isDragger,
		inputImageHandler,
		delCoverImage,
		onChangeBgHandler
	} = usePersonal()
	return (
		<div className={styles.personally__wrapper}>
			<div className={styles.personally__row}>
				<div className={styles.personally__first_column}>
					<div className={styles.personally__info}>
						<div className={styles.personally__info_row}>
							<div className={styles.personally_input}>
								<label htmlFor='user-name'>Имя</label>
								<div
									className={cn(styles.personally_input_wrapper, {
										[styles.focus]: userInfo.nameFocus
									})}
								>
									<input
										id='user-name'
										value={userInfo.name}
										type='text'
										placeholder='Введите имя'
										onChange={e => setUserInfo(prev => ({ ...prev, name: e.target.value }))}
										onFocus={() => setUserInfo(prev => ({ ...prev, nameFocus: true }))}
										onBlur={() => setUserInfo(prev => ({ ...prev, nameFocus: false }))}
									/>
								</div>
							</div>
							<div className={styles.personally_input}>
								<label htmlFor='user-email'>Ваша почта</label>
								<div
									className={cn(styles.personally_input_wrapper, {
										[styles.focus]: userInfo.emailFocus
									})}
								>
									<input
										value={userInfo.email}
										id='user-email'
										type='email'
										placeholder='Введите электронную почту'
										onChange={e => setUserInfo(prev => ({ ...prev, email: e.target.value }))}
										onFocus={() => setUserInfo(prev => ({ ...prev, emailFocus: true }))}
										onBlur={() => setUserInfo(prev => ({ ...prev, emailFocus: false }))}
									/>
									<span>
										<ActivateSvg />
									</span>
								</div>
							</div>
							<div className={styles.personally_input}>
								<label htmlFor='user-domain'>Ваш домен</label>
								<div
									className={cn(
										styles.personally_input_wrapper,
										{
											[styles.focus]: userInfo.domainFocus
										},
										styles.domain
									)}
								>
									<p className={styles.domain_name}>{clientPath && clientPath[1]}/</p>
									<input
										id='user-domain'
										type='text'
										placeholder='Ваш домен'
										onChange={e => setUserInfo(prev => ({ ...prev, domain: e.target.value }))}
										onFocus={() => setUserInfo(prev => ({ ...prev, domainFocus: true }))}
										onBlur={() => setUserInfo(prev => ({ ...prev, domainFocus: false }))}
									/>
								</div>
							</div>
							<div className={styles.personally_input}>
								<button className={styles.personally__button}>Купить собственный домен</button>
							</div>
							<div className={styles.personally_input}>
								<button
									type='button'
									className='btn-primary-opacity rounded-12xl transition-colors py-2'
								>
									Сохранить
								</button>
							</div>
						</div>
						<p className='text-text-12 text-black-300 font-light leading-4 mt-4'>
							Вы можете купить собственный домен. В случае покупке мы уберем упоминания о других
							продавцах из шапка вашего магазина, также вы получите собственную ссылку
						</p>
					</div>
				</div>
				<div className={styles.personally__second_column}>
					<UserAvatar />
				</div>
				<div className={styles.personally__bg_image}>
					<div className={styles.bg__header}>
						<h4>Измените обложку</h4>
						<div className={styles.bg_header_active}>
							<button onClick={delCoverImage} type='button'>
								Удалить
							</button>
							<button onClick={onChangeBgHandler} type='button'>
								Загрузить
							</button>
						</div>
					</div>
					<div className={styles.bg_image_image}>
						<div className={styles.bg_salesman_info}>
							<h5>Stopgame / shop</h5>
							<div className={styles.market_info}>
								<div className={styles.market__column}>
									<p>количество продавцов</p>
									<p>24</p>
								</div>
								<div className={styles.market__column}>
									<p>количество товаров</p>
									<p>2434</p>
								</div>
							</div>
						</div>

						<img src={coverBg ? fileReader(coverBg) : '/image/shopCover.png'} alt='bg-image' />
					</div>
					<Dragger
						dragDropHandler={dragDropHandler}
						dragLeaveHandler={dragLeaveHandler}
						dragStarHandler={dragStarHandler}
						inputImageHandler={inputImageHandler}
						isDragger={isDragger}
						description='(Макс. размер 960x430px)'
						label='cover-image'
					/>
				</div>
			</div>
			{coverBg && (
				<img
					id='image-size'
					className='absolute left-0 top-0 opacity-0 invisible'
					src={coverBg && fileReader(coverBg)}
					alt=''
				/>
			)}
		</div>
	)
}

export default Personally
