import armours, { armourData } from 'data/character/armours'
import characters, { characterData } from 'data/character/characters'
import equipment, { equipmentData } from 'data/character/equipment'
import masks, { maskData } from 'data/character/masks'

export interface characterState {
	mask: {
		equiped: maskData;
		filter: {
			[key: string]: boolean;
		}
	};
	character: characterData;
	armour: armourData;
	equipment: {
		primary: equipmentData;
		secondary: equipmentData | null;
	};
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
	equipment: {
		primary: equipment[0],
		secondary: null
	},
}

export default characterDefaultState