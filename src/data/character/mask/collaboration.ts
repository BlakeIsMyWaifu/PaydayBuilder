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
	'Hotline Miami': hotlineMiami,
	'Hotline Miami 2': hotlineMiami2,
	'Hotline Miami 2 Deluxe': hotlineMiami2Deluxe,
	'Speedrunners': speedrunners,
	'Dead by Daylight Deluxe': deadByDaylightDeluxe,
	'Shadow Warrior 2 Collaboration': shadowWarrior2Collaboration,
	'Antisphere Collaboration': antisphereCollaboration,
	'Enter the Gungeon': enterTheGungeon,
	'Reservoir Dogs': reservoirDogs
}

export default collaboration