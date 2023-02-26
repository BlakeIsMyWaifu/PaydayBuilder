import { type MaskData } from 'data/character/masks'
import content from 'data/source/downloadableContent'

import { type DlcCollectionList } from '../dlc'

export type TheBigBankHeistList =
	| 'The 16th'
	| 'The 18th'
	| 'The 1st'
	| 'The First American'

const theBigBankHeist: Record<TheBigBankHeistList, MaskData<TheBigBankHeistList, DlcCollectionList>> = {
	'The 16th': {
		name: 'The 16th',
		image: 'lincoln',
		description: [
			'Lawyer, Commander-In-Chief, father. Had an ambition to serve this great nation for 8 years.',
			' Consistently ranked by scholars and the public as one of the greatest U.S. presidents of all time.',
			' The 16th is one of the most beloved presidents in history. Among criminals, he remains well respected.'
		],
		collection: 'The Big Bank Heist',
		source: content['The Big Bank Heist'],
		rarity: 'Paid',
		unlock: 'THIS IS A BIG BANK HEIST ITEM!',
		cost: 'Unlocked through Achievement'
	},
	'The 18th': {
		name: 'The 18th',
		image: 'grant',
		description: [
			'Soldier, Commander-In-Chief, father. Served this great nation for 8 years.',
			'A protector and a warrior, and a great one at that.',
			'The 18th was one of the most unpopular presidents in history. Among criminals however, he remains extremely popular.'
		],
		collection: 'The Big Bank Heist',
		source: content['The Big Bank Heist'],
		rarity: 'Paid',
		unlock: 'THIS IS A BIG BANK HEIST ITEM!',
		cost: 'Unlocked through Achievement'
	},
	'The 1st': {
		name: 'The 1st',
		image: 'washington',
		description: [
			'General of the Armies, Commander-In-Chief,  Founding Father. Served this great nation for 8 years.',
			'The first ever president, and a great one at that.',
			'The 1st was one of the most popular presidents in history and the face of the $1 bill. Among criminals, he remains extremely popular.'
		],
		collection: 'The Big Bank Heist',
		source: content['The Big Bank Heist'],
		rarity: 'Paid',
		unlock: 'THIS IS A BIG BANK HEIST ITEM!',
		cost: 'Unlocked through Achievement'
	},
	'The First American': {
		name: 'The First American',
		image: 'franklin',
		description: [
			'Worlds-renowned polymath, author, printer, political theorist, postmaster, scientist, inventor, civic activist, statesman, diplomat, Founding Father.',
			'Titulated as \'The First American\' and the face of the $100 bill.',
			'Among criminals, he remains extremely popular '
		],
		collection: 'The Big Bank Heist',
		source: content['The Big Bank Heist'],
		rarity: 'Paid',
		unlock: 'THIS IS A BIG BANK HEIST ITEM!',
		cost: 'Unlocked through Achievement'
	}
}

export default theBigBankHeist