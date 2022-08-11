import primary from 'data/weapons/guns/primary'
import secondary from 'data/weapons/guns/secondary'
import { Slot, WeaponData } from 'data/weapons/guns/weaponTypes'
import { FC, useMemo, useState } from 'react'
import { useArmouryStore } from 'state/useArmouryStore'
import { useBuildStore } from 'state/useBuildsStore'
import { useWeaponStore } from 'state/useWeaponStore'

import Armoury from './Armoury'
import { BuildTab } from './Armoury/BuildsArmoury/BuildsArmoury'
import WeaponBuy from './WeaponBuy'

interface WeaponsProps {
	slot: Slot;
}

const Weapons: FC<WeaponsProps> = ({ slot }) => {

	const data: Record<string, Record<string, WeaponData>> = useMemo(() => slot === 'primary' ? primary : secondary, [slot])

	const armoury = useArmouryStore(state => state[slot])
	const equippedWeaponId = useWeaponStore(state => state[slot])
	const { current, builds } = useBuildStore()

	const slotParameter = slot === 'primary' ? 'ap' : 'as'

	const [enableBuy, setEnableBuy] = useState<boolean>(!(Object.keys(armoury).length - 1))

	const [buildTabs, setBuildTabs] = useState<BuildTab[]>(Object.values(builds).map(build => ({
		...build,
		name: build.name || 'New Build',
		active: false
	})).filter(build => build.id !== current && !build.data.includes(`&${slotParameter}=_&`)))

	const [activeTabId, setActiveTabId] = useState<number>(builds[current].id)
	const [selectedWeaponId, setSelectedWeaponId] = useState<number>(armoury[equippedWeaponId].id)

	const changeActiveTab = (tabId: number): void => {
		setSelectedWeaponId(current === tabId ? equippedWeaponId : 1)
		setActiveTabId(tabId)
	}

	const armouryProps = { slot, data, setEnableBuy, buildTabs, setBuildTabs, activeTabId, changeActiveTab, selectedWeaponId, setSelectedWeaponId }

	return enableBuy ?
		<WeaponBuy
			slot={slot}
			data={data}
			setEnableBuy={setEnableBuy}
			setSelectedWeaponId={setSelectedWeaponId}
		/> :
		<Armoury {...armouryProps} />
}

export default Weapons