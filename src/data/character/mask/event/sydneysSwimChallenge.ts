import { MaskData } from 'data/character/masks'
import content from 'data/source/downloadableContent'

import { EventCollectionList } from '../event'

export type SydneysSwimChallengeList =
	| 'Mega Sydney'

const sydneysSwimChallenge: Record<SydneysSwimChallengeList, MaskData<SydneysSwimChallengeList, EventCollectionList>> = {
	'Mega Sydney': {
		name: 'Mega Sydney',
		image: 'swm_sydney',
		description: [
			'The Mega Sydney mask is an evolved version of the original mask. It symbolises transcendence and catharsis.',
			'Thank you for your support.',
			'OVERKILL salutes you!'
		],
		collection: 'Sydney\'s Swim Challenge',
		source: content['Sydney Mega Mask'],
		rarity: 'Event',
		unlock: 'THIS IS A SYDNEY SWIM ITEM!',
		cost: 'Free'
	}
}

export default sydneysSwimChallenge