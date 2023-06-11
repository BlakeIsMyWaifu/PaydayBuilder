import { deepStrictEqual } from 'node:assert'
import { describe, it } from 'node:test'

import secondary from 'data/weapons/guns/secondary'
import pistols from 'data/weapons/guns/secondary/gunList/pistols'
import shotgunsSecondary from 'data/weapons/guns/secondary/gunList/shotgunsSecondary'
import snipersSecondary from 'data/weapons/guns/secondary/gunList/snipersSecondary'
import specialsSecondary from 'data/weapons/guns/secondary/gunList/specialsSecondary'
import submachineGuns from 'data/weapons/guns/secondary/gunList/submachineGuns'
import { type Weapon, type WeaponData } from 'data/weapons/guns/weaponTypes'
import { decodeArmoury } from 'utils/decodeBuild'
import { encodeArmoury } from 'utils/encodeBuild'

const decodeSecondary = (buildData: string) => decodeArmoury(buildData, secondary)
const encodeSecondary = (weaponData: WeaponData[]) => {
	const armoury: Record<number, Weapon> = weaponData.reduce((a, v, i) => ({
		...a,
		[i + 1]: {
			id: i + 1,
			weaponFind: {
				name: v.name,
				type: v.weaponType,
				slot: v.inventorySlot
			},
			modifications: {}
		}
	}), {
		0: {
			id: 0,
			weaponFind: {
				name: 'Chimano 88',
				type: 'Pistol',
				slot: 'secondary'
			},
			modifications: {}
		}
	})
	return encodeArmoury(armoury)
}

describe('pistol', () => {
	it('one', () => {
		const [encoded, decoded]: [string, WeaponData] = ['0-8', pistols['Interceptor .45']]
		deepStrictEqual(encoded, encodeSecondary([decoded]))
		deepStrictEqual(decoded, decodeSecondary(encoded)[0].weapon)
	})

	it('two', () => {
		const [encoded, decoded]: [string, WeaponData] = ['0c0-7', pistols['STRYK 18c']]
		deepStrictEqual(encoded, encodeSecondary([decoded]))
		deepStrictEqual(decoded, decodeSecondary(encoded)[0].weapon)
	})

	it('three', () => {
		const [encoded, decoded]: [string, WeaponData] = ['0v0-7', pistols['Káng Arms Model 54']]
		deepStrictEqual(encoded, encodeSecondary([decoded]))
		deepStrictEqual(decoded, decodeSecondary(encoded)[0].weapon)
	})

	it('four', () => {
		const [encoded, decoded]: [string, WeaponData] = ['0v0-7_0l0-4', pistols['Matever .357']]
		deepStrictEqual(encoded, encodeSecondary([pistols['Káng Arms Model 54'], decoded]))
		deepStrictEqual(decoded, decodeSecondary(encoded)[1].weapon)
	})
})

describe('submachine gun', () => {
	it('one', () => {
		const [encoded, decoded]: [string, WeaponData] = ['10-9', submachineGuns['Chicago Typewriter']]
		deepStrictEqual(encoded, encodeSecondary([decoded]))
		deepStrictEqual(decoded, decodeSecondary(encoded)[0].weapon)
	})

	it('two', () => {
		const [encoded, decoded]: [string, WeaponData] = ['190-8', submachineGuns.Signature]
		deepStrictEqual(encoded, encodeSecondary([decoded]))
		deepStrictEqual(decoded, decodeSecondary(encoded)[0].weapon)
	})

	it('three', () => {
		const [encoded, decoded]: [string, WeaponData] = ['1o0-6', submachineGuns['Wasp-DS SMG']]
		deepStrictEqual(encoded, encodeSecondary([decoded]))
		deepStrictEqual(decoded, decodeSecondary(encoded)[0].weapon)
	})

	it('four', () => {
		const [encoded, decoded]: [string, WeaponData] = ['1o0-6_1j0-6', submachineGuns['Micro Uzi']]
		deepStrictEqual(encoded, encodeSecondary([submachineGuns['Wasp-DS SMG'], decoded]))
		deepStrictEqual(decoded, decodeSecondary(encoded)[1].weapon)
	})
})

describe('special', () => {
	it('one', () => {
		const [encoded, decoded]: [string, WeaponData] = ['20-4', specialsSecondary.OVE9000]
		deepStrictEqual(encoded, encodeSecondary([decoded]))
		deepStrictEqual(decoded, decodeSecondary(encoded)[0].weapon)
	})

	it('two', () => {
		const [encoded, decoded]: [string, WeaponData] = ['25000', specialsSecondary['China Puff 40mm']]
		deepStrictEqual(encoded, encodeSecondary([decoded]))
		deepStrictEqual(decoded, decodeSecondary(encoded)[0].weapon)
	})

	it('three', () => {
		const [encoded, decoded]: [string, WeaponData] = ['2900', specialsSecondary['Cash Blaster']]
		deepStrictEqual(encoded, encodeSecondary([decoded]))
		deepStrictEqual(decoded, decodeSecondary(encoded)[0].weapon)
	})

	it('four', () => {
		const [encoded, decoded]: [string, WeaponData] = ['2900_260-5', specialsSecondary.Arbiter]
		deepStrictEqual(encoded, encodeSecondary([specialsSecondary['Cash Blaster'], decoded]))
		deepStrictEqual(decoded, decodeSecondary(encoded)[1].weapon)
	})
})

describe('shotgun', () => {
	it('one', () => {
		const [encoded, decoded]: [string, WeaponData] = ['30-7', shotgunsSecondary['The Judge']]
		deepStrictEqual(encoded, encodeSecondary([decoded]))
		deepStrictEqual(decoded, decodeSecondary(encoded)[0].weapon)
	})

	it('two', () => {
		const [encoded, decoded]: [string, WeaponData] = ['330-8', shotgunsSecondary['Grimm 12G']]
		deepStrictEqual(encoded, encodeSecondary([decoded]))
		deepStrictEqual(decoded, decodeSecondary(encoded)[0].weapon)
	})

	it('three', () => {
		const [encoded, decoded]: [string, WeaponData] = ['370-7', shotgunsSecondary['Argos III']]
		deepStrictEqual(encoded, encodeSecondary([decoded]))
		deepStrictEqual(decoded, decodeSecondary(encoded)[0].weapon)
	})

	it('four', () => {
		const [encoded, decoded]: [string, WeaponData] = ['370-7_360-6', shotgunsSecondary['GSPS 12G']]
		deepStrictEqual(encoded, encodeSecondary([shotgunsSecondary['Argos III'], decoded]))
		deepStrictEqual(decoded, decodeSecondary(encoded)[1].weapon)
	})
})

describe('sniper', () => {
	it('one', () => {
		const [encoded, decoded]: [string, WeaponData] = ['40-8', snipersSecondary.Pronghorn]
		deepStrictEqual(encoded, encodeSecondary([decoded]))
		deepStrictEqual(decoded, decodeSecondary(encoded)[0].weapon)
	})

	it('two', () => {
		const [encoded, decoded]: [string, WeaponData] = ['40-8_420-6', snipersSecondary['North Star']]
		deepStrictEqual(encoded, encodeSecondary([snipersSecondary.Pronghorn, decoded]))
		deepStrictEqual(decoded, decodeSecondary(encoded)[1].weapon)
	})
})