import { changeLeftFacing } from 'actions/settingsAction'
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks'
import useBuildURLExport from 'hooks/useBuildURLExport'
import useBuildURLImport from 'hooks/useBuildURLImport'
import { Container, Title } from 'pages/Home/Panel/Panel-Elements'
import TextInput from 'pages/Home/Panel/SettingsPanel/TextIO/TextInput'
import TextOutput from 'pages/Home/Panel/SettingsPanel/TextIO/TextOutput'
import React, { useState } from 'react'

import CheckboxInput from './CheckboxInput'
import JsonIO from './JsonIO'
import { Setting, SettingsSingleLine, SettingsTitle } from './SettingsPanel-Elements'

interface SettingsPanelProps {
	toggleSettings: boolean;
	setToggleSettings: React.Dispatch<React.SetStateAction<boolean>>;
}

const SettingsPanel: React.FC<SettingsPanelProps> = ({ toggleSettings, setToggleSettings }) => {

	const dispatch = useAppDispatch()

	const { leftFacing } = useAppSelector(state => state.settings)

	const buildSimple = useBuildURLExport({ simple: true })
	const buildNormal = useBuildURLExport({ simple: false })

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
				<SettingsTitle>Export to pd2.dev</SettingsTitle>
				<TextOutput value={`https://pd2.dev/?${buildNormal}`} callback={value => navigator.clipboard.writeText(value)} />
			</Setting>

			<Setting>
				<SettingsTitle>Export to pd2builder</SettingsTitle>
				<TextOutput value={`https://pd2builder.netlify.app/?${buildSimple}`} callback={value => navigator.clipboard.writeText(value)} />
			</Setting>

			<Setting>
				<SettingsTitle>Import / Export JSON</SettingsTitle>
				<JsonIO setToggleSettings={setToggleSettings} />
			</Setting>

			<SettingsSingleLine>
				<SettingsTitle>Left Facing Weapons</SettingsTitle>
				<CheckboxInput defaultState={leftFacing} callback={isToggled => dispatch(changeLeftFacing(isToggled))} />
			</SettingsSingleLine>

		</Container >
	)
}

export default SettingsPanel
