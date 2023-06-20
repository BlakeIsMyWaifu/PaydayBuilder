export type CrewAbility = keyof typeof crewAbilities

const crewAbilities = {
	Quick: 'Players interact 25% faster. This bonus is increased by +25% for every other AI present. Pager response is not affected by this boost.',
	Inspiring: 'Your team AI can now use Inspire once every six minutes. Reduced by 2 minutes for every other AI present. AI will not use this skill to revive other AI.',
	Sharpeyed: 'Players pickup 20% more ammunition. This bonus is increased by +20% for every other AI present.',
	Piercing: 'Your team AI will now use armor piercing rounds. This enables them to shoot through shields and armor.'
} as const

export default crewAbilities