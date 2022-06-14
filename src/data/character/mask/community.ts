import { Category } from '../masks'
import deadByDaylightCommunity from './community/deadByDaylightCommunity'
import payday2Community from './community/payday2Community'
import starbreezeAccount from './community/starbreezeAccount'
import theSolusProjectCommunity from './community/theSolusProjectCommunity'

export type CommunityCollectionList =
	| 'Dead by Daylight Community'
	| 'Payday 2 Community'
	| 'Starbreeze Account'
	| 'The Solus Project Community'

const community: Category<CommunityCollectionList> = {
	'Dead by Daylight Community': {
		id: 0,
		masks: deadByDaylightCommunity
	},
	'Payday 2 Community': {
		id: 0,
		masks: payday2Community
	},
	'Starbreeze Account': {
		id: 0,
		masks: starbreezeAccount
	},
	'The Solus Project Community': {
		id: 0,
		masks: theSolusProjectCommunity
	}
}

export default community