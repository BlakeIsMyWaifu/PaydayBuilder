import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaThList } from 'react-icons/fa'
import { BuildSave, useBuildsStore } from 'state/useBuildsStore'

import { Arrow, BuildList, BuildName, Container, Wrapper } from './BuildSelector-Elements'

interface BuildSelectorProps {
	toggleBuilds: boolean;
	setToggleBuilds: Dispatch<SetStateAction<boolean>>;
	setToggleSettings: Dispatch<SetStateAction<boolean>>;
}

const BuildSelector: FC<BuildSelectorProps> = ({ toggleBuilds, setToggleBuilds, setToggleSettings }) => {

	const { current, builds, importBuild } = useBuildsStore()

	const changeBuild = useBuildsStore(state => state.changeBuild)
	const updateName = useBuildsStore(state => state.updateName)

	const [serverBuilds, setServerBuilds] = useState<Record<number, BuildSave>>({})

	useEffect(() => {
		setServerBuilds(builds)
	}, [setServerBuilds, builds])

	const getNextBuildId = (direction: number): number => {
		const currentIndex = Object.keys(builds).findIndex(value => +value === current),
			{ length } = Object.keys(builds),
			shiftedIndex = currentIndex + direction
		return shiftedIndex < 0 ? length - 1 : (shiftedIndex === length ? 0 : shiftedIndex)
	}

	const updateBuild = (index: number): void => {
		const build = Object.values(builds)[index]
		changeBuild(build.id)
		importBuild(build.data, false)
	}

	interface ArrowProps {
		title: string;
		onClick: () => void;
	}

	const arrowProps = (direction: 1 | -1): ArrowProps => ({
		title: `Switch to: ${Object.values(serverBuilds)[getNextBuildId(direction)]?.name ?? 'New Build . . .'}`,
		onClick: () => {
			updateBuild(getNextBuildId(direction))
		}
	})

	return (
		<Container>
			<Wrapper>
				<Arrow {...arrowProps(-1)}> <FaChevronLeft /> </Arrow>
				<BuildName
					type='text'
					placeholder='New Build . . .'
					value={builds[current].name}
					onChange={event => {
						updateName(current, event.target.value)
					}}
				/>
				<Arrow {...arrowProps(1)}> <FaChevronRight /> </Arrow>
				<BuildList title='Open Builds List' onClick={() => {
					setToggleSettings(false)
					setToggleBuilds(!toggleBuilds)
				}}><FaThList /></BuildList>
			</Wrapper>
		</Container>
	)
}

export default BuildSelector
