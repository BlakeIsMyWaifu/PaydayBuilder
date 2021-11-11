import melee, { MeleeData } from 'data/weapons/melees'
import throwable, { ThrowableData } from 'data/weapons/throwables'

export interface WeaponsState {
	primary: number;
	secondary: number;
	throwable: ThrowableData;
	melee: MeleeData;
}

const weaponsDefaultState: WeaponsState = {
	primary: 0,
	secondary: 0,
	throwable: throwable[5],
	melee: melee[0]
}

export default weaponsDefaultState