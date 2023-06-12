import { type Slot, type WeaponData } from 'data/weapons/guns/weaponTypes'
import { type FC, useState } from 'react'
import { useArmouryStore } from 'state/useArmouryStore'
import { useBuildsStore } from 'state/useBuildsStore'
import { useWeaponsStore } from 'state/useWeaponsStore'

import Armoury from './Armoury'
import WeaponBuy from './WeaponBuy'

interface WeaponsProps {
	slot: Slot;
	data: Record<string, Record<string, WeaponData>>;
}

const Weapons: FC<WeaponsProps> = ({ slot, data }) => {

	const isPrimary = slot === 'primary'

	const armoury = useArmouryStore(state => state[slot])
	const equippedWeaponId = useWeaponsStore(state => state[slot])
	const { current, builds } = useBuildsStore()

	const [enableBuy, setEnableBuy] = useState(builds[current].data.includes(`&${isPrimary ? 'ap' : 'as'}=_&`))

	const [activeTabId, setActiveTabId] = useState(builds[current].id)
	const [selectedWeaponId, setSelectedWeaponId] = useState(armoury[equippedWeaponId].id)

	const changeActiveTab = (tabId: number) => {
		setSelectedWeaponId(current === tabId ? equippedWeaponId : 1)
		setActiveTabId(tabId)
	}

	return enableBuy ?
		<WeaponBuy
			slot={slot}
			data={data}
			setEnableBuy={setEnableBuy}
			setSelectedWeaponId={setSelectedWeaponId}
		/> :
		<Armoury
			slot={slot}
			data={data}
			setEnableBuy={setEnableBuy}
			activeTabId={activeTabId}
			changeActiveTab={changeActiveTab}
			selectedWeaponId={selectedWeaponId}
			setSelectedWeaponId={setSelectedWeaponId}
		/>
}

export default Weapons