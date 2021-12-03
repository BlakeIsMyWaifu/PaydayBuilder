import { CHANGECREWABILITY, CHANGECREWBOOST, CHANGECREWCHARACTER, CHANGECREWMASK, CHANGECREWOUTFIT, CHANGECREWWEAPON, CHANGEPERKDECK, RESETABILITIES } from 'constants/abilitiesConstant'
import { CrewAbilityList } from 'data/abilities/crewAbilities'
import { CrewBoostsList } from 'data/abilities/crewBoosts'
import { PerkDeckList } from 'data/abilities/perks'
import { CharacterList } from 'data/character/characters'
import { MaskList } from 'data/character/masks'
import { createAction } from 'typesafe-actions'

export const changePerkdeck = createAction(CHANGEPERKDECK)<PerkDeckList>()

export const changeCrewMask = createAction(CHANGECREWMASK)<[number, MaskList]>()
export const changeCrewCharacter = createAction(CHANGECREWCHARACTER)<[number, CharacterList]>()
export const changeCrewOutfit = createAction(CHANGECREWOUTFIT)<[number, null]>()
export const changeCrewWeapon = createAction(CHANGECREWWEAPON)<[number, number]>()
export const changeCrewAbility = createAction(CHANGECREWABILITY)<[number, CrewAbilityList]>()
export const changeCrewBoost = createAction(CHANGECREWBOOST)<[number, CrewBoostsList]>()

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