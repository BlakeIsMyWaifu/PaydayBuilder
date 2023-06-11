import { deepStrictEqual } from 'node:assert'
import { describe, it } from 'node:test'

import primary from 'data/weapons/guns/primary'
import akimboShotguns from 'data/weapons/guns/primary/gunList/akimboShotguns'
import assaultRifles from 'data/weapons/guns/primary/gunList/assaultRifles'
import lightMachineGuns from 'data/weapons/guns/primary/gunList/lightMachineGuns'
import shotgunsPrimary from 'data/weapons/guns/primary/gunList/shotgunsPrimary'
import snipersPrimary from 'data/weapons/guns/primary/gunList/snipersPrimary'
import specialsPrimary from 'data/weapons/guns/primary/gunList/specialsPrimary'
import { type Weapon, type WeaponData } from 'data/weapons/guns/weaponTypes'
import { decodeArmoury } from 'utils/decodeBuild'
import { encodeArmoury } from 'utils/encodeBuild'

const decodePrimary = (buildData: string) => decodeArmoury(buildData, primary)
const encodePrimary = (weaponData: WeaponData[]) => {
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
				name: 'AMCAR',
				type: 'Assault Rifle',
				slot: 'primary'
			},
			modifications: {}
		}
	})
	return encodeArmoury(armoury)
}

describe('assault rifle', () => {
	it('one', () => {
		const [encoded, decoded]: [string, WeaponData] = ['0-90-4', assaultRifles['Golden AK.762']]
		deepStrictEqual(encoded, encodePrimary([decoded]))
		deepStrictEqual(decoded, decodePrimary(encoded)[0].weapon)
	})

	it('two', () => {
		const [encoded, decoded]: [string, WeaponData] = ['0c0-9', assaultRifles.Falcon]
		deepStrictEqual(encoded, encodePrimary([decoded]))
		deepStrictEqual(decoded, decodePrimary(encoded)[0].weapon)
	})

	it('three', () => {
		const [encoded, decoded]: [string, WeaponData] = ['0s0-8', assaultRifles['Rodion 3B']]
		deepStrictEqual(encoded, encodePrimary([decoded]))
		deepStrictEqual(decoded, decodePrimary(encoded)[0].weapon)
	})

	it('four', () => {
		const [encoded, decoded]: [string, WeaponData] = ['0s0-8_0h0-6', assaultRifles['Lion\'s Roar']]
		deepStrictEqual(encoded, encodePrimary([assaultRifles['Rodion 3B'], decoded]))
		deepStrictEqual(decoded, decodePrimary(encoded)[1].weapon)
	})
})

describe('shotgun', () => {
	it('one', () => {
		const [encoded, decoded]: [string, WeaponData] = ['10-8', shotgunsPrimary['Predator 12G']]
		deepStrictEqual(encoded, encodePrimary([decoded]))
		deepStrictEqual(decoded, decodePrimary(encoded)[0].weapon)
	})

	it('two', () => {
		const [encoded, decoded]: [string, WeaponData] = ['160-6', shotgunsPrimary.Raven]
		deepStrictEqual(encoded, encodePrimary([decoded]))
		deepStrictEqual(decoded, decodePrimary(encoded)[0].weapon)
	})

	it('three', () => {
		const [encoded, decoded]: [string, WeaponData] = ['1b0-90', shotgunsPrimary['VD-12']]
		deepStrictEqual(encoded, encodePrimary([decoded]))
		deepStrictEqual(decoded, decodePrimary(encoded)[0].weapon)
	})

	it('four', () => {
		const [encoded, decoded]: [string, WeaponData] = ['1b0-90_130-9000', shotgunsPrimary['IZHMA 12G']]
		deepStrictEqual(encoded, encodePrimary([shotgunsPrimary['VD-12'], decoded]))
		deepStrictEqual(decoded, decodePrimary(encoded)[1].weapon)
	})
})

describe('light machine gun', () => {
	it('one', () => {
		const [encoded, decoded]: [string, WeaponData] = ['20-7', lightMachineGuns['KSP 58']]
		deepStrictEqual(encoded, encodePrimary([decoded]))
		deepStrictEqual(decoded, decodePrimary(encoded)[0].weapon)
	})

	it('two', () => {
		const [encoded, decoded]: [string, WeaponData] = ['230-7', lightMachineGuns['Brenner-21']]
		deepStrictEqual(encoded, encodePrimary([decoded]))
		deepStrictEqual(decoded, decodePrimary(encoded)[0].weapon)
	})

	it('three', () => {
		const [encoded, decoded]: [string, WeaponData] = ['270-7', lightMachineGuns['Akron HC']]
		deepStrictEqual(encoded, encodePrimary([decoded]))
		deepStrictEqual(decoded, decodePrimary(encoded)[0].weapon)
	})

	it('four', () => {
		const [encoded, decoded]: [string, WeaponData] = ['270-7_250-6', lightMachineGuns.M60]
		deepStrictEqual(encoded, encodePrimary([lightMachineGuns['Akron HC'], decoded]))
		deepStrictEqual(decoded, decodePrimary(encoded)[1].weapon)
	})
})

describe('sniper', () => {
	it('one', () => {
		const [encoded, decoded]: [string, WeaponData] = ['30-5', snipersPrimary['Platypus 70']]
		deepStrictEqual(encoded, encodePrimary([decoded]))
		deepStrictEqual(decoded, decodePrimary(encoded)[0].weapon)
	})

	it('two', () => {
		const [encoded, decoded]: [string, WeaponData] = ['360-5', snipersPrimary['Lebensauger .308']]
		deepStrictEqual(encoded, encodePrimary([decoded]))
		deepStrictEqual(decoded, decodePrimary(encoded)[0].weapon)
	})

	it('three', () => {
		const [encoded, decoded]: [string, WeaponData] = ['3c0-5', snipersPrimary['Káng Arms X1']]
		deepStrictEqual(encoded, encodePrimary([decoded]))
		deepStrictEqual(decoded, decodePrimary(encoded)[0].weapon)
	})

	it('four', () => {
		const [encoded, decoded]: [string, WeaponData] = ['3c0-5_370-4', snipersPrimary.Desertfox]
		deepStrictEqual(encoded, encodePrimary([snipersPrimary['Káng Arms X1'], decoded]))
		deepStrictEqual(decoded, decodePrimary(encoded)[1].weapon)
	})
})

describe('akimbo shotgun', () => {
	it('one', () => {
		const [encoded, decoded]: [string, WeaponData] = ['40-6', akimboShotguns['Akimbo Goliath 12G']]
		deepStrictEqual(encoded, encodePrimary([decoded]))
		deepStrictEqual(decoded, decodePrimary(encoded)[0].weapon)
	})

	it('two', () => {
		const [encoded, decoded]: [string, WeaponData] = ['40-6_430-8', akimboShotguns['Akimbo VD-12']]
		deepStrictEqual(encoded, encodePrimary([akimboShotguns['Akimbo Goliath 12G'], decoded]))
		deepStrictEqual(decoded, decodePrimary(encoded)[1].weapon)
	})
})

describe('special', () => {
	it('one', () => {
		const [encoded, decoded]: [string, WeaponData] = ['50-4', specialsPrimary.OVE9000]
		deepStrictEqual(encoded, encodePrimary([decoded]))
		deepStrictEqual(decoded, decodePrimary(encoded)[0].weapon)
	})

	it('two', () => {
		const [encoded, decoded]: [string, WeaponData] = ['5600', specialsPrimary['Flamethrower Mk.1']]
		deepStrictEqual(encoded, encodePrimary([decoded]))
		deepStrictEqual(decoded, decodePrimary(encoded)[0].weapon)
	})

	it('three', () => {
		const [encoded, decoded]: [string, WeaponData] = ['5c000', specialsPrimary['Hailstorm Mk 5']]
		deepStrictEqual(encoded, encodePrimary([decoded]))
		deepStrictEqual(decoded, decodePrimary(encoded)[0].weapon)
	})

	it('four', () => {
		const [encoded, decoded]: [string, WeaponData] = ['5c000_5700', specialsPrimary['Plainsrider Bow']]
		deepStrictEqual(encoded, encodePrimary([specialsPrimary['Hailstorm Mk 5'], decoded]))
		deepStrictEqual(decoded, decodePrimary(encoded)[1].weapon)
	})
})