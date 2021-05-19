import characters, { characterData } from 'data/character/characters'
import masks, { maskData } from 'data/character/masks'

export interface characterState {
	mask: {
		equiped: maskData;
		filter: {
			[key: string]: boolean;
		}
	};
	character: characterData;
	armour: null;
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
	armour: null,
	equipment: null,
}

export default characterDefaultState