import { HoverInfo } from 'components/Home'
import WeaponsStatsTable from 'components/Weapons/WeaponStatsTable'
import modificationList, { modificationIcons } from 'data/weapons/guns/modificationList'
import { ModificationSlot, Weapon } from 'data/weapons/guns/weaponTypes'
import { Dispatch, FC, SetStateAction } from 'react'
import findWeapon from 'utils/findWeapon'
import { capitalizeEachWord, spaceBetween } from 'utils/stringCases'

import { Background, ModIcon, ModIconContainer, ModLink, ModWrapper } from './ModIcons-Elements'
import ModIconsTable from './ModIconsTable'

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
					<a>
						<Background onMouseOver={() => setHoverInfo({
							title: weaponData.name,
							table: <WeaponsStatsTable showExtraStats={false} selectedWeapon={weapon} />
						})} />
					</a>
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
								<a>
									{modIcon}
								</a>
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
