import Weapons from 'components/Weapons'
import { type PrimaryWeaponType } from 'data/weapons/guns/primary'
import { type WeaponData } from 'data/weapons/guns/weaponTypes'
import { type NextPage } from 'next'
import { useMemo } from 'react'
import { trpc } from 'utils/trpc'

const Primary: NextPage = () => {

	const data = usePrimaryData()

	return <Weapons slot='primary' data={data} />
}

const usePrimaryData = () => {

	const { data: assaultRifleData } = trpc.weaponData.weaponPrimaryAssaultRifleData.useQuery()
	const { data: shotgunData } = trpc.weaponData.weaponPrimaryShotgunData.useQuery()
	const { data: LMGData } = trpc.weaponData.weaponPrimaryLMGData.useQuery()
	const { data: sniperData } = trpc.weaponData.weaponPrimarySniperData.useQuery()
	const { data: akimboShotgunData } = trpc.weaponData.weaponPrimaryAkimboShotgunData.useQuery()
	const { data: specialData } = trpc.weaponData.weaponPrimarySpecialData.useQuery()

	return useMemo<Record<PrimaryWeaponType, Record<string, WeaponData>>>(() => ({
		'Assault Rifle': assaultRifleData ?? {},
		'Shotgun': shotgunData ?? {},
		'LMG': LMGData ?? {},
		'Sniper': sniperData ?? {},
		'Akimbo Shotgun': akimboShotgunData ?? {},
		'Special': specialData ?? {}
	}), [LMGData, akimboShotgunData, assaultRifleData, shotgunData, sniperData, specialData])
}

export default Primary