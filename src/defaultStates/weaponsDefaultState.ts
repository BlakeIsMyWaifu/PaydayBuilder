import { MeleeList } from 'data/weapons/melees'
import { ThrowableList } from 'data/weapons/throwables'

export interface WeaponsState {
	primary: number;
	secondary: number;
	throwable: ThrowableList;
	melee: MeleeList;
}

const weaponsDefaultState: WeaponsState = {
	primary: 0,
	secondary: 0,
	throwable: 'Frag Grenade',
	melee: 'Weapon Butt'
}

export default weaponsDefaultState