import { MaskData } from 'data/character/masks'
import content from 'data/source/downloadableContent'

import { DlcCollectionList } from '../dlc'

type TheAlessoHeistList =
	| 'Boombox'
	| 'Cantus'
	| 'Female Concert Goer'
	| 'Male Concert Goer'

const theAlessoHeist: Record<TheAlessoHeistList, MaskData<TheAlessoHeistList, DlcCollectionList>> = {
	'Boombox': {
		name: 'Boombox',
		image: 'boombox',
		description: [
			'According to the brochure, Alesso\'s Boom Box features include \'No batteries to slay your vibe, sound insulation to keep suckas from hearing your beats and full-face armor to keep cops from checking your clock.\''
		],
		collection: 'The Alesso Heist',
		source: content['The Alesso Heist'],
		rarity: 'Paid',
		unlock: 'THIS IS A THE ALESSO HEIST ITEM!',
		cost: 'Unlocked through Achievement'
	},
	'Cantus': {
		name: 'Cantus',
		image: 'cantus',
		description: [
			'Whether you\'re on the bus or in the boardroom, when Alesso is filling your ears with heavenly tunes, it\'s important to show the world a suitable face. Presenting Cantus - the Angel of Music and Song. Let your spirit soar!'
		],
		collection: 'The Alesso Heist',
		source: content['The Alesso Heist'],
		rarity: 'Paid',
		unlock: 'THIS IS A THE ALESSO HEIST ITEM!',
		cost: 'Unlocked through Achievement'
	},
	'Female Concert Goer': {
		name: 'Female Concert Goer',
		image: 'concert_female',
		description: [
			'When you descend into the roiling whirlpool that is the ecstasy of an Alesso concert, you better be wearing your best face. The Female Concert Goer is impassive and detached, because nothing matters but the music.'
		],
		collection: 'The Alesso Heist',
		source: content['The Alesso Heist'],
		rarity: 'Paid',
		unlock: 'THIS IS A THE ALESSO HEIST ITEM!',
		cost: 'Unlocked through Achievement'
	},
	'Male Concert Goer': {
		name: 'Male Concert Goer',
		image: 'concert_male',
		description: [
			'Tie-dyed shirts are so 70\'s. Holding up a lighter went out in the 80\'s. Whistles and glow sticks were left behind in the 90\'s, and the 00\'s, well, the less said the better. The modern concert goer, however, favors the mask.'
		],
		collection: 'The Alesso Heist',
		source: content['The Alesso Heist'],
		rarity: 'Paid',
		unlock: 'THIS IS A THE ALESSO HEIST ITEM!',
		cost: 'Unlocked through Achievement'
	}
}

export default theAlessoHeist