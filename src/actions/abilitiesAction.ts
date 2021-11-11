import { CHANGECREWABILITY, CHANGECREWBOOST, CHANGECREWCHARACTER, CHANGECREWMASK, CHANGECREWOUTFIT, CHANGECREWWEAPON, CHANGEPERKDECK, RESETABILITIES } from 'constants/abilitiesConstant'
import { Perk } from 'data/abilities/perks'
import { CharacterData } from 'data/character/characters'
import { MaskData } from 'data/character/masks'
import { WeaponData } from 'data/weapons/guns/weaponTypes'
import { createAction } from 'typesafe-actions'

export const changePerkdeck = createAction(CHANGEPERKDECK)<Perk>()

export const changeCrewMask = createAction(CHANGECREWMASK)<[number, MaskData]>()
export const changeCrewCharacter = createAction(CHANGECREWCHARACTER)<[number, CharacterData]>()
export const changeCrewOutfit = createAction(CHANGECREWOUTFIT)<[number, null]>()
export const changeCrewWeapon = createAction(CHANGECREWWEAPON)<[number, WeaponData]>()
export const changeCrewAbility = createAction(CHANGECREWABILITY)<[number, null]>()
export const changeCrewBoost = createAction(CHANGECREWBOOST)<[number, null]>()

export const resetAbilities = createAction(RESETABILITIES)<void>()

const abilitiesActions = {
	changePerkdeck,
	changeCrewMask,
	changeCrewCharacter,
	changeCrewOutfit,
	changeCrewWeapon,
	changeCrewAbility,
	changeCrewBoost,
	resetAbilities
}

export default abilitiesActions