import { trpc } from 'utils/trpc'

const useCacheAll = () => {

	trpc.characterData.maskCommunityData.useQuery()
	trpc.characterData.maskNormalData.useQuery()
	trpc.characterData.maskDlcData.useQuery()
	trpc.characterData.maskEventData.useQuery()
	trpc.characterData.maskCollaboration.useQuery()
	trpc.characterData.maskInfamous.useQuery()

	trpc.characterData.characterData.useQuery()
	trpc.characterData.armourData.useQuery()
	trpc.characterData.equipmentData.useQuery()

	trpc.weaponData.weaponPrimaryAssaultRifleData.useQuery()
	trpc.weaponData.weaponPrimaryShotgunData.useQuery()
	trpc.weaponData.weaponPrimaryLMGData.useQuery()
	trpc.weaponData.weaponPrimarySniperData.useQuery()
	trpc.weaponData.weaponPrimaryAkimboShotgunData.useQuery()
	trpc.weaponData.weaponPrimarySpecialData.useQuery()

	trpc.weaponData.weaponSecondaryPistolData.useQuery()
	trpc.weaponData.weaponSecondarySubmachineGunData.useQuery()
	trpc.weaponData.weaponSecondarySpecialData.useQuery()
	trpc.weaponData.weaponSecondaryShotgunData.useQuery()
	trpc.weaponData.weaponSecondarySniperData.useQuery()

	trpc.weaponData.throwableData.useQuery()
	trpc.weaponData.meleeData.useQuery()

	trpc.abilitiesData.perkDeckData.useQuery()
}

export default useCacheAll