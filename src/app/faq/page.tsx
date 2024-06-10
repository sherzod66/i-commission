'use client'
import Layout from '@/components/layout/Layout'
import styles from './faq.module.scss'
import { Collapse, CollapseProps } from 'antd'
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
		<Layout isShop={null}>
			<main className={styles.faq}>
				<div className={styles.faq__min}>
					<h1 className='text-mob-title text-center mb-10'>Вопросы и ответы</h1>
					<Collapse className='mb-6' bordered={false} expandIconPosition='end' items={faqItems} />
					<Collapse className='mb-6' bordered={false} expandIconPosition='end' items={faqItems2} />
					<Collapse className='mb-6' bordered={false} expandIconPosition='end' items={faqItems3} />
					<Collapse className='mb-6' bordered={false} expandIconPosition='end' items={faqItems4} />
					<Collapse className='mb-6' bordered={false} expandIconPosition='end' items={faqItems5} />
					<Collapse className='mb-6' bordered={false} expandIconPosition='end' items={faqItems6} />
					<Collapse bordered={false} expandIconPosition='end' items={faqItems7} />
				</div>
			</main>
		</Layout>
	)
}
