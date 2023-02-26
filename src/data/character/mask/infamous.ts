import { type Category } from '../masks'
import achievement, { type AchievementList } from './infamous/achievement'
import achievementMilestones, { type AchievementMilestonesList } from './infamous/achievementMilestones'
import bodhiCharacterPack, { type BodhiCharacterPackList } from './infamous/bodhiCharacterPack'
import bonnieCharacterPack, { type BonnieCharacterPackList } from './infamous/bonnieCharacterPack'
import cardDrops, { type CardDropsList } from './infamous/cardDrops'
import difficultySkulls, { type DifficultySkullsList } from './infamous/difficultySkulls'
import dukeCharacterPack, { type DukeCharacterPackList } from './infamous/dukeCharacterPack'
import holdout, { type HoldoutList } from './infamous/holdout'
import hoxtonRevenge, { type HoxtonRevengeList } from './infamous/hoxtonRevenge'
import infamyReward, { type InfamyRewardList } from './infamous/infamyReward'
import jimmyCharacterPack, { type JimmyCharacterPackList } from './infamous/jimmyCharacterPack'
import johnWick, { type JohnWickList } from './infamous/johnWick'
import joyCharacterPack, { type JoyCharacterPackList } from './infamous/joyCharacterPack'
import other, { type OtherList } from './infamous/other'
import sangresCharacterPack, { type SangresCharacterPackList } from './infamous/sangresCharacterPack'
import theSecret, { type TheSecretList } from './infamous/theSecret'

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

export type InfamousMaskList =
	| CardDropsList
	| BodhiCharacterPackList
	| BonnieCharacterPackList
	| HoxtonRevengeList
	| AchievementList
	| OtherList
	| JimmyCharacterPackList
	| JohnWickList
	| SangresCharacterPackList
	| DukeCharacterPackList
	| JoyCharacterPackList
	| DifficultySkullsList
	| HoldoutList
	| TheSecretList
	| InfamyRewardList
	| AchievementMilestonesList

const infamous: Category<InfamousCollectionList> = {
	'Card Drops': {
		id: 0,
		masks: cardDrops
	},
	'Bodhi Character Pack': {
		id: 1,
		masks: bodhiCharacterPack
	},
	'Bonnie Character Pack': {
		id: 2,
		masks: bonnieCharacterPack
	},
	'Hoxton Revenge': {
		id: 3,
		masks: hoxtonRevenge
	},
	'Achievement': {
		id: 4,
		masks: achievement
	},
	'Other': {
		id: 5,
		masks: other
	},
	'Jimmy Character Pack': {
		id: 6,
		masks: jimmyCharacterPack
	},
	'John Wick': {
		id: 7,
		masks: johnWick
	},
	'Sangres Character Pack': {
		id: 8,
		masks: sangresCharacterPack
	},
	'Duke Character Pack': {
		id: 9,
		masks: dukeCharacterPack
	},
	'Joy Character Pack': {
		id: 10,
		masks: joyCharacterPack
	},
	'Difficulty Skulls': {
		id: 11,
		masks: difficultySkulls
	},
	'Holdout': {
		id: 12,
		masks: holdout
	},
	'The Secret': {
		id: 13,
		masks: theSecret
	},
	'Infamy Reward': {
		id: 14,
		masks: infamyReward
	},
	'Achievement Milestones': {
		id: 15,
		masks: achievementMilestones
	}
}

export default infamous