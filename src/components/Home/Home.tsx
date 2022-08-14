import Container from 'components/Container'
import { useRouter } from 'next/router'
import { FC, ReactElement, useEffect, useState } from 'react'
import { FaCog } from 'react-icons/fa'
import { useBuildsStore } from 'state/useBuildsStore'

import BuildSelector from './BuildSelector'
import { ConfigContainer, SettingsButton, VersionContainer, VersionText } from './Home-Elements'
import BuildsPanel from './Panel/BuildsPanel'
import SettingsPanel from './Panel/SettingsPanel'
import Tabs from './Tabs/Tab'

export interface HoverInfo {
	title: string;
	description?: string[];
	table?: ReactElement;
}

const Home: FC = () => {

	const [toggleBuilds, setToggleBuilds] = useState(false)

	const [toggleSettings, setToggleSettings] = useState(false)

	const router = useRouter()

	const { current, builds } = useBuildsStore()

	useEffect(() => {
		router.push(`?${builds[current].data}`)
		// If router is added, it will endlessly loop
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [current, builds])

	return (
		<>
			<BuildsPanel
				toggleBuilds={toggleBuilds}
				setToggleBuilds={setToggleBuilds}
			/>

			<SettingsPanel
				toggleSettings={toggleSettings}
				setToggleSettings={setToggleSettings}
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
					<VersionText>Builder Version: 0.3.1</VersionText>
				</VersionContainer>

				<ConfigContainer>

					<BuildSelector
						toggleBuilds={toggleBuilds}
						setToggleBuilds={setToggleBuilds}
						setToggleSettings={setToggleSettings}
					/>

					<SettingsButton onClick={() => {
						setToggleBuilds(false)
						setToggleSettings(!toggleSettings)
					}}>
						<FaCog />
					</SettingsButton>

				</ConfigContainer>

			</Container>
		</>
	)
}

export default Home
