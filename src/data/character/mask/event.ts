import { MaskData } from '../masks'
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

const event: Record<string, Record<string, MaskData>> = {
	'Halloween Event': halloweenEvent,
	'Payday Franchise 10th Anniversary': paydayFranchise10thAnniversary,
	'Alienware Alpha Mask Pack': alienwareAlphaMaskPack,
	'E3 2015 Secret Masks': e32015SecretMasks,
	'Fedora': fedora,
	'Humble Mask Pack 2': humbleMaskPack2,
	'Humble Mask Pack 3': humbleMaskPack3,
	'Humble Mask Pack 4': humbleMaskPack4,
	'Humble Mask Pack 5': humbleMaskPack5,
	'Locke and Load Day 9': lockeAndLoadDay9,
	'Paydaycon 2015 Secret Mask': paydaycon2015SecretMask,
	'Paydaycon 2016 Secret Mask': paydaycon2016SecretMask,
	'Hoxtons Housewarming Party': hoxtonsHousewarmingParty,
	'Sydney Swim Challenge': sydneysSwimChallenge,
	'Halloween 2021': halloween2021,
	'Humble Mask Pack': humbleMaskPack,
	'Payday 2 8th Anniversary': payday28thAnniversary,
	'Merchandise': merchandise
}

export default event