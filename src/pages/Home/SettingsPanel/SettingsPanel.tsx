import React from 'react'

import BuildIO from '../BuildIO/BuildIO'
import { Container, Setting, SettingsTitle, Title } from './SettingsPanel-Elements'

const SettingsPanel: React.FC = () => {
	return (
		<Container>

			<Title>Settings</Title>

			<Setting>
				<SettingsTitle>Import from pd2builder</SettingsTitle>
				<BuildIO />
			</Setting>

		</Container>
	)
}

export default SettingsPanel
