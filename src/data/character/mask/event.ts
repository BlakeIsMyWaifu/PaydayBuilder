import { type Category } from '../masks'
import aCriminalCarol, { type ACriminalCarolList } from './event/aCriminalCarol'
import alienwareAlphaMaskPack, { type AlienwareAlphaMaskPackList } from './event/alienwareAlphaMaskPack'
import e32015SecretMasks, { type E32015SecretMasksList } from './event/e32015SecretMasks'
import fedora, { type FedoraList } from './event/fedora'
import halloween2021, { type Halloween2021List } from './event/halloween2021'
import halloweenEvent, { type HalloweenEventList } from './event/halloweenEvent'
import hoxtonsHousewarmingParty, { type HoxtonsHousewarmingPartyList } from './event/hoxtonsHousewarmingParty'
import humbleMaskPack, { type HumbleMaskPackList } from './event/humbleMaskPack'
import humbleMaskPack2, { type HumbleMaskPack2List } from './event/humbleMaskPack2'
import humbleMaskPack3, { type HumbleMaskPack3List } from './event/humbleMaskPack3'
import humbleMaskPack4, { type HumbleMaskPack4List } from './event/humbleMaskPack4'
import humbleMaskPack5, { type HumbleMaskPack5List } from './event/humbleMaskPack5'
import lockeAndLoadDay9, { type LockeAndLoadDay9List } from './event/lockeAndLoadDay9'
import merchandise, { type MerchandiseList } from './event/merchandise'
import payday28thAnniversary, { type Payday28thAnniversaryList } from './event/payday28thAnniversary'
import payday29thAnniversary, { type Payday29thAnniversaryList } from './event/payday29thAnniversary'
import paydaycon2015SecretMask, { type Paydaycon2015SecretMaskList } from './event/paydaycon2015SecretMask'
import paydaycon2016SecretMask, { type Paydaycon2016SecretMaskList } from './event/paydaycon2016SecretMask'
import paydayFranchise10thAnniversary, { type PaydayFranchise10thAnniversaryList } from './event/paydayFranchise10thAnniversary'
import paydayFranchise11thAnniversary, { type PaydayFranchise11thAnniversaryList } from './event/paydayFranchise11thAnniversary'
import sydneysSwimChallenge, { type SydneysSwimChallengeList } from './event/sydneysSwimChallenge'

export type EventCollectionList =
	| 'Halloween Event'
	| 'Payday Franchise 10th Anniversary'
	| 'Payday Franchise 11th Anniversary'
	| 'Alienware Alpha Mask Pack'
	| 'E3 2015 Secret Masks'
	| 'Fedora'
	| 'Humble Mask Pack 2'
	| 'Humble Mask Pack 3'
	| 'Humble Mask Pack 4'
	| 'Humble Mask Pack 5'
	| 'Payday 2 8th Anniversary'
	| 'Payday 2 9th Anniversary'
	| 'Locke and Load Day 9'
	| 'PAYDAYCON 2015 Secret Mask'
	| 'PAYDAYCON 2016 Secret Mask'
	| 'Hoxton\'s Housewarming Party'
	| 'Sydney\'s Swim Challenge'
	| 'Halloween 2021'
	| 'Humble Mask Pack'
	| 'A Criminal Carol'
	| 'Merchandise'

export type EventMaskList =
	| HalloweenEventList
	| PaydayFranchise10thAnniversaryList
	| PaydayFranchise11thAnniversaryList
	| AlienwareAlphaMaskPackList
	| E32015SecretMasksList
	| FedoraList
	| HumbleMaskPack2List
	| HumbleMaskPack3List
	| HumbleMaskPack4List
	| HumbleMaskPack5List
	| Payday28thAnniversaryList
	| Payday29thAnniversaryList
	| LockeAndLoadDay9List
	| Paydaycon2015SecretMaskList
	| Paydaycon2016SecretMaskList
	| HoxtonsHousewarmingPartyList
	| SydneysSwimChallengeList
	| Halloween2021List
	| HumbleMaskPackList
	| ACriminalCarolList
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
	'Payday Franchise 11th Anniversary': {
		id: 18,
		masks: paydayFranchise11thAnniversary
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
	'Payday 2 8th Anniversary': {
		id: 17,
		masks: payday28thAnniversary
	},
	'Payday 2 9th Anniversary': {
		id: 19,
		masks: payday29thAnniversary
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
	'A Criminal Carol': {
		id: 20,
		masks: aCriminalCarol
	},
	'Merchandise': {
		id: 16,
		masks: merchandise
	}
}

export default event