import { ThemeConfig } from 'antd'

export const antTheme: ThemeConfig = {
	components: {
		Select: {
			colorPrimary: '#FC5A40',
			colorPrimaryHover: '#FF8E7C',
			optionSelectedBg: '#FC5A40',
			optionSelectedColor: '#ffffff',
			colorBgElevated: '#f0f0f0',
			borderRadius: 60,
			borderRadiusLG: 20,
			borderRadiusSM: 20,
			controlHeight: 40,
			colorBorder: '#E3E3E3',
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
		},
		Collapse: {
			headerBg: '#ffffff',
			headerPadding: '20px 16px',
			fontSize: 18,
			fontFamily: 'var(--var-onest-sans)'
		}
	}
}
