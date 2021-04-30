export interface subtreeState {
	tier: number,
	points: number;
	upgrades: string[]
}

const subtree: subtreeState = {
	tier: 1,
	points: 0,
	upgrades: []
}

const skills = {
	points: 120,
	trees: {
		mastermind: {
			medic: subtree,
			controller: subtree,
			sharpshooter: subtree
		},
		enforcer: {
			shotgunner: subtree,
			tank: subtree,
			ammo_specialist: subtree
		},
		technician: {
			engineer: subtree,
			breacher: subtree,
			opperessor: subtree
		},
		ghost: {
			shinobi: subtree,
			artful_dodger: subtree,
			silent_killer: subtree
		},
		fugitive: {
			gunslinger: subtree,
			revenant: subtree,
			brawler: subtree
		}
	}
}

export default skills