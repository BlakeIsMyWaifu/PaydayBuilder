import assaultRifles from 'data/weapons/guns/primary/assaultRifles'
import pistols from 'data/weapons/guns/secondary/pistols'
import { Slot, Weapon } from 'data/weapons/guns/weaponTypes'

export type ArmouryState = Record<Slot, Record<number, Weapon>>

const armouryDefaultState: ArmouryState = {
	primary: {
		0: {
			id: 0,
			weapon: assaultRifles['AMCAR Rifle'],
			modifications: {}
		}
	},
	secondary: {
		0: {
			id: 0,
			weapon: pistols['Chimano 88 Pistol'],
			modifications: {}
		}
	}
}

export default armouryDefaultState