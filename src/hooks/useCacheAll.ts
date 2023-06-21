import { useState } from 'react'
import { trpc } from 'utils/trpc'

const useCacheAll = () => {

	const [ready, setReady] = useState(false)

	trpc.session.getSession.useQuery(undefined, { onSuccess: () => setReady(true) })

	trpc.characterData.maskCommunityData.useQuery(undefined, { enabled: ready })
	trpc.characterData.maskNormalData.useQuery(undefined, { enabled: ready })
	trpc.characterData.maskDlcData.useQuery(undefined, { enabled: ready })
	trpc.characterData.maskEventData.useQuery(undefined, { enabled: ready })
	trpc.characterData.maskCollaboration.useQuery(undefined, { enabled: ready })
	trpc.characterData.maskInfamous.useQuery(undefined, { enabled: ready })

	trpc.characterData.characterData.useQuery(undefined, { enabled: ready })
	trpc.characterData.armourData.useQuery(undefined, { enabled: ready })
	trpc.characterData.equipmentData.useQuery(undefined, { enabled: ready })

	trpc.weaponData.weaponPrimaryAssaultRifleData.useQuery(undefined, { enabled: ready })
	trpc.weaponData.weaponPrimaryShotgunData.useQuery(undefined, { enabled: ready })
	trpc.weaponData.weaponPrimaryLMGData.useQuery(undefined, { enabled: ready })
	trpc.weaponData.weaponPrimarySniperData.useQuery(undefined, { enabled: ready })
	trpc.weaponData.weaponPrimaryAkimboShotgunData.useQuery(undefined, { enabled: ready })
	trpc.weaponData.weaponPrimarySpecialData.useQuery(undefined, { enabled: ready })

	trpc.weaponData.weaponSecondaryPistolData.useQuery(undefined, { enabled: ready })
	trpc.weaponData.weaponSecondarySubmachineGunData.useQuery(undefined, { enabled: ready })
	trpc.weaponData.weaponSecondarySpecialData.useQuery(undefined, { enabled: ready })
	trpc.weaponData.weaponSecondaryShotgunData.useQuery(undefined, { enabled: ready })
	trpc.weaponData.weaponSecondarySniperData.useQuery(undefined, { enabled: ready })

	trpc.weaponData.throwableData.useQuery()
	trpc.weaponData.meleeData.useQuery()

	trpc.abilitiesData.perkDeckData.useQuery()
}

export default useCacheAll