import modificationList, { modificationIcons } from 'data/weapons/guns/modificationList'
import { ModificationSlot, WeaponData } from 'data/weapons/guns/weaponTypes'
import { HoverInfo } from 'pages/Home'
import React from 'react'
import { capitalizeEachWord, spaceBetween } from 'utils/stringCases'

import { ModIcon, ModIconContainer, ModLink, ModWrapper } from './ModIcons-Elements'
import ModIconsTable from './ModIconsTable/ModIconsTable'

interface ModIconsProps {
	weapon: WeaponData;
	weaponId: number;
	modifications: Partial<Record<ModificationSlot, string>>;
	setHoverInfo?: React.Dispatch<React.SetStateAction<HoverInfo | null>>;
}

const ModIcons: React.FC<ModIconsProps> = ({ weapon, weaponId, modifications, setHoverInfo }) => {
	return weaponId ? (
		<ModIconContainer>
			{
				Object.keys(weapon.modifications).map(modSlot => {
					const equipped = Object.keys(modifications).includes(modSlot)
					const modName = modifications[(modSlot as ModificationSlot)] || ''
					const equippedMod = modificationList[(modSlot as ModificationSlot)][modName]
					return <ModWrapper key={modSlot}>
						<ModLink to={`/blackmarket/${weapon.inventorySlot}/${weaponId}/${modSlot}`}>
							<ModIcon
								src={`images/modifications/icons/${equippedMod?.icon || modificationIcons[(modSlot as ModificationSlot)]}.png`}
								equipped={equipped}
								onMouseOver={() => setHoverInfo && setHoverInfo({
									title: modName || `No ${capitalizeEachWord(spaceBetween(modSlot))} Mod Equipped`,
									table: <ModIconsTable
										weapon={weapon}
										modifications={modifications}
										hoveredMod={equippedMod}
									/>
								})}
								onMouseDown={event => event.preventDefault()}
							/>
						</ModLink>
					</ModWrapper>
				})
			}
		</ModIconContainer>
	) : (
		<></>
	)
}

export default ModIcons
