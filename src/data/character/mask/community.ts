import { type Category } from '../masks'
import deadByDaylightCommunity, { type DeadByDaylightCommunityList } from './community/deadByDaylightCommunity'
import payday2Community, { type Payday2CommunityList } from './community/payday2Community'
import primeMatter, { type PrimeMatterList } from './community/primeMatter'
import starbreezeAccount, { type StarbreezeAccountList } from './community/starbreezeAccount'
import theSolusProjectCommunity, { type TheSolusProjectCommunityList } from './community/theSolusProjectCommunity'

export type CommunityCollectionList =
	| 'Dead by Daylight Community'
	| 'Payday 2 Community'
	| 'Starbreeze Account'
	| 'Prime Matter'
	| 'The Solus Project Community'

export type CommunityMaskList =
	| DeadByDaylightCommunityList
	| Payday2CommunityList
	| PrimeMatterList
	| StarbreezeAccountList
	| TheSolusProjectCommunityList

const community: Category<CommunityCollectionList> = {
	'Dead by Daylight Community': {
		id: 0,
		masks: deadByDaylightCommunity
	},
	'Payday 2 Community': {
		id: 1,
		masks: payday2Community
	},
	'Prime Matter': {
		id: 4,
		masks: primeMatter
	},
	'Starbreeze Account': {
		id: 2,
		masks: starbreezeAccount
	},
	'The Solus Project Community': {
		id: 3,
		masks: theSolusProjectCommunity
	}
}

export default community