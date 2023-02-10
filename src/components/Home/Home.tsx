import Container from 'components/Container'
import { FC, ReactElement, useState } from 'react'
import { FaCog } from 'react-icons/fa'

import BuildSelector from './BuildSelector'
import { ConfigContainer, ControlPanelButton, VersionContainer, VersionText } from './Home-Elements'
import BuildsPanel from './Panel/BuildsPanel'
import ControlPanel from './Panel/ControlPanel'
import Tabs from './Tabs'

export interface HoverInfo {
	title: string;
	description?: string[];
	table?: ReactElement;
}

const Home: FC = () => {

	const [toggleBuilds, setToggleBuilds] = useState(false)

	const [toggleControl, setToggleControl] = useState(false)

	return (
		<>
			<BuildsPanel
				toggleBuilds={toggleBuilds}
				setToggleBuilds={setToggleBuilds}
			/>

			<ControlPanel
				toggleControl={toggleControl}
				setToggleControl={setToggleControl}
			/>

			<Container
				columns='2fr 1fr 1fr 1fr'
				rows='calc(100% - 3rem) 3rem'
				areas='"stats character weapons abilities" "version config config config"'
				backButton={false}
			>

				<Tabs />

				<VersionContainer>
					<VersionText>Payday Version: 222</VersionText>
					<VersionText>Builder Version: 0.4.1</VersionText>
				</VersionContainer>

				<ConfigContainer>

					<BuildSelector
						toggleBuilds={toggleBuilds}
						setToggleBuilds={setToggleBuilds}
						setToggleControl={setToggleControl}
					/>

					<ControlPanelButton onClick={() => {
						setToggleBuilds(false)
						setToggleControl(!toggleControl)
					}}>
						<FaCog title='Control Panel' />
					</ControlPanelButton>

				</ConfigContainer>

			</Container>
		</>
	)
}

export default Home
