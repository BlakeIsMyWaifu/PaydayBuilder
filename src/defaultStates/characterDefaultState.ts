import armours, { armourData } from 'data/character/armours'
import characters, { characterData } from 'data/character/characters'
import equipment, { equipmentData } from 'data/character/equipment'
import masks, { maskData } from 'data/character/masks'

export interface characterState {
	mask: maskData;
	character: characterData;
	armour: armourData;
	equipment: {
		primary: equipmentData;
		secondary: equipmentData | null;
	};
}

const characterDefaultState: characterState = {
	mask: masks[0],
	character: characters[0],
	armour: armours[0],
	equipment: {
		primary: equipment[0],
		secondary: null
	},
}

export default characterDefaultState