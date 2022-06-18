import { Category } from '../masks'
import alienwareAlphaMaskPack, { AlienwareAlphaMaskPackList } from './event/alienwareAlphaMaskPack'
import e32015SecretMasks, { E32015SecretMasksList } from './event/e32015SecretMasks'
import fedora, { FedoraList } from './event/fedora'
import halloween2021, { Halloween2021List } from './event/halloween2021'
import halloweenEvent, { HalloweenEventList } from './event/halloweenEvent'
import hoxtonsHousewarmingParty, { HoxtonsHousewarmingPartyList } from './event/hoxtonsHousewarmingParty'
import humbleMaskPack, { HumbleMaskPackList } from './event/humbleMaskPack'
import humbleMaskPack2, { HumbleMaskPack2List } from './event/humbleMaskPack2'
import humbleMaskPack3, { HumbleMaskPack3List } from './event/humbleMaskPack3'
import humbleMaskPack4, { HumbleMaskPack4List } from './event/humbleMaskPack4'
import humbleMaskPack5, { HumbleMaskPack5List } from './event/humbleMaskPack5'
import lockeAndLoadDay9, { LockeAndLoadDay9List } from './event/lockeAndLoadDay9'
import merchandise, { MerchandiseList } from './event/merchandise'
import payday28thAnniversary, { Payday28thAnniversaryList } from './event/payday28thAnniversary'
import paydaycon2015SecretMask, { Paydaycon2015SecretMaskList } from './event/paydaycon2015SecretMask'
import paydaycon2016SecretMask, { Paydaycon2016SecretMaskList } from './event/paydaycon2016SecretMask'
import paydayFranchise10thAnniversary, { PaydayFranchise10thAnniversaryList } from './event/paydayFranchise10thAnniversary'
import sydneysSwimChallenge, { SydneysSwimChallengeList } from './event/sydneysSwimChallenge'

export type EventCollectionList =
	| 'Halloween Event'
	| 'Payday Franchise 10th Anniversary'
	| 'Alienware Alpha Mask Pack'
	| 'E3 2015 Secret Masks'
	| 'Fedora'
	| 'Humble Mask Pack 2'
	| 'Humble Mask Pack 3'
	| 'Humble Mask Pack 4'
	| 'Humble Mask Pack 5'
	| 'Locke and Load Day 9'
	| 'PAYDAYCON 2015 Secret Mask'
	| 'PAYDAYCON 2016 Secret Mask'
	| 'Hoxton\'s Housewarming Party'
	| 'Sydney\'s Swim Challenge'
	| 'Halloween 2021'
	| 'Humble Mask Pack'
	| 'Payday 2 8th Anniversary'
	| 'Merchandise'

export type EventMaskList =
	| HalloweenEventList
	| PaydayFranchise10thAnniversaryList
	| AlienwareAlphaMaskPackList
	| E32015SecretMasksList
	| FedoraList
	| HumbleMaskPack2List
	| HumbleMaskPack3List
	| HumbleMaskPack4List
	| HumbleMaskPack5List
	| LockeAndLoadDay9List
	| Paydaycon2015SecretMaskList
	| Paydaycon2016SecretMaskList
	| HoxtonsHousewarmingPartyList
	| SydneysSwimChallengeList
	| Halloween2021List
	| HumbleMaskPackList
	| Payday28thAnniversaryList
	| MerchandiseList

const event: Category<EventCollectionList> = {
	'Halloween Event': {
		id: 0,
		masks: halloweenEvent
	},
	'Payday Franchise 10th Anniversary': {
		id: 1,
		masks: paydayFranchise10thAnniversary
	},
	'Alienware Alpha Mask Pack': {
		id: 2,
		masks: alienwareAlphaMaskPack
	},
	'E3 2015 Secret Masks': {
		id: 3,
		masks: e32015SecretMasks
	},
	'Fedora': {
		id: 4,
		masks: fedora
	},
	'Humble Mask Pack 2': {
		id: 5,
		masks: humbleMaskPack2
	},
	'Humble Mask Pack 3': {
		id: 6,
		masks: humbleMaskPack3
	},
	'Humble Mask Pack 4': {
		id: 7,
		masks: humbleMaskPack4
	},
	'Humble Mask Pack 5': {
		id: 8,
		masks: humbleMaskPack5
	},
	'Locke and Load Day 9': {
		id: 9,
		masks: lockeAndLoadDay9
	},
	'PAYDAYCON 2015 Secret Mask': {
		id: 10,
		masks: paydaycon2015SecretMask
	},
	'PAYDAYCON 2016 Secret Mask': {
		id: 11,
		masks: paydaycon2016SecretMask
	},
	'Hoxton\'s Housewarming Party': {
		id: 12,
		masks: hoxtonsHousewarmingParty
	},
	'Sydney\'s Swim Challenge': {
		id: 13,
		masks: sydneysSwimChallenge
	},
	'Halloween 2021': {
		id: 14,
		masks: halloween2021
	},
	'Humble Mask Pack': {
		id: 15,
		masks: humbleMaskPack
	},
	'Payday 2 8th Anniversary': {
		id: 16,
		masks: payday28thAnniversary
	},
	'Merchandise': {
		id: 17,
		masks: merchandise
	}
}

export default event