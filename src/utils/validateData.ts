import perkDecks from 'data/abilities/perks'
import armours from 'data/character/armours'
import characters from 'data/character/characters'
import equipments from 'data/character/equipment'
import masks from 'data/character/masks'
import { Modification, ModificationSlot, Weapon } from 'data/weapons/guns/weaponTypes'
import melees from 'data/weapons/melees'
import throwables from 'data/weapons/throwables'
import abilitiesDefaultState, { AbilitiesState } from 'defaultStates/abilitiesDefaultState'
import { ArmouryState } from 'defaultStates/armouryDefaultState'
import characterDefaultState, { CharacterState } from 'defaultStates/characterDefaultState'
import skillsDefaultState, { SkillsState } from 'defaultStates/skillsDefaultState'
import weaponsDefaultState, { WeaponsState } from 'defaultStates/weaponsDefaultState'
import { BuildJson, OptionalAbilitiesState, OptionalArmouryState, OptionalCharacterState, OptionalWeaponState } from 'pages/Home/SettingsPanel/JsonIO/JsonIO'
import * as z from 'zod'

import findWeapon from './findWeapon'

export const validateJson = (data: any): boolean => {
	type Literal = boolean | null | number | string
	type Json = Literal | { [key: string]: Json } | Json[]
	const literalSchema = z.union([z.string(), z.number(), z.boolean(), z.null()])
	const jsonSchema: z.ZodSchema<Json> = z.lazy(() =>
		z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)])
	)
	const result = jsonSchema.safeParse(data)
	if (!result.success) {
		console.error(result.error)
	}
	return result.success
}

export const validateSchema = (data: BuildJson): boolean => {
	if (!validateJson(data)) return false

	const weaponSchema = z.record(z.object({
		id: z.number(),
		weaponFind: z.object({
			name: z.string(),
			type: z.string(),
			slot: z.string()
		}),
		modifications: z.record(z.string())
	})).optional()

	const subtreeSchema = z.record(z.object({
		tier: z.number().int().gte(1).lte(4),
		points: z.number().int().gte(0).lte(46),
		upgrades: z.record(z.string())
	}))
	const skillTreeSchema = z.object({
		mastermind: subtreeSchema,
		enforcer: subtreeSchema,
		technician: subtreeSchema,
		ghost: subtreeSchema,
		fugitive: subtreeSchema
	})

	const buildSchema = z.object({
		version: z.string(),
		abilities: z.object({
			perkdeck: z.string().optional(),
			crewmanagement: z.any().optional(),
			infamy: z.null().optional()
		}).optional(),
		armoury: z.object({
			primary: weaponSchema,
			secondary: weaponSchema
		}).optional(),
		character: z.object({
			mask: z.string().optional(),
			character: z.string().optional(),
			armour: z.string().optional(),
			equipment: z.object({
				primary: z.string(),
				secondary: z.nullable(z.string())
			}).optional()
		}).optional(),
		skills: z.object({
			points: z.number().int().gte(0).lte(120),
			trees: skillTreeSchema
		}).optional(),
		weapons: z.object({
			primary: z.number().optional(),
			secondary: z.number().optional(),
			throwable: z.string().optional(),
			melee: z.string().optional()
		}).optional()
	})

	const result = buildSchema.safeParse(data)
	if (!result.success) {
		console.error(result.error)
	}

	return result.success
}

export const validateAbilities = ({ perkdeck }: OptionalAbilitiesState): AbilitiesState => {
	const validPerkDeck = (perkdeck && perkDecks[perkdeck]?.name) || abilitiesDefaultState.perkdeck

	return {
		perkdeck: validPerkDeck,
		crewmanagement: abilitiesDefaultState.crewmanagement,
		infamy: null
	}
}

export const validateArmoury = ({ primary, secondary }: OptionalArmouryState): ArmouryState => {
	const out: ArmouryState = {
		primary: {},
		secondary: {}
	}

	const addWeapon = ([id, weapon]: [string, Weapon]): void => {
		if (!!!parseInt(id) || +id !== weapon.id) return
		const weaponData = findWeapon(weapon.weaponFind)
		if (!weaponData) return

		out[weapon.weaponFind.slot][+id] = {
			id: weapon.id,
			weaponFind: weapon.weaponFind,
			modifications: {}
		}

		for (const [modType, modName] of Object.entries(weapon.modifications)) {
			const a: Modification<string>[] | undefined = weaponData.modifications[(modType as ModificationSlot)]
			if (!a) continue
			const b = a.find(({ name }) => modName === name)
			if (!b) continue
			out[weapon.weaponFind.slot][+id].modifications[b.slot] = b.name
		}

		if (weapon.name) {
			out[weapon.weaponFind.slot][+id].name = weapon.name
		}
	}

	Object.entries(primary || {}).forEach(addWeapon)
	Object.entries(secondary || {}).forEach(addWeapon)

	return out
}

export const validateCharacter = ({ mask, character, armour, equipment }: OptionalCharacterState): CharacterState => {
	const validMask = (mask && masks[mask]?.name) || characterDefaultState.mask
	const validCharacter = (character && characters[character]?.name) || characterDefaultState.character
	const validArmour = (armour && armours[armour]?.name) || characterDefaultState.armour
	const validEquipment = {
		primary: (equipment && equipments[equipment.primary]?.name) || characterDefaultState.equipment.primary,
		secondary: (equipment && equipments[equipment.secondary || '']?.name) || null
	}

	return {
		mask: validMask,
		character: validCharacter,
		armour: validArmour,
		equipment: validEquipment
	}
}

export const validateSkills = (data: SkillsState): SkillsState => {
	// could use better checking but skills storage will get reworked soon
	const spentPoints = Object.values(data.trees).map(tree => Object.values(tree).map(subtree => subtree.points).reduce((a, b) => a + b)).reduce((a, b) => a + b)
	return spentPoints + data.points === 120 ? data : skillsDefaultState
}

export const validateWeapons = ({ primary, secondary, throwable, melee }: OptionalWeaponState): WeaponsState => {
	const validThrowable = (throwable && throwables[throwable]?.name) || weaponsDefaultState.throwable
	const validMelee = (melee && melees[melee]?.name) || weaponsDefaultState.melee

	return {
		primary: primary || 0,
		secondary: secondary || 0,
		throwable: validThrowable,
		melee: validMelee
	}
}

export default {
	validateSchema,
	validateAbilities,
	validateArmoury,
	validateCharacter,
	validateSkills,
	validateWeapons
}