import { ClosePanel, Container, PanelContent, Title, TopWrapper } from 'components/Home/Panel/panelElements'
import { type Dispatch, type FC, type SetStateAction } from 'react'
import { FaPlusSquare } from 'react-icons/fa'
import { useIsMobile } from 'state/settingsContext'
import { defaultBuild, useBuildsStore } from 'state/useBuildsStore'
import { trpc } from 'utils/trpc'

import { Builds, NewBuild } from './buildsPanelElements'
import CloudBuilds from './CloudBuilds'
import LocalBuilds from './LocalBuilds'
import useBuildImport from 'hooks/useBuildImport'

interface BuildsPanelProps {
	toggleBuilds: boolean;
	setToggleBuilds: Dispatch<SetStateAction<BuildsPanelProps['toggleBuilds']>>;
}

const BuildsPanel: FC<BuildsPanelProps> = ({ toggleBuilds, setToggleBuilds }) => {

	const session = trpc.session.getSession.useQuery()

	const addBuild = useBuildsStore(state => state.addBuild)
	const importBuild = useBuildImport()

	const isMobile = useIsMobile()

	return (
		<Container toggle={toggleBuilds}>
			<PanelContent>

				<TopWrapper>
					<Title>Builds</Title>

					{isMobile && <ClosePanel onClick={() => setToggleBuilds(false)} />}
				</TopWrapper>

				<Builds>

					{session.data && <CloudBuilds />}

					<LocalBuilds setToggleBuilds={setToggleBuilds} />

					<NewBuild title='New Build' onClick={() => {
						addBuild(true)
						importBuild(defaultBuild, false)
					}}> <FaPlusSquare /> </NewBuild>

				</Builds>
			</PanelContent>
		</Container>
	)
}

export default BuildsPanel
