import Container from 'components/Container'
import BuildSelector from 'components/Home/BuildSelector'
import BuildsPanel from 'components/Home/Panel/BuildsPanel'
import ControlPanel from 'components/Home/Panel/ControlPanel'
import Tabs from 'components/Home/Tabs'
import { type NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { encode } from 'querystring'
import { useState } from 'react'
import { FaCog } from 'react-icons/fa'
import styled from 'styled-components'
import { stringifyParams } from 'utils/stringifyUrl'
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

	const { query } = useRouter()

	const basePath = `https://${process.env.VERCEL_URL ?? 'www.pd2.dev'}`

	return (
		<>
			<Head>
				<title>Payday Builder</title>
				<meta property='og:image' content={`${basePath}/api/og?${stringifyParams(new URLSearchParams(encode(query)))}`} />
			</Head>

			<BuildsPanel
				toggleBuilds={toggleBuilds}
				setToggleBuilds={setToggleBuilds}
			/>

			<ControlPanel
				toggleControl={toggleControl}
				setToggleControl={setToggleControl}
			/>

			<Container
				desktopLayout={{
					columns: 'minmax(0, 2fr) 1fr 1fr 1fr',
					rows: 'calc(100% - 3rem) 3rem',
					areas: '"stats character weapons abilities" "version config config config"'
				}}
				mobileLayout={{
					columns: '1fr',
					rows: 'minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr) 3rem 3rem',
					areas: '"character" "weapons" "abilities" "version" "config"'
				}}
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

Home.getInitialProps = () => ({})

export default Home
