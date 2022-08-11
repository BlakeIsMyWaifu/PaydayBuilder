import { InfoContainer } from 'components/Info/Info-Elements'
import { Weapon, WeaponData } from 'data/weapons/guns/weaponTypes'
import { Dispatch, FC, SetStateAction, useMemo } from 'react'
import { useBuildsStore } from 'state/useBuildsStore'
import { decodeArmoury } from 'utils/decodeBuild'

import { BuildTitle, StatusTitle } from './BuildsArmoury-Elements'

export interface BuildTab {
	id: number;
	name: string;
	active: boolean;
	data: Weapon[] | string;
}

interface BuildsArmouryProps {
	data: Record<string, Record<string, WeaponData>>;
	buildTabs: BuildTab[];
	setBuildTabs: Dispatch<SetStateAction<BuildTab[]>>;
	changeActiveTab: (tabId: number) => void;
}

const BuildsArmoury: FC<BuildsArmouryProps> = ({ data, buildTabs, setBuildTabs, changeActiveTab }) => {

	const activeBuildId = useBuildsStore(state => state.current)

	const slot = useMemo(() => Object.values(Object.values(data)[0])[0].inventorySlot, [data])

	const setActive = (build: BuildTab) => (): void => {
		const tabs = [...buildTabs]
		const index = tabs.findIndex(value => value.id === build.id)
		tabs[index].active = true

		if (typeof build.data === 'string') {
			const parameters: URLSearchParams = new URLSearchParams(build.data)
			const armouryData = parameters.get(slot === 'primary' ? 'ap' : 'as')
			const decoded = decodeArmoury(armouryData || '_', data)
			tabs[index].data = decoded.map(({ weapon, mods }, i) => ({
				id: i + 1,
				weaponFind: {
					name: weapon.name,
					type: weapon.weaponType,
					slot
				},
				modifications: mods || {}
			}))
		}

		setBuildTabs(tabs)
		changeActiveTab(build.id)
	}

	const setInactive = (build: BuildTab) => (): void => {
		const tabs = [...buildTabs]
		const index = tabs.findIndex(value => value.id === build.id)
		tabs[index].active = false
		setBuildTabs(tabs)
		changeActiveTab(activeBuildId)
	}

	return (
		<InfoContainer>
			<StatusTitle>Active</StatusTitle>
			{
				buildTabs.filter(build => build.active).map((build, i) => {
					return <BuildTitle key={`${build.name}-${i}`} onClick={setInactive(build)}>{build.name}</BuildTitle>
				})
			}
			<StatusTitle>Inactive</StatusTitle>
			{
				buildTabs.filter(build => !build.active).map((build, i) => {
					return <BuildTitle key={`${build.name}-${i}`} onClick={setActive(build)}>{build.name}</BuildTitle>
				})
			}
		</InfoContainer>
	)
}

export default BuildsArmoury