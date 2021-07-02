import assaultRifles from 'data/weapons/guns/primary/assaultRifles'
import pistols from 'data/weapons/guns/secondary/pistols'
import { weaponData } from 'data/weapons/guns/weaponTypes'
import melee, { meleeData } from 'data/weapons/melees'
import throwable, { throwableData } from 'data/weapons/throwables'

export interface weaponsState {
	primary: {
		equipped: weaponData;
		saved: weaponData[];
	};
	secondary: {
		equipped: weaponData;
		saved: weaponData[];
	};
	throwable: throwableData;
	melee: meleeData;
}

const weaponsDefaultState: weaponsState = {
	primary: {
		equipped: assaultRifles['AMCAR Rifle'],
		saved: []
	},
	secondary: {
		equipped: pistols['Chimano 88 Pistol'],
		saved: []
	},
	throwable: throwable[5],
	melee: melee[0]
}

export default weaponsDefaultState