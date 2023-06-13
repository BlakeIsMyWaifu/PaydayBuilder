import perkDecks, { type PerkDeckList } from 'data/abilities/perks'
import armours, { type ArmourList } from 'data/character/armours'
import characters, { type CharacterList } from 'data/character/characters'
import equipments, { type EquipmentData, type EquipmentList } from 'data/character/equipment'
import { allMasks, type CategoryList, type MaskList } from 'data/character/masks'
import { type Modification, type ModificationSlot, type WeaponData, type WeaponFind, type WeaponName, type WeaponType } from 'data/weapons/guns/weaponTypes'
import melees, { type MeleeList } from 'data/weapons/melees'
import throwables, { type ThrowableData, type ThrowableList } from 'data/weapons/throwables'
import { type CopycatValues } from 'state/useAbilitiesStore'

import { decodeValues, decompressData } from './decodeEncodeUtils'
import { findWeapon } from './findWeapon'
import { typedObject } from './typedObject'

export const decodePerkDeck = (value: string): PerkDeckList => {
	const perkIndex = decodeValues(value)
	return Object.values(perkDecks)[perkIndex].name
}

export const decodeCopycat = (value: string): CopycatValues => {
	const decompressedData = decompressData(value)
	const dataArray = decompressedData.split('')
	const decodedValues = dataArray.map(value => decodeValues(value) - 1)
	if (decodedValues.length !== 5) return [0, 0, 0, 0, 0]
	return decodedValues as CopycatValues
}

export const decodeArmour = (value: string): ArmourList => {
	const armourIndex = decodeValues(value)
	const armoursList = Object.values(armours);
	[armoursList[1], armoursList[2]] = [armoursList[2], armoursList[1]]
	return armoursList[armourIndex].name
}

export const decodeThrowable = (value: string): ThrowableList => {
	const throwableIndex = decodeValues(value)
	let sortedThrowables: Record<string, ThrowableData> = structuredClone(throwables)
	const removedThrowables: ThrowableList[] = ['X1-ZAPer', 'Leech Ampule', 'Viper Grenade', 'Adhesive Grenade', 'Snowball']
	removedThrowables.forEach(removedThrowable => {
		delete sortedThrowables[removedThrowable]
	})
	sortedThrowables = {
		...sortedThrowables,
		'X1-ZAPer': throwables['X1-ZAPer'],
		'Leech Ampule': throwables['Leech Ampule'],
		'Viper Grenade': throwables['Viper Grenade'],
		'Adhesive Grenade': throwables['Adhesive Grenade'],
		'Snowball': throwables.Snowball
	}
	return Object.keys(sortedThrowables)[throwableIndex] as ThrowableList
}

export const decodeEquipment = (value: string): [EquipmentList, EquipmentList | null] => {
	let sortedEquipment: Record<string, EquipmentData> = structuredClone(equipments)
	delete sortedEquipment['Ordnance Bag']
	sortedEquipment = {
		...sortedEquipment,
		'Ordnance Bag': equipments['Ordnance Bag']
	}
	const primaryIndex = decodeValues(value.substring(0, 1))
	const secondaryIndex = value.length > 1 ? decodeValues(value.substring(1, 2)) : null
	const equipmentList = Object.keys(sortedEquipment)
	return [equipmentList[primaryIndex], secondaryIndex ? equipmentList[secondaryIndex] : null]
}

export interface DecodeArmoury {
	weapon: WeaponData;
	mods?: Partial<Record<ModificationSlot, string>>;
}

export const decodeArmoury = (value: string, data: Record<string, Record<string, WeaponData>>): DecodeArmoury[] => {
	if (value === '_') return []

	const slot = Object.values(Object.values(data)[0])[0].inventorySlot
	const weaponBytes = decompressData(value).split('_')

	const weapons: DecodeArmoury[] = weaponBytes.map(weaponValues => {
		const [typeValue, gunValue, ...modsValue] = weaponValues.split('')
		const type = Object.keys(data)[decodeValues(typeValue)]
		const weaponName = Object.keys(data[type])[decodeValues(gunValue)]
		const weaponFind: WeaponFind = {
			slot,
			type: type as WeaponType,
			name: weaponName as WeaponName
		}
		const weaponData = findWeapon(weaponFind)

		const mods: Partial<Record<ModificationSlot, string>> = Object.fromEntries(modsValue.map((modValue, i): [string, string] => {
			if (modValue === '0') return ['', '']
			const weaponMods = typedObject.entries(weaponData.modifications)
			const modType = weaponMods[i][0]
			const modData = weaponMods[i][1][decodeValues(modValue) - 1]
			return [modType, (modData as Modification).name]
		}).filter(v => v[0].length))

		return {
			weapon: weaponData,
			mods
		}
	})

	return weapons
}

export const decodeWeapons = (value: string): [number, number] => {
	const [primaryValue, secondaryValue] = value.split('-')
	return [decodeValues(primaryValue), decodeValues(secondaryValue)]
}

export const decodeMelee = (value: string): MeleeList => {
	const meleeIndex = decodeValues(value)
	return Object.keys(melees)[meleeIndex]
}

export const decodeMask = (value: string): MaskList => {
	const [categoryIndex, encodedCollection, encodedMaskId] = value.split('')

	const category = Object.keys(allMasks)[+categoryIndex] as CategoryList

	const collectionId = decodeValues(encodedCollection)
	const collections = Object.values(allMasks[category])
	const collection = collections.find(col => col.id === collectionId) ?? collections[0]

	const maskId = decodeValues(encodedMaskId)

	return Object.keys(collection.masks)[maskId] as MaskList
}

export const decodeCharacter = (value: string): CharacterList => {
	const characterIndex = decodeValues(value)
	return Object.keys(characters)[characterIndex]
}