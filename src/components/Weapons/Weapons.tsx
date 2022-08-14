import primary from 'data/weapons/guns/primary'
import secondary from 'data/weapons/guns/secondary'
import { Slot, WeaponData } from 'data/weapons/guns/weaponTypes'
import useMountEffect from 'hooks/useMountEffect'
import { FC, useMemo, useState } from 'react'
import { useArmouryStore } from 'state/useArmouryStore'
import { useBuildsStore } from 'state/useBuildsStore'
import { useWeaponsStore } from 'state/useWeaponsStore'

import Armoury from './Armoury'
import { BuildTab } from './Armoury/BuildsArmoury/BuildsArmoury'
import WeaponBuy from './WeaponBuy'

interface WeaponsProps {
	slot: Slot;
}

const Weapons: FC<WeaponsProps> = ({ slot }) => {

	const data: Record<string, Record<string, WeaponData>> = useMemo(() => slot === 'primary' ? primary : secondary, [slot])

	const armoury = useArmouryStore(state => state[slot])
	const equippedWeaponId = useWeaponsStore(state => state[slot])
	const { current, builds } = useBuildsStore()

	const slotParameter = slot === 'primary' ? 'ap' : 'as'

	const [enableBuy, setEnableBuy] = useState(true)

	useMountEffect(() => {
		setEnableBuy(builds[current].data.includes(`&${slotParameter}=_&`))
	})

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