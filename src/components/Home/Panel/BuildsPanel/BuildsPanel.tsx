import { Container, PanelContent, Title } from 'components/Home/Panel/Panel-Elements'
import { Dispatch, FC, SetStateAction } from 'react'
import { FaFolderOpen, FaPlusSquare, FaTrash, FaUndoAlt } from 'react-icons/fa'
import { defaultBuild, useBuildsStore } from 'state/useBuildsStore'
import { blue, red } from 'utils/colours'

import { BuildButton, BuildName, BuildWrapper, Builds, NewBuild } from './BuildsPanel-Elements'

interface BuildsPanelProps {
	toggleBuilds: boolean;
	setToggleBuilds: Dispatch<SetStateAction<boolean>>;
}

const BuildsPanel: FC<BuildsPanelProps> = ({ toggleBuilds, setToggleBuilds }) => {

	const { current, builds, addBuild, removeBuild, updateName, changeBuild, importBuild } = useBuildsStore()

	return (
		<Container toggle={toggleBuilds}>
			<PanelContent>

				<Title>Builds</Title>

				<Builds>
					{
						Object.values(builds).map(({ id, name, data }) => {
							const isLastBuild = Object.keys(builds).length > 1
							return <BuildWrapper key={id}>
								<BuildName
									type='text'
									placeholder='New Build . . .'
									value={name}
									onChange={event => {
										updateName(id, event.target.value)
									}}
								/>
								{
									id !== current ? <BuildButton title='Open Build' onClick={() => {
										changeBuild(id)
										importBuild(data, false)
										setToggleBuilds(false)
									}}> <FaFolderOpen /> </BuildButton> : <BuildButton title='Reset Build' onClick={() => {
										importBuild(defaultBuild, false)
									}}> <FaUndoAlt /> </BuildButton>
								}
								<BuildButton
									title='Delete Build'
									colour={isLastBuild ? blue : red}
									onClick={() => {
										if (isLastBuild) {
											const prevId = Object.values(builds).reverse().find(value => value.id !== id)?.id ?? 0
											changeBuild(prevId)
											removeBuild(id)
											importBuild(builds[prevId].data, false)
										}
									}}
								> <FaTrash /> </BuildButton>
							</BuildWrapper>
						})
					}
				</Builds>

				<NewBuild title='New Build' onClick={() => {
					addBuild(true)
					importBuild(defaultBuild, false)
				}}> <FaPlusSquare /> </NewBuild>

			</PanelContent>
		</Container>
	)
}

export default BuildsPanel
