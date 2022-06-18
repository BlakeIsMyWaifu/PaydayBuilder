import { Category } from '../masks'
import deadByDaylightCommunity, { DeadByDaylightCommunityList } from './community/deadByDaylightCommunity'
import payday2Community, { Payday2CommunityList } from './community/payday2Community'
import starbreezeAccount, { StarbreezeAccountList } from './community/starbreezeAccount'
import theSolusProjectCommunity, { TheSolusProjectCommunityList } from './community/theSolusProjectCommunity'

export type CommunityCollectionList =
	| 'Dead by Daylight Community'
	| 'Payday 2 Community'
	| 'Starbreeze Account'
	| 'The Solus Project Community'

export type CommunityMaskList =
	| DeadByDaylightCommunityList
	| Payday2CommunityList
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