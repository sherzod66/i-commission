import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const primary = '#F0F0F0'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		screens: {
			pk: { max: '1441px' },
			laptop: { max: '1024px' },
			tablet: { max: '768px' },
			'table-min': { max: '576px' },
			mobile: { max: '440px' },
			'mobile-sm': { max: '376px' }
		},
		fontSize: {
			title: '46px',
			'mob-title': '36px',
			'sub-title': '32px',
			'20px': '20px',
			'22px': '22px',
			'text-xl': '26px',
			'text-lg': '18px',
			'text-default': '16px',
			'text-sm': '14px',
			'text-12': '12px',
			'text-24': '24px',
			'64px': '64px'
		},
		colors: {
			transparent: 'transparent',
			primary,
			white: '#FFFFFF',
			blue: {
				'200': '#49A3F2'
			},
			error: '#FF0000',
			'dark-white': '#F6F6F6',
			f4f4: '#F4F4F4F4',
			line: '#E3E3E3',
			line2: '#E5E5E5',
			line3: '#cecece',
			'basket-round': '#EBEBEC',
			black: {
				'0.5': 'rgba(25, 27, 29, 0.4)',
				100: '#969696',
				150: '#F5F5F5',
				200: '#767676',
				300: '#707070',
				400: '#e8e8e8',
				450: '#898989',
				500: '#454545',
				800: '#21222A',
				850: '#3B3B3B',
				900: '#131313',
				950: '#000000'
			},
			orange: {
				100: '#FFEFEC',
				200: '#D2B4AF',
				300: '#FF8E7C',
				350: '#fc5540',
				400: '#ff5d5d',
				700: '#fc5a40',
				800: '#ff5353',
				900: '#FF5151'
			},
			yellow: {
				500: '#ffb800'
			}
		},
		extend: {
			flex: {
				header1: '0 1 51%',
				hamburger: '0 1 81%',
				full: '1 1 100%',
				'50%': '0 1 50%',
				'filter-first': '0 1 72.368%;',
				'filter-second': '0 1 25%;',
				'filter-33': '0 0 33.333%;'
			},
			spacing: {
				'1': '5px',
				'2': '10px',
				'3': '15px',
				'4': '20px',
				'5': '25px',
				'6': '30px',
				'7': '35px',
				'8': '40px',
				'9': '45px',
				'10': '50px',
				'11': '55px',
				'12': '60px',
				'13': '65px',
				'14': '70px',
				'15': '55px',
				'110': '110px'
			},
			zIndex: {
				1: '1',
				2: '2',
				3: '3',
				4: '4',
				5: '5'
			},
			height: {
				'100vh': '100vh'
			},
			width: {
				'auth-con': '580px'
			},
			boxShadow: {
				'box-default': '0px 2px 10px rgba(0, 0, 0, 0.06)',
				message: '0px 4px 20px rgba(0, 0, 0, 0.05)'
			},
			keyframes: {
				fade: {
					from: { opacity: '0' },
					to: { opacity: '1' }
				},
				scaleIn: {
					'0%': {
						opacity: '0',
						transform: 'scale(0.9)'
					},
					'50%': {
						opacity: '0.3'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)'
					}
				},
				message: {
					'0%': {
						transform: 'translateY(-100%)',
						opacity: '0'
					},

					'100%': {
						transform: 'translateY(0)',
						opacity: '1'
					}
				},
				messageOut: {
					'0%': {
						opacity: '1'
					},
					'50%': {
						opacity: '0'
					},
					'100%': {
						opacity: '0',
						height: '0px',
						fontSize: '0px',
						margin: '0px auto',
						padding: '0px',
						transform: 'translateY(-100%)'
					}
				}
			},
			animation: {
				fade: 'fade .5s ease-in-out',
				scaleIn: 'scaleIn .35s ease-in-out',
				message: 'message .35s ease-in-out',
				messageOut: 'messageOut 0.350s ease-in-out forwards'
			},
			transitionDuration: {
				DEFAULT: '300ms'
			},
			transitionTimingFunction: {
				DEFAULT: 'ease-in-out'
			},

			borderRadius: {
				'2xl': '10px',
				'4xl': '12.48px',
				'5xl': '16px',
				'6xl': '20px',
				'8xl': '30px',
				circle: '50%',
				'10xl': '40px',
				'12xl': '60px'
			}
		}
	},
	plugins: [
		plugin(({ addComponents, theme, addUtilities }) => {
			addComponents({
				'.btn-primary': {
					backgroundColor: theme('colors.orange.900'),
					color: theme('colors.white'),
					width: '100%',
					padding: '14px 0px',
					fontSize: '16px',
					textAlgin: 'center',
					'&:hover': {
						backgroundColor: theme('colors.orange.900')
					},
					'&:active': {
						backgroundColor: theme('colors.orange.300')
					}
				},
				'.btn-primary-opacity': {
					backgroundColor: 'transparent',
					color: theme('colors.orange.900'),
					border: `solid 1px ${theme('colors.orange.900')}`,
					width: '100%',
					padding: '14px 0px',
					fontSize: '16px',
					textAlgin: 'center',
					'&:hover': {
						backgroundColor: theme('colors.orange.900'),
						color: theme('colors.white')
					},
					'&:active': {
						backgroundColor: theme('colors.orange.300')
					}
				},
				'.input-default': {
					width: '100%',
					color: theme('colors.black.300'),
					backgroundColor: theme('colors.dark-white'),
					borderRadius: '16px',
					padding: '14px 20px',
					fontSize: '16px',
					border: '2px solid transparent',
					transition: 'border 0.3s ease-in-out 0s',
					'&:focus': {
						borderColor: theme('colors.orange.900')
					}
				},
				'.image-min': {
					width: '100%',
					height: '100%',
					objectFit: 'cover',
					objectPosition: 'center'
				},
				'.text-min': {
					whiteSpace: 'nowrap',
					overflow: 'hidden',
					textOverflow: 'ellipsis'
				},
				'.bright-button': {
					width: '100%',
					fontSize: '20px',
					borderRadius: '16px',
					backgroundColor: theme('colors.orange.800'),
					display: 'block',
					textAlign: 'center',
					padding: '16px 0px',
					fontWeight: '600',
					color: '#ffffff'
				}
			})
		})
	]
}
export default config
