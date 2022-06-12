import { MaskData } from '../masks'
import deadByDaylightCommunity from './community/deadByDaylightCommunity'
import payday2Community from './community/payday2Community'
import theSolusProjectCommunity from './community/theSolusProjectCommunity'

const community: Record<string, Record<string, MaskData>> = {
	payday2Community,
	deadByDaylightCommunity,
	theSolusProjectCommunity
}

export default community