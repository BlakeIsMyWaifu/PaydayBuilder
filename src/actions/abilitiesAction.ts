import { CHANGECREWABILITY, CHANGECREWBOOST, CHANGECREWCHARACTER, CHANGECREWMASK, CHANGECREWOUTFIT, CHANGECREWWEAPON, CHANGEPERKDECK } from 'constants/abilitiesConstant'
import { perk } from 'data/abilities/perks'
import { characterData } from 'data/character/characters'
import { maskData } from 'data/character/masks'
import { weaponData } from 'data/weapons/guns/weaponTypes'
import { createAction } from 'typesafe-actions'

export const changePerkdeck = createAction(CHANGEPERKDECK)<perk>()

export const changeCrewMask = createAction(CHANGECREWMASK)<[number, maskData]>()
export const changeCrewCharacter = createAction(CHANGECREWCHARACTER)<[number, characterData]>()
export const changeCrewOutfit = createAction(CHANGECREWOUTFIT)<[number, null]>()
export const changeCrewWeapon = createAction(CHANGECREWWEAPON)<[number, weaponData]>()
export const changeCrewAbility = createAction(CHANGECREWABILITY)<[number, null]>()
export const changeCrewBoost = createAction(CHANGECREWBOOST)<[number, null]>()

export default { changePerkdeck, changeCrewMask, changeCrewCharacter, changeCrewOutfit, changeCrewWeapon, changeCrewAbility, changeCrewBoost }