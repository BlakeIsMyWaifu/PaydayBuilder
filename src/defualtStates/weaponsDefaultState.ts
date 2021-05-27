import melee, { meleeData } from 'data/weapons/melees'
import throwable, { throwableData } from 'data/weapons/throwables'

export interface weaponsState {
	primary: null;
	secondary: null;
	throwable: throwableData;
	melee: meleeData;
}

const weaponsDefaultState: weaponsState = {
	primary: null,
	secondary: null,
	throwable: throwable[5],
	melee: melee[0]
}

export default weaponsDefaultState