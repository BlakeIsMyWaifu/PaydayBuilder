import { MaskData } from '../masks'
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
import unobtainable from './infamous/unobtainable'

const infamous: Record<string, Record<string, MaskData>> = {
	'Card Drops': cardDrops,
	'Achievement': achievement,
	'Other': other,
	'Bonnie Character Pack': bonnieCharacterPack,
	'Hoxton Revenge': hoxtonRevenge,
	'Bodhi Character Pack': bodhiCharacterPack,
	'Jimmy Character Pack': jimmyCharacterPack,
	'John Wick': johnWick,
	'Sangres Character Pack': sangresCharacterPack,
	'Duke Character Pack': dukeCharacterPack,
	'Joy Character Pack': joyCharacterPack,
	'Difficulty Skulls': difficultySkulls,
	'Holdout': holdout,
	'The Secret': theSecret,
	'Infamy Reward': infamyReward,
	'Achievement Milestones': achievementMilestones,
	'Unobtainable': unobtainable
}

export default infamous