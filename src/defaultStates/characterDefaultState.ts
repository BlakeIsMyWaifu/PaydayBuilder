import armours, { ArmourData } from 'data/character/armours'
import characters, { CharacterData } from 'data/character/characters'
import equipment, { EquipmentData } from 'data/character/equipment'
import masks, { MaskData } from 'data/character/masks'

export interface CharacterState {
	mask: MaskData;
	character: CharacterData;
	armour: ArmourData;
	equipment: {
		primary: EquipmentData;
		secondary: EquipmentData | null;
	};
}

const characterDefaultState: CharacterState = {
	mask: masks[0],
	character: characters[0],
	armour: armours[0],
	equipment: {
		primary: equipment[0],
		secondary: null
	},
}

export default characterDefaultState