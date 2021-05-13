import { skillData } from 'data/abilities/skills'
import { useAppSelector } from 'hooks'
import React from 'react'

import Skill from './Skill'
import { Background, Container, Tier, TierWrapper } from './Subtree-Elements'

interface subtreeComponent {
	skills: skillData[];
	tree: string;
	subtree: string;
	setSkillHovered: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const Subtree: React.FC<subtreeComponent> = ({ skills, tree, subtree, setSkillHovered }: subtreeComponent) => {

	const { points, tier } = useAppSelector(state => state.skills.trees[tree][subtree])

	const height = (): number => {
		let total = 25 * tier
		if (tier === 3) total += (points / 16) * 25
		return total
	}

	return (
		<Container>

			<Background src={'images/skills/background.png'} height={height()}/>

			<TierWrapper>
				<Tier>
					<Skill skill={skills[5]} tree={tree} subtree={subtree} setSkillHovered={setSkillHovered}/>
				</Tier>

				<Tier>
					<Skill skill={skills[4]} tree={tree} subtree={subtree} setSkillHovered={setSkillHovered}/>
					<Skill skill={skills[3]} tree={tree} subtree={subtree} setSkillHovered={setSkillHovered}/>
				</Tier>

				<Tier>
					<Skill skill={skills[2]} tree={tree} subtree={subtree} setSkillHovered={setSkillHovered}/>
					<Skill skill={skills[1]} tree={tree} subtree={subtree} setSkillHovered={setSkillHovered}/>
				</Tier>

				<Tier>
					<Skill skill={skills[0]} tree={tree} subtree={subtree} setSkillHovered={setSkillHovered}/>
				</Tier>
			</TierWrapper>
			
		</Container>
	)
}

export default Subtree
