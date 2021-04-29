import { skillData } from 'data/abilities/skills'
import React from 'react'

import Skill from './Skill'
import { Container, Tier } from './Subtree-Elements'

interface subtreeComponent {
	skills: skillData[];
	setSkillHovered: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const Subtree: React.FC<subtreeComponent> = ({ skills, setSkillHovered }: subtreeComponent) => {
	return (
		<Container>
			<Tier>
				<Skill data={skills[5]} setSkillHovered={setSkillHovered}/>
			</Tier>
			<Tier>
				<Skill data={skills[4]} setSkillHovered={setSkillHovered}/>
				<Skill data={skills[3]} setSkillHovered={setSkillHovered}/>
			</Tier>
			<Tier>
				<Skill data={skills[2]} setSkillHovered={setSkillHovered}/>
				<Skill data={skills[1]} setSkillHovered={setSkillHovered}/>
			</Tier>
			<Tier>
				<Skill data={skills[0]} setSkillHovered={setSkillHovered}/>
			</Tier>
		</Container>
	)
}

export default Subtree
