import { type Category } from '../masks'
import antisphereCollaboration, { type AntisphereCollaborationList } from './collaboration/antisphereCollaboration'
import deadByDaylightDeluxe, { type DeadByDaylightDeluxeList } from './collaboration/deadByDaylightDeluxe'
import enterTheGungeon, { type EnterTheGungeonList } from './collaboration/enterTheGungeon'
import hotlineMiami, { type HotlineMiamiList } from './collaboration/hotlineMiami'
import hotlineMiami2, { type HotlineMiami2List } from './collaboration/hotlineMiami2'
import hotlineMiami2Deluxe, { type HotlineMiami2DeluxeList } from './collaboration/hotlineMiami2Deluxe'
import reservoirDogs, { type ReservoirDogsList } from './collaboration/reservoirDogs'
import saintsRowTheThirdRemastered, { type SaintsRowTheThirdRemasteredList } from './collaboration/saintsRowTheThirdRemastered'
import shadowWarrior2Collaboration, { type ShadowWarrior2CollaborationList } from './collaboration/shadowWarrior2Collaboration'
import speedrunners, { type SpeedrunnersList } from './collaboration/speedrunners'
import steelseries, { type SteelseriesList } from './collaboration/steelseries'

export type CollaborationCollectionList =
	| 'Antisphere Collaboration'
	| 'Dead by Daylight Deluxe'
	| 'Enter the Gungeon'
	| 'Hotline Miami 2'
	| 'Hotline Miami 2 Deluxe'
	| 'Hotline Miami'
	| 'Steelseries'
	| 'Reservoir Dogs'
	| 'Shadow Warrior 2 Collaboration'
	| 'SpeedRunners'
	| 'Saints Row: The Third Remastered'

export type CollaborationMaskList =
	| AntisphereCollaborationList
	| DeadByDaylightDeluxeList
	| EnterTheGungeonList
	| HotlineMiami2List
	| HotlineMiami2DeluxeList
	| HotlineMiamiList
	| SteelseriesList
	| ReservoirDogsList
	| ShadowWarrior2CollaborationList
	| SpeedrunnersList
	| SaintsRowTheThirdRemasteredList

const collaboration: Category<CollaborationCollectionList> = {
	'Antisphere Collaboration': {
		id: 0,
		masks: antisphereCollaboration
	},
	'Dead by Daylight Deluxe': {
		id: 1,
		masks: deadByDaylightDeluxe
	},
	'Enter the Gungeon': {
		id: 2,
		masks: enterTheGungeon
	},
	'Hotline Miami 2': {
		id: 3,
		masks: hotlineMiami2
	},
	'Hotline Miami 2 Deluxe': {
		id: 4,
		masks: hotlineMiami2Deluxe
	},
	'Hotline Miami': {
		id: 5,
		masks: hotlineMiami
	},
	'Steelseries': {
		id: 6,
		masks: steelseries
	},
	'Reservoir Dogs': {
		id: 7,
		masks: reservoirDogs
	},
	'Shadow Warrior 2 Collaboration': {
		id: 8,
		masks: shadowWarrior2Collaboration
	},
	'SpeedRunners': {
		id: 9,
		masks: speedrunners
	},
	'Saints Row: The Third Remastered': {
		id: 10,
		masks: saintsRowTheThirdRemastered
	}
}

export default collaboration