import { changeLeftFacing } from 'actions/settingsAction'
import CheckboxInput from 'components/CheckboxInput'
import { useAppDispatch, useAppSelector } from 'hooks'
import React from 'react'

import JsonIO from './JsonIO'
import { Container, Setting, SettingsSingleLine, SettingsTitle, Title } from './SettingsPanel-Elements'
import URLExport from './URLExport/URLExport'
import BuildIO from './URLImport'

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
				<SettingsTitle>Import from URL</SettingsTitle>
				<BuildIO setToggleSettings={setToggleSettings} />
			</Setting>

			<Setting>
				<SettingsTitle>Export to URL</SettingsTitle>
				<URLExport />
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
