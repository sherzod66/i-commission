import { ThemeConfig } from 'antd'

export const antTheme: ThemeConfig = {
	components: {
		Select: {
			colorPrimary: '#FC5A40',
			colorPrimaryHover: '#FF8E7C',
			optionSelectedBg: '#FC5A40',
			optionSelectedColor: '#ffffff',
			borderRadius: 60,
			controlHeight: 40,
			colorBorder: '#07070707',
			colorBgContainer: 'transparent',
			lineWidth: 2,
			optionSelectedFontWeight: 600
		},
		Checkbox: {
			colorPrimary: '#FC5A40',
			colorPrimaryBorder: '#FC5A40',
			colorPrimaryHover: '#FF8E7C'
		},
		Button: {
			colorPrimary: '#FC5A40',
			colorPrimaryHover: '#FF8E7C'
		}
	}
}
