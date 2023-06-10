import { type Modification, type ModificationSlot, type WeaponModifications } from 'data/weapons/guns/weaponTypes'

import { typedObject } from './typedObject'

type ModificationsFromNames = (
	equippedModNames: Partial<Record<ModificationSlot, string>>,
	weaponModifications: DeepReadonly<WeaponModifications>
) => Partial<Record<ModificationSlot, Modification>>

export const modificationsFromNames: ModificationsFromNames = (equippedModNames, weaponModifications) => {
	const slotValuePairs = typedObject.entries(equippedModNames)
	const modificationsData = slotValuePairs.map(([modSlot, modName]) => weaponModifications[modSlot]?.find(mod => mod.name === modName)).filter(Boolean)
	return modificationsData.reduce((a, v) => ({ ...a, [v.slot]: v }), {})
}