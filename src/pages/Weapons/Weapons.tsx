import { Slot } from 'data/weapons/guns/weaponTypes'
import { useAppSelector } from 'hooks/reduxHooks'
import React, { useState } from 'react'

import Armoury from './Armoury'
import WeaponBuy from './WeaponBuy'

interface WeaponsProps {
	slot: Slot;
}

const Weapons: React.FC<WeaponsProps> = ({ slot }) => {

	const armoury = useAppSelector(state => state.armoury[slot])

	const [enableBuy, setEnableBuy] = useState<boolean>(!(Object.keys(armoury).length - 1))

	return enableBuy ?
		<WeaponBuy
			slot={slot}
			setEnableBuy={setEnableBuy}
		/> :
		<Armoury
			slot={slot}
			setEnableBuy={setEnableBuy}
		/>
}

export default Weapons