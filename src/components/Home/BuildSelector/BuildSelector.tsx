import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks'
import { LoadedBuild } from 'hooks/useBuildURLImport'
import { Dispatch, FC, SetStateAction } from 'react'
import { FaChevronLeft, FaChevronRight, FaThList } from 'react-icons/fa'
import { changeBuild, updateName } from 'slices/buildsSlice'

import { Arrow, BuildList, BuildName, Container, Wrapper } from './BuildSelector-Elements'

interface BuildSelectorProps {
	toggleBuilds: boolean;
	setToggleBuilds: Dispatch<SetStateAction<boolean>>;
	setToggleSettings: Dispatch<SetStateAction<boolean>>;
	setLoadedBuild: Dispatch<SetStateAction<LoadedBuild>>;
}

const BuildSelector: FC<BuildSelectorProps> = ({ toggleBuilds, setToggleBuilds, setToggleSettings, setLoadedBuild }) => {

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

	interface ArrowProps {
		title: string;
		onClick: () => void;
	}

	const arrowProps = (direction: 1 | -1): ArrowProps => ({
		title: `Switch to: ${Object.values(builds)[getNextBuildId(direction)]?.name || 'New Build . . .'}`,
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
			</Wrapper>
		</Container>
	)
}

export default BuildSelector
