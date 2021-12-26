import { addBuild, changeBuild, removeBuild, updateName } from 'actions/buildsAction'
import { defaultBuild } from 'defaultStates/buildsDefaultState'
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks'
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

	const [loadedBuild, setLoadedBuild] = useState<string>('')
	useBuildURLImport(loadedBuild, false)

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
									dispatch(changeBuild({ id }))
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
									setLoadedBuild(defaultBuild)
								}}> <FaUndoAlt /> </BuildButton>
							}
						</BuildWrapper>
					})
				}
			</Builds>

			<NewBuild title='New Build' onClick={() => {
				dispatch(addBuild({ changeToNewBuild: true }))
				setLoadedBuild(defaultBuild)
			}}> <FaPlusSquare /> </NewBuild>

		</Container>
	)
}

export default BuildsPanel
