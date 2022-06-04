import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks'
import { LoadedBuild } from 'hooks/useBuildURLImport'
import { Container, PanelContent, Title } from 'pages/Home/Panel/Panel-Elements'
import { Dispatch, FC, SetStateAction } from 'react'
import { FaFolderOpen, FaPlusSquare, FaTrash, FaUndoAlt } from 'react-icons/fa'
import { addBuild, changeBuild, defaultBuild, removeBuild, updateName } from 'slices/buildsSlice'
import { blue, red } from 'utils/colours'

import { BuildButton, BuildName, BuildWrapper, Builds, NewBuild } from './BuildsPanel-Elements'

interface BuildsPanelProps {
	toggleBuilds: boolean;
	setToggleBuilds: Dispatch<SetStateAction<boolean>>;
	setLoadedBuild: Dispatch<SetStateAction<LoadedBuild>>;
}

const BuildsPanel: FC<BuildsPanelProps> = ({ toggleBuilds, setToggleBuilds, setLoadedBuild }) => {

	const dispatch = useAppDispatch()

	const { current, builds } = useAppSelector(state => state.builds)

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
										dispatch(updateName({
											id,
											name: event.target.value
										}))
									}}
								/>
								{
									id !== current ? <BuildButton title='Open Build' onClick={() => {
										dispatch(changeBuild({ id }))
										setLoadedBuild({ data, addNewBuild: false })
										setToggleBuilds(false)
									}}> <FaFolderOpen /> </BuildButton> : <BuildButton title='Reset Build' onClick={() => {
										setLoadedBuild({ data: defaultBuild, addNewBuild: false })
									}}> <FaUndoAlt /> </BuildButton>
								}
								<BuildButton
									title='Delete Build'
									colour={isLastBuild ? blue : red}
									onClick={() => {
										if (isLastBuild) {
											const prevId = Object.values(builds).reverse().find(value => value.id !== id)?.id ?? 0
											dispatch(changeBuild({ id: prevId }))
											dispatch(removeBuild(id))
											setLoadedBuild({ data: builds[prevId].data, addNewBuild: false })
										}
									}}
								> <FaTrash /> </BuildButton>
							</BuildWrapper>
						})
					}
				</Builds>

				<NewBuild title='New Build' onClick={() => {
					dispatch(addBuild({ changeToNewBuild: true }))
					setLoadedBuild({ data: defaultBuild, addNewBuild: false })
				}}> <FaPlusSquare /> </NewBuild>

			</PanelContent>
		</Container>
	)
}

export default BuildsPanel
