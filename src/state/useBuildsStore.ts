import primary from 'data/weapons/guns/primary'
import secondary from 'data/weapons/guns/secondary'
import { decodeArmour, decodeArmoury, decodeCharacter, decodeEquipment, decodeMask, decodeMelee, decodePerkDeck, decodeThrowable, decodeWeapons } from 'utils/decodeBuild'
import { findNextNum } from 'utils/maths'
import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'

import { DevTools, Persist, Slice, createActionName } from './storeTypes'
import { useAbilityStore } from './useAbilitiesStore'
import { useArmouryStore } from './useArmouryStore'
import { useCharacterStore } from './useCharacterStore'
import { useSkillsStore } from './useSkillsStore'
import { useWeaponsStore } from './useWeaponsStore'

// State

export interface BuildSave {
	id: number;
	name: string;
	data: string;
}

interface BuildsStateSlice {
	current: number;
	builds: Record<number, BuildSave>;
}

export const defaultBuild = 's=0-90-90-9000&p=0&a=0&t=6&d=0&m=0&k=100&c=0&ap=_&as=_&w=0-0&n=_'

const initialState: BuildsStateSlice = {
	current: 0,
	builds: {
		0: {
			id: 0,
			name: '',
			data: defaultBuild
		}
	}
}

const createStateSlice: Slice<BuildsStore, BuildsStateSlice, Middlewares> = () => initialState

// Action

interface BuildsActionSlice {
	addBuild: (equipBuild: boolean) => void;
	removeBuild: (id: number) => void;
	updateName: (name: string, id?: number) => void;
	updateData: (key: string, value: string) => void;
	changeBuild: (id: number) => void;
	importBuild: (buildData: string, newBuild?: boolean) => void;
}

const actionName = createActionName('builds')

const createActionSlice: Slice<BuildsStore, BuildsActionSlice, Middlewares> = (set, get) => ({
	addBuild: equipBuild => {
		const nextNum = findNextNum(get().builds)
		const id = equipBuild ? nextNum : get().current
		set(state => ({
			current: id,
			builds: {
				...state.builds,
				[nextNum]: {
					id: nextNum,
					name: '',
					data: defaultBuild
				}
			}
		}), ...actionName('addBuild'))
	},
	removeBuild: id => {
		const { builds } = get()
		delete builds[id]
		set({ builds }, ...actionName('removeBuild'))
	},
	updateName: (name, id) => {
		const buildId = id ?? get().current

		const buildData = new URLSearchParams(get().builds[buildId].data)
		buildData.set('n', name || '_')

		set(state => ({
			builds: {
				...state.builds,
				[buildId]: {
					...state.builds[buildId],
					name,
					data: buildData.toString()
				}
			}
		}), ...actionName('updateName'))
	},
	updateData: (key, value) => {
		const { data, id } = get().builds[get().current]
		const parameters = new URLSearchParams(data)
		parameters.set(key, value)
		set(state => ({
			builds: {
				...state.builds,
				[id]: {
					...state.builds[id],
					data: parameters.toString()
				}
			}
		}), ...actionName('updateData'))
	},
	changeBuild: id => {
		set({ current: id }, ...actionName('changeBuild'))
	},
	importBuild: (buildData, newBuild) => {
		if (newBuild) {
			get().addBuild(true)
		}

		const { changePerkDeck } = useAbilityStore.getState()
		const { changeArmour, changeEquipment, changeMask, changeCharacter } = useCharacterStore.getState()
		const { changeThrowable, changeMelee, changeWeapon } = useWeaponsStore.getState()
		const { resetArmoury, addWeapon } = useArmouryStore.getState()

		const split = buildData.split('/?')
		const parameters = new URLSearchParams(split.at(-1))

		const decodeAndDispatch: Record<string, (value: string) => void> = {
			s: value => useSkillsStore.getState().importSkillsData(value),
			p: value => {
				const perkDeck = decodePerkDeck(value)
				changePerkDeck(perkDeck)
			},
			a: value => {
				const armour = decodeArmour(value)
				changeArmour(armour)
			},
			t: value => {
				const throwable = decodeThrowable(value)
				changeThrowable(throwable)
			},
			d: value => {
				const [primary, secondary] = decodeEquipment(value)
				changeEquipment('primary', primary)
				changeEquipment('secondary', secondary)
			},
			m: value => {
				const melee = decodeMelee(value)
				changeMelee(melee)
			},
			k: value => {
				const mask = decodeMask(value)
				changeMask(mask)
			},
			c: value => {
				const character = decodeCharacter(value)
				changeCharacter(character)
			},
			ap: value => {
				const weapons = decodeArmoury(value, primary)
				resetArmoury('primary')
				changeWeapon('primary', 0)
				weapons.forEach(({ weapon, mods }) => {
					addWeapon(weapon, mods)
				})
			},
			as: value => {
				const weapons = decodeArmoury(value, secondary)
				resetArmoury('secondary')
				changeWeapon('secondary', 0)
				weapons.forEach(({ weapon, mods }) => {
					addWeapon(weapon, mods)
				})
			},
			w: value => {
				const [primaryIndex, secondaryIndex] = decodeWeapons(value)
				changeWeapon('primary', primaryIndex)
				changeWeapon('secondary', secondaryIndex)
			},
			n: value => {
				const name = value === '_' ? '' : value
				get().updateName(name)
			}
		}

		parameters.forEach((value, key) => decodeAndDispatch[key]?.(value))
	}
})

// Store

type BuildsStore = BuildsStateSlice & BuildsActionSlice

type Middlewares = [DevTools, Persist]

export const useBuildsStore = create<BuildsStore>()(devtools(persist((...a) => ({
	...createStateSlice(...a),
	...createActionSlice(...a)
}), { name: 'Builds' }), { name: 'Builds Store' }))

export const { updateData } = useBuildsStore.getState()