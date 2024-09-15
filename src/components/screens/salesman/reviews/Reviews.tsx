import { FC } from 'react'
import styles from './review.module.scss'
import cn from 'clsx'
import { Rate, Select } from 'antd'

const Reviews: FC = () => {
	return (
		<section className={styles.reviews}>
			<div className={styles.reviews__container}>
				<h3>Отзывы о продавце</h3>
				<div className={styles.reviews__indicators}>
					<div className={styles.reviews__column}>
						<div className={styles.reviews__grade}>4.8</div>
						<div className={styles.reviews__stars}>
							<div className={cn(styles.reviews__star, styles.five)}>
								<Rate
									className='text-orange-900 text-text-default'
									disabled
									defaultValue={5}
									allowHalf
								/>
								<p>1000</p>
								<div className={styles.reviews__line}>
									<span
										className={`block bg-orange-900 rounded-sm h-[4px]`}
										style={{ width: `66%` }}
									></span>
								</div>
							</div>
							<div className={cn(styles.reviews__star, styles.four)}>
								<Rate
									className='text-orange-300 text-text-default'
									disabled
									defaultValue={4}
									allowHalf
								/>
								<p>250</p>
								<div className={styles.reviews__line}>
									<span
										className={`block bg-orange-300 rounded-sm h-[4px]`}
										style={{ width: `50%` }}
									></span>
								</div>
							</div>
							<div className={cn(styles.reviews__star, styles.three)}>
								<Rate
									className='text-orange-200 text-text-default'
									disabled
									defaultValue={3}
									allowHalf
								/>
								<p>200</p>
								<div className={styles.reviews__line}>
									<span
										className={`block bg-orange-200 rounded-sm h-[4px]`}
										style={{ width: `40%` }}
									></span>
								</div>
							</div>
							<div className={cn(styles.reviews__star, styles.two)}>
								<Rate
									className='text-black-300 text-text-default'
									disabled
									defaultValue={2}
									allowHalf
								/>
								<p>50</p>
								<div className={styles.reviews__line}>
									<span
										className={`block bg-black-300 rounded-sm h-[4px]`}
										style={{ width: `30%` }}
									></span>
								</div>
							</div>
							<div className={cn(styles.reviews__star, styles.one)}>
								<Rate
									className='text-black-900 text-text-default'
									disabled
									defaultValue={1}
									allowHalf
								/>
								<p>23</p>
								<div className={styles.reviews__line}>
									<span
										className={`block bg-black-900 rounded-sm h-[4px]`}
										style={{ width: `15%` }}
									></span>
								</div>
							</div>
						</div>
					</div>
					<div className={styles.reviews__detail}>
						<p>1523 отзывы за 2 месяца</p>
						<button type='button'>Показать все</button>
					</div>
				</div>
				<div className={styles.reviews__sort}>
					<Select
						options={[{ label: 'Сначала положительные', value: 'positive' }]}
						defaultValue={'positive'}
						className='w-[273px] mobile:w-[240px]'
					/>
					<button type='button'>По дате</button>
				</div>
				<ul className={styles.reviews__list}>
					<li className={styles.review__list_item}>
						<div className={styles.user__avatar}>
							<img src='/image/avatars.png' alt='image' />
						</div>
						<div className={styles.reviews__review}>
							<div className={styles.reviews__rev}>
								<span>12.05.2024</span>
								<Rate
									className='text-black-900 text-text-sm hidden mobile:block'
									disabled
									character={<i className='icon-star' />}
									defaultValue={5}
									allowHalf
								/>
							</div>

							<p>Покуака: Chat GPT, подписка на год</p>
							<h4>
								Благодарю продавца, все условия сделки были соблюдены, аккаунты предоставил в
								секунду.
							</h4>
						</div>
						<div className={styles.review__time}>
							<span>12.05.2024</span>
							<Rate
								className='text-black-900 text-text-sm mobile:hidden'
								character={<i className='icon-star' />}
								disabled
								defaultValue={5}
								style={{ marginInlineEnd: '0px' }}
								allowHalf
							/>
							<h4>
								Благодарю продавца, все условия сделки были соблюдены, аккаунты предоставил в
								секунду.
							</h4>
						</div>
					</li>
					<li className={styles.review__list_item}>
						<div className={styles.user__avatar}>
							<img src='/image/avatars.png' alt='image' />
						</div>
						<div className={styles.reviews__review}>
							<div className={styles.reviews__rev}>
								<span>12.05.2024</span>
								<Rate
									className='text-black-900 text-text-sm hidden mobile:block'
									disabled
									character={<i className='icon-star' />}
									defaultValue={5}
									allowHalf
								/>
							</div>

							<p>Покуака: Chat GPT, подписка на год</p>
							<h4>
								Благодарю продавца, все условия сделки были соблюдены, аккаунты предоставил в
								секунду.
							</h4>
						</div>
						<div className={styles.review__time}>
							<span>12.05.2024</span>
							<Rate
								className='text-black-900 text-text-sm mobile:hidden'
								disabled
								character={<i className='icon-star' />}
								defaultValue={5}
								allowHalf
							/>
							<h4>
								Благодарю продавца, все условия сделки были соблюдены, аккаунты предоставил в
								секунду.
							</h4>
						</div>
					</li>
					<li className={styles.review__list_item}>
						<div className={styles.user__avatar}>
							<img src='/image/avatars.png' alt='image' />
						</div>
						<div className={styles.reviews__review}>
							<div className={styles.reviews__rev}>
								<span>12.05.2024</span>
								<Rate
									className='text-black-900 text-text-sm hidden mobile:block'
									disabled
									defaultValue={5}
									allowHalf
									character={<i className='icon-star' />}
								/>
							</div>

							<p>Покуака: Chat GPT, подписка на год</p>
							<h4>
								Благодарю продавца, все условия сделки были соблюдены, аккаунты предоставил в
								секунду.
							</h4>
						</div>
						<div className={styles.review__time}>
							<span>12.05.2024</span>
							<Rate
								className='text-black-900 text-text-sm mobile:hidden'
								disabled
								defaultValue={5}
								allowHalf
								character={<i className='icon-star' />}
							/>
							<h4>
								Благодарю продавца, все условия сделки были соблюдены, аккаунты предоставил в
								секунду.
							</h4>
						</div>
					</li>
					<li className={styles.review__list_item}>
						<div className={styles.user__avatar}>
							<img src='/image/avatars.png' alt='image' />
						</div>
						<div className={styles.reviews__review}>
							<div className={styles.reviews__rev}>
								<span>12.05.2024</span>
								<Rate
									className='text-black-900 text-text-sm hidden mobile:block'
									disabled
									defaultValue={5}
									allowHalf
									character={<i className='icon-star' />}
								/>
							</div>

							<p>Покуака: Chat GPT, подписка на год</p>
							<h4>
								Благодарю продавца, все условия сделки были соблюдены, аккаунты предоставил в
								секунду.
							</h4>
						</div>
						<div className={styles.review__time}>
							<span>12.05.2024</span>
							<Rate
								className='text-black-900 text-text-sm mobile:hidden'
								disabled
								value={3}
								allowHalf
								character={<i className='icon-star' />}
							/>
							<h4>
								Благодарю продавца, все условия сделки были соблюдены, аккаунты предоставил в
								секунду!
							</h4>
						</div>
					</li>
				</ul>
			</div>
		</section>
	)
}

export default Reviews
