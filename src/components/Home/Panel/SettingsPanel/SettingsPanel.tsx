import { Container, Title } from 'components/Home/Panel/Panel-Elements'
import TextInput from 'components/Home/Panel/SettingsPanel/TextIO/TextInput'
import TextOutput from 'components/Home/Panel/SettingsPanel/TextIO/TextOutput'
import { LoadedBuild } from 'hooks/useBuildURLImport'
import { Dispatch, FC, SetStateAction } from 'react'
import { FaGithub } from 'react-icons/fa'
import { useBuildsStore } from 'state/useBuildsStore'
import { useSettingsStore } from 'state/useSettingsStore'
import { isDev } from 'utils/isDev'

import CheckboxInput from './CheckboxInput'
import JsonIO from './JsonIO'
import { ContactIconWrapper, ContactLink, ContactText, Setting, SettingsPanelContent, SettingsSingleLine, SettingsTitle } from './SettingsPanel-Elements'

interface SettingsPanelProps {
	toggleSettings: boolean;
	setToggleSettings: Dispatch<SetStateAction<boolean>>;
	setLoadedBuild: Dispatch<SetStateAction<LoadedBuild>>;
}

const SettingsPanel: FC<SettingsPanelProps> = ({ toggleSettings, setToggleSettings, setLoadedBuild }) => {

	const leftFacing = useSettingsStore(state => state.leftFacing)
	const toggleLeftFacing = useSettingsStore(state => state.toggleLeftFacing)
	const { current, builds } = useBuildsStore()

	return (
		<Container toggle={toggleSettings}>
			<SettingsPanelContent>

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

				{
					isDev() && <Setting>
						<SettingsTitle>Export to localhost</SettingsTitle>
						<TextOutput value={`localhost:3000/?${builds[current].data}`} callback={value => navigator.clipboard.writeText(value)} />
					</Setting>
				}

				<Setting>
					<SettingsTitle>Export to pd2.dev</SettingsTitle>
					<TextOutput value={`https://pd2.dev/?${builds[current].data}`} callback={value => navigator.clipboard.writeText(value)} />
				</Setting>

				<Setting>
					<SettingsTitle>Export to pd2builder</SettingsTitle>
					<TextOutput value={`https://pd2builder.netlify.app/?${builds[current].data.split('&m=')[0]}`} callback={value => navigator.clipboard.writeText(value)} />
				</Setting>

				<Setting>
					<SettingsTitle>Import / Export JSON</SettingsTitle>
					<JsonIO setToggleSettings={setToggleSettings} />
				</Setting>

				<SettingsSingleLine>
					<SettingsTitle>Left Facing Weapons</SettingsTitle>
					<CheckboxInput defaultState={leftFacing} callback={toggleLeftFacing} />
				</SettingsSingleLine>

			</SettingsPanelContent>

			<ContactLink
				href='https://github.com/BlakeIsMyWaifu/PaydayBuilder'
				target='_blank'
				rel='noopener noreferrer'
			>
				<ContactIconWrapper>
					<FaGithub size='100%' />
				</ContactIconWrapper>
				<ContactText>This project is open source</ContactText>
				<ContactText>Click here to contribute</ContactText>
			</ContactLink>

		</Container >
	)
}

export default SettingsPanel
