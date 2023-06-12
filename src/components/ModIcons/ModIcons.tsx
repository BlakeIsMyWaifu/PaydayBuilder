import { type HoverInfo } from 'components/Home/Tabs'
import WeaponsStatsTable from 'components/Table/WeaponStatsTable'
import modificationIcons from 'data/weapons/guns/modificationIcons'
import { type Weapon } from 'data/weapons/guns/weaponTypes'
import Link from 'next/link'
import { type Dispatch, type FC, type SetStateAction } from 'react'
import styled from 'styled-components'
import { capitalizeEachWord, spaceBetween } from 'utils/stringCases'
import { trpc } from 'utils/trpc'
import { typedObject } from 'utils/typedObject'

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

	const { data: weaponData } = trpc.loadoutData.getWeapon.useQuery(weapon.weaponFind)

	return weapon.id && weaponData ? (
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
				typedObject.keys(weaponData.modifications).map(modSlot => {
					const equipped = Object.keys(weapon.modifications).includes(modSlot)
					const modName = weapon.modifications[modSlot] ?? ''
					const equippedMod = weaponData.modifications[modSlot]?.find(mods => mods.name === modName)
					const modIcon = <ModIcon
						src={`/images/modifications/icons/${equippedMod?.icon ?? modificationIcons[(modSlot)]}.png`}
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
	) : null
}

export default ModIcons
