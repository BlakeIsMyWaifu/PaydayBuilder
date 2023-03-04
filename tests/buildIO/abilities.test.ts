import { type PerkDeckList } from 'data/abilities/perks'
import { deepStrictEqual } from 'node:assert'
import { describe, it } from 'node:test'
import { type CopycatValues } from 'state/useAbilitiesStore'
import { defaultBuild } from 'state/useBuildsStore'
import { decodeCopycat, decodePerkDeck } from 'utils/decodeBuild'
import { encodeCopycat, encodePerkDeck } from 'utils/encodeBuild'

describe('perk deck', () => {
	it('default', () => {
		const defaultPerkdeck = new URLSearchParams(defaultBuild).get('p') ?? '0'
		deepStrictEqual('Crew Chief', decodePerkDeck(defaultPerkdeck))
	})

	it('crew chief', () => {
		const [encoded, decoded]: [string, PerkDeckList] = ['0', 'Crew Chief']
		deepStrictEqual(encoded, encodePerkDeck(decoded))
		deepStrictEqual(decoded, decodePerkDeck(encoded))
	})

	it('rogue', () => {
		const [encoded, decoded]: [string, PerkDeckList] = ['3', 'Rogue']
		deepStrictEqual(encoded, encodePerkDeck(decoded))
		deepStrictEqual(decoded, decodePerkDeck(encoded))
	})

	it('anarchist', () => {
		const [encoded, decoded]: [string, PerkDeckList] = ['e', 'Anarchist']
		deepStrictEqual(encoded, encodePerkDeck(decoded))
		deepStrictEqual(decoded, decodePerkDeck(encoded))
	})

	it('stoic', () => {
		const [encoded, decoded]: [string, PerkDeckList] = ['i', 'Stoic']
		deepStrictEqual(encoded, encodePerkDeck(decoded))
		deepStrictEqual(decoded, decodePerkDeck(encoded))
	})

	it('copycat', () => {
		const [encoded, decoded]: [string, PerkDeckList] = ['m', 'Copycat']
		deepStrictEqual(encoded, encodePerkDeck(decoded))
		deepStrictEqual(decoded, decodePerkDeck(encoded))
	})
})

describe('copycat', () => {
	it('one', () => {
		const [encoded, decoded]: [string, CopycatValues] = ['1-5', [0, 0, 0, 0, 0]]
		deepStrictEqual(encoded, encodeCopycat(decoded))
		deepStrictEqual(decoded, decodeCopycat(encoded))
	})

	it('two', () => {
		const [encoded, decoded]: [string, CopycatValues] = ['12345', [0, 1, 2, 3, 4]]
		deepStrictEqual(encoded, encodeCopycat(decoded))
		deepStrictEqual(decoded, decodeCopycat(encoded))
	})

	it('three', () => {
		const [encoded, decoded]: [string, CopycatValues] = ['3-4f', [2, 2, 2, 2, 14]]
		deepStrictEqual(encoded, encodeCopycat(decoded))
		deepStrictEqual(decoded, decodeCopycat(encoded))
	})
})