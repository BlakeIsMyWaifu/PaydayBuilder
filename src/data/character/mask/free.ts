import { Category } from '../masks'
import achievement from './free/achievement'
import aldstonesHeritage from './free/aldstonesHeritage'
import aprilFools from './free/aprilFools'
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
	| 'Default'
	| 'Card Drops'
	| 'Achievement'
	| 'Crimefest 2015'
	| 'Hoxton\'s Housewarming Party'
	| 'The Search for Kento'
	| 'Aldstone\'s Heritage'
	| 'Locke and Load'
	| 'Spring Break 2018'
	| 'Little Heisters\' Holiday!'
	| 'Other'
	| 'April Fools'

const free: Category<FreeCollectionList> = {
	'Default': {
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
	'Hoxton\'s Housewarming Party': {
		id: 0,
		masks: hoxtonsHousewarmingParty
	},
	'The Search for Kento': {
		id: 0,
		masks: theSearchForKento
	},
	'Aldstone\'s Heritage': {
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
	'Little Heisters\' Holiday!': {
		id: 0,
		masks: littleHeistersHoliday
	},
	'Other': {
		id: 0,
		masks: other
	},
	'April Fools': {
		id: 0,
		masks: aprilFools
	}
}

export default free