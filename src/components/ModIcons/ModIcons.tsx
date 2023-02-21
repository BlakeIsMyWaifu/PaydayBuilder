import WeaponsStatsTable from 'components/Weapons/WeaponStatsTable'
import modificationList, { modificationIcons } from 'data/weapons/guns/modificationList'
import { ModificationSlot, Weapon } from 'data/weapons/guns/weaponTypes'
import Link from 'next/link'
import { HoverInfo } from 'pages/index'
import { Dispatch, FC, SetStateAction } from 'react'
import styled from 'styled-components'
import findWeapon from 'utils/findWeapon'
import { capitalizeEachWord, spaceBetween } from 'utils/stringCases'

import ModIconsTable from './ModIconsTable'

const ModIconContainer = styled.div`
	position: absolute;
	right: 0;
	bottom: 0;
	width: 80%;
	margin: 2px;

	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: flex-end;
	align-items: flex-end;
	align-content: flex-end;
`

export const ModWrapper = styled.span`
	width: clamp(16px, 10%, 2rem);
	aspect-ratio: 1;
`

const ModLink = styled(Link)`
	width: 100%;
	height: 100%;
`

interface ModIconProps {
	equipped: boolean;
}

export const ModIcon = styled.img<ModIconProps>`
	width: 100%;
	height: 100%;
	opacity: ${props => props.equipped ? 1 : 0.2};
`

const Background = styled.span`
	position: absolute;
	width: 100%;
	height: 100%;
	flex-wrap: nowrap;
`

interface ModIconsProps {
	weapon: Weapon;
	link: boolean;
	setHoverInfo?: Dispatch<SetStateAction<HoverInfo | null>>;
}

const ModIcons: FC<ModIconsProps> = ({ weapon, link, setHoverInfo }) => {

	const weaponData = findWeapon(weapon.weaponFind)

	return weapon.id ? (
		<ModIconContainer>

			{
				setHoverInfo && <ModLink href={weaponData.inventorySlot}>
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
							link ? <ModLink href={`/blackmarket/${weaponData.inventorySlot}/${weapon.id}/${modSlot}`}>
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
