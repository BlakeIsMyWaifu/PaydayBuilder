import { deepStrictEqual } from 'node:assert'
import { describe, it } from 'node:test'

import { type ArmourList } from 'data/character/armours'
import { type CharacterList } from 'data/character/characters'
import { type MaskList } from 'data/character/masks'
import { defaultBuild } from 'state/useBuildsStore'
import { decodeArmour, decodeCharacter, decodeEquipment, decodeMask } from 'utils/decodeBuild'
import { encodeArmour, encodeCharacter, encodeEquipment, encodeMask } from 'utils/encodeBuild'

describe('mask', () => {
	it('default', () => {
		const defaultMask = new URLSearchParams(defaultBuild).get('k') ?? '100'
		deepStrictEqual('Preferred Character', decodeMask(defaultMask))
	})

	it('one', () => {
		const [encoded, decoded]: [string, MaskList] = ['012', 'Happy Santa']
		deepStrictEqual(encoded, encodeMask(decoded))
		deepStrictEqual(decoded, decodeMask(encoded))
	})

	it('two', () => {
		const [encoded, decoded]: [string, MaskList] = ['2O1', 'Mega Cthulhu']
		deepStrictEqual(encoded, encodeMask(decoded))
		deepStrictEqual(decoded, decodeMask(encoded))
	})

	it('three', () => {
		const [encoded, decoded]: [string, MaskList] = ['5b7', 'One Down Skull, The']
		deepStrictEqual(encoded, encodeMask(decoded))
		deepStrictEqual(decoded, decodeMask(encoded))
	})
})

describe('character', () => {
	it('default', () => {
		const defaultCharacter = new URLSearchParams(defaultBuild).get('h') ?? '0'
		deepStrictEqual('Dallas', decodeCharacter(defaultCharacter))
	})

	it('one', () => {
		const [encoded, decoded]: [string, CharacterList] = ['6', 'Clover']
		deepStrictEqual(encoded, encodeCharacter(decoded))
		deepStrictEqual(decoded, decodeCharacter(encoded))
	})

	it('two', () => {
		const [encoded, decoded]: [string, CharacterList] = ['8', 'Jacket']
		deepStrictEqual(encoded, encodeCharacter(decoded))
		deepStrictEqual(decoded, decodeCharacter(encoded))
	})

	it('three', () => {
		const [encoded, decoded]: [string, CharacterList] = ['l', 'Hila']
		deepStrictEqual(encoded, encodeCharacter(decoded))
		deepStrictEqual(decoded, decodeCharacter(encoded))
	})
})

describe('armour', () => {
	it('default', () => {
		const defaultArmour = new URLSearchParams(defaultBuild).get('a') ?? '0'
		deepStrictEqual('Two-Piece Suit', decodeArmour(defaultArmour))
	})

	it('one', () => {
		const [encoded, decoded]: [string, ArmourList] = ['2', 'Ballistic Vest']
		deepStrictEqual(encoded, encodeArmour(decoded))
		deepStrictEqual(decoded, decodeArmour(encoded))
	})

	it('two', () => {
		const [encoded, decoded]: [string, ArmourList] = ['1', 'Lightweight Ballistic Vest']
		deepStrictEqual(encoded, encodeArmour(decoded))
		deepStrictEqual(decoded, decodeArmour(encoded))
	})

	it('three', () => {
		const [encoded, decoded]: [string, ArmourList] = ['6', 'Improved Combined Tactical Vest']
		deepStrictEqual(encoded, encodeArmour(decoded))
		deepStrictEqual(decoded, decodeArmour(encoded))
	})
})

describe('equipment', () => {
	it('default', () => {
		const defaultEquipment = new URLSearchParams(defaultBuild).get('d') ?? '0'
		deepStrictEqual(['Ammo Bag', null], decodeEquipment(defaultEquipment))
	})

	it('one', () => {
		deepStrictEqual('5', encodeEquipment({ primary: 'First Aid Kit', secondary: null }))
		deepStrictEqual(['First Aid Kit', null], decodeEquipment('5'))
	})

	it('two', () => {
		deepStrictEqual('9', encodeEquipment({ primary: 'Ordnance Bag', secondary: null }))
		deepStrictEqual(['Ordnance Bag', null], decodeEquipment('9'))
	})

	it('three', () => {
		deepStrictEqual('83', encodeEquipment({ primary: 'Trip Mines and Shaped Charges', secondary: 'Doctor Bag' }))
		deepStrictEqual(['Trip Mines and Shaped Charges', 'Doctor Bag'], decodeEquipment('83'))
	})
})