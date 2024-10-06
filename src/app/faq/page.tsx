'use client'
import TgOpacityIcon from '@/assets/icon/TgOpacityIcon'
import styles from './faq.module.scss'
import { Collapse, CollapseProps } from 'antd'
import cn from 'clsx'

const text = `
  Да, у нас есть система скидок и акций для постоянных клиентов. Мы регулярно проводим специальные акции и предлагаем скидки на определенные товары или категории товаров для наших постоянных клиентов. Чтобы быть в курсе всех наших акций, подпишитесь на нашу рассылку или следите за обновлениями на нашем сайте. Благодарим вас за вашу лояльность и надеемся на долгосрочное сотрудничество!
`

const faqItems: CollapseProps['items'] = [
	{
		key: '1',
		label: 'Какие виды аккаунтов вы предлагаете в вашем интернет-магазине?',
		children: <p className={styles.content_text}>{text}</p>
	}
]

const faqItems2: CollapseProps['items'] = [
	{
		key: '2',
		label: 'Какие гарантии предоставляются на приобретенные аккаунты?',
		children: <p className={styles.content_text}>{text}</p>
	}
]
const faqItems3: CollapseProps['items'] = [
	{
		key: '3',
		label: 'Есть ли у вас система скидок или акций для постоянных клиентов?',
		children: text
	}
]
const faqItems4: CollapseProps['items'] = [
	{
		key: '4',
		label: 'Как происходит доставка информации о аккаунтах после их покупки?',
		children: <p className={styles.content_text}>{text}</p>
	}
]
const faqItems5: CollapseProps['items'] = [
	{
		key: '5',
		label: 'Каким образом происходит оплата заказа аккаунта?',
		children: <p className={styles.content_text}>{text}</p>
	}
]
const faqItems6: CollapseProps['items'] = [
	{
		key: '6',
		label: 'Какие виды аккаунтов вы предлагаете в вашем интернет-магазине?',
		children: <p className={styles.content_text}>{text}</p>
	}
]
const faqItems7: CollapseProps['items'] = [
	{
		key: '7',
		label: 'Какие гарантии предоставляются на приобретенные аккаунты?',
		children: <p className={styles.content_text}>{text}</p>
	}
]

export default function FaqPage() {
	return (
		<div className={styles.faq__row}>
			<div className={styles.first__column}>
				<Collapse className='mb-6' bordered={false} expandIconPosition='end' items={faqItems} />
				<Collapse className='mb-6' bordered={false} expandIconPosition='end' items={faqItems2} />
				<Collapse className='mb-6' bordered={false} expandIconPosition='end' items={faqItems3} />
				<Collapse className='mb-6' bordered={false} expandIconPosition='end' items={faqItems4} />
				<Collapse className='mb-6' bordered={false} expandIconPosition='end' items={faqItems5} />
				<Collapse className='mb-6' bordered={false} expandIconPosition='end' items={faqItems6} />
				<Collapse bordered={false} expandIconPosition='end' items={faqItems7} />
				<div className={styles.tg__support}>
					<a href='/fsa/' target='_blank' className={styles.link__wrapper}>
						<TgOpacityIcon />
						<div className={styles.have__question}>
							<h5>Остались вопросы? Задай их к нам в Телеграмме</h5>
							<p>Чат-бот поддержка в telegram</p>
						</div>
					</a>
				</div>
			</div>
			<div className={styles.second__bar}>
				<ul className={styles.bar__list}>
					<li className={cn(styles.bar__li, styles.black)}>Часто задаваемые</li>
					<li className={styles.bar__li}>Гарантии</li>
					<li className={styles.bar__li}>API Документация</li>
					<li className={styles.bar__li}>Политика конфиденциальности</li>
					<li className={styles.bar__li}>Обработка данных</li>
					<li className={styles.bar__li}>Другое</li>
				</ul>
			</div>
		</div>
	)
}
