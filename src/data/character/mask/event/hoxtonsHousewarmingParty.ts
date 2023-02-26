import { type MaskData } from 'data/character/masks'
import source from 'data/source/miscSources'

import { type EventCollectionList } from '../event'

export type HoxtonsHousewarmingPartyList =
	| 'Party Hat'

const hoxtonsHousewarmingParty: Record<HoxtonsHousewarmingPartyList, MaskData<HoxtonsHousewarmingPartyList, EventCollectionList>> = {
	'Party Hat': {
		name: 'Party Hat',
		image: 'spk_party',
		description: [
			'Party hats never get old. It\'s an essential accessory to any fun event, be it a festivity of misdeeds or a celebration of moving into a new home. Strap one on and loosen that tie. It\'s party time. Excellent.'
		],
		collection: 'Hoxton\'s Housewarming Party',
		source: source['Base Game'],
		rarity: 'Event',
		unlock: 'THIS IS A HOUSEWARMING PARTY ITEM!',
		cost: 'Free'
	}
}

export default hoxtonsHousewarmingParty