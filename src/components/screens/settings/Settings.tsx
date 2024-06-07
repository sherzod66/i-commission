'use client'
import { FC, useEffect, useState } from 'react'
import styles from './settings.module.scss'
import Switch from '@/components/ui/switch/Switch'
import Personally from './personally/Personally'
import Editor from './editor/Editor'

const Settings: FC = () => {
	const [sw, setSw] = useState<boolean>(true)
	return (
		<main className={styles.settings}>
			<div className={styles.settings__container}>
				<h1>Настройки</h1>
				<div className={styles.settings__switch}>
					<Switch
						setSw={setSw}
						sw={sw}
						swFirst='Персональные настройки'
						swSecond='Редактор товаров'
						fixed={true}
					/>
				</div>
				{sw ? <Personally /> : <Editor />}
			</div>
		</main>
	)
}

export default Settings
