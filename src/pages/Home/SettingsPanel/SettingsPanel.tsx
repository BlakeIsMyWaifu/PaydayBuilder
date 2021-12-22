import { changeLeftFacing } from 'actions/settingsAction'
import CheckboxInput from 'components/CheckboxInput'
import { Container, Title } from 'components/HomeSidePanel'
import TextInput from 'components/TextIO/TextInput'
import TextOutput from 'components/TextIO/TextOutput'
import { useAppDispatch, useAppSelector } from 'hooks'
import useBuildURLExport from 'hooks/useBuildURLExport'
import useBuildURLImport from 'hooks/useBuildURLImport'
import React, { useState } from 'react'

import JsonIO from './JsonIO'
import { Setting, SettingsSingleLine, SettingsTitle } from './SettingsPanel-Elements'

interface SettingsPanelProps {
	toggleSettings: boolean;
	setToggleSettings: React.Dispatch<React.SetStateAction<boolean>>;
}

const SettingsPanel: React.FC<SettingsPanelProps> = ({ toggleSettings, setToggleSettings }) => {

	const dispatch = useAppDispatch()

	const { leftFacing } = useAppSelector(state => state.settings)

	const build = useBuildURLExport()

	const [loadedBuild, setLoadedBuild] = useState<string>('')
	useBuildURLImport(loadedBuild)

	return (
		<Container toggle={toggleSettings}>

			<Title>Settings</Title>

			<Setting>
				<SettingsTitle>Import from URL</SettingsTitle>
				<TextInput
					placeholder='Example: https://pd2builder.netlify.app/?s=10-90-90-900'
					callback={input => {
						setLoadedBuild(input)
						setToggleSettings(false)
					}}
				/>
			</Setting>

			<Setting>
				<SettingsTitle>Export to URL</SettingsTitle>
				<TextOutput value={`https://pd2builder.netlify.app?${build}`} callback={value => navigator.clipboard.writeText(value)} />
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
