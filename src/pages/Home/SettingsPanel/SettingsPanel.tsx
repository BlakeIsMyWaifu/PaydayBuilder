import { changeLeftFacing } from 'actions/settingsAction'
import CheckboxInput from 'components/CheckboxInput'
import { useAppDispatch, useAppSelector } from 'hooks'
import React from 'react'

import BuildIO from '../BuildIO/BuildIO'
import { Container, Setting, SettingsSingleLine, SettingsTitle, Title } from './SettingsPanel-Elements'

interface SettingsPanelProps {
	toggleSettings: boolean;
}

const SettingsPanel: React.FC<SettingsPanelProps> = ({ toggleSettings }) => {

	const dispatch = useAppDispatch()

	const { leftFacing } = useAppSelector(state => state.settings)

	return (
		<Container toggle={toggleSettings}>

			<Title>Settings</Title>

			<Setting>
				<SettingsTitle>Import from pd2builder</SettingsTitle>
				<BuildIO />
			</Setting>

			<SettingsSingleLine>
				<SettingsTitle>Left Facing Weapons</SettingsTitle>
				<CheckboxInput defaultState={leftFacing} callback={isToggled => dispatch(changeLeftFacing(isToggled))}/>
			</SettingsSingleLine>

		</Container>
	)
}

export default SettingsPanel
