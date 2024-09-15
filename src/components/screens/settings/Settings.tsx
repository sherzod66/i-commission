'use client'
import { FC, useState } from 'react'
import styles from './settings.module.scss'
import Switch from '@/components/ui/switch/Switch'
import { useMe } from '@/hooks/useMe'
import NotFound from '@/app/not-found'
import SettingsBar from './settings-bar/SettingsBar'

const Settings: FC = () => {
	const { data, error } = useMe()
	console.log(data?.me.permissions)
	return (
		
	)
}

export default Settings
