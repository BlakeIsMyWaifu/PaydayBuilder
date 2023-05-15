import modifications from 'data/weapons/guns/modificationList'
import { type Modification, type ModificationSlot } from 'data/weapons/guns/weaponTypes'

import { typedObject } from './typedObject'

export const modificationsFromNames = (searchedModifications: Partial<Record<ModificationSlot, string>>): Partial<Record<ModificationSlot, Modification>> => {
	return typedObject.entries(searchedModifications).map(([modType, modName]) => modifications[(modType)][modName]).reduce((a, v) => ({ ...a, [v.slot]: v }), {})
}