import { type Dispatch, type FC, type SetStateAction, useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaThList } from 'react-icons/fa'
import { type BuildSave, useBuildsStore } from 'state/useBuildsStore'
import styled from 'styled-components'
import { blue, dim } from 'utils/colours'
import corner from 'utils/corner'

const Container = styled.span`
	width: 100%;
	display: flex;
	justify-content: center;
`

const Wrapper = styled(corner)`
	display: flex;
	background-color: ${dim};
	width: ${props => props.theme.isMobile ? '100%' : '30vw'};
	padding: 4px;
	height: 2.2rem;
	color: ${blue};
	background-size: 8px 8px;
`

const Arrow = styled.button`
	line-height: 2.2rem;
	font-size: 2.2rem;
`

const BuildName = styled.input`
	color: inherit;
	border: none;
	background: transparent;
	height: 100%;
	width: 100%;
	font-size: 2.2rem;
	text-align: center;
	text-transform: none;
	user-select: text;
	outline: 0;
	&:focus, &:hover {
		color: white;
	}
`

const BuildList = styled.button`
	height: 2.2rem;
	aspect-ratio: 1;
	font-size: 2.2rem;
`

interface ArrowProps {
	title: string;
	onClick: () => void;
}

interface BuildSelectorProps {
	toggleBuilds: boolean;
	setToggleBuilds: Dispatch<SetStateAction<boolean>>;
	setToggleControl: Dispatch<SetStateAction<boolean>>;
}

const BuildSelector: FC<BuildSelectorProps> = ({ toggleBuilds, setToggleBuilds, setToggleControl }) => {

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
						updateName(event.target.value)
					}}
				/>
				<Arrow {...arrowProps(1)}> <FaChevronRight /> </Arrow>
				<BuildList title='Open Builds List' onClick={() => {
					setToggleControl(false)
					setToggleBuilds(!toggleBuilds)
				}}><FaThList /></BuildList>
			</Wrapper>
		</Container>
	)
}

export default BuildSelector
