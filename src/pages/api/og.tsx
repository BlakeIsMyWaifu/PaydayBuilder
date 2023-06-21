/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from '@vercel/og'
import perkDecks from 'data/abilities/perks'
import primary from 'data/weapons/guns/primary'
import secondary from 'data/weapons/guns/secondary'
import throwables from 'data/weapons/throwables'
import { type NextRequest } from 'next/server'
import { type FC } from 'react'
import { defaultBuild } from 'state/useBuildsStore'
import { createActionSlice, createStateSlice, type SkillsStore, type Subtrees } from 'state/useSkillsStore'
import { decodeArmour, decodeArmoury, decodeEquipment, decodePerkDeck, decodeThrowable, decodeWeapons } from 'utils/decodeBuild'
import { getBaseUrl } from 'utils/trpc'
import { create } from 'zustand'

export const config = {
	runtime: 'edge'
}

const font = fetch(new URL('../../fonts/DINEngschrift.woff', import.meta.url)).then(res => res.arrayBuffer())

const handler = async (req: NextRequest): Promise<ImageResponse> => {
	try {
		const { searchParams } = new URL(req.url)

		const defaults = new URLSearchParams(defaultBuild)

		const fontData = await font

		return new ImageResponse((
			<div style={{
				height: '100%',
				width: '100%',

				backgroundImage: `url(${getBaseUrl()}/images/background.png)`,
				backgroundSize: '1200px 630px',

				display: 'flex',
				textAlign: 'center',
				alignItems: 'center',
				justifyContent: 'center',
				flexDirection: 'column',
				gap: '32px',

				fontSize: 40,
				color: 'white',
				fontFamily: '"PaydayFont"',
				textTransform: 'uppercase'
			}}>
				<div style={{
					display: 'flex',
					flexDirection: 'row'
				}}>
					<Weapons searchParams={searchParams} defaults={defaults} />
					<Equipment searchParams={searchParams} defaults={defaults} />
					<Throwable searchParams={searchParams} defaults={defaults} />
					<Armour searchParams={searchParams} defaults={defaults} />
				</div>
				<div style={{
					display: 'flex',
					flexDirection: 'row'
				}}>
					<PerkDeck searchParams={searchParams} defaults={defaults} />
					<Skills searchParams={searchParams} defaults={defaults} />
				</div>
			</div>
		), {
			width: 1200,
			height: 630,
			fonts: [{
				name: 'PaydayFont',
				data: fontData,
				style: 'normal'
			}]
		})
	} catch (error) {
		if (error instanceof Error) {
			console.error(error.message)
		}
		return new Response('Failed to generate the image', {
			status: 500
		})
	}
}

interface SearchParams {
	searchParams: URLSearchParams;
	defaults: URLSearchParams;
}

interface DisplayProps {
	name: string;
	image: string;
	size: [width: number, height: number];
}

const Display: FC<DisplayProps> = ({ name, image, size }) => {
	return (
		<div style={{
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center'
		}}>
			<b>{name}</b>
			<img
				width={size[0]}
				height={size[1]}
				src={`${getBaseUrl()}/images/${image}.png`}
				alt={name}
			/>
		</div>
	)
}

const Weapons: FC<SearchParams> = ({ searchParams, defaults }) => {

	const primaryArmoury = decodeArmoury(searchParams.get('ap') ?? defaults.get('ap') ?? '_', primary)
	const secondaryArmoury = decodeArmoury(searchParams.get('as') ?? defaults.get('as') ?? '_', secondary)
	const [primaryIndex, secondaryIndex] = decodeWeapons(searchParams.get('w') ?? defaults.get('w') ?? '0-0')
	const primaryData = primaryArmoury[primaryIndex - 1]?.weapon ?? primary['Assault Rifle'].AMCAR
	const secondaryData = secondaryArmoury[secondaryIndex - 1]?.weapon ?? secondary.Pistol['Chimano 88']

	return (
		<>
			<Display
				name={primaryData.name}
				image={`weapons/png/${primaryData.image}`}
				size={[256, 128]}
			/>
			<Display
				name={secondaryData.name}
				image={`weapons/png/${secondaryData.image}`}
				size={[256, 128]}
			/>
		</>
	)
}

const Equipment: FC<SearchParams> = ({ searchParams, defaults }) => {

	const [equipmentName] = decodeEquipment(searchParams.get('d') ?? defaults.get('d') ?? '0')

	return <Display
		name={equipmentName}
		image={`equipment/png/${equipmentName}`}
		size={[128, 128]}
	/>

}

const Throwable: FC<SearchParams> = ({ searchParams, defaults }) => {

	const throwableName = decodeThrowable(searchParams.get('t') ?? defaults.get('t') ?? '5')
	const throwableImage = throwables[throwableName].image

	return <Display
		name={throwableName}
		image={`throwables/png/${throwableImage}`}
		size={[256, 128]}
	/>

}

const Armour: FC<SearchParams> = ({ searchParams, defaults }) => {

	const armourName = decodeArmour(searchParams.get('a') ?? defaults.get('a') ?? '0')

	return <Display
		name={armourName}
		image={`armours/png/${armourName}`}
		size={[128, 128]}
	/>

}

const PerkDeck: FC<SearchParams> = ({ searchParams, defaults }) => {

	const perkDeckName = decodePerkDeck(searchParams.get('p') ?? defaults.get('p') ?? '0')
	const perkDeckData = perkDecks[perkDeckName]
	const perkDeckImage = perkDeckData.cards[8].image ?? perkDeckData.cards[8].name

	return <Display
		name={perkDeckName}
		image={`perks/png/${perkDeckImage}`}
		size={[196, 196]}
	/>

}

const Skills: FC<SearchParams> = ({ searchParams, defaults }) => {

	const skillsStore = create<SkillsStore>()((...a) => ({
		...createStateSlice(...a),
		...createActionSlice(...a)
	}))
	const skillsDataCompressed = searchParams.get('s') ?? defaults.get('s') ?? '0-90-90-9000'
	skillsStore.getState().importSkillsData(skillsDataCompressed)
	const { mastermind, enforcer, technician, ghost, fugitive } = skillsStore.getState().trees
	const treePoints = (subtrees: Subtrees): number => Object.values(subtrees).map(subtree => subtree.points).reduce((a, b) => a + b)

	return (
		<div style={{
			display: 'flex',
			flexDirection: 'row'
		}}>
			<Skill
				treeName='Mastermind'
				treePoints={treePoints(mastermind)}
				mask='dallas'
			/>
			<Skill
				treeName='Enforcer'
				treePoints={treePoints(enforcer)}
				mask='chains'
			/>
			<Skill
				treeName='Technician'
				treePoints={treePoints(technician)}
				mask='wolf'
			/>
			<Skill
				treeName='Ghost'
				treePoints={treePoints(ghost)}
				mask='hoxton'
			/>
			<Skill
				treeName='Fugitive'
				treePoints={treePoints(fugitive)}
				mask='old_hoxton'
			/>
		</div>
	)
}

interface SkillProps {
	treeName: string;
	treePoints: number;
	mask: string;
}

const Skill: FC<SkillProps> = ({ treeName, treePoints, mask }) => {
	return (
		<div style={{
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			width: '196px'
		}}>
			<div style={{
				display: 'flex',
				width: '128px',
				height: '192px',
				backgroundColor: '#fff',
				alignItems: 'center',
				justifyContent: 'center',
				borderRadius: '8px'
			}}>
				<img
					width={128}
					height={128}
					src={`${getBaseUrl()}/images/masks/png/${mask}.png`}
					alt={`skill icon for ${treeName}`}
				/>
			</div>
			<b>{treePoints}</b>
		</div>
	)
}

export default handler