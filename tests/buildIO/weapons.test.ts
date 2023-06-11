import { deepStrictEqual } from 'node:assert'
import { describe, it } from 'node:test'

import { type MeleeList } from 'data/weapons/melees'
import { type ThrowableList } from 'data/weapons/throwables'
import { defaultBuild } from 'state/useBuildsStore'
import { decodeMelee, decodeThrowable } from 'utils/decodeBuild'
import { encodeMelee, encodeThrowable } from 'utils/encodeBuild'

describe('throwable', () => {
	it('default', () => {
		const defaultThrowable = new URLSearchParams(defaultBuild).get('t') ?? '5'
		deepStrictEqual('Frag Grenade', decodeThrowable(defaultThrowable))
	})

	it('one', () => {
		const [encoded, decoded]: [string, ThrowableList] = ['0', 'Matryoshka Grenade']
		deepStrictEqual(encoded, encodeThrowable(decoded))
		deepStrictEqual(decoded, decodeThrowable(encoded))
	})

	it('two', () => {
		const [encoded, decoded]: [string, ThrowableList] = ['h', 'X1-ZAPer']
		deepStrictEqual(encoded, encodeThrowable(decoded))
		deepStrictEqual(decoded, decodeThrowable(encoded))
	})

	it('three', () => {
		const [encoded, decoded]: [string, ThrowableList] = ['l', 'Snowball']
		deepStrictEqual(encoded, encodeThrowable(decoded))
		deepStrictEqual(decoded, decodeThrowable(encoded))
	})
})

describe('melee', () => {
	it('default', () => {
		const defaultMelee = new URLSearchParams(defaultBuild).get('m') ?? '0'
		deepStrictEqual('Weapon Butt', decodeMelee(defaultMelee))
	})

	it('one', () => {
		const [encoded, decoded]: [string, MeleeList] = ['4', 'Nova\'s Shank']
		deepStrictEqual(encoded, encodeMelee(decoded))
		deepStrictEqual(decoded, decodeMelee(encoded))
	})

	it('two', () => {
		const [encoded, decoded]: [string, MeleeList] = ['q', 'Electrical Brass Knuckles']
		deepStrictEqual(encoded, encodeMelee(decoded))
		deepStrictEqual(decoded, decodeMelee(encoded))
	})

	it('three', () => {
		const [encoded, decoded]: [string, MeleeList] = ['1u', 'Alpha Mauler']
		deepStrictEqual(encoded, encodeMelee(decoded))
		deepStrictEqual(decoded, decodeMelee(encoded))
	})
})