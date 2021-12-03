import armours, { ArmourList } from 'data/character/armours'
import characters, { CharacterList } from 'data/character/characters'
import equipments, { EquipmentList } from 'data/character/equipment'
import masks, { MaskList } from 'data/character/masks'

export interface CharacterState {
	mask: MaskList;
	character: CharacterList;
	armour: ArmourList;
	equipment: {
		primary: EquipmentList;
		secondary: EquipmentList | null;
	};
}

const characterDefaultState: CharacterState = {
	mask: Object.keys(masks)[0],
	character: Object.keys(characters)[0],
	armour: Object.keys(armours)[0],
	equipment: {
		primary: Object.keys(equipments)[0],
		secondary: null
	},
}

export default characterDefaultState