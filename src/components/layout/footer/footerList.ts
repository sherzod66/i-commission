type TFooterList = {
	sections: { name: string; path: string }[]
	support: { name: string; path: string }[]
}

export const footerList: TFooterList = {
	sections: [
		{ name: 'Аккаунты', path: '/accaunts' },
		{ name: 'Подарочные карты', path: '/gift-cards' },
		{ name: 'Свой магазин', path: '/my-shop' },
		{ name: 'Продавцы месяца', path: '/sellers' }
	],
	support: [
		{ name: 'Контакты', path: '/contacts' },
		{ name: 'Собственный магазина', path: '/my-shop' },
		{ name: 'Покупка товара', path: '/buy-product' },
		{ name: 'Вопросы и ответы', path: '/questions-and-answers' }
	]
}
