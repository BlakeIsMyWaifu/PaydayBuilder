import { Category } from '../masks'
import antisphereCollaboration from './collaboration/antisphereCollaboration'
import deadByDaylightDeluxe from './collaboration/deadByDaylightDeluxe'
import enterTheGungeon from './collaboration/enterTheGungeon'
import hotlineMiami from './collaboration/hotlineMiami'
import hotlineMiami2 from './collaboration/hotlineMiami2'
import hotlineMiami2Deluxe from './collaboration/hotlineMiami2Deluxe'
import reservoirDogs from './collaboration/reservoirDogs'
import saintsRowTheThirdRemastered from './collaboration/saintsRowTheThirdRemastered'
import shadowWarrior2Collaboration from './collaboration/shadowWarrior2Collaboration'
import speedrunners from './collaboration/speedrunners'
import steelseries from './collaboration/steelseries'

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

const collaboration: Category<CollaborationCollectionList> = {
	'Antisphere Collaboration': {
		id: 0,
		masks: antisphereCollaboration
	},
	'Dead by Daylight Deluxe': {
		id: 0,
		masks: deadByDaylightDeluxe
	},
	'Enter the Gungeon': {
		id: 0,
		masks: enterTheGungeon
	},
	'Hotline Miami 2': {
		id: 0,
		masks: hotlineMiami2
	},
	'Hotline Miami 2 Deluxe': {
		id: 0,
		masks: hotlineMiami2Deluxe
	},
	'Hotline Miami': {
		id: 0,
		masks: hotlineMiami
	},
	'Steelseries': {
		id: 0,
		masks: steelseries
	},
	'Reservoir Dogs': {
		id: 0,
		masks: reservoirDogs
	},
	'Shadow Warrior 2 Collaboration': {
		id: 0,
		masks: shadowWarrior2Collaboration
	},
	'SpeedRunners': {
		id: 0,
		masks: speedrunners
	},
	'Saints Row: The Third Remastered': {
		id: 0,
		masks: saintsRowTheThirdRemastered
	}
}

export default collaboration