import Weapons from 'components/Weapons'
import { type SecondaryWeaponType } from 'data/weapons/guns/secondary'
import { type WeaponData } from 'data/weapons/guns/weaponTypes'
import { type NextPage } from 'next'
import { useMemo } from 'react'
import { trpc } from 'utils/trpc'

const Secondary: NextPage = () => {

	const data = useSecondaryData()

	return <Weapons slot='secondary' data={data} />
}

const useSecondaryData = () => {

	const { data: pistolData } = trpc.weaponData.weaponSecondaryPistolData.useQuery()
	const { data: submachineGunData } = trpc.weaponData.weaponSecondarySubmachineGunData.useQuery()
	const { data: specialData } = trpc.weaponData.weaponSecondarySpecialData.useQuery()
	const { data: shotgunData } = trpc.weaponData.weaponSecondaryShotgunData.useQuery()
	const { data: sniperData } = trpc.weaponData.weaponSecondarySniperData.useQuery()

	return useMemo<Record<SecondaryWeaponType, Record<string, WeaponData>>>(() => ({
		'Pistol': pistolData ?? {},
		'Submachine Gun': submachineGunData ?? {},
		'Special': specialData ?? {},
		'Shotgun': shotgunData ?? {},
		'Sniper': sniperData ?? {}
	}), [pistolData, shotgunData, sniperData, specialData, submachineGunData])
}

export default Secondary