import { MaskData } from '../masks'
import achievement from './free/achievement'
import aldstonesHeritage from './free/aldstonesHeritage'
import cardDrops from './free/cardDrops'
import crimefest2015 from './free/crimefest2015'
import defaultMask from './free/defaultMask'
import hoxtonsHousewarmingParty from './free/hoxtonsHousewarmingParty'
import littleHeistersHoliday from './free/littleHeistersHoliday'
import lockeAndLoad from './free/lockeAndLoad'
import other from './free/other'
import springBreak2018 from './free/springBreak2018'
import theSearchForKento from './free/theSearchForKento'

const free: Record<string, Record<string, MaskData>> = {
	'default': defaultMask,
	'Card Drops': cardDrops,
	'Achievement': achievement,
	'Crimefest 2015': crimefest2015,
	'Hoxtons Housewarming Party': hoxtonsHousewarmingParty,
	'The Search for Kento': theSearchForKento,
	'Aldstones Heritage': aldstonesHeritage,
	'Locke and Load': lockeAndLoad,
	'Spring Break 2018': springBreak2018,
	'Little Heisters Holiday': littleHeistersHoliday,
	'Other': other
}

export default free