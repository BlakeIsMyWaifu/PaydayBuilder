import { CHANGEPERKDECK } from "constants/abilitiesConstant";
import { perk } from "data/abilities/perks";
import { createAction } from "typesafe-actions";

export const changePerkdeck = createAction(CHANGEPERKDECK)<perk>()

export default { changePerkdeck }