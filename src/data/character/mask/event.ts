import { Category } from '../masks'
import alienwareAlphaMaskPack from './event/alienwareAlphaMaskPack'
import e32015SecretMasks from './event/e32015SecretMasks'
import fedora from './event/fedora'
import halloween2021 from './event/halloween2021'
import halloweenEvent from './event/halloweenEvent'
import hoxtonsHousewarmingParty from './event/hoxtonsHousewarmingParty'
import humbleMaskPack from './event/humbleMaskPack'
import humbleMaskPack2 from './event/humbleMaskPack2'
import humbleMaskPack3 from './event/humbleMaskPack3'
import humbleMaskPack4 from './event/humbleMaskPack4'
import humbleMaskPack5 from './event/humbleMaskPack5'
import lockeAndLoadDay9 from './event/lockeAndLoadDay9'
import merchandise from './event/merchandise'
import payday28thAnniversary from './event/payday28thAnniversary'
import paydaycon2015SecretMask from './event/paydaycon2015SecretMask'
import paydaycon2016SecretMask from './event/paydaycon2016SecretMask'
import paydayFranchise10thAnniversary from './event/paydayFranchise10thAnniversary'
import sydneysSwimChallenge from './event/sydneysSwimChallenge'

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
	| 'Paydaycon 2015 Secret Mask'
	| 'Paydaycon 2016 Secret Mask'
	| 'Hoxtons Housewarming Party'
	| 'Sydney Swim Challenge'
	| 'Halloween 2021'
	| 'Humble Mask Pack'
	| 'Payday 2 8th Anniversary'
	| 'Merchandise'

const event: Category<EventCollectionList> = {
	'Halloween Event': {
		id: 0,
		masks: halloweenEvent
	},
	'Payday Franchise 10th Anniversary': {
		id: 0,
		masks: paydayFranchise10thAnniversary
	},
	'Alienware Alpha Mask Pack': {
		id: 0,
		masks: alienwareAlphaMaskPack
	},
	'E3 2015 Secret Masks': {
		id: 0,
		masks: e32015SecretMasks
	},
	'Fedora': {
		id: 0,
		masks: fedora
	},
	'Humble Mask Pack 2': {
		id: 0,
		masks: humbleMaskPack2
	},
	'Humble Mask Pack 3': {
		id: 0,
		masks: humbleMaskPack3
	},
	'Humble Mask Pack 4': {
		id: 0,
		masks: humbleMaskPack4
	},
	'Humble Mask Pack 5': {
		id: 0,
		masks: humbleMaskPack5
	},
	'Locke and Load Day 9': {
		id: 0,
		masks: lockeAndLoadDay9
	},
	'Paydaycon 2015 Secret Mask': {
		id: 0,
		masks: paydaycon2015SecretMask
	},
	'Paydaycon 2016 Secret Mask': {
		id: 0,
		masks: paydaycon2016SecretMask
	},
	'Hoxtons Housewarming Party': {
		id: 0,
		masks: hoxtonsHousewarmingParty
	},
	'Sydney Swim Challenge': {
		id: 0,
		masks: sydneysSwimChallenge
	},
	'Halloween 2021': {
		id: 0,
		masks: halloween2021
	},
	'Humble Mask Pack': {
		id: 0,
		masks: humbleMaskPack
	},
	'Payday 2 8th Anniversary': {
		id: 0,
		masks: payday28thAnniversary
	},
	'Merchandise': {
		id: 0,
		masks: merchandise
	}
}

export default event