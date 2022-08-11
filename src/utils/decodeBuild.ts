import perkDecks, { PerkDeckList } from 'data/abilities/perks'
import armours, { ArmourList } from 'data/character/armours'
import characters, { CharacterList } from 'data/character/characters'
import equipments, { EquipmentList } from 'data/character/equipment'
import { CategoryList, MaskList, allMasks } from 'data/character/masks'
import { AllWeaponList, Modification, ModificationSlot, WeaponData, WeaponFind, WeaponType } from 'data/weapons/guns/weaponTypes'
import melees, { MeleeList } from 'data/weapons/melees'
import throwables, { ThrowableData, ThrowableList } from 'data/weapons/throwables'

import findWeapon from './findWeapon'

export const charString = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.,@'

export const decodeValues = (value: string): number => {
	if (value.length === 2) {
		const [firstValue, secondValue] = value.split('')
		return (decodeValues(firstValue) * charString.length) + decodeValues(secondValue)
	}
	return charString.indexOf(value)
}

export const decompressData = (data: string): string => {
	let decompressed = ''
	for (let i = 0; i < data.length; i++) {
		if (data.charAt(i + 1) === '-') {
			decompressed += data.charAt(i).repeat(parseInt(data.charAt(i + 2)))
			i += 2
			continue
		}
		decompressed += data.charAt(i)
	}
	return decompressed
}

export const decodePerkDeck = (value: string): PerkDeckList => {
	const perkIndex = decodeValues(value)
	return Object.values(perkDecks)[perkIndex].name
}

export const decodeArmour = (value: string): ArmourList => {
	const armourIndex = decodeValues(value)
	const armoursList = Object.values(armours);
	[armoursList[1], armoursList[2]] = [armoursList[2], armoursList[1]]
	return armoursList[armourIndex].name
}

export const decodeThrowable = (value: string): ThrowableList => {
	const throwableIndex = decodeValues(value)
	let sortedThrowables: Record<string, ThrowableData> = { ...throwables }
	delete sortedThrowables['X1-ZAPer']
	sortedThrowables = {
		...sortedThrowables,
		'X1-ZAPer': throwables['X1-ZAPer']
	}
	return Object.keys(sortedThrowables)[throwableIndex] as ThrowableList
}

export const decodeEquipment = (value: string): [EquipmentList, EquipmentList | null] => {
	const primaryIndex = decodeValues(value.substring(0, 1))
	const secondaryIndex = value.length > 1 ? decodeValues(value.substring(1, 2)) : null
	const equipmentList = Object.keys(equipments)
	return [equipmentList[primaryIndex], secondaryIndex ? equipmentList[secondaryIndex] : null]
}

interface DecodeArmoury {
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
		const weaponName = Object.keys(data[type as keyof typeof data])[decodeValues(gunValue)]
		const weaponFind: WeaponFind = {
			slot,
			type: type as WeaponType,
			name: weaponName as AllWeaponList
		}
		const weaponData = findWeapon(weaponFind)

		const mods: Partial<Record<ModificationSlot, string>> = Object.fromEntries(modsValue.map((modValue, i): [string, string] => {
			if (modValue === '0') return ['', '']
			const weaponMods = Object.entries(weaponData.modifications)
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