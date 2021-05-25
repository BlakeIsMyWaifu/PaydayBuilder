import melee, { meleeData } from "data/weapons/melees"

export interface weaponsState {
	primary: null;
	secondary: null;
	throwable: null;
	melee: meleeData;
}

const weaponsDefaultState: weaponsState = {
	primary: null,
	secondary: null,
	throwable: null,
	melee: melee[0]
}

export default weaponsDefaultState