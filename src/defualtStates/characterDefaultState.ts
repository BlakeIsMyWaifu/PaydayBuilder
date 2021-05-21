import characters, { characterData } from 'data/character/characters'
import masks, { maskData } from 'data/character/masks'
import armours, { armourData } from 'data/character/armours'

export interface characterState {
	mask: {
		equiped: maskData;
		filter: {
			[key: string]: boolean;
		}
	};
	character: characterData;
	armour: armourData;
	equipment: null;
}

const characterDefaultState: characterState = {
	mask: {
		equiped: masks[0],
		filter: {
			normal: false,
			community: false,
			dlc: false,
			event: false,
			collaboration: false,
			infamous: false
		}
	},
	character: characters[0],
	armour: armours[0],
	equipment: null,
}

export default characterDefaultState