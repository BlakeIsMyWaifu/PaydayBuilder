import { ContentRarity } from 'data/source/downloadableContent'
import collaboration from './mask/collaboration'
import community from './mask/community'
import dlc from './mask/dlc'
import event from './mask/event'
import infamous from './mask/infamous'

export type MaskList = keyof typeof masks

export interface MaskData {
	name: string;
	image: string;
	description: string[];
	collection: string;
	rarity: ContentRarity;
	unlock: string;
	cost: string;
}

export const allMasks = {
	community,
	dlc,
	event,
	collaboration,
	infamous
}

const masks: Record<string, MaskData> = {
	'Frayed Harvest': {
		name: 'Frayed Harvest',
		image: 'elegantteeth',
		description: [
			'You reap what others sow and take only what you want. Regal, yet simple and savage, this mask will suit your needs.'
		],
		collection: 'Starbeeze Account',
		rarity: 'Community',
		unlock: 'THIS IS A STARBEEZE ACCOUNT ITEM!',
		cost: ''
	},
	'Cyber Monkey': {
		name: 'Cyber Monkey',
		image: 'mnk',
		description: [
			'When you feel the need to heist in the concrete jungle.'
		],
		collection: 'Mega City Tailor Pack',
		rarity: 'Paid',
		unlock: 'THIS IS A MEGA CITY TAILOR PACK ITEM!',
		cost: ''
	},
	'Electro Tiger': {
		name: 'Electro Tiger',
		image: 'tgr',
		description: [
			'Roar with 100,000 volts when the cops come for you..'
		],
		collection: 'Mega City Tailor Pack',
		rarity: 'Paid',
		unlock: 'THIS IS A MEGA CITY TAILOR PACK ITEM!',
		cost: ''
	},
	'Robo Mantis': {
		name: 'Robo Mantis',
		image: 'mnt',
		description: [
			'Blend in with all the other AI units.'
		],
		collection: 'Mega City Tailor Pack',
		rarity: 'Paid',
		unlock: 'THIS IS A MEGA CITY TAILOR PACK ITEM!',
		cost: ''
	},
	'Viper Cyberjack': {
		name: 'Viper Cyberjack',
		image: 'vpr',
		description: [
			'Slither away or bite to kill whenever you are threatened.'
		],
		collection: 'Mega City Tailor Pack',
		rarity: 'Paid',
		unlock: 'THIS IS A MEGA CITY TAILOR PACK ITEM!',
		cost: ''
	},
	'Deer of Winters Past': {
		name: 'Deer of Winters Past',
		image: 'icedeer',
		description: [
			'Do you remember that animated movie about that deer? The one where they killed his mom? Yeah, no; nobody is gonna mess with you or your crew while you wear this. If anything, you\'ll be hunting them.'
		],
		collection: 'Winter Ghosts Tailor Pack',
		rarity: 'Paid',
		unlock: 'THIS IS A WINTER GHOSTS TAILOR PACK ITEM!',
		cost: ''
	},
	'Kitsune Kari': {
		name: 'Kitsune Kari',
		image: 'foxfurhat',
		description: [
			'It\'s important to keep in touch with nature, so why the hell not bring a piece of it with you? Though not truly on a fox hunt, you are out there hunting down that loot.'
		],
		collection: 'Winter Ghosts Tailor Pack',
		rarity: 'Paid',
		unlock: 'THIS IS A WINTER GHOSTS TAILOR PACK ITEM!',
		cost: ''
	},
	'Leshy': {
		name: 'Leshy',
		image: 'leshy',
		description: [
			'The deity of the hunt, the spirit of the wild. Tear through a heist adorned in this primal mask of yore.'
		],
		collection: 'Winter Ghosts Tailor Pack',
		rarity: 'Paid',
		unlock: 'THIS IS A WINTER GHOSTS TAILOR PACK ITEM!',
		cost: ''
	},
	'PermaFrost': {
		name: 'PermaFrost',
		image: 'iceskull',
		description: [
			'Keeping a cool head while the bullets are flying has never looked more terrifying. This one will scare the hell out of anyone facing you. Maybe even more so than your gun does.'
		],
		collection: 'Winter Ghosts Tailor Pack',
		rarity: 'Paid',
		unlock: 'THIS IS A WINTER GHOSTS TAILOR PACK ITEM!',
		cost: ''
	},
	'Blood Money': {
		name: 'Blood Money',
		image: 'ranchcap_plain',
		description: [
			'There\'s more to this hat than meets the eye. Unassuming at a glance, but it leaves a violent impression in the back of the mind. All that red... it\'s a bloody omen. Heaven help whoever gets in your way.'
		],
		collection: 'Southbound Tailor Pack',
		rarity: 'Paid',
		unlock: 'THIS IS A SOUTHBOUND TAILOR PACK ITEM!',
		cost: ''
	},
	'Don\'t Mess With Texas': {
		name: 'Don\'t Mess With Texas',
		image: 'ranchcap_texas',
		description: [
			'Home is where your head is, so let the world know why you\'re so much bigger, better and badder than everyone else. You\'re the reason nobody messes with Texas.'
		],
		collection: 'Southbound Tailor Pack',
		rarity: 'Paid',
		unlock: 'THIS IS A SOUTHBOUND TAILOR PACK ITEM!',
		cost: ''
	},
	'Speedway': {
		name: 'Speedway',
		image: 'ranchcap_emblem',
		description: [
			'You can learn a lot in the pit crew on a racing team. Do you have what it takes to move lightning-fast in the eye of a storm? Can you do your job while motors pop like gunshots all around you? Yes? Then you have what it takes to rob a bank.'
		],
		collection: 'Southbound Tailor Pack',
		rarity: 'Paid',
		unlock: 'THIS IS A SOUTHBOUND TAILOR PACK ITEM!',
		cost: ''
	},
	'El Capitan': {
		name: 'El Capitan',
		image: 'saloondarklea',
		description: [
			'Dark leather puts a rocky edge on the cowboy look. Like the mountain for which it\'s named, this hat cuts an imposing figure, and your stony gaze only adds to the effect.'
		],
		collection: 'Southbound Tailor Pack',
		rarity: 'Paid',
		unlock: 'THIS IS A SOUTHBOUND TAILOR PACK ITEM!',
		cost: ''
	},
	'Lone Star': {
		name: 'Lone Star',
		image: 'saloonshade',
		description: [
			'Dallas, Houston... Texas has deep roots in the Payday Gang. Honor that family history with a hat that\'s got all the right kind of flair. Wear those state colors loud, and wear \'em proud.'
		],
		collection: 'Southbound Tailor Pack',
		rarity: 'Paid',
		unlock: 'THIS IS A SOUTHBOUND TAILOR PACK ITEM!',
		cost: ''
	},
	'Open Plain': {
		name: 'Open Plain',
		image: 'saloonlightlea',
		description: [
			'Sometimes, you just can\'t beat a classic. You want a hat that says "Giddyup, cowboy"? Look no further.'
		],
		collection: 'Southbound Tailor Pack',
		rarity: 'Paid',
		unlock: 'THIS IS A SOUTHBOUND TAILOR PACK ITEM!',
		cost: ''
	},
	'Triggerman': {
		name: 'Triggerman',
		image: 'saloonstar',
		description: [
			'You\'re a deadeye with an itchy trigger finger. Never been caught in a hail of bullets. When enemies see that dark star burning on your hat, they know to get the hell out of Dodge. The Old West is full of legendary gunmen, and you\'re a legend among legends.'
		],
		collection: 'Southbound Tailor Pack',
		rarity: 'Paid',
		unlock: 'THIS IS A SOUTHBOUND TAILOR PACK ITEM!',
		cost: ''
	},
	'Crimson Striker Helmet': {
		name: 'Crimson Striker Helmet',
		image: 'biker_helmet_red_led',
		description: [
			'This stunning helmet will give you that slick aerodynamic look, and the sedigner was undoubtedly blasting vaporwave while making it.'
		],
		collection: 'Golden Dagger Tailor Pack',
		rarity: 'Paid',
		unlock: 'THIS IS A GOLDEN DAGGER TAILOR PACK ITEM!',
		cost: ''
	},
	'Golden Draped Visor': {
		name: 'Golden Draped Visor',
		image: 'boss_gold',
		description: [
			'What do you call wearing a mask of solid gold? A bold statement, that\'s what.'
		],
		collection: 'Golden Dagger Tailor Pack',
		rarity: 'Paid',
		unlock: 'THIS IS A GOLDEN DAGGER TAILOR PACK ITEM!',
		cost: ''
	},
	'Hornet Striker Helmet': {
		name: 'Hornet Striker Helmet',
		image: 'biker_helmet_yellow_led',
		description: [
			'This neon-style bad boy will inspire you to swoop in, make every sting count, and get out with the goods.'
		],
		collection: 'Golden Dagger Tailor Pack',
		rarity: 'Paid',
		unlock: 'THIS IS A GOLDEN DAGGER TAILOR PACK ITEM!',
		cost: ''
	},
	'Sterling Draped Visor': {
		name: 'Sterling Draped Visor',
		image: 'boss_silver',
		description: [
			'Shiny like mirror and heavy, well, like silver, this mask will make you the center of attention.'
		],
		collection: 'Golden Dagger Tailor Pack',
		rarity: 'Paid',
		unlock: 'THIS IS A GOLDEN DAGGER TAILOR PACK ITEM!',
		cost: ''
	},
	'Azure Dragon': {
		name: 'Azure Dragon',
		image: '???',
		description: [
			'Don this symbol of the four auspicious beats and wield the great power of the east to bring on the coming of spring!'
		],
		collection: 'Guardian Tailor Pack',
		rarity: 'Paid',
		unlock: 'THIS IS A GUARDIANS TAILOR PACK ITEM!',
		cost: ''
	},
	'Black Tortoise': {
		name: 'Black Tortoise',
		image: '???',
		description: [
			'The darkest of the four auspicious beasts calls forth winter from the northlands!'
		],
		collection: 'Guardian Tailor Pack',
		rarity: 'Paid',
		unlock: 'THIS IS A GUARDIANS TAILOR PACK ITEM!',
		cost: ''
	},
	'Vermilion Bird': {
		name: 'Vermilion Bird',
		image: '???',
		description: [
			'From the south comes this symbol of the four auspicious beasts, carrying with it the bright blistering heat of summer flame.'
		],
		collection: 'Guardian Tailor Pack',
		rarity: 'Paid',
		unlock: 'THIS IS A GUARDIANS TAILOR PACK ITEM!',
		cost: ''
	},
	'White Tiger': {
		name: 'White Tiger',
		image: '???',
		description: [
			'The leaves falling onto the streets bear witness to this auspicious beast of the west, and coming of autumn.'
		],
		collection: 'Guardian Tailor Pack',
		rarity: 'Paid',
		unlock: 'THIS IS A GUARDIANS TAILOR PACK ITEM!',
		cost: ''
	},
	'Mountain Master Crown': {
		name: 'Mountain Master Crown',
		image: 'yufuhelmet',
		description: [
			'Wang was a formidable fire-spewing foe indeed, and this hand-forged crown of the Mountain Master will serve as an impressive symbol of your victory.'
		],
		collection: 'Mountain Master Heist DLC',
		rarity: 'Paid',
		unlock: 'THIS IS A MOUNTAIN MASTER HEIST DLC ITEM!',
		cost: 'Unlocked through Achievement'
	},
	'Decennial Jester': {
		name: 'Decennial Jester',
		image: 'jesterskulls',
		description: [
			'Put this on and jangle those little gold skulls in the face of every law enforcement officer who thinks they can bring down the Payday gang, then let rip a guffaw loud enough to wake the dead as you get away with those bags of loot right from under their noses. Go ahead, you know you want to.'
		],
		collection: 'Payday Franchise 10th Anniversary',
		rarity: 'Event',
		unlock: 'THIS IS A PAYDAY FRANCHISE 10TH ANNIVERSARY ITEM!',
		cost: ''
	},
	'Boney Black Top': {
		name: 'Boney Black Top',
		image: 'tophatske',
		description: [
			'Any well-dressed skeleton needs a good hat to complete his or her look. The bones are in vogue, and black is the color. Heist in 18th century style, all October long.'
		],
		collection: 'Halloween 2021',
		rarity: 'Event',
		unlock: 'THIS IS A HALLOWEEN 2021 ITEM!',
		cost: ''
	},
	'Deadhead Blues': {
		name: 'Deadhead Blues',
		image: 'tophatskeblue',
		description: [
			'Feeling down? Got a heisting gig down at the bayou? Blue is the way to go. That skeletal grin will keep \'em running away while you steal all the loot in sight!'
		],
		collection: 'Halloween 2021',
		rarity: 'Event',
		unlock: 'THIS IS A HALLOWEEN 2021 ITEM!',
		cost: ''
	},
	'Red Dead Bonehead Fred': {
		name: 'Red Dead Bonehead Fred',
		image: 'tophatskered',
		description: [
			'Getting ready for another glorious heist, but find yourself surrounded by roaring hellapalooza demon-wannabes? Put this on, then just stand there and look at them. Guaranteed to scare the living socks out of kids and cops alike!'
		],
		collection: 'Halloween 2021',
		rarity: 'Event',
		unlock: 'THIS IS A HALLOWEEN 2021 ITEM!',
		cost: ''
	},
	'The Burning 8th': {
		name: 'The Burning 8th',
		image: '???',
		description: [
			'Anniversaries are special, some more than others. And the Gods of Chaos and Heisting (i.e. the Payday Gang) demand nothing less than a grand tribute, so we have here this flaming clown visage for you to show your loyalty with.'
		],
		collection: 'Payday 2 8th Anniversary',
		rarity: 'Event',
		unlock: 'THIS IS A PAYDAY 2 8th ANNIVERSARY ITEM!',
		cost: 'Unlocked through Side Job'
	},
	'Lars the Troll': {
		name: 'Lars the Troll',
		image: 'trol',
		description: [
			'Some might already fear you like a troll or ogre from days of old. So why not look the part when you empty the coffers of their castle?'
		],
		collection: 'Steelseries',
		rarity: 'Paid',
		unlock: 'THIS IS A STEELSERIES ITEM!',
		cost: ''
	},
	'Shady Business': {
		name: 'Shady Business',
		image: '???',
		description: [
			'If you\'ve got the suit, you need the matching eye protection to dangle from your nose-bridge, right? The Combined cool-factor of Clowns and Saints coming together might just be enough to cause a cosmic paradox and implode the entire universe. (Just don\'t ask Aldstone to clean up the mess, OK?)'
		],
		collection: 'Saints Row: The Third Remastered',
		rarity: 'Paid',
		unlock: 'THIS IS A SAINTS ROW: THE THIRD REMASTERED ITEM!',
		cost: ''
	},
	'Vile Carny': {
		name: 'Vile Carny',
		image: 'overkillpunk',
		description: [
			'All of us can go a little crazy from time to time. However, this mask is for when you go completely over the deep end. And to reach this level of heisting, you need to be out of your goddamn mind!'
		],
		collection: 'Infamous',
		rarity: 'Infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: ''
	}
}

export default masks