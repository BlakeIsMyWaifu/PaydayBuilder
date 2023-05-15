import { ok, strictEqual } from 'node:assert'
import { readdirSync } from 'node:fs'
import { access, constants, readdir } from 'node:fs/promises'
import { describe, it } from 'node:test'

import modifications from 'data/weapons/guns/modificationList'

const folderLocation = './public/images/modifications'

Object.entries(modifications).forEach(([modificationName, modificationList]) => {
	describe(`${modificationName} images`, () => {
		Object.values(modificationList).forEach(modification => {
			it(modification.name, async () => {
				await access(`${folderLocation}/${modification.image}.webp`, constants.R_OK | constants.W_OK)
			})
		})
	})
})

describe('folder read', () => {
	it('folder length equal to mods amount', async () => {
		const files = await readdir(folderLocation)
		const modCount = Object.values(modifications).map(modificationList => Object.values(modificationList).length).reduce((a, b) => a + b)
		const fileCount = files.length - 1
		strictEqual(modCount, fileCount)
	})
})

describe('folder image has mod', () => {
	const allMods = Object.values(modifications).map(modificationList => Object.values(modificationList).map(modification => modification.image)).flat()
	const files = readdirSync(folderLocation).map(file => file.replace('.webp', ''))
	files.shift() // remove icons folder
	files.forEach(file => {
		it(`${file} file`, () => {
			ok(allMods.includes(file))
		})
	})
})