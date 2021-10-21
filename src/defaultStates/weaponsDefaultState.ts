import melee, { meleeData } from 'data/weapons/melees'
import throwable, { throwableData } from 'data/weapons/throwables'

export interface weaponsState {
	primary: number;
	secondary: number;
	throwable: throwableData;
	melee: meleeData;
}

const weaponsDefaultState: weaponsState = {
	primary: 0,
	secondary: 0,
	throwable: throwable[5],
	melee: melee[0]
}

export default weaponsDefaultState