import source from 'data/source/miscSources'

import primaryOve9000 from '../../primary/special/ove9000'
import { type WeaponData } from '../../weaponTypes'

const ove9000 = {
	name: 'OVE9000',
	image: 'saw',
	source: source['Base Game'],
	inventorySlot: 'secondary',
	reputation: 0,
	weaponType: 'Special',
	firingMode: 'Fully automatic',
	cost: 42e3,
	stats: primaryOve9000.stats,
	extraStats: primaryOve9000.extraStats,
	modifications: primaryOve9000.modifications
} as const satisfies WeaponData

export default ove9000