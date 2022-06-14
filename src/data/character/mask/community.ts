import { MaskData } from '../masks'
import deadByDaylightCommunity from './community/deadByDaylightCommunity'
import payday2Community from './community/payday2Community'
import theSolusProjectCommunity from './community/theSolusProjectCommunity'

const community: Record<string, Record<string, MaskData>> = {
	'Payday 2 Community': payday2Community,
	'Dead by Daylight Community': deadByDaylightCommunity,
	'The Solus Project Community': theSolusProjectCommunity
}

export default community