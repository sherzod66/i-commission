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
			paddingXXS: 20,
			contentPadding: '20px 40px 20px 40px',
			headerPadding: '16px 40px 16px 70px',
			fontSize: 20,
			fontFamily: 'var(--var-onest-sans)',
			borderRadiusLG: 20,
			colorTextHeading: '#191919'
		},
		Breadcrumb: {
			itemColor: '#707070'
		},
		Segmented: {
			trackBg: 'linear-gradient(90deg, #F6F6F6 38.91%, #F0F0F0 53.23%)',
			borderRadiusSM: 16,
			borderRadius: 16,
			fontFamily: 'var(--var-onest-sans)',
			fontSize: 20,
			controlHeight: 50
		}
	}
}
