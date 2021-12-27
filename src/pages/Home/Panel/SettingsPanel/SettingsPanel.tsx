import { changeLeftFacing } from 'actions/settingsAction'
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks'
import useBuildURLExport from 'hooks/useBuildURLExport'
import { LoadedBuild } from 'pages/Home/Home'
import { Container, Title } from 'pages/Home/Panel/Panel-Elements'
import TextInput from 'pages/Home/Panel/SettingsPanel/TextIO/TextInput'
import TextOutput from 'pages/Home/Panel/SettingsPanel/TextIO/TextOutput'
import React from 'react'

import CheckboxInput from './CheckboxInput'
import JsonIO from './JsonIO'
import { Setting, SettingsSingleLine, SettingsTitle } from './SettingsPanel-Elements'

interface SettingsPanelProps {
	toggleSettings: boolean;
	setToggleSettings: React.Dispatch<React.SetStateAction<boolean>>;
	setLoadedBuild: React.Dispatch<React.SetStateAction<LoadedBuild>>
}

const SettingsPanel: React.FC<SettingsPanelProps> = ({ toggleSettings, setToggleSettings, setLoadedBuild }) => {

	const dispatch = useAppDispatch()

	const { leftFacing } = useAppSelector(state => state.settings)
	const { current, builds } = useAppSelector(state => state.builds)

	const buildSimple = useBuildURLExport({ simple: true })

	return (
		<Container toggle={toggleSettings}>

			<Title>Settings</Title>

			<Setting>
				<SettingsTitle>Import from URL</SettingsTitle>
				<TextInput
					placeholder='Example: https://pd2builder.netlify.app/?s=10-90-90-900'
					callback={input => {
						setLoadedBuild({ data: input, addNewBuild: true })
						setToggleSettings(false)
					}}
				/>
			</Setting>

			<Setting>
				<SettingsTitle>Export to pd2.dev</SettingsTitle>
				<TextOutput value={`https://pd2.dev/?${builds[current].data}`} callback={value => navigator.clipboard.writeText(value)} />
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
