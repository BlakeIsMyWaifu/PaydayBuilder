import characters, { characterData } from "data/character/characters"
import masks, { maskData } from "data/character/masks"

export interface characterState {
	mask: maskData;
	character: characterData;
	armour: null;
	equipment: null;
}

const characterDefaultState: characterState = {
	mask: masks[0],
	character: characters[0],
	armour: null,
	equipment: null,
}

export default characterDefaultState