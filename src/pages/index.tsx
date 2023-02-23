import Container from 'components/Container'
import BuildSelector from 'components/Home/BuildSelector'
import BuildsPanel from 'components/Home/Panel/BuildsPanel'
import ControlPanel from 'components/Home/Panel/ControlPanel'
import Tabs from 'components/Home/Tabs'
import { NextPage } from 'next'
import { useState } from 'react'
import { FaCog } from 'react-icons/fa'
import styled from 'styled-components'
import { builderVersion, paydayVersion } from 'utils/version'

const ConfigContainer = styled.div`
	grid-area: config;
	display: flex;
	justify-content: right;
	align-items: center;
`

const ControlPanelButton = styled.button`
	height: 2.5rem;
	font-size: 2.5rem;
`

const VersionContainer = styled.div`
	grid-area: version;
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: flex-end;
	gap: 1vw;
`

const VersionText = styled.p`
	font-size: 1.2rem;
`

const Home: NextPage = () => {

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
				columns='minmax(0, 2fr) 1fr 1fr 1fr'
				rows='calc(100% - 3rem) 3rem'
				areas='"stats character weapons abilities" "version config config config"'
				backButton={false}
			>

				<Tabs />

				<VersionContainer>
					<VersionText>Payday Version: {paydayVersion}</VersionText>
					<VersionText>Builder Version: {builderVersion.join('.')}</VersionText>
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
