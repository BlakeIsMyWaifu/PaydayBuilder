import { changeBuild, updateName } from 'actions/buildsAction'
import { useAppDispatch, useAppSelector } from 'hooks'
import useBuildURLExport from 'hooks/useBuildURLExport'
import useBuildURLImport from 'hooks/useBuildURLImport'
import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaThList } from 'react-icons/fa'

import { Arrow, BuildList, BuildName, Container } from './BuildSelector-Elements'

interface BuildSelectorProps {
	toggleBuilds: boolean;
	setToggleBuilds: React.Dispatch<React.SetStateAction<boolean>>;
	setToggleSettings: React.Dispatch<React.SetStateAction<boolean>>;
}

const BuildSelector: React.FC<BuildSelectorProps> = ({ toggleBuilds, setToggleBuilds, setToggleSettings }) => {

	const dispatch = useAppDispatch()

	const { current, builds } = useAppSelector(state => state.builds)

	const currentBuild = useBuildURLExport()

	const [loadedBuild, setLoadedBuild] = useState<string>('')
	useBuildURLImport(loadedBuild)

	const getNextBuildId = (direction: number): number => {
		const index = Object.keys(builds).findIndex(value => +value === current),
			length = Object.keys(builds).length,
			shiftedIndex = index + direction,
			newIndex = shiftedIndex < 0 ? length - 1 : (shiftedIndex === length ? 0 : shiftedIndex)
		return newIndex
	}

	const updateBuild = (index: number): void => {
		const build = Object.values(builds)[index]
		dispatch(changeBuild({
			id: build.id,
			currentData: currentBuild
		}))
		setLoadedBuild(build.data)
	}

	return (
		<Container>
			<Arrow title={`Switch to: ${Object.values(builds)[getNextBuildId(-1)]?.name || 'New Build . . .'}`} onClick={() => updateBuild(getNextBuildId(-1))}> <FaChevronLeft /> </Arrow>
			<BuildName
				type='text'
				placeholder='New Build . . .'
				value={builds[current].name}
				onChange={event => {
					dispatch(updateName({
						id: current,
						name: event.target.value
					}))
				}}
			/>
			<Arrow title={`Switch to: ${Object.values(builds)[getNextBuildId(1)]?.name || 'New Build . . .'}`} onClick={() => updateBuild(getNextBuildId(1))}> <FaChevronRight /> </Arrow>
			<BuildList title='Open Builds List' onClick={() => {
				setToggleSettings(false)
				setToggleBuilds(!toggleBuilds)
			}}><FaThList /></BuildList>
		</Container>
	)
}

export default BuildSelector
