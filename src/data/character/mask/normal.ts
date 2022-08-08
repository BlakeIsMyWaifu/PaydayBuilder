import { Category } from '../masks'
import achievement, { AchievementList } from './normal/achievement'
import aldstonesHeritage, { AldstonesHeritageList } from './normal/aldstonesHeritage'
import aprilFools, { AprilFoolsList } from './normal/aprilFools'
import cardDrops, { CardDropsList } from './normal/cardDrops'
import crimefest2015, { Crimefest2015List } from './normal/crimefest2015'
import defaultMask, { DefaultMaskList } from './normal/defaultMask'
import hoxtonsHousewarmingParty, { HoxtonsHouseWarmingPartyList } from './normal/hoxtonsHousewarmingParty'
import littleHeistersHoliday, { LittleHeistersHolidayList } from './normal/littleHeistersHoliday'
import lockeAndLoad, { LockeAndLoadList } from './normal/lockeAndLoad'
import other, { OtherList } from './normal/other'
import springBreak2018, { SpringBreak2018List } from './normal/springBreak2018'
import theSearchForKento, { TheSearchForKentoList } from './normal/theSearchForKento'

export type NormalCollectionList =
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

export type NormalMaskList =
	| DefaultMaskList
	| CardDropsList
	| AchievementList
	| Crimefest2015List
	| HoxtonsHouseWarmingPartyList
	| TheSearchForKentoList
	| AldstonesHeritageList
	| LockeAndLoadList
	| SpringBreak2018List
	| LittleHeistersHolidayList
	| OtherList
	| AprilFoolsList

const free: Category<NormalCollectionList> = {
	'Default': {
		id: 0,
		masks: defaultMask
	},
	'Card Drops': {
		id: 1,
		masks: cardDrops
	},
	'Achievement': {
		id: 2,
		masks: achievement
	},
	'Crimefest 2015': {
		id: 3,
		masks: crimefest2015
	},
	'Hoxton\'s Housewarming Party': {
		id: 4,
		masks: hoxtonsHousewarmingParty
	},
	'The Search for Kento': {
		id: 5,
		masks: theSearchForKento
	},
	'Aldstone\'s Heritage': {
		id: 6,
		masks: aldstonesHeritage
	},
	'Locke and Load': {
		id: 7,
		masks: lockeAndLoad
	},
	'Spring Break 2018': {
		id: 8,
		masks: springBreak2018
	},
	'Little Heisters\' Holiday!': {
		id: 9,
		masks: littleHeistersHoliday
	},
	'Other': {
		id: 10,
		masks: other
	},
	'April Fools': {
		id: 11,
		masks: aprilFools
	}
}

export default free