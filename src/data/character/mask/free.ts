import { MaskData } from '../masks'
import achievement from './free/achievement'
import aldstonesHeritage from './free/aldstonesHeritage'
import cardDrops from './free/cardDrops'
import crimefest2015 from './free/crimefest2015'
import defaultMask from './free/defaultMask'
import hoxtonsHouseWarmingParty from './free/hoxtonsHouseWarmingParty'
import littleHeistersHoliday from './free/littleHeistersHoliday'
import lockeAndLoad from './free/lockeAndLoad'
import other from './free/other'
import springBreak2018 from './free/springBreak2018'
import theSearchForKento from './free/theSearchForKento'

const free: Record<string, Record<string, MaskData>> = {
	default: defaultMask,
	cardDrops,
	achievement,
	crimefest2015,
	hoxtonsHouseWarmingParty,
	theSearchForKento,
	aldstonesHeritage,
	lockeAndLoad,
	springBreak2018,
	littleHeistersHoliday,
	other
}

export default free