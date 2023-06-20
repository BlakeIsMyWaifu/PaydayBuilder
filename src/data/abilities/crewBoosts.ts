export type CrewBoost = keyof typeof crewBoosts

const crewBoosts = {
	Reinforcer: 'Players\' health is increased by 60.',
	Protector: 'Players\' armor is increased by 30.',
	Distractor: 'Players\' dodge is increased by 5.',
	Invigorator: 'Players have 50 more stamina and the armor speed penalty is reduced by 50%.',
	Healer: 'Players heal 5 health every 5 seconds.',
	Concealer: 'Players gain 3 more concealment.',
	Stockpiler: 'Players are granted an extra throwable for every 35 kills.',
	Accelerator: 'Players reload 50% faster and swap weapons 50% faster.'
} as const

export default crewBoosts