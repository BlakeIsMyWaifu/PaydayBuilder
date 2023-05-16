import { ok } from 'node:assert'
import { describe, it } from 'node:test'

import modifications from 'data/weapons/guns/modificationList'
import akimboShotguns from 'data/weapons/guns/primary/gunList/akimboShotguns'
import assaultRifles from 'data/weapons/guns/primary/gunList/assaultRifles'
import lightMachineGuns from 'data/weapons/guns/primary/gunList/lightMachineGuns'
import shotgunsPrimary from 'data/weapons/guns/primary/gunList/shotgunsPrimary'
import snipersPrimary from 'data/weapons/guns/primary/gunList/snipersPrimary'
import specialsPrimary from 'data/weapons/guns/primary/gunList/specialsPrimary'
import pistols from 'data/weapons/guns/secondary/gunList/pistols'
import shotgunsSecondary from 'data/weapons/guns/secondary/gunList/shotgunsSecondary'
import snipersSecondary from 'data/weapons/guns/secondary/gunList/snipersSecondary'
import specialsSecondary from 'data/weapons/guns/secondary/gunList/specialsSecondary'
import submachineGuns from 'data/weapons/guns/secondary/gunList/submachineGuns'
import { type WeaponData } from 'data/weapons/guns/weaponTypes'
import { type CompatibleWeapons } from 'data/weapons/guns/weaponTypes'
import { typedObject } from 'utils/typedObject'

const allGuns: Record<keyof CompatibleWeapons, Record<string, WeaponData>> = {
	'assaultRifle': assaultRifles,
	'shotgun': { ...shotgunsPrimary, ...shotgunsSecondary },
	'lightMachineGun': lightMachineGuns,
	'sniper': { ...snipersPrimary, ...snipersSecondary },
	'akimboShotgun': akimboShotguns,
	'special': { ...specialsPrimary, ...specialsSecondary },
	'pistol': pistols,
	'submachineGun': submachineGuns
}

Object.entries(modifications).forEach(([modificationName, modificationList]) => {
	describe(`${modificationName} compatible weapons`, () => {
		Object.values(modificationList).forEach(modification => {
			it(modification.name, () => {
				typedObject.entries(modification.compatibleWeapons).forEach(([weaponType, list]) => {
					list.forEach(weaponName => {
						const weaponMods: string[] = (allGuns[weaponType][weaponName].modifications[modification.slot] ?? []).map(a => a.name)
						const includes = weaponMods.includes(modification.name)
						if (!includes) {
							console.warn(`${weaponName} : ${modification.name}`)
						}
						ok(includes)
					})
				})
			})
		})
	})
})