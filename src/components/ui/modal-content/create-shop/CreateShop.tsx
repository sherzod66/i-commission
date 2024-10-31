'use client'
import { FC } from 'react'
import styles from './createShop.module.scss'
import { useCreateShop } from './useCreateShop'
import cn from 'clsx'
import ShopCreateImagePicker from './shop-image-picker/ShopCreateImagePicker'
import Loader from '../../loader/Loader'
import { Controller } from 'react-hook-form'

type TCreateShopInstruction = {
	image: string
	title: string
	description: string
}

type TCreateShopProps = {
	onToggleModal: () => void
}

const createShopInstruction: TCreateShopInstruction[] = [
	{
		description:
			'В ваши обязанности как владельца магазина входит добавление качественных товаров и своевременная выдача товара покупателям. Вы можете создавать и отслеживать товары на одноименной странице.',
		image: '/image/createShop1.png',
		title: 'Создавайте товары'
	},
	{
		description:
			'Отслеживание заказов - просто. Все заказы расположены в одном месте, откуда вы можете быстро выдавать товары и взаимодействовать с покупателем.',
		image: '/image/createShop2.png',
		title: 'Отслеживайте заказы'
	},
	{
		description:
			'Чувствуете что не справляетесь с наплывом заказов или вам нужна помощь с оформлением товаров? Вы всегда можете добавить совладельцев или работников через вкладку “участники” в настройках магазина.',
		image: '/image/createShop3.png',
		title: 'Приглашайте совладельцев'
	}
]

const CreateShop: FC<TCreateShopProps> = ({ onToggleModal }) => {
	const {
		page,
		onSetPage,
		setPage,
		control,
		errors,
		handleSubmit,
		onSubmit,
		register,
		data,
		uploadLoading,
		loading,
		refetch
	} = useCreateShop(onToggleModal)
	const onBack = () => {
		if (page === 1) onToggleModal()
		else setPage(page - 1)
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			{page >= 4 ? (
				<div className={styles.last__page}>
					<h4 className='text-text-default mb-4'>
						Последний шаг перед доступом в ваш личный кабинет.
					</h4>

					<div className={styles.shop__input_column}>
						<label htmlFor='shop-name'>Название</label>
						<div className='w-[323px] flex'>
							<Controller
								rules={{ required: 'Вы не ввели название' }}
								name='code'
								control={control}
								render={({ field: { onChange } }) => (
									<input
										className={styles.number__input}
										onChange={e => {
											onChange(e.target.value)
											refetch({ code: e.target.value })
										}}
										id='shop-name'
										placeholder='Comission shop #341'
										type='text'
									/>
								)}
							/>
							<div className='relative ml-2 w-6 h-8'>{loading && <Loader black={true} />}</div>
						</div>

						{errors.code && (
							<p className='text-orange-900 my-1 animate-fade' role='alert'>
								{errors.code?.message}
							</p>
						)}
					</div>
					<div className={styles.shop__input_column}>
						<label htmlFor='shop-description'>Краткое описание</label>
						<textarea
							{...register('displayName', { required: 'Вы не ввели описание', maxLength: 250 })}
							className={styles.number__input}
							id='shop-description'
							placeholder='Не более 250 символов.'
						/>
						{errors.displayName && (
							<p className='text-orange-900 my-1 animate-fade' role='alert'>
								{errors.displayName?.message}
							</p>
						)}
					</div>
					<div className={styles.show__input_row}>
						<div className={styles.row__column_first}>
							<ShopCreateImagePicker
								control={control}
								title='Аватарка магазина'
								maxHeight={500}
								maxWidth={500}
								minHeight={100}
								minWidth={100}
								controlKey='image'
								errors={errors}
							/>
						</div>
						<div className={styles.row__column_second}>
							<ShopCreateImagePicker
								control={control}
								maxHeight={500}
								maxWidth={1500}
								title='Обложка магазина'
								minHeight={300}
								minWidth={1200}
								controlKey='cover'
								errors={errors}
							/>
						</div>
					</div>
				</div>
			) : (
				<>
					<div className={styles.page__image}>
						<img
							draggable={false}
							src={createShopInstruction[page - 1].image}
							alt={createShopInstruction[page - 1].title}
						/>
					</div>
					<h5 className={styles.page__title}>{createShopInstruction[page - 1].title}</h5>
					<p className={styles.page__description}>{createShopInstruction[page - 1].description}</p>
				</>
			)}

			<nav className={styles.page__navigate}>
				<div className={styles.page__number}>
					<p>
						стр. {page} из {createShopInstruction.length + 1}
					</p>
				</div>
				<div className={styles.page__change}>
					<button onClick={onBack} type='button' className={styles.page__button}>
						{page === 1 ? 'Отмена' : 'Назад'}
					</button>
					{page < createShopInstruction.length + 1 && (
						<button
							onClick={onSetPage}
							type='button'
							className={cn(styles.page__button, styles.orange)}
						>
							Продолжить
						</button>
					)}
					{page === createShopInstruction.length + 1 && (
						<button
							onClick={onSetPage}
							type='submit'
							className={cn(styles.page__button, styles.orange)}
							disabled={loading || uploadLoading}
						>
							Готово
						</button>
					)}
				</div>
			</nav>
		</form>
	)
}

export default CreateShop
