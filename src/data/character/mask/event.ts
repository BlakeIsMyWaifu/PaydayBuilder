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
	halloweenEvent,
	humbleMaskPack,
	humbleMaskPack2,
	AlienwareAlphaMaskPack,
	humbleMaskPack3,
	humbleMaskPack4,
	e32015SecretMasks,
	merchandise,
	humbleMaskPack5,
	hoxtonsHousewarmingParty,
	payday2016SecretMask,
	sydneysSwimChallenge,
	fedora,
	lockeAndLoadDay9
}

export default event