import { Slot, Weapon } from 'data/weapons/guns/weaponTypes'

export type ArmouryState = Record<Slot, Record<number, Weapon>>

const armouryDefaultState: ArmouryState = {
	primary: {
		0: {
			id: 0,
			weaponFind: {
				name: 'AMCAR Rifle',
				type: 'Assault Rifle',
				slot: 'primary'
			},
			modifications: {}
		}
	},
	secondary: {
		0: {
			id: 0,
			weaponFind: {
				name: 'Chimano 88 Pistol',
				type: 'Pistol',
				slot: 'secondary'
			},
			modifications: {}
		}
	}
}

export default armouryDefaultState