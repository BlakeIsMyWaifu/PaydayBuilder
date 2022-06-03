import modificationList, { modificationIcons } from 'data/weapons/guns/modificationList'
import { ModificationSlot, Weapon } from 'data/weapons/guns/weaponTypes'
import { HoverInfo } from 'pages/Home'
import WeaponsStatsTable from 'pages/Weapons/WeaponStatsTable'
import React from 'react'
import findWeapon from 'utils/findWeapon'
import { capitalizeEachWord, spaceBetween } from 'utils/stringCases'

import { Background, ModIcon, ModIconContainer, ModLink, ModWrapper } from './ModIcons-Elements'
import ModIconsTable from './ModIconsTable'

interface ModIconsProps {
	weapon: Weapon;
	link: boolean;
	setHoverInfo?: React.Dispatch<React.SetStateAction<HoverInfo | null>>;
}

const ModIcons: React.FC<ModIconsProps> = ({ weapon, link, setHoverInfo }) => {

	const weaponData = findWeapon(weapon.weaponFind)

	return weapon.id ? (
		<ModIconContainer>

			{
				setHoverInfo && <ModLink to={weaponData.inventorySlot}>
					<Background onMouseOver={() => setHoverInfo({
						title: weaponData.name,
						table: <WeaponsStatsTable showExtraStats={false} selectedWeapon={weapon} />
					})} />
				</ModLink>
			}

			{
				Object.keys(weaponData.modifications).map(modSlot => {
					const equipped = Object.keys(weapon.modifications).includes(modSlot)
					const modName = weapon.modifications[(modSlot as ModificationSlot)] || ''
					const equippedMod = modificationList[(modSlot as ModificationSlot)][modName]
					const modIcon = <ModIcon
						src={`/images/modifications/icons/${equippedMod?.icon || modificationIcons[(modSlot as ModificationSlot)]}.png`}
						equipped={equipped}
						onMouseOver={() => link && setHoverInfo && setHoverInfo({
							title: modName || `No ${capitalizeEachWord(spaceBetween(modSlot))} Mod Equipped`,
							table: <ModIconsTable
								weapon={weaponData}
								modifications={weapon.modifications}
								hoveredMod={equippedMod}
							/>
						})}
						onMouseDown={event => event.preventDefault()}
					/>
					return <ModWrapper key={modSlot}>
						{
							link ? <ModLink to={`/blackmarket/${weaponData.inventorySlot}/${weapon.id}/${modSlot}`}>
								{modIcon}
							</ModLink> : modIcon
						}
					</ModWrapper>
				})
			}
		</ModIconContainer>
	) : (
		<></>
	)
}

export default ModIcons
