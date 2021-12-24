import { addBuild, changeBuild, removeBuild, updateName } from 'actions/buildsAction'
import buildsDefaultState from 'defaultStates/buildsDefaultState'
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks'
import useBuildURLExport from 'hooks/useBuildURLExport'
import useBuildURLImport from 'hooks/useBuildURLImport'
import { Container, Title } from 'pages/Home/Panel/Panel-Elements'
import React, { useState } from 'react'
import { FaFolderOpen, FaPlusSquare, FaTrash, FaUndoAlt } from 'react-icons/fa'

import { BuildButton, BuildName, BuildWrapper, Builds, NewBuild } from './BuildsPanel-Elements'

interface BuildsPanelProps {
	toggleBuilds: boolean;
	setToggleBuilds: React.Dispatch<React.SetStateAction<boolean>>;
}

const BuildsPanel: React.FC<BuildsPanelProps> = ({ toggleBuilds, setToggleBuilds }) => {

	const dispatch = useAppDispatch()

	const { current, builds } = useAppSelector(state => state.builds)

	const currentBuild = useBuildURLExport({ simple: false })

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
							{
								id !== current && <BuildButton title='Open Build' onClick={() => {
									dispatch(changeBuild({
										id,
										currentData: currentBuild
									}))
									setLoadedBuild(data)
									setToggleBuilds(false)
								}}> <FaFolderOpen /> </BuildButton>
							}
							{
								id !== current && <BuildButton title='Delete Build' onClick={() => {
									if (current !== id) {
										dispatch(removeBuild(id))
									}
								}}> <FaTrash /> </BuildButton>
							}
							{
								id === current && <BuildButton title='Reset Build' onClick={() => {
									dispatch(changeBuild({
										id,
										currentData: buildsDefaultState.builds[0].data
									}))
									setLoadedBuild(builds[current].data)
								}}> <FaUndoAlt /> </BuildButton>
							}
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
