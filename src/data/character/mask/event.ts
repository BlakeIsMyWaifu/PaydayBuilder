import { MaskData } from '../masks'
import AlienwareAlphaMaskPack from './event/AlienwareAlphaMaskPack'
import e32015SecretMasks from './event/e32015SecretMasks'
import fedora from './event/fedora'
import halloweenEvent from './event/halloweenEvent'
import hoxtonsHousewarmingParty from './event/hoxtonsHousewarmingParty'
import humbleMaskPack from './event/humbleMaskPack'
import humbleMaskPack2 from './event/humbleMaskPack2'
import humbleMaskPack3 from './event/humbleMaskPack3'
import humbleMaskPack4 from './event/humbleMaskPack4'
import humbleMaskPack5 from './event/humbleMaskPack5'
import lockeAndLoadDay9 from './event/lockeAndLoadDay9'
import merchandise from './event/merchandise'
import payday2016SecretMask from './event/payday2016SecretMask'
import sydneysSwimChallenge from './event/sydneysSwimChallenge'

const event: Record<string, Record<string, MaskData>> = {
	'Halloween Event': halloweenEvent,
	'Humble Mask Pack': humbleMaskPack,
	'Humble Mask Pack 2': humbleMaskPack2,
	'Alienware Alpha Mask Pack': AlienwareAlphaMaskPack,
	'Humble Mask Pack 3': humbleMaskPack3,
	'Humble Mask Pack 4': humbleMaskPack4,
	'E3 2015 Secret Masks': e32015SecretMasks,
	'Merchandise': merchandise,
	'Humble Mask Pack 5': humbleMaskPack5,
	'Hoxtons Housewarming Party': hoxtonsHousewarmingParty,
	'Payday 2016 Secret Mask': payday2016SecretMask,
	'Sydney Swim Challenge': sydneysSwimChallenge,
	'Fedora': fedora,
	'Locke and Load Day 9': lockeAndLoadDay9
}

export default event