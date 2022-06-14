import { MaskData } from '../masks'
import deadByDaylightCommunity from './community/deadByDaylightCommunity'
import payday2Community from './community/payday2Community'
import starbreezeAccount from './community/starbreezeAccount'
import theSolusProjectCommunity from './community/theSolusProjectCommunity'

const community: Record<string, Record<string, MaskData>> = {
	'Dead by Daylight Community': deadByDaylightCommunity,
	'Payday 2 Community': payday2Community,
	'Starbreeze Account': starbreezeAccount,
	'The Solus Project Community': theSolusProjectCommunity
}

export default community