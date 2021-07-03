import React from 'react'

import BuildIO from '../BuildIO/BuildIO'
import { Container, Setting, SettingsTitle, Title } from './SettingsPanel-Elements'

interface SettingsPanelComponent {
	toggleSettings: boolean;
}

const SettingsPanel: React.FC<SettingsPanelComponent> = ({ toggleSettings }) => {
	return (
		<Container toggle={toggleSettings}>

			<Title>Settings</Title>

			<Setting>
				<SettingsTitle>Import from pd2builder</SettingsTitle>
				<BuildIO />
			</Setting>

		</Container>
	)
}

export default SettingsPanel
