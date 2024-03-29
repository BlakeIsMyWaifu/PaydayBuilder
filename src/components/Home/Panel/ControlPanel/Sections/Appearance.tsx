import { type FC } from 'react'
import { useIsLeftFacing } from 'state/settingsContext'
import { useSettingsStore } from 'state/useSettingsStore'

import CheckboxInput from '../CheckboxInput'
import { Section, SectionTitle, SettingsSingleLine, SettingTitle } from './sectionsElements'

const Appearance: FC = () => {

	const toggleLeftFacing = useSettingsStore(state => state.toggleLeftFacing)

	const leftFacing = useIsLeftFacing()

	return (
		<Section>
			<SectionTitle>Appearance</SectionTitle>

			<SettingsSingleLine>
				<SettingTitle>Left Facing Weapons</SettingTitle>
				<CheckboxInput state={leftFacing} callback={toggleLeftFacing} />
			</SettingsSingleLine>
		</Section>
	)
}

export default Appearance