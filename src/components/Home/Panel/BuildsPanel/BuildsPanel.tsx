import { Container, PanelContent, Title } from 'components/Home/Panel/panelElements'
import { Dispatch, FC, SetStateAction } from 'react'
import { FaPlusSquare } from 'react-icons/fa'
import { defaultBuild, useBuildsStore } from 'state/useBuildsStore'
import { trpc } from 'utils/trpc'

import { Builds, NewBuild } from './buildsPanelElements'
import CloudBuilds from './CloudBuilds'
import LocalBuilds from './LocalBuilds'

interface BuildsPanelProps {
	toggleBuilds: boolean;
	setToggleBuilds: Dispatch<SetStateAction<boolean>>;
}

const BuildsPanel: FC<BuildsPanelProps> = ({ toggleBuilds, setToggleBuilds }) => {

	const session = trpc.session.getSession.useQuery()

	const addBuild = useBuildsStore(state => state.addBuild)
	const importBuild = useBuildsStore(state => state.importBuild)

	return (
		<Container toggle={toggleBuilds}>
			<PanelContent>

				<Title>Builds</Title>

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
