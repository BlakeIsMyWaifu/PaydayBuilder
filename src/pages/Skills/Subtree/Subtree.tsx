import { skillData } from 'data/abilities/skills'
import React from 'react'

import Skill from './Skill'
import { Container, Tier } from './Subtree-Elements'

interface subtreeComponent {
	skills: skillData[];
	tree: string;
	subtree: string;
	setSkillHovered: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const Subtree: React.FC<subtreeComponent> = ({ skills, tree, subtree, setSkillHovered }: subtreeComponent) => {
	return (
		<Container>
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
		</Container>
	)
}

export default Subtree
