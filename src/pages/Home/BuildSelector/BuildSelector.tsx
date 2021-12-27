import { changeBuild, updateName } from 'actions/buildsAction'
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks'
import React from 'react'
import { FaChevronLeft, FaChevronRight, FaThList } from 'react-icons/fa'

import { LoadedBuild } from '../Home'
import { Arrow, BuildList, BuildName, Container } from './BuildSelector-Elements'

interface BuildSelectorProps {
	toggleBuilds: boolean;
	setToggleBuilds: React.Dispatch<React.SetStateAction<boolean>>;
	setToggleSettings: React.Dispatch<React.SetStateAction<boolean>>;
	setLoadedBuild: React.Dispatch<React.SetStateAction<LoadedBuild>>;
}

const BuildSelector: React.FC<BuildSelectorProps> = ({ toggleBuilds, setToggleBuilds, setToggleSettings, setLoadedBuild }) => {

	const dispatch = useAppDispatch()

	const { current, builds } = useAppSelector(state => state.builds)

	const getNextBuildId = (direction: number): number => {
		const currentIndex = Object.keys(builds).findIndex(value => +value === current),
			length = Object.keys(builds).length,
			shiftedIndex = currentIndex + direction,
			newIndex = shiftedIndex < 0 ? length - 1 : (shiftedIndex === length ? 0 : shiftedIndex)
		return newIndex
	}

	const updateBuild = (index: number): void => {
		const build = Object.values(builds)[index]
		dispatch(changeBuild({ id: build.id }))
		setLoadedBuild({ data: build.data, addNewBuild: false })
	}

	const arrowProps = (direction: 1 | -1) => ({
		title: `Switch to: ${Object.values(builds)[getNextBuildId(direction)]?.name || 'New Build . . .'}`,
		onClick: () => {
			updateBuild(getNextBuildId(direction))
		}
	})

	return (
		<Container>
			<Arrow {...arrowProps(-1)}> <FaChevronLeft /> </Arrow>
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
			<Arrow {...arrowProps(1)}> <FaChevronRight /> </Arrow>
			<BuildList title='Open Builds List' onClick={() => {
				setToggleSettings(false)
				setToggleBuilds(!toggleBuilds)
			}}><FaThList /></BuildList>
		</Container>
	)
}

export default BuildSelector
