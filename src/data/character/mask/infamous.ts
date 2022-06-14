import { Category } from '../masks'
import achievement from './infamous/achievement'
import achievementMilestones from './infamous/achievementMilestones'
import bodhiCharacterPack from './infamous/bodhiCharacterPack'
import bonnieCharacterPack from './infamous/bonnieCharacterPack'
import cardDrops from './infamous/cardDrops'
import difficultySkulls from './infamous/difficultySkulls'
import dukeCharacterPack from './infamous/dukeCharacterPack'
import holdout from './infamous/holdout'
import hoxtonRevenge from './infamous/hoxtonRevenge'
import infamyReward from './infamous/infamyReward'
import jimmyCharacterPack from './infamous/jimmyCharacterPack'
import johnWick from './infamous/johnWick'
import joyCharacterPack from './infamous/joyCharacterPack'
import other from './infamous/other'
import sangresCharacterPack from './infamous/sangresCharacterPack'
import theSecret from './infamous/theSecret'

export type InfamousCollectionList =
	| 'Card Drops'
	| 'Bodhi Character Pack'
	| 'Bonnie Character Pack'
	| 'Hoxton Revenge'
	| 'Achievement'
	| 'Other'
	| 'Jimmy Character Pack'
	| 'John Wick'
	| 'Sangres Character Pack'
	| 'Duke Character Pack'
	| 'Joy Character Pack'
	| 'Difficulty Skulls'
	| 'Holdout'
	| 'The Secret'
	| 'Infamy Reward'
	| 'Achievement Milestones'

const infamous: Category<InfamousCollectionList> = {
	'Card Drops': {
		id: 0,
		masks: cardDrops
	},
	'Bodhi Character Pack': {
		id: 0,
		masks: bodhiCharacterPack
	},
	'Bonnie Character Pack': {
		id: 0,
		masks: bonnieCharacterPack
	},
	'Hoxton Revenge': {
		id: 0,
		masks: hoxtonRevenge
	},
	'Achievement': {
		id: 0,
		masks: achievement
	},
	'Other': {
		id: 0,
		masks: other
	},
	'Jimmy Character Pack': {
		id: 0,
		masks: jimmyCharacterPack
	},
	'John Wick': {
		id: 0,
		masks: johnWick
	},
	'Sangres Character Pack': {
		id: 0,
		masks: sangresCharacterPack
	},
	'Duke Character Pack': {
		id: 0,
		masks: dukeCharacterPack
	},
	'Joy Character Pack': {
		id: 0,
		masks: joyCharacterPack
	},
	'Difficulty Skulls': {
		id: 0,
		masks: difficultySkulls
	},
	'Holdout': {
		id: 0,
		masks: holdout
	},
	'The Secret': {
		id: 0,
		masks: theSecret
	},
	'Infamy Reward': {
		id: 0,
		masks: infamyReward
	},
	'Achievement Milestones': {
		id: 0,
		masks: achievementMilestones
	}
}

export default infamous