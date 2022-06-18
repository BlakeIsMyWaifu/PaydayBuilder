import { MaskData } from 'data/character/masks'
import source from 'data/source/miscSources'

import { InfamousCollectionList } from '../infamous'

export type AchievementMilestonesList =
	| 'Mega Famine'
	| 'Mega Conquest'
	| 'Mega Tormentor'
	| 'Mega Arch Nemesis'
	| 'Mega Rad Mutant'
	| 'Mega Greed'
	| 'The Great Immortal'

const achievementMilestones: Record<AchievementMilestonesList, MaskData<AchievementMilestonesList, InfamousCollectionList>> = {
	'Mega Famine': {
		name: 'Mega Famine',
		image: 'ami_02',
		description: [
			'That loaf of bread you wanted. Imagine that hunger one thousandfold. More than just a lack of food, your very soul is deprived of sustenance until it\'s as empty on nourishment as your belly. If starvation could continue beyond death, this is the visage it would take. But such a plight can be a mighty motivator for heisting.'
		],
		collection: 'Achievement Milestones',
		source: source['Base Game'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked at 90 Achievements'
	},
	'Mega Conquest': {
		name: 'Mega Conquest',
		image: 'ami_03',
		description: [
			'If only the Kings of Old had such an artifact, they would have been invincible. What enemy could withstand bowing before you, as they gaze upon your magnificence? Sun Tzu can go suck a lemon, because with a mask like this, who needs to employ art in war?'
		],
		collection: 'Achievement Milestones',
		source: source['Base Game'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked at 200 Achievements'
	},
	'Mega Tormentor': {
		name: 'Mega Tormentor',
		image: 'ami_05',
		description: [
			'Torturer or tortured? Perhaps both, as the seething glow from your eyes sends chills of terror into the souls of the Law. hear the lamentations of the Uniformed Blue as you evade them skillfully, with evil glee flowing through your veins as you foil every one of their attempts to apprehend you.'
		],
		collection: 'Achievement Milestones',
		source: source['Base Game'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked at 350 Achievements'
	},
	'Mega Arch Nemesis': {
		name: 'Mega Arch Nemesis',
		image: 'ami_04',
		description: [
			'One move, then another. Your opponent makes a move and you respond. he stands there, atop the mountain of gold, daring you to come forward and take on his challenge. By wearing this mask, you declare your defiance, and the rivalry unending.'
		],
		collection: 'Achievement Milestones',
		source: source['Base Game'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked at 550 Achievements'
	},
	'Mega Rad Mutant': {
		name: 'Mega Rad Mutant',
		image: 'ami_01',
		description: [
			'As if high on radioactive spray paint, the power level has been turned up a notch and is now close to bursting. When you go on a heist, everyone around you will duck for cover as you roll by. Every geiger counter in town is about to go haywire.'
		],
		collection: 'Achievement Milestones',
		source: source['Base Game'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked at 750 Achievements'
	},
	'Mega Greed': {
		name: 'Mega Greed',
		image: 'ami_06',
		description: [
			'It burns into your heart and tears the flesh from your skull- orange flames to contrast the color of an unquenchable need for more. How many trips back into the vault will you make until you are satisfied? How many weapons will make you happy? All of them! Maybe.'
		],
		collection: 'Achievement Milestones',
		source: source['Base Game'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked at 950 Achievements'
	},
	'The Great Immortal': {
		name: 'The Great Immortal',
		image: 'tam',
		description: [
			'For a thousand years, the traveller slept, biding his time until the stars did align and a mortal of sufficient ability would unlock him from his unholy prison. Rejoice! For that day has come. Wield this power... wisely.'
		],
		collection: 'Achievement Milestones',
		source: source['Base Game'],
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked at 1000 Achievements'
	}
}

export default achievementMilestones