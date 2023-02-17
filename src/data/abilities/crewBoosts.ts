export interface CrewBoost {
	name: CrewBoostsList;
	description: string;
}

export type CrewBoostsList =
	| 'Reinforcer'
	| 'Protector'
	| 'Distractor'
	| 'Invigorator'
	| 'Healer'
	| 'Concealer'
	| 'Stockpiler'
	| 'Accelerator'

const boosts: Record<CrewBoostsList, CrewBoost> = {
	Reinforcer: {
		name: 'Reinforcer',
		description: 'Players\' health is increased by 60.'
	},
	Protector: {
		name: 'Protector',
		description: 'Players\' armor is increased by 30.'
	},
	Distractor: {
		name: 'Distractor',
		description: 'Players\' dodge is increased by 5.'
	},
	Invigorator: {
		name: 'Invigorator',
		description: 'Players have 50 more stamina and the armor speed penalty is reduced by 50%.'
	},
	Healer: {
		name: 'Healer',
		description: 'Players heal 5 health every 5 seconds.'
	},
	Concealer: {
		name: 'Concealer',
		description: 'Players gain 3 more concealment.'
	},
	Stockpiler: {
		name: 'Stockpiler',
		description: 'Players are granted an extra throwable for every 35 kills.'
	},
	Accelerator: {
		name: 'Accelerator',
		description: 'Players reload 50% faster and swap weapons 50% faster.'
	}
}

export default boosts