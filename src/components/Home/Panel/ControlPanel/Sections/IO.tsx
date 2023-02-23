import { Dispatch, FC, SetStateAction } from 'react'
import { defaultBuild, useBuildsStore } from 'state/useBuildsStore'
import { isDev } from 'utils/isDev'

import TextInput from '../TextIO/TextInput'
import TextOutput from '../TextIO/TextOutput'
import { Section, SectionTitle, Setting, SettingTitle } from './sectionsElements'

interface IOProps {
	setToggleControl: Dispatch<SetStateAction<boolean>>;
}

const IO: FC<IOProps> = ({ setToggleControl }) => {

	const { current, builds, importBuild } = useBuildsStore()

	return (
		<Section>
			<SectionTitle>Import / Export</SectionTitle>

			<Setting>
				<SettingTitle>Import from URL</SettingTitle>
				<TextInput
					placeholder='Example: https://pd2builder.netlify.app/?s=10-90-90-900'
					callback={input => {
						importBuild(input, builds[current].data !== defaultBuild)
						setToggleControl(false)
					}}
				/>
			</Setting>

			{
				isDev() && <Setting>
					<SettingTitle>Export to localhost</SettingTitle>
					<TextOutput value={`localhost:3000/?${builds[current].data}`} callback={value => navigator.clipboard.writeText(value)} />
				</Setting>
			}

			<Setting>
				<SettingTitle>Export to pd2.dev</SettingTitle>
				<TextOutput value={`https://pd2.dev/?${builds[current].data}`} callback={value => navigator.clipboard.writeText(value)} />
			</Setting>

			<Setting>
				<SettingTitle>Export to pd2builder</SettingTitle>
				<TextOutput value={`https://pd2builder.netlify.app/?${builds[current].data.split('&m=')[0]}`} callback={value => navigator.clipboard.writeText(value)} />
			</Setting>
		</Section>
	)
}

export default IO