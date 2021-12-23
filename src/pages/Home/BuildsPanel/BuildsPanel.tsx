import { addBuild, changeBuild, removeBuild, updateName } from 'actions/buildsAction'
import { Container, Title } from 'components/HomeSidePanel'
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks'
import useBuildURLExport from 'hooks/useBuildURLExport'
import useBuildURLImport from 'hooks/useBuildURLImport'
import React, { useState } from 'react'
import { FaFolderOpen, FaPlusSquare, FaTrash } from 'react-icons/fa'

import { BuildName, BuildWrapper, Builds, Delete, NewBuild, OpenBuild } from './BuildsPanel-Elements'

interface BuildsPanelProps {
	toggleBuilds: boolean;
	setToggleBuilds: React.Dispatch<React.SetStateAction<boolean>>;
}

const BuildsPanel: React.FC<BuildsPanelProps> = ({ toggleBuilds, setToggleBuilds }) => {

	const dispatch = useAppDispatch()

	const { current, builds } = useAppSelector(state => state.builds)

	const currentBuild = useBuildURLExport()

	const [loadedBuild, setLoadedBuild] = useState<string>('')
	useBuildURLImport(loadedBuild)

	return (
		<Container toggle={toggleBuilds}>

			<Title>Builds</Title>

			<Builds>
				{
					Object.values(builds).map(({ id, name, data }) => {
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
							{id !== current && <OpenBuild title='Open Build' onClick={() => {
								dispatch(changeBuild({
									id,
									currentData: currentBuild
								}))
								setLoadedBuild(data)
								setToggleBuilds(false)
							}}> <FaFolderOpen /> </OpenBuild>}
							{id !== current && <Delete title='Delete Build' onClick={() => {
								if (current !== id) {
									dispatch(removeBuild(id))
								}
							}}> <FaTrash /> </Delete>}
						</BuildWrapper>
					})
				}
			</Builds>

			<NewBuild title='New Build' onClick={() => {
				dispatch(addBuild())
			}}> <FaPlusSquare /> </NewBuild>

		</Container>
	)
}

export default BuildsPanel
