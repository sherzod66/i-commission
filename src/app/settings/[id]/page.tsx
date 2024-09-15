import {
	settingBarSellerList,
	settingBarUserList
} from '@/components/screens/settings/settings-bar/SettingBarList'

type Props = {
	params: { id: string }
}

export default function SettingsDashboard({ params }: Props) {
	const RenderComponent = settingBarUserList.find(elem => elem.path === params.id)
	const RenderComponent2 = settingBarSellerList.find(elem => elem.path === params.id)
	console.log(params.id)
	return (
		<>
			{RenderComponent && RenderComponent.component && <RenderComponent.component />}
			{RenderComponent2 && RenderComponent2.component && <RenderComponent2.component />}
		</>
	)
}
