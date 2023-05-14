import { useCallback } from 'react'
import { useAbilityStore } from 'state/useAbilitiesStore'
import { useArmouryStore } from 'state/useArmouryStore'
import { useBuildsStore } from 'state/useBuildsStore'
import { useCharacterStore } from 'state/useCharacterStore'
import { useSkillsStore } from 'state/useSkillsStore'
import { useWeaponsStore } from 'state/useWeaponsStore'
import { trpc } from 'utils/trpc'

const useBuildImport = () => {

	const addBuild = useBuildsStore(state => state.addBuild)

	const { changeMask, changeCharacter, changeArmour, changeEquipment } = useCharacterStore()
	const { resetArmoury, addWeapon } = useArmouryStore()
	const { changeWeapon, changeThrowable, changeMelee } = useWeaponsStore()
	const { changePerkDeck, setCopycatValues } = useAbilityStore()
	const { importSkillsData } = useSkillsStore()

	const maskData = trpc.decode.mask.useMutation({ onSuccess: data => changeMask(data) })
	const characterData = trpc.decode.character.useMutation({ onSuccess: data => changeCharacter(data) })
	const armourData = trpc.decode.armour.useMutation({ onSuccess: data => changeArmour(data) })
	const equipmentData = trpc.decode.equipment.useMutation({
		onSuccess: ([primary, secondary]) => {
			changeEquipment('primary', primary)
			changeEquipment('secondary', secondary)
		}
	})
	const armouryData = trpc.decode.armoury.useMutation({
		onSuccess: ([data, slot]) => {
			resetArmoury(slot)
			changeWeapon(slot, 0)
			data.forEach(({ weapon, mods }) => {
				addWeapon(weapon, mods)
			})
		}
	})
	const weaponsData = trpc.decode.weapons.useMutation({
		onSuccess: ([primaryIndex, secondaryIndex]) => {
			changeWeapon('primary', primaryIndex)
			changeWeapon('secondary', secondaryIndex)
		}
	})
	const throwableData = trpc.decode.throwable.useMutation({ onSuccess: data => changeThrowable(data) })
	const meleeData = trpc.decode.melee.useMutation({ onSuccess: data => changeMelee(data) })
	const perkDeckData = trpc.decode.perkDeck.useMutation({ onSuccess: data => changePerkDeck(data) })
	const copycatData = trpc.decode.copycat.useMutation({ onSuccess: data => setCopycatValues(data) })

	return useCallback((buildData: string, newBuild: boolean) => {

		if (newBuild) {
			addBuild(true)
		}

		const split = buildData.split('/?')
		const parameters = new URLSearchParams(split.at(-1))

		maskData.mutate(parameters.get('k'))
		characterData.mutate(parameters.get('h'))
		armourData.mutate(parameters.get('a'))
		equipmentData.mutate(parameters.get('d'))
		armouryData.mutate([parameters.get('ap'), 'primary'])
		armouryData.mutate([parameters.get('as'), 'secondary'])
		weaponsData.mutate(parameters.get('w'))
		throwableData.mutate(parameters.get('t'))
		meleeData.mutate(parameters.get('m'))
		perkDeckData.mutate(parameters.get('p'))
		copycatData.mutate(parameters.get('c'))
		importSkillsData(parameters.get('s') ?? '0-90-90-9000')
	}, [addBuild, armourData, armouryData, characterData, copycatData, equipmentData, importSkillsData, maskData, meleeData, perkDeckData, throwableData, weaponsData])
}

export default useBuildImport