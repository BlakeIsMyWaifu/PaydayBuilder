import { Category } from '../masks'
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

export type FreeCollectionList =
	| 'default'
	| 'Card Drops'
	| 'Achievement'
	| 'Crimefest 2015'
	| 'Hoxtons Housewarming Party'
	| 'The Search for Kento'
	| 'Aldstones Heritage'
	| 'Locke and Load'
	| 'Spring Break 2018'
	| 'Little Heisters Holiday'
	| 'Other'

const free: Category<FreeCollectionList> = {
	'default': {
		id: 0,
		masks: defaultMask
	},
	'Card Drops': {
		id: 0,
		masks: cardDrops
	},
	'Achievement': {
		id: 0,
		masks: achievement
	},
	'Crimefest 2015': {
		id: 0,
		masks: crimefest2015
	},
	'Hoxtons Housewarming Party': {
		id: 0,
		masks: hoxtonsHousewarmingParty
	},
	'The Search for Kento': {
		id: 0,
		masks: theSearchForKento
	},
	'Aldstones Heritage': {
		id: 0,
		masks: aldstonesHeritage
	},
	'Locke and Load': {
		id: 0,
		masks: lockeAndLoad
	},
	'Spring Break 2018': {
		id: 0,
		masks: springBreak2018
	},
	'Little Heisters Holiday': {
		id: 0,
		masks: littleHeistersHoliday
	},
	'Other': {
		id: 0,
		masks: other
	}
}

export default free