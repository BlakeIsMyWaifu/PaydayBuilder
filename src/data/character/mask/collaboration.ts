import { MaskData } from '../masks'
import antisphereCollaboration from './collaboration/antisphereCollaboration'
import deadByDaylightDeluxe from './collaboration/deadByDaylightDeluxe'
import enterTheGungeon from './collaboration/enterTheGungeon'
import hotlineMiami from './collaboration/hotlineMiami'
import hotlineMiami2 from './collaboration/hotlineMiami2'
import hotlineMiami2Deluxe from './collaboration/hotlineMiami2Deluxe'
import reservoirDogs from './collaboration/reservoirDogs'
import shadowWarrior2Collaboration from './collaboration/shadowWarrior2Collaboration'
import speedrunners from './collaboration/speedrunners'

const collaboration: Record<string, Record<string, MaskData>> = {
	hotlineMiami,
	hotlineMiami2,
	hotlineMiami2Deluxe,
	speedrunners,
	deadByDaylightDeluxe,
	shadowWarrior2Collaboration,
	antisphereCollaboration,
	enterTheGungeon,
	reservoirDogs
}

export default collaboration