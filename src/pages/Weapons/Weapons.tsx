import primary from 'data/weapons/guns/primary'
import secondary from 'data/weapons/guns/secondary'
import { Slot, WeaponData } from 'data/weapons/guns/weaponTypes'
import { useAppSelector } from 'hooks/reduxHooks'
import React, { useMemo, useState } from 'react'

import Armoury from './Armoury'
import { BuildTab } from './Armoury/BuildsArmoury/BuildsArmoury'
import WeaponBuy from './WeaponBuy'

interface WeaponsProps {
	slot: Slot;
}

const Weapons: React.FC<WeaponsProps> = ({ slot }) => {

	const data: Record<string, Record<string, WeaponData>> = useMemo(() => slot === 'primary' ? primary : secondary, [slot])

	const armoury = useAppSelector(state => state.armoury[slot])

	const [enableBuy, setEnableBuy] = useState<boolean>(!(Object.keys(armoury).length - 1))

	const { current, builds } = useAppSelector(state => state.builds)

	const slotParameter = slot === 'primary' ? 'ap' : 'as'
	const [buildTabs, setBuildTabs] = useState<BuildTab[]>(Object.values(builds).map(build => ({
		...build,
		name: build.name || 'New Build',
		active: false
	})).filter(build => build.id !== current && !build.data.includes(`&${slotParameter}=_&`)))
	const [activeTabId, setActiveTabId] = useState<number>(builds[current].id)

	return enableBuy ?
		<WeaponBuy
			slot={slot}
			data={data}
			setEnableBuy={setEnableBuy}
		/> :
		<Armoury
			slot={slot}
			data={data}
			setEnableBuy={setEnableBuy}
			buildTabs={buildTabs}
			setBuildTabs={setBuildTabs}
			activeTabId={activeTabId}
			setActiveTabId={setActiveTabId}
		/>
}

export default Weapons