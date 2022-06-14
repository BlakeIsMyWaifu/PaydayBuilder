import { MaskData } from '../masks'
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

const collaboration: Record<string, Record<string, MaskData>> = {
	'Antisphere Collaboration': antisphereCollaboration,
	'Dead by Daylight Deluxe': deadByDaylightDeluxe,
	'Enter the Gungeon': enterTheGungeon,
	'Hotline Miami 2': hotlineMiami2,
	'Hotline Miami 2 Deluxe': hotlineMiami2Deluxe,
	'Hotline Miami': hotlineMiami,
	'Steelseries': steelseries,
	'Reservoir Dogs': reservoirDogs,
	'Shadow Warrior 2 Collaboration': shadowWarrior2Collaboration,
	'Speedrunners': speedrunners,
	'Saints Row: The Third Remastered': saintsRowTheThirdRemastered
}

export default collaboration