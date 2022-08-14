import modificationList from 'data/weapons/guns/modificationList'
import { Modification, ModificationSlot } from 'data/weapons/guns/weaponTypes'

export const modificationsFromNames = (modifications: Partial<Record<ModificationSlot, string>>): Partial<Record<ModificationSlot, Modification>> => {
	return Object.entries(modifications).map(([modType, modName]) => modificationList[(modType as ModificationSlot)][modName]).reduce((a, v) => ({ ...a, [v.slot]: v }), {})
}