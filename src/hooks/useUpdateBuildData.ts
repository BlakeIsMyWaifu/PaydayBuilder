/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { useAbilityStore } from 'state/useAbilitiesStore'
import { useArmouryStore } from 'state/useArmouryStore'
import { updateData } from 'state/useBuildsStore'
import { useCharacterStore } from 'state/useCharacterStore'
import { useSkillsStore } from 'state/useSkillsStore'
import { useWeaponsStore } from 'state/useWeaponsStore'
import { trpc } from 'utils/trpc'

const useUpdateBuildData = (): void => {

	const mask = useCharacterStore(state => state.mask)
	const maskEncode = trpc.encode.mask.useMutation(onSuccess('k'))
	useMutate(mask, maskEncode)

	const character = useCharacterStore(state => state.character)
	const characterEncode = trpc.encode.character.useMutation(onSuccess('h'))
	useMutate(character, characterEncode)

	const armour = useCharacterStore(state => state.armour)
	const armourEncode = trpc.encode.armour.useMutation(onSuccess('a'))
	useMutate(armour, armourEncode)

	const equipment = useCharacterStore(state => state.equipment)
	const equipmentEncode = trpc.encode.equipment.useMutation(onSuccess('d'))
	useMutate(equipment, equipmentEncode)

	const primary = useArmouryStore(state => state.primary)
	const primaryEncode = trpc.encode.armoury.useMutation(onSuccess('ap'))
	useMutate(primary, primaryEncode)

	const secondary = useArmouryStore(state => state.secondary)
	const secondaryEncode = trpc.encode.armoury.useMutation(onSuccess('as'))
	useMutate(secondary, secondaryEncode)

	const weaponsPrimary = useWeaponsStore(state => state.primary)
	const weaponsSecondary = useWeaponsStore(state => state.secondary)
	const weaponsEncode = trpc.encode.weapons.useMutation(onSuccess('w'))
	useEffect(() => {
		weaponsEncode.mutate({
			primary: {
				id: weaponsPrimary,
				armoury: primary
			},
			secondary: {
				id: weaponsSecondary,
				armoury: secondary
			}
		})
	}, [weaponsPrimary, weaponsSecondary, primary, secondary])

	const throwable = useWeaponsStore(state => state.throwable)
	const throwableEncode = trpc.encode.throwable.useMutation(onSuccess('t'))
	useMutate(throwable, throwableEncode)

	const melee = useWeaponsStore(state => state.melee)
	const meleeEncode = trpc.encode.melee.useMutation(onSuccess('m'))
	useMutate(melee, meleeEncode)

	const { points, trees } = useSkillsStore()
	const skillsEncode = trpc.encode.skills.useMutation(onSuccess('s'))
	useEffect(() => {
		skillsEncode.mutate(trees)
	}, [points])

	const perkDeck = useAbilityStore(state => state.perkDeck)
	const perkDeckEncode = trpc.encode.perkDeck.useMutation(onSuccess('p'))
	useMutate(perkDeck, perkDeckEncode)

	const copycat = useAbilityStore(state => state.copycat)
	const copycatEncode = trpc.encode.copycat.useMutation(onSuccess('c'))
	useEffect(() => {
		copycatEncode.mutate(copycat)
	}, [...copycat])
}

// TODO update eslint rules
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const onSuccess = (key: string) => ({ onSuccess: (data: string) => updateData(key, data) })

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useMutate = (data: unknown, encode: { mutate: (data: any) => void }): void => {
	useEffect(() => {
		encode.mutate(data)
	}, [data])
}

export default useUpdateBuildData