import { access, constants } from 'node:fs/promises'
import { describe, it } from 'node:test'

import primary from 'data/weapons/guns/primary'
import secondary from 'data/weapons/guns/secondary'
import { type Modification } from 'data/weapons/guns/weaponTypes'

const readWritePermission = constants.R_OK | constants.W_OK

Object.values(Object.assign(primary, secondary)).forEach(weaponCollection => {
	describe(`${Object.values(weaponCollection)[0].weaponType} images`)
	Object.values(weaponCollection).forEach(weaponData => {
		it(`${weaponData.name} image`, async () => {
			await access(`./public/images/weapons/${weaponData.image}.webp`, readWritePermission)
		})
		it(`${weaponData.name} mod images`, async () => {
			for await (const modificationCollection of Object.values(weaponData.modifications)) {
				for await (const { image } of (modificationCollection as Modification[])) {
					await access(`./public/images/modifications/${image}.webp`, readWritePermission)
				}
			}
		})
	})
})