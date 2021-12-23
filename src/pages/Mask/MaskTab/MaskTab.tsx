import { InfoContainer, InfoCost, InfoDescription, InfoTitle, InfoUnlock } from 'components/Info/Info-Elements'
import { MaskData } from 'data/character/masks'
import React from 'react'
import { itemColours } from 'utils/colours'

interface MaskTabProps {
	selectedMask: MaskData;
}

const MaskTab: React.FC<MaskTabProps> = ({ selectedMask }) => {
	return (
		<InfoContainer>
			<InfoTitle>{selectedMask.name}</InfoTitle>
			<InfoDescription>{selectedMask.description.join('\n\n')}</InfoDescription>
			<InfoUnlock colour={itemColours[selectedMask.rarity]}>{selectedMask.unlock}</InfoUnlock>
			<InfoCost>{selectedMask.cost}</InfoCost>
		</InfoContainer>
	)
}

export default MaskTab