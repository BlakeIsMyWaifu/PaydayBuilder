export interface CrewAbility {
	name: CrewAbilityList;
	description: string;
	notes?: string;
}

export type CrewAbilityList =
	| 'Quick'
	| 'Inspiring'
	| 'Sharpeyed'
	| 'Piercing'

const abilities: Record<CrewAbilityList, CrewAbility> = {
	Quick: {
		name: 'Quick',
		description: 'Players interact 25% faster. This bonus is increased by +25% for every other AI present.',
		notes: 'Pager response is not affected by this boost.'
	},
	Inspiring: {
		name: 'Inspiring',
		description: 'Your team AI can now use Inspire once every six minutes. Reduced by 2 minutes for every other AI present.',
		notes: 'AI will not use this skill to revive other AI.'
	},
	Sharpeyed: {
		name: 'Sharpeyed',
		description: 'Players pickup 20% more ammunition. This bonus is increased by +20% for every other AI present.'
	},
	Piercing: {
		name: 'Piercing',
		description: 'Your team AI will now use armor piercing rounds. This enables them to shoot through shields and armor.'
	}
}

export default abilities