import { FC } from 'react'
import { useSettingsContext } from 'state/settingsContext'
import { useSettingsStore } from 'state/useSettingsStore'

import CheckboxInput from '../CheckboxInput/CheckboxInput'
import { Section, SectionTitle, SettingTitle, SettingsSingleLine } from '../ControlPanel-Elements'

const Appearance: FC = () => {

	const toggleLeftFacing = useSettingsStore(state => state.toggleLeftFacing)

	const { leftFacing } = useSettingsContext().state

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