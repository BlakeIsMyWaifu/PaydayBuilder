import { changeLeftFacing } from 'actions/settingsAction'
import CheckboxInput from 'components/CheckboxInput'
import { useAppDispatch, useAppSelector } from 'hooks'
import React from 'react'

import BuildIO from './BuildIO'
import JsonIO from './JsonIO/JsonIO'
import { Container, Setting, SettingsSingleLine, SettingsTitle, Title } from './SettingsPanel-Elements'

interface SettingsPanelProps {
	toggleSettings: boolean;
	setToggleSettings: React.Dispatch<React.SetStateAction<boolean>>;
}

const SettingsPanel: React.FC<SettingsPanelProps> = ({ toggleSettings, setToggleSettings }) => {

	const dispatch = useAppDispatch()

	const { leftFacing } = useAppSelector(state => state.settings)

	return (
		<Container toggle={toggleSettings}>

			<Title>Settings</Title>

			<Setting>
				<SettingsTitle>Import from pd2builder</SettingsTitle>
				<BuildIO />
			</Setting>

			<Setting>
				<SettingsTitle>Import / Export JSON</SettingsTitle>
				<JsonIO setToggleSettings={setToggleSettings} />
			</Setting>

			<SettingsSingleLine>
				<SettingsTitle>Left Facing Weapons</SettingsTitle>
				<CheckboxInput defaultState={leftFacing} callback={isToggled => dispatch(changeLeftFacing(isToggled))} />
			</SettingsSingleLine>

		</Container>
	)
}

export default SettingsPanel
