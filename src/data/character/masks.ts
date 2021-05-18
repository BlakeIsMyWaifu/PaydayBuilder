export interface maskData {
	name: string;
	image: string;
	description: string[];
	collection: string;
	type: 'normal' | 'dlc' | 'community' | 'event' | 'infamous' | 'collaboration';
	unlock: string;
	cost: string;
}

const masks: maskData[] = [
	{
		name: 'Preferred Character',
		image: 'character_locked',
		description: [
			'Equipping this mask slot will make you wear your preferred character\'s mask.'
		],
		collection: 'Default',
		type: 'normal',
		unlock: '',
		cost: ''
	},
	{
		name: 'Dallas',
		image: 'dallas',
		description: [
			'The mask that everyone fears.'
		],
		collection: 'Default',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: '$48,750'
	},
	{
		name: 'Chains',
		image: 'chains',
		description: [
			'The mask of Chains.'
		],
		collection: 'Default',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: '$48,750'
	},
	{
		name: 'Hoxton',
		image: 'hoxton',
		description: [
			'The mask of Hoxton.'
		],
		collection: 'Default',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: '$48,750'
	},
	{
		name: 'Wolf',
		image: 'wolf',
		description: [
			'The mask of Wolf.'
		],
		collection: 'Default',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: '$48,750'
	},
	{
		name: 'Collateral',
		image: 'jw_shades',
		description: [
			'These shades belonged to a colleague of John\'s that he was hired to kill.',
			'It started like any other night. Only this night, he got a contract to kill another contract killer who was making rounds that day. John knew he had five stops to make and was using the same taxi cab between all of them.',
			'In the end, he didn\'t even need to do the deed himself - he was already dead when he found him.'
		],
		collection: 'Default',
		type: 'normal',
		unlock: '',
		cost: ''
	},
	{
		name: 'Hoxton Reborn',
		image: 'old_hoxton',
		description: [
			'The Hoxton Reborn mask is a mask that Hoxton made while in prison. For him, it\'s a symbol of everything he experienced in the past years while the PAYDAY gang kept on going without him. No one knows how his experiences in prison has changed him, and he won\'t talk about it when asked.',
			'All we can assume is that he has been changed forever, and that he is reborn into... Something different.'
		],
		collection: 'Default',
		type: 'normal',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: ''
	},
	{
		name: 'Clover',
		image: 'msk_grizel',
		description: [
			'Clover\'s mask represents what Clover both fears and hates most of all - wearing a mask as your normal face. The surgically-shrunken nose, the botox\'d lips and the expression of all-consuming vanity and self-obsession - all are symbols of fear and weakness, twisted into a horrifying parody.'
		],
		collection: 'Default',
		type: 'dlc',
		unlock: 'THIS IS A CLOVER CHARACTER PACK ITEM!',
		cost: ''
	},
	{
		name: 'Dragan',
		image: 'dragan',
		description: [
			'With a background like the one Dragan has, there\'s no surprise he aspires to greatness in the criminal underworld.',
			'His mask represents a lot of his own characteristics, with the clear resemblance to some of the original crew\'s masks that tells of his ability to infiltrate and blend in while still having some features that tells of his unending ruthlessness.',
			'The Croatian checker on the forehead serves as a reminder for both himself and his enemies to be aware that he is not your common western street thug.'
		],
		collection: 'Default',
		type: 'dlc',
		unlock: 'THIS IS A DRAGAN CHARACTER PACK ITEM!',
		cost: ''
	},
	{
		name: 'Richard Returns',
		image: 'richard_returns',
		description: [
			'Is this mask a reflection of a deep-seated psychological problem? Possibly a dissociative identity disorder? Schizophrenia? Trauma of a disturbed psyche? Or is it not a reflection at all, but instead something to cause them?'
		],
		collection: 'Default',
		type: 'dlc',
		unlock: 'THIS IS A HOTLINE MIAMI 2 DELUXE ITEM!',
		cost: ''
	},
	{
		name: 'Bonnie',
		image: 'bonnie',
		description: [
			'Few nations have contributed to humanity as Scotland has. In every field of endeavor - science, arts, cuisine - it is the people of this blessed land that give freely and generously. With this mask, Bonnie is determined to reverse this trend.'
		],
		collection: 'Default',
		type: 'normal',
		unlock: '',
		cost: ''
	},
	{
		name: 'Sokol',
		image: 'sokol',
		description: [
			'If playing as a grinder for the St Petersburg Bombers hockey team taught Sokol the value of one thing, it was the importance of a terrifying mask that protects his handsome Russian face.'
		],
		collection: 'Default',
		type: 'dlc',
		unlock: 'THIS IS A SOKOL CHARACTER PACK ITEM!',
		cost: ''
	},
	{
		name: 'Jiro',
		image: 'jiro',
		description: [
			'Japan is a land of tradition. A land of warriors. Jiro\'s mask reflects this. The mask expresses Jiro\'s love for a traditional Japan, while the bared snarl represents his unshakable determination.'
		],
		collection: 'Default',
		type: 'dlc',
		unlock: 'THIS IS A YAKUZA CHARACTER PACK ITEM!',
		cost: ''
	},
	{
		name: 'Bodhi',
		image: 'bodhi',
		description: [
			'Masks have always been used in spiritual traditions that relate to deities, the divine and those chasing the apotheosis of the self. Bodhi\'s mask reflects the man behind it. Strong, cunning, single-minded and centered.'
		],
		collection: 'Default',
		type: 'normal',
		unlock: '',
		cost: ''
	},
	{
		name: 'Jimmy',
		image: 'jimmy_duct',
		description: [
			'Jimmy hasn\'t really made many masks before he made his signature mask - and it shows. His mask design captures his free spirit and his disregard to things as appearance, planning and such. Good is good enough for Jimmy, he doesn\'t get stuck in ideas and wants to move forward at all times.'
		],
		collection: 'Default',
		type: 'normal',
		unlock: '',
		cost: ''
	},
	{
		name: 'Sydney',
		image: 'sydney',
		description: [
			'Smirk, Grin, Sneer - call it what you want. As you see this smiling punker mask approaching it\'s not synonyms that\'ll run through your head - it\'s bullets. Sydney will make sure of it.'
		],
		collection: 'Default',
		type: 'dlc',
		unlock: 'THIS IS A SYDNEY CHARACTER PACK ITEM!',
		cost: ''
	},
	{
		name: 'Rust',
		image: 'rust',
		description: [
			'The Devil is the moniker that has followed Rust for most of his life. Therefore, Rust\'s mask is a combination of a smiling clown with ominous horns protruding from his forehead, letting everyone know that the Devil is here.'
		],
		collection: 'Default',
		type: 'dlc',
		unlock: 'THIS IS A BIKER CHARACTER PACK ITEM!',
		cost: ''
	},
	{
		name: 'Scarface',
		image: 'chc_terry',
		description: [
			'Scarface came to the US with nothing more than two empty hands and a bad attitude, the darkness in his heart matched only by the brilliance of his criminal mind. His mask tells the story, complete with the trail of blood he left in his wake as he began to make his mark.'
		],
		collection: 'Default',
		type: 'normal',
		unlock: 'THIS IS A SCARFACE CHARACTER PACK ITEM!',
		cost: ''
	},
	{
		name: 'Sangres',
		image: 'max',
		description: [
			'The skull is Death, Sangres\' faithful companion throughout his career. The gold tooth is the coin that has been paid. The kill counter represents his past as a hitman, the blood-red ruby the new wealth he\'s seeking in the US. Sangres\' name spreaks of the many bloody episodes in his life, and that red blood is also present on his mask.'
		],
		collection: 'Default',
		type: 'normal',
		unlock: '',
		cost: ''
	},
	{
		name: 'Duke',
		image: 'myh',
		description: [
			'Duke is a man of culture, virtue and stone-hard composure. Thus his mask has been modeled of of the',
			'A big draw for Duke is his love for mystery- you never really know what\'s inside the safe until you open it, or behind the painting until you take it out of the frame. And with the Payday gang, the biggest mystery may be just around the corner...'
		],
		collection: 'Default',
		type: 'normal',
		unlock: '',
		cost: ''
	},
	{
		name: 'Ethan',
		image: 'ecp_male',
		description: [
			'This mask exudes power and brute force, in stark contrast to the man who wears it. Equal parts clown-like sadness and begrudging anger, it perfectly captures the mood of someone who has somewhat reluctantly chosen to be a heister.'
		],
		collection: 'Default',
		type: 'dlc',
		unlock: 'THIS IS A h3h3 CHARACTER PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Hila',
		image: 'ecp_female',
		description: [
			'Something about this mask radiates a playful malice and most who gaze upon it immediately feel a sense of unease, which is just the kind of thing you need when you\'re robbing a bank.'
		],
		collection: 'Default',
		type: 'dlc',
		unlock: 'THIS IS A h3h3 CHARACTER PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Mark',
		image: 'bear',
		description: [
			'hello from Russia.',
			'I think it will be the best game in the world.',
			'It\'s just a bear.',
			'Just before there was an empty.',
			'Thank you',
			'- Vasiliy'
		],
		collection: 'PAYDAY 2 Community',
		type: 'community',
		unlock: 'THIS IS A COMMUNITY ITEM!',
		cost: '$7,250'
	},
	{
		name: 'Hockey Heat',
		image: 'heat',
		description: [
			'A classic hockey mask.',
			'A guy told me one time...',
			'\'Don\'t let yourself get attached to anything you are not willing to walk out on in 30 seconds flat if you feel the heat around the corner.\''
		],
		collection: 'PAYDAY 2 Community',
		type: 'community',
		unlock: 'THIS IS A COMMUNITY ITEM!',
		cost: '$9,000'
	},
	{
		name: 'Happy Santa',
		image: 'santa_happy',
		description: [
			'Santa, more known as Santa Claus, Saint Nicholas, Father Christmas and Kris Kringle (?) is a man of epic proportions. Words like legendary, mythical, historical and folkloric best describe this beast of a man.',
			'This particular mask is the Happy Santa mask. Big smile and super jolly with red cheeks and all, wearing this you\'ll even bring the most negative of Bulldozers into a joyous smile.'
		],
		collection: 'PAYDAY 2 Community',
		type: 'community',
		unlock: 'THIS IS A COMMUNITY ITEM!',
		cost: '$7,500'
	},
	{
		name: 'Peter',
		image: 'unicorn',
		description: [
			'Peter is a true legend and has been so for like, ever. A beast with a large, pointed, spiraling horn projected from its forehead, Peter is known by all of mankind as the go-to guy for whenever you need to touch the rainbow. No, touch it. Touch the motherfucking rainbow. Now taste it.',
			'Shh. It\'s okay. You did good.'
		],
		collection: 'PAYDAY 2 Community',
		type: 'community',
		unlock: 'THIS IS A COMMUNITY ITEM!',
		cost: 'Free'
	},
	{
		name: 'Firestarter',
		image: 'combusto',
		description: [
			'This clown used to be a master of pyrotechnics, having a fire breathing number that no one could top. His competitors in the not-so-known-firebreathing-clown-scene were unhappy with his success... And spiked his cocktail.',
			'With third degree burns on his face and an evil look in his eyes he fought fire with fire and set the other clowns ablaze. But he didn\'t stop there, the fiery hatred in him burned too bright. Now he seeks to set the world on fire.'
		],
		collection: 'PAYDAY 2 Community',
		type: 'community',
		unlock: 'THIS IS A COMMUNITY ITEM!',
		cost: 'Free'
	},
	{
		name: 'Spackle',
		image: 'spackle',
		description: [
			'Once a well renowned circus clown Spackle was the best make-up artist in the scene. Known for her skill and ability to make people look so unlike themselves, she became obsessed with the art.',
			'With her own face as canvas she tirelessly applied layer after layer, each becoming more twisted. She was sent to an asylum after killing five people during their make-up process.'
		],
		collection: 'PAYDAY 2 Community',
		type: 'community',
		unlock: 'THIS IS A COMMUNITY ITEM!',
		cost: 'Free'
	},
	{
		name: 'Gumbo',
		image: 'gumbo',
		description: [
			'Little is known about the man known as the devouring clown, but for a long time people believed that his red eyes were part of his outfit. Needless to say, they were wrong. Now people fear the red eyed clown with a laugh so evil it makes even the most seasoned badasses quiver in fear.',
			'Word on the street is that he haunts alletways in a demonic shape looking for something... Or someone. All that is known is that people end up dead, more dead than you thought possible...'
		],
		collection: 'PAYDAY 2 Community',
		type: 'community',
		unlock: 'THIS IS A COMMUNITY ITEM!',
		cost: 'Free'
	},
	{
		name: 'Smiley',
		image: 'smiley',
		description: [
			'There was once a clown who couldn\'t smile. He watched as the other clowns brought joy and happiness to both young and old. He grew enviuos and angry, so to the point that he stapled his lips to his cheecks, giving him a wide grin. But instead of making everyone happy, they were all afraid, why, he did not understand.',
			'He came to the conclusion perhaps this was his calling, to make people afraid... Very afraid.'
		],
		collection: 'PAYDAY 2 Community',
		type: 'community',
		unlock: 'THIS IS A COMMUNITY ITEM!',
		cost: 'Free'
	},
	{
		name: 'Reservoir Dog',
		image: 'wayfarer',
		description: [
			'These shades belonged to five strangers. John was hired to kill a group of people who were about to commit the perfect crime. They all dressed the same and had code names so they were easy to identify.',
			'However, John arrived too late to the scene. The police were already there. He made sure the strangers were all dead before he left the scene.'
		],
		collection: 'PAYDAY 2 Community',
		type: 'community',
		unlock: 'THIS IS A COMMUNITY ITEM!',
		cost: 'Free'
	},
	{
		name: 'Terminator',
		image: 'stoneface',
		description: [
			'These shades belonged to an assassin from a distant land. The assassin John was sent to kill was built like a machine. This one would prove to be hard. He used a customized Improved Combined Tactical Vest. He was fully armored and very tough. Behind all that armor however, John knew there was only flesh and bones.',
			'John managed to to kill him in the end. He knew however that when he removed him from his place, another would replace him.'
		],
		collection: 'PAYDAY 2 Community',
		type: 'community',
		unlock: 'THIS IS A COMMUNITY ITEM!',
		cost: 'Free'
	},
	{
		name: 'Mad Lion',
		image: 'crazy_lion',
		description: [
			'A horrifying mask shaped like the head of a lion.',
			'Little is known about this mask. It is said it was made by a crazy Balkan scientist who had a sick fascination for lions. Only he could see the beauty in this mask.',
			'The mask was given to you by someone who wishes you well.'
		],
		collection: 'PAYDAY 2 Community',
		type: 'community',
		unlock: 'THIS IS A COMMUNITY ITEM!',
		cost: 'Free'
	},
	{
		name: 'Conquest',
		image: 'mig_conquest',
		description: [
			'The identity of the first horseman of the Apocalypse, and exactly what he represents is something still greatly debated to this day. Some call him Conquest, some say he was Christ himself, and some claim he was even the Antichrist.'
		],
		collection: 'PAYDAY 2 Community',
		type: 'community',
		unlock: 'THIS IS A COMMUNITY ITEM!',
		cost: 'Free'
	},
	{
		name: 'Death',
		image: 'mig_death',
		description: [
			'The fourth and final horseman of the Apocalypse is Death himself. Wherever Death went, Hades always followed with jaws wide open, ready to devour the souls of the victims slain by Death.'
		],
		collection: 'PAYDAY 2 Community',
		type: 'community',
		unlock: 'THIS IS A COMMUNITY ITEM!',
		cost: 'Free'
	},
	{
		name: 'Famine',
		image: 'mig_famine',
		description: [
			'The third horseman of the apocalypse is the embodiment of Famine, a force so powerful he would leave people starving to their deaths if they laid eyes upon him.'
		],
		collection: 'PAYDAY 2 Community',
		type: 'community',
		unlock: 'THIS IS A COMMUNITY ITEM!',
		cost: 'Free'
	},
	{
		name: 'War',
		image: 'mig_war',
		description: [
			'The second horseman of the Apocalypse is War and the violent spirit of mankind. War believes humans are naturally vicious, and that they don\'t require a real reason to fight or kill. He rode a fiery red horse, suggesting that blood would flow wherever he went.'
		],
		collection: 'PAYDAY 2 Community',
		type: 'community',
		unlock: 'THIS IS A COMMUNITY ITEM!',
		cost: 'Free'
	},
	{
		name: 'The Cat',
		image: 'fib_cat',
		description: [
			'Agile as a Cat, and lucky as one too, you will dare any heist and successfully breach any defenses. When the shit hits the fan, you will always dodge and land on your feet. There is no better way to spend your nine lives - a stone-cold killer is what you are and everyone knows it.'
		],
		collection: 'PAYDAY 2 Community',
		type: 'community',
		unlock: 'THIS IS A COMMUNITY ITEM!',
		cost: 'Free'
	},
	{
		name: 'The Fox',
		image: 'fib_fox',
		description: [
			'The Fox - slickest and slyest of all predators. No locks can keep you out, no defensive plan can withstand your guile and artifice. You will take what you want and leave everyone wondering who did it, or if it even happened at all.'
		],
		collection: 'PAYDAY 2 Community',
		type: 'community',
		unlock: 'THIS IS A COMMUNITY ITEM!',
		cost: 'Free'
	},
	{
		name: 'The Rabbit',
		image: 'fib_hare',
		description: [
			'Mad as March Hare. As they stare into your crazed yellow eyes, they\'d better hand the cash over quick. Then take the money and run. No one outruns a hare.'
		],
		collection: 'PAYDAY 2 Community',
		type: 'community',
		unlock: 'THIS IS A COMMUNITY ITEM!',
		cost: 'Free'
	},
	{
		name: 'The Mouse',
		image: 'fib_mouse',
		description: [
			'Quiet as a Mouse, you\'ll enter and exit silently and none will be the wiser. And if they should spot you, who would expect such wickedness from such a small creature? But yes, you are capable of it - all of it.'
		],
		collection: 'PAYDAY 2 Community',
		type: 'community',
		unlock: 'THIS IS A COMMUNITY ITEM!',
		cost: 'Free'
	},
	{
		name: 'Golden Dallas',
		image: 'dgm',
		description: [
			'To commemorate the day PAYDAY became the most played co-op game in a single day - 10th of June 2017. Some 221k heisters per hour were robbing banks together in style. Earning us the Top 5 Position among Most Played Games in a day of all time - PAYDAY leaves its golden mark on history. Dallas is pleased.'
		],
		collection: 'PAYDAY 2 Community',
		type: 'community',
		unlock: 'THIS IS A COMMUNITY ITEM!',
		cost: 'Free'
	},
	{
		name: 'A Proud Pilotka',
		image: 'wmp_03',
		description: [
			'This pilotka was found on a corpse near Lake Müritz in Germany. It was attached with a string around the poor, dead soldier\'s head. There were no other bodies next to unnamed fellow,'
		],
		collection: 'PAYDAY 2 Community',
		type: 'community',
		unlock: 'THIS IS A COMMUNITY ITEM!',
		cost: 'Free'
	},
	{
		name: 'The Officer\'s Hat',
		image: 'wmp_04',
		description: [
			'This item popped up at an auction in North France during the 1990s. Among the auction goers sat a woman in her 50s. She recognized it and even though she could not remember the name of the officer who wore it, she paid a hefty sum for it. As a young girl she visited a square to buy vegetables when paratroopers came dropping down. Gunfire, explosions and screams of fear and pain filled the air. The officer took her to a shelter in a government building. He had no reason but kindness to save her. But even as his life was on stake,'
		],
		collection: 'PAYDAY 2 Community',
		type: 'community',
		unlock: 'THIS IS A COMMUNITY ITEM!',
		cost: 'Free'
	},
	{
		name: 'The Survivor\'s Pilot Hat',
		image: 'wmp_01',
		description: [
			'A pilot in the Royal Air Force went down during WW2 a few miles outside Bialystok, Poland. Considered K.I.A, he was later found deep in the Bialowieza Forest where he\'d survived on fish, roots and animals he managed to caught'
		],
		collection: 'PAYDAY 2 Community',
		type: 'community',
		unlock: 'THIS IS A COMMUNITY ITEM!',
		cost: 'Free'
	},
	{
		name: 'The Trophy Helmet',
		image: 'wmp_02',
		description: [
			'In the small village of Pomtsburg, you can find a small monument. Few read the plaque covered with moss, but it holds the tale of a young boy. As the Germans came marching into Pomtsburg he lead the resistance with bravery and determination. Pomtsburg was his birthplace and no one were to destroy it. The Battle of Pomtsburg never reached the history books, and few even remember how it ended. But the boy managed to steal this souvenir. Something to remind him and others you should always stand up to oppression.'
		],
		collection: 'PAYDAY 2 Community',
		type: 'community',
		unlock: 'THIS IS A COMMUNITY ITEM!',
		cost: 'Free'
	},
	{
		name: 'Golden Chains',
		image: 'gcm',
		description: [
			'It\'s been four years. Four years of hard work, meth cooked, shots fired and loot hauled. But we\'ve only just began. We do feel a bit nostalgic. It\'s been four years since we came to Washington and took on our first heist here and now we\'re pros. And when it\'s someone\'s birthday, you need to get them a gift. Therefore we\'ve poured 24k hot, luscious gold all over Chain\'s Mask. Happy Birthday PAYDAY 2!'
		],
		collection: 'PAYDAY 2 Community',
		type: 'community',
		unlock: 'THIS IS A COMMUNITY ITEM!',
		cost: 'Free'
	},
	{
		name: 'Golden Wolf',
		image: 'gwm',
		description: [
			'Has it been five years already? Damn. Not many make it this far into the life. This last year has been hard. Real hard. The family has been hit where we are most vulnerable, the cops are getting closer every day, and we\'re almost in over our heads. This situation would have killed most heisters or put them away forever, but we\'re not just any two-bit crooks. We\'re PAYDAY. We always get it done right. And we always get the gold.'
		],
		collection: 'PAYDAY 2 Community',
		type: 'community',
		unlock: 'THIS IS A COMMUNITY ITEM!',
		cost: 'Free'
	},
	{
		name: 'Golden Hoxton',
		image: 'ghx',
		description: [
			'I remember the first time I put on a mask. Was it really seven years ago? When you\'ve been doing something for a long time, you eventually end up at a crossroads. In this line of work, you\'re either staring down the barrel of a gun or looking at the sweet life. Everybody has to make their choice. Everybody has to decide what that choice is worth risking. For Payday, it\'s always been all-or-nothing!'
		],
		collection: 'PAYDAY 2 Community',
		type: 'community',
		unlock: 'THIS IS A COMMUNITY ITEM!',
		cost: 'Free'
	},
	{
		name: 'Golden Houston',
		image: 'ghm',
		description: [
			'So this is it- the time of reckoning. Our family of heisters against a power we haven\'t seen the limit of. I know one thing- we\'ll either come out of this together or die trying. We\'re the Clowns, the fucking gods of thieving, and we play by our rules. So, whatever comes next, we\'re ready for a blaze of golden glory.'
		],
		collection: 'PAYDAY 2 Community',
		type: 'community',
		unlock: 'THIS IS A COMMUNITY ITEM!',
		cost: 'Free'
	},
	{
		name: 'Devourer',
		image: 'devourer',
		description: [
			'This mask, heavily inspired by the Great Old Ones that rule below the seas was recovered from a police storage where it had been kept since it was found during a raid on a murderous cult. It\'s monstrous look makes you wonder what beings lurk out in the dark.'
		],
		collection: 'Dead by Daylight Community',
		type: 'community',
		unlock: 'THIS IS A DEAD BY DAYLIGHT COMMUNITY ITEM!',
		cost: 'Free'
	},
	{
		name: 'Unborn',
		image: 'unborn',
		description: [
			'A once great actor who claimed to have become possessed by a demonic spirit started to wear a mask to hide his deformed appearance. The mask one day broke and what was hiding underneath could never be sealed again.'
		],
		collection: 'Dead by Daylight Community',
		type: 'community',
		unlock: 'THIS IS A DEAD BY DAYLIGHT COMMUNITY ITEM!',
		cost: 'Free'
	},
	{
		name: 'Blister Head',
		image: 'dbd_04',
		description: [
			'This blister stricken creature is the embodiment of true terror. All your childhood fears poured into something unfathomable and horrendous. Question is if you will even need bullets anymore.'
		],
		collection: 'Dead by Daylight Community',
		type: 'community',
		unlock: 'THIS IS A DEAD BY DAYLIGHT COMMUNITY ITEM!',
		cost: 'Free'
	},
	{
		name: 'The Clawer',
		image: 'dbd_01',
		description: [
			'On gloomy nights when the moon is bright, one might witness how the Clawer emerges from the watery depths. It yearns for fresh meat and won\'t stop until its hunger is still. The Clawer is one of those urban myths that campfire teens tell - just before The Clawer strikes. Afterwards, it returns to the deep. Hibernating until its stomach growls yet again.'
		],
		collection: 'Dead by Daylight Community',
		type: 'community',
		unlock: 'THIS IS A DEAD BY DAYLIGHT COMMUNITY ITEM!',
		cost: 'Free'
	},
	{
		name: 'The Killer',
		image: 'dbd_slasher',
		description: [
			'Even stark raving mad Killers need cash. It\'s a fact. So sometimes you simply must take a break from slashing teens and hang up the blood stained machete. But killing can be done in so many ways and it\'s real important with a hobby - and remember that cops bleed too.'
		],
		collection: 'Dead by Daylight Community',
		type: 'community',
		unlock: 'THIS IS A DEAD BY DAYLIGHT COMMUNITY ITEM!',
		cost: 'Free'
	},
	{
		name: 'Planetary Tomb Guardian',
		image: 'solus',
		description: [
			'Being a Planetary Tomb Guardian is a lonely job. But a job that must be done. Eons of time float by without a single living organism in sight. Stars and suns brighten the day and night. But solitude is a horrid thing. But then one day, a spacecraft breaks the silence and you are not alone anymore. Someone is visiting this planet you call home.'
		],
		collection: 'The Solus Project Community',
		type: 'community',
		unlock: 'THIS IS A THE SOLUS PROJECT COMMUNITY ITEM!',
		cost: ''
	},
	{
		name: 'Alienware',
		image: 'alienware',
		description: [
			'Based on the visions of a madman who thought he saw an extraterrestrial being.',
			'It is strange though, as the powerful materials is not from anywhere on Earth.'
		],
		collection: 'Normal (Card Drops)',
		type: 'normal',
		unlock: '',
		cost: '$7,250'
	},
	{
		name: 'Baby Rhino',
		image: 'babyrhino',
		description: [
			'Who would not want to wear the head of a baby rhino. Is it not cute? Putting it on makes you feel a little stupid, maybe because how it looks.',
			'While wearing it, you are worried that it is a bit hard seeing through the mask. You will do fine as long as you do not wander off with your pig-headed friends.'
		],
		collection: 'Normal (Card Drops)',
		type: 'normal',
		unlock: '',
		cost: '$7,250'
	},
	{
		name: 'The Big Lips',
		image: 'biglips',
		description: [
			'Throw someone a lip by wearing this mask.',
			'The thing that gets people is the two fleshy folds that surround the mouth of this mask, the biggest lips you ever saw.',
			'Open your mouth and say \'aaah\', directed the bank robber.'
		],
		collection: 'Normal (Card Drops)',
		type: 'normal',
		unlock: '',
		cost: '$7,250'
	},
	{
		name: 'Blackhearted',
		image: 'mr_sinister',
		description: [
			'Evil and treacherous in a haunting way, this mask is said to change the wearer in mysterious ways.',
			'Worn long enough, it is said it turns the wearers heart into a black one, filled with lust for black deeds.'
		],
		collection: 'Normal (Card Drops)',
		type: 'normal',
		unlock: '',
		cost: '$8,250'
	},
	{
		name: 'The Brainiac',
		image: 'brainiack',
		description: [
			'This is the mask of someone who has a lot on his mind.',
			'Putting on this mask sparks an excessive, almost explosive desire to learn more about crimes and how to commit them.'
		],
		collection: 'Normal (Card Drops)',
		type: 'normal',
		unlock: '',
		cost: '$9,000'
	},
	{
		name: 'The Bullet',
		image: 'bullet',
		description: [
			'Worried about getting shot in the face with a high powered firearm?',
			'Scared that you will get stomped by a bulldozer, cloaker and a shield at the same time?',
			'Wearing this mask will not help you, but you will get downed in style. The Bullet - out in Black Markets near you, right now!'
		],
		collection: 'Normal (Card Drops)',
		type: 'normal',
		unlock: '',
		cost: '$7,250'
	},
	{
		name: 'Calaca',
		image: 'day_of_the_dead',
		description: [
			'A skeleton mask connected to the Mexican Day of the Dead festival.',
			'Origins have been traced back to Aztec imagery, but no one is really sure.',
			'Wearing the Calaca is all about finding the joy in death happening all around you. The death of others should be a joyous occasion!'
		],
		collection: 'Normal (Card Drops)',
		type: 'normal',
		unlock: '',
		cost: '$7,250'
	},
	{
		name: 'The Cannula',
		image: 'outlandish_a',
		description: [
			'This mask is made of strange materials, holding it feels awkward. Wearing it feels even stranger.',
			'Putting on the mask, you feel like an outsider, a foreigner, someone who constantly changes locations, staying away, not wanting to be recognized by anyone.'
		],
		collection: 'Normal (Card Drops)',
		type: 'normal',
		unlock: '',
		cost: '$7,000'
	},
	{
		name: 'The Crybaby',
		image: 'clowncry',
		description: [
			'Is there anything sadder than a crying clown?',
			'Probably crying civilians, being shouted to the ground by a criminal wearing a horrific mask.',
			'Or maybe a bank manager with an empty vault.'
		],
		collection: 'Normal (Card Drops)',
		type: 'normal',
		unlock: '',
		cost: '$7,500'
	},
	{
		name: 'The Dripper',
		image: 'dripper',
		description: [
			'The Dripper was made by atomization of a larger mass of liquid, somehow made into a hard material while retaining a smooth surface.',
			'Everyone who looks at it sees different things.',
			'What do you see?'
		],
		collection: 'Normal (Card Drops)',
		type: 'normal',
		unlock: '',
		cost: '$11,000'
	},
	{
		name: 'Doctor Crime',
		image: 'irondoom',
		description: [
			'Doctor Mayhem is an American fictional character, a supervillain who appears in comic books by OVERKILL Comics.',
			'The character was created by writer-editor David Goldfarb and designed by artist Max Elmberg Sjöholm.',
			'He made his first appearance in \'The Amazing Career Criminals: The PAYDAY gang meets Doctor Mayhem!\''
		],
		collection: 'Normal (Card Drops)',
		type: 'normal',
		unlock: '',
		cost: '$7,250'
	},
	{
		name: 'The Gagball',
		image: 'gagball',
		description: [
			'Take a walk on the submissive side with a gagball stuck to your face.',
			'People wear these for a variety of reasons, one being roleplays involving bondage. This isn\'t necessarily the case though, as gagballs apparently can be used in bank robberies too.'
		],
		collection: 'Normal (Card Drops)',
		type: 'normal',
		unlock: '',
		cost: '$7,500'
	},
	{
		name: 'Greek Tragedy',
		image: 'greek_tragedy',
		description: [
			'A mask that symbolizes all the parts in a greek tragedy.',
			'In old Greece, masks were used to worship the gods in ceremonial rites and celebrations.',
			'This particular mask summarizes every heist in existence; the anger of someone triggering the alarm, the joy of opening the vault and the tragedy of being caught.'
		],
		collection: 'Normal (Card Drops)',
		type: 'normal',
		unlock: '',
		cost: '$9,750'
	},
	{
		name: 'Hockey Mask',
		image: 'hockey',
		description: [
			'A hockey mask is a mask worn by hockey goaltenders to protect their heads from injury.',
			'It is also the iconic robber mask, hand-crafted using only high-quality materials. Instead of protecting you from pucks, it protects you from being recognized while going about, doing your thing.',
			'You know, the thing you do so well. Stealing.'
		],
		collection: 'Normal (Card Drops)',
		type: 'normal',
		unlock: '',
		cost: '$8,250'
	},
	{
		name: 'The Hog',
		image: 'hog',
		description: [
			'You have a new message! *BEEP*',
			'Salutations, this is \'Almir\' at OVERKILL. The Mask that you ordered should be delivered by now...',
			'A list of instructions is included...',
			'Make sure that you readthem carefully!',
			'Do you like hurting othr people? Then this mask is for you.'
		],
		collection: 'Normal (Card Drps)',
		type: 'normal',
		unlock: '',
		cost: '$7,250'
	},
	{
		name: 'The Horned Beast',
		image: 'demon',
		description: [
			'A beast that came from the abyss.',
			'It has a lion\'s body, bear feet and a leopard\'s mouth.',
			'Not much else is know of this beast, nor who designed the mask.'
		],
		collection: 'Normal (Card Drops)',
		type: 'normal',
		unlock: '',
		cost: '$13,500'
	},
	{
		name: 'The Jaw',
		image: 'jaw',
		description: [
			'Protect your glass chin with a metal jaw.',
			'The only thing you will be chewing from now on with your jaw is law enforcers, right?'
		],
		collection: 'Normal (Card Drops)',
		type: 'normal',
		unlock: '',
		cost: '$7,500'
	},
	{
		name: 'Kawaii',
		image: 'kawaii',
		description: [
			'Lovable, cute, aborable, cool and hip, charming, non-threatening, innocent, happy-go-lucky.',
			'These are words not commonly used in crimonology.',
			'Because of you, they now are.'
		],
		collection: 'Normal (Card Drops)',
		type: 'normal',
		unlock: '',
		cost: '$7,250'
	},
	{
		name: 'Kenneth',
		image: 'demonictender',
		description: [
			'A horrifying mask shaped like the head of a demon.',
			'Not much is known about it other than the name - Kenneth.',
			'Now, this vengeful spirit has returned to earth to haunt mankind once more.'
		],
		collection: 'Normal (Card Drops)',
		type: 'normal',
		unlock: '',
		cost: '$7,250'
	},
	{
		name: 'Mrs. Mannequin',
		image: 'rubber_female',
		description: [
			'The Female Mannequin.',
			'The face of an articulated doll used by tailors, dressmakers, artists, windowdressers and now bank robbers.',
			'They are most often used to display or fit clothing, but are also used to simulate how to teach first aid, CPR, tracheal intubation and now bank robbery.'
		],
		collection: 'Normal (Card Drops)',
		type: 'normal',
		unlock: '',
		cost: '$7,250'
	},
	{
		name: 'Mr. Mannequin',
		image: 'rubber_male',
		description: [
			'The Male Mannequin.',
			'The face of an articulated doll used by tailors, dressmakers, artists, windowdressers and now bank robbers.',
			'They are most often used to display or fit clothing, but are also used to simulate how to teach first aid, CPR, tracheal intubation and now bank robbery.'
		],
		collection: 'Normal (Card Drops)',
		type: 'normal',
		unlock: '',
		cost: '$7,250'
	},
	{
		name: 'Mr. Sackcloth',
		image: 'scarecrow',
		description: [
			'Discourage crows, sparrows and law enforcers from entering your field of terror.',
			'The legend goes that in distant lands, there lived a god who knew everything yet could not walk. The greed of man found the god and beheaded it, thinking they could gain its wisdom.'
		],
		collection: 'Normal (Card Drops)',
		type: 'normal',
		unlock: '',
		cost: '$9,750'
	},
	{
		name: 'Mr. Smooth',
		image: 'tounge',
		description: [
			'This mask somehow simultaneously conveys and expresses opposing or contradictory feelings, beliefs, and motivations.',
			'Legends says that four creatures merged together, forming a greater entity with the face of this mask.',
			'To summarize, it is a scary fucking mask.'
		],
		collection: 'Normal (Card Drops)',
		type: 'normal',
		unlock: '',
		cost: '$7,000'
	},
	{
		name: 'Monkey Business',
		image: 'monkeybiss',
		description: [
			'Worn by someone who does not take life that seriously.',
			'Because it is a mask of a monkey.'
		],
		collection: 'Normal (Card Drops)',
		type: 'normal',
		unlock: '',
		cost: '$8,250'
	},
	{
		name: 'The Mummy',
		image: 'mummy',
		description: [
			'The face of a mummy that has had its skin and organs preserved. Either intentional or incidental exposure to extreme cold (ice mummies!), low humidity, lack of air or chemicals might have caused this.',
			'Who knows what part of the world it is from? Having been preserved for the longest time, its ready to be exposed to the world again.'
		],
		collection: 'Normal (Card Drops)',
		type: 'normal',
		unlock: '',
		cost: '$7,250'
	},
	{
		name: 'Oni',
		image: 'oni',
		description: [
			'The Oni is a Japanese devil.',
			'They are hideous, gigantic ogre-like creatures that have sharp claws and two horns growing from their heads.',
			'Their skin may have any number of colors, though red and blue are the most common.'
		],
		collection: 'Normal (Card Drops)',
		type: 'normal',
		unlock: '',
		cost: '$7,500'
	},
	{
		name: 'The Outlander',
		image: 'outlandish_b',
		description: [
			'Have you ever had that feeling when you have no mouth but feel the urge to scream?',
			'That is how you are going to feel if you are a civilian looking at a criminal wearing this mask, pointing a gun at you, shouting you to the floor.'
		],
		collection: 'Normal (Card Drops)',
		type: 'normal',
		unlock: '',
		cost: '$7,250'
	},
	{
		name: 'The Perfect Stranger',
		image: 'outlandish_c',
		description: [
			'The mask of a stranger in a strange land.',
			'Masks like these were used in a lost civilization, in war, on soldiers; ceremonially, for burial rites and for shamanistic ceremonies to drive away evil spirits.'
		],
		collection: 'Normal (Card Drops)',
		type: 'normal',
		unlock: '',
		cost: '$7,500'
	},
	{
		name: 'The Pout',
		image: 'stonekisses',
		description: [
			'The pout is a facial expression that humans can make.',
			'It is a protrusion of the lips, especially as an expression of sullen discontent.',
			'Who would not be discontent, having had their horns sawed off like that.'
		],
		collection: 'Normal (Card Drops)',
		type: 'normal',
		unlock: '',
		cost: '$7,500'
	},
	{
		name: 'The Rage',
		image: 'buha',
		description: [
			'Probably one of the angriest looking clown masks you have ever seen.',
			'It almostputs Wolf\'s mask to shame.',
			'Almost.'
		],
		collection: 'Normal (Card Drops)',
		type: 'normal',
		unlock: '',
		cost: '$8,250'
	},
	{
		name: 'The Shogun',
		image: 'shogun',
		description: [
			'Don the mask and feel like a Japanese general from a distant past.',
			'It is said that this mask was the mask of a mad and desperate warrior, who rose above the ranks and became a great general, winning many battles.',
			'Common sense will not accomplish great things. You must become mad and desperate to do so.'
		],
		collection: 'Normal (Card Drops)',
		type: 'normal',
		unlock: '',
		cost: '$9,000'
	},
	{
		name: 'The Shrunken Head',
		image: 'shrunken',
		description: [
			'Ritually prepared, the cranium is removed fromthe head, eyes and mouth sewn shut. Boiled in hot water, dried with hot rocks and sand and molded to keep the features of a human face.',
			'Taken by ship to the Americas by Westerns long ago, it now somehow has ended up in your possession.'
		],
		collection: 'Normal (Card Drops)',
		type: 'normal',
		unlock: '',
		cost: '$7,250'
	},
	{
		name: 'The Starved',
		image: 'clown_56',
		description: [
			'This mask has a hideous appearance, a bony facial structure and dehydrated skin.',
			'It is the kind of mask gives you nightmares.'
		],
		collection: 'Normal (Card Drops)',
		type: 'normal',
		unlock: '',
		cost: '$7,250'
	},
	{
		name: 'The Troll',
		image: 'troll',
		description: [
			'Now here is a troll that is tired of hiding under the bridge.',
			'Why not see the world, pillage a village, take the local inhabitants gold treasures and flee from the the angry mobs instead?'
		],
		collection: 'Normal (Card Drops)',
		type: 'normal',
		unlock: '',
		cost: '$7,250'
	},
	{
		name: 'The Undead',
		image: 'dawn_of_the_dead',
		description: [
			'An undead is a being that is dead yet somehow behaves like it is still alive.',
			'Created in mysterious ways, this might as well be a zombie as it could be a Vampire.',
			'If you are going to rob a bank, why not scare the living hell out of people while doing so?'
		],
		collection: 'Normal (Card Drops)',
		type: 'normal',
		unlock: '',
		cost: '$7,000'
	},
	{
		name: 'The Vampire',
		image: 'vampire',
		description: [
			'The Vampire is a mythological undead creature, said to feed on the blood of the living.',
			'Vampires can appear as normal humans.',
			'When attacked they will reveal their vampire visage where their face changes and they grow fangs and pointed teeth.'
		],
		collection: 'Normal (Card Drops)',
		type: 'normal',
		unlock: '',
		cost: '$7,000'
	},
	{
		name: 'The Zipper',
		image: 'zipper',
		description: [
			'The zipper mask consists of two parallel tracks of teeth that can be interlocked or separated by the pulling of a slide between them.',
			'Separate the zipper when you need to communicate.'
		],
		collection: 'Normal (Card Drops)',
		type: 'normal',
		unlock: '',
		cost: '$8,250'
	},
	{
		name: 'The Zombie',
		image: 'zombie',
		description: [
			'A zombie is an animated corpse that somehow has been brought to life again.',
			'Brains?'
		],
		collection: 'Normal (Card Drops)',
		type: 'normal',
		unlock: '',
		cost: '$7,250'
	},
	{
		name: 'Almir\'s Beard',
		image: 'almirs_beard',
		description: [
			'Some say that real men don\'t shave, but the truth is that real men can\'t shave. Ordinary razors simply bounce off the dense, magnificent foliage that is a truly full Almir beard.'
		],
		collection: 'Normal (Achievement)',
		type: 'normal',
		unlock: '',
		cost: 'Unlocked Unlocked via \'Riders On the Snowstorm\''
	},
	{
		name: 'Krampus',
		image: 'krampus',
		description: [
			'Been a bad boy or girl this year? Then you can expect a visit from Krampus. Or a phone-call from Bain.'
		],
		collection: 'Normal (Achievement)',
		type: 'normal',
		unlock: '',
		cost: 'Unlocked via \'Cancelling Santa’s Christmas\''
	},
	{
		name: 'Mechanical Santa',
		image: 'robo_santa',
		description: [
			'This jolly, festive automaton has the heart of Santa. He keeps it in a box, under a pile of elf corpses, and surrounded by severed reindeer heads.'
		],
		collection: 'Normal (Achievement)',
		type: 'normal',
		unlock: '',
		cost: 'Unlocked via \'Clasutrophobia\''
	},
	{
		name: 'Mrs. Claus',
		image: 'mrs_claus',
		description: [
			'When Santa is flying through December skies, someone has to stay home and keep the elves in line. No-one does that better than the whip-cracking, cigar-smoking kommandant of the Claus household.'
		],
		collection: 'Normal (Achievement)',
		type: 'normal',
		unlock: '',
		cost: 'Unlocked via \'Vlad’s Little Helpers\''
	},
	{
		name: 'The Strinch',
		image: 'strinch',
		description: [
			'A seasoned heister over the festival period, the Strinch has been stealing Christmases since 1957. Also linked with the Halloween Heist of 1972.'
		],
		collection: 'Normal (Achievement)',
		type: 'normal',
		unlock: '',
		cost: 'Unlocked via \'Stealing Christmas\''
	},
	{
		name: 'The Champ',
		image: 'champion_dallas',
		description: [
			'This is the Champ mask. Based on a bad day for Dallas. How bad?, imagine being on the business end of thirteen rounds with a professional boxer. Swollen brow, concussions, dislocated jaw - you name it, and this mask has it. Yeah, a really bad day for Dallas.'
		],
		collection: 'Normal (Achievement)',
		type: 'normal',
		unlock: '',
		cost: 'Unlocked via \'Knockout!\''
	},
	{
		name: 'The Tids',
		image: 'simpson',
		description: [
			'Some say his racing leathers are made from bleached dolphin skin, and that his oily secretions are prized in Chinese medicine. All we know is... he\'s called The Tids.'
		],
		collection: 'Normal (Achievement)',
		type: 'normal',
		unlock: '',
		cost: 'Unlocked via \'Gone in 240 Seconds\''
	},
	{
		name: 'Funnyman',
		image: 'baitface',
		description: [
			'The Funnyman knows how to make people laugh. The Funnyman might go too far and take a hit or two. Beware though, because a person who can control others laughter knows how to get the last laugh.'
		],
		collection: 'Normal (Achievement)',
		type: 'normal',
		unlock: '',
		cost: 'Unlocked via \'I Want to Get Away\''
	},
	{
		name: 'Dawg',
		image: 'dawg',
		description: [
			'Such mask. Much disguise. Very robber.'
		],
		collection: 'Normal (Achievement)',
		type: 'normal',
		unlock: '',
		cost: 'Unlocked via \'Jump! Jump! Jump!\''
	},
	{
		name: 'No Me Gusta',
		image: 'nomegusta',
		description: [
			'When you\'re robbing a bank and there\'s only a toast in the deposit box.'
		],
		collection: 'Normal (Achievement)',
		type: 'normal',
		unlock: '',
		cost: 'Unlocked via \'Bunnyhopping\''
	},
	{
		name: 'Rageface',
		image: 'rageface',
		description: [
			'Dodging a cloaker kick and your buddy gets hit. Lol.'
		],
		collection: 'Normal (Achievement)',
		type: 'normal',
		unlock: '',
		cost: 'Unlocked via \'I Never Asked For This\''
	},
	{
		name: 'Greedy the Elf',
		image: 'greedy_the_elf',
		description: [
			'Santa\'s elves have a tough job. No medical, dental and they endure the whip of Mrs. Claus, but at least they have these fucking sweet hats.'
		],
		collection: 'Normal (Achievement)',
		type: 'normal',
		unlock: '',
		cost: 'Unlocked via \'Pumped Up and Jolly\''
	},
	{
		name: 'Rudelf',
		image: 'rudeolph',
		description: [
			'Houston wore these at the Payday crews\' Christmas party until Hoxton told him he \'looked a proper tit\'. Ignore Hox. Embrace the spirit of Christmas.'
		],
		collection: 'Normal (Achievement)',
		type: 'normal',
		unlock: '',
		cost: 'Unlocked via \'Euro Bag Simulator\''
	},
	{
		name: 'Cloaker-san',
		image: 'mad_goggles',
		description: [
			'It\'s not only the American government that uses specially trained operatives for infiltration missions. Japan has their own unit called the Anbu, and while this mask is only a prototype, it\'s very similar to the actual thing they use.',
			'Activate Night Vision Mode by holding down the Fire Mode button.'
		],
		collection: 'Normal (Achievement)',
		type: 'normal',
		unlock: '',
		cost: 'Unlocked via \'Ghost Run\''
	},
	{
		name: 'Zero 68',
		image: 'mad_mask',
		description: [
			'Inspired by the immensely popular anime Zero 68, this mask is modeled after the helmet of the cyborg-ninja hero of the show.'
		],
		collection: 'Normal (Achievement)',
		type: 'normal',
		unlock: '',
		cost: 'Unlocked via \'The Ground Is Too Cold\''
	},
	{
		name: 'Augmentation',
		image: 'half_mask',
		description: [
			'The future is now. This special mouthpiece is believed to be developed for soldiers of the future, acting not only as a gasmask but also give the wearer the ability to breathe under water. Unfortunately, this one seems broken, but it still looks cool.'
		],
		collection: 'Normal (Achievement)',
		type: 'normal',
		unlock: '',
		cost: 'Unlocked via \'The Pacifist\''
	},
	{
		name: 'Safety First',
		image: 'visor',
		description: [
			'A scientist inspired by the virtual-reality sex scene in Demolition Man made his own attempt at building a device where no physical contact would actually be needed when performing intercourse. The experiment was an utter failure but a few of the prototypes still exist.'
		],
		collection: 'Normal (Achievement)',
		type: 'normal',
		unlock: '',
		cost: 'Unlocked via \'Crazy Ivan\''
	},
	{
		name: 'Paycheck Chains',
		image: 'moon_paycheck_chains',
		description: [
			'Paycheck Chains longs to be completely bonkers. But truth be told, behind that mask he\'s just a regular guy trying to make an indecent living. When trying to push his normal self into craziness, he took a poodle hostage during a robbery when a police'
		],
		collection: 'Normal (Achievement)',
		type: 'normal',
		unlock: '(sic) showed up. What crazy person would do that, right? But he picked the wrong vicious mongrel to mess with. The dog ended up biting everyone in the crew before they managed to escape the beast. News report(sic) after the robbery claimed the dog showed symptoms of rabies. Maybe Paycheck Chains will finally become as crazy as he wants to be...',
		cost: 'Unlocked via \'Imitations\''
	},
	{
		name: 'Paycheck Dallas',
		image: 'moon_paycheck_dallas',
		description: [
			'Paycheck Dallas finally made the decision to stop using black plastic bags for concealment. He gathered the nerve to order a real Dallas-mask to honor his idol, but that online printing service didn\'t exactly deliver the real deal... Even so, with the mask, he\'s trying to step up his game and convinced the Paycheck gang to raid a china shop. The CCTV footage shows that Paycheck Dallas accidentally broke the biggest vase while storming in. That made him apologize to the owner, grabb'
		],
		collection: 'Normal (Achievement)',
		type: 'normal',
		unlock: '(sic) all small changes(sic) from the register and run for the door. Probably blushing like a tomato behind that smiling neon mask.',
		cost: 'Unlocked via \'Imitations\''
	},
	{
		name: 'Alces',
		image: 'cmt_01',
		description: [
			'Make the hunted become the hunter and stagger your way through any heist with these impressive horns.'
		],
		collection: 'Normal (Achievement)',
		type: 'normal',
		unlock: '',
		cost: 'Unlocked via \'All the Gold in Brooklyn\''
	},
	{
		name: 'Canis Lupus',
		image: 'cmt_02',
		description: [
			'Blow down the bank vaults and scare the crap out of all the little pigs with this mask.'
		],
		collection: 'Normal (Achievement)',
		type: 'normal',
		unlock: '',
		cost: 'Unlocked via \'All the Gold in Brooklyn\''
	},
	{
		name: 'Felis Lynx',
		image: 'cmt_03',
		description: [
			'Never come between a cat and his prey, or a heister and his loot!'
		],
		collection: 'Normal (Achievement)',
		type: 'normal',
		unlock: '',
		cost: 'Unlocked via \'Obsessive Opening\''
	},
	{
		name: 'Ursus Maritimus',
		image: 'cmt_04',
		description: [
			'Fight global warming with a mighty roar while wearing this magnificent face covering.'
		],
		collection: 'Normal (Achievement)',
		type: 'normal',
		unlock: '',
		cost: 'Unlocked via \'Obsessive Opening\''
	},
	{
		name: 'Baba Yaga',
		image: 'baba_yaga',
		description: [
			'Occasionally villainous, always mysterious. The Baba Yaga stalks the dark forests of Slavic myth. She flies around in a mortar, wields a pestle and lives in a hut that stomps about on giant chicken legs.'
		],
		collection: 'Normal (CrimeFest 2015)',
		type: 'normal',
		unlock: '',
		cost: 'Free'
	},
	{
		name: 'Russian Hat',
		image: 'rus_hat',
		description: [
			'The world would be very different were it not for the howling, freezing Russian winter. Napoleon and Hitler both learned this. History could be very different if they only packed a warm hat.'
		],
		collection: 'Normal (CrimeFest 2015)',
		type: 'normal',
		unlock: '',
		cost: 'Free'
	},
	{
		name: 'Sputnik',
		image: 'sputnik',
		description: [
			'Despite being just a tiny, beeping sphere, the original Sputnik sent political shock-waves across 1950\'s Washington. Send some criminal shock-waves around the capital with this vintage-yet-pimped version.'
		],
		collection: 'Normal (CrimeFest 2015)',
		type: 'normal',
		unlock: '',
		cost: 'Free'
	},
	{
		name: 'Tiara',
		image: 'tiara',
		description: [
			'Okay, it doesn\'t hide your face and it is certainly not going to stop any bullets whizzing your way....but, damn. You\'re going to look like the belle of the ball wearing Mrs Volkov\'s wedding tiara.'
		],
		collection: 'Normal (CrimeFest 2015)',
		type: 'normal',
		unlock: '',
		cost: 'Free'
	},
	{
		name: 'Vlad Armor',
		image: 'vlad_armor',
		description: [
			'\'Hey! Payday clowns! Vlad here with a little something from the Motherland. I wore this beautiful heavy bastard all through my days in Donetsk. It ain\'t pretty like your delicate American masks, but it kept me pretty!\''
		],
		collection: 'Normal (CrimeFest 2015)',
		type: 'normal',
		unlock: '',
		cost: 'Free'
	},
	{
		name: 'Le Castle Vania',
		image: 'lcv',
		description: [
			'It\'s modern, dynamic and a real crowd-pleaser. It\'s sleek, slick and totally stylish. It\'s both the music of Le Castle Vania, and his mask.'
		],
		collection: 'Normal (CrimeFest 2015)',
		type: 'normal',
		unlock: '',
		cost: 'Free'
	},
	{
		name: 'Eggian',
		image: 'eggian',
		description: [
			'In \'Xenogogs\', this creature embodied fear itself, as it tore its way from the butt of Troy Templeton during that scene.'
		],
		collection: 'Normal (CrimeFest 2015)',
		type: 'normal',
		unlock: '',
		cost: 'Free'
	},
	{
		name: 'Fatboy',
		image: 'fatboy',
		description: [
			'It\'s the full-cheeked, pink, healthy face that represents the wonderful, magical alchemy of deep-fried dough and sugar found in the lobby of theaters across the States.'
		],
		collection: 'Normal (CrimeFest 2015)',
		type: 'normal',
		unlock: '',
		cost: 'Free'
	},
	{
		name: 'Oliver',
		image: 'oliver',
		description: [
			'\'And the nominees for The Greatest Heisters In The World are.....\''
		],
		collection: 'Normal (CrimeFest 2015)',
		type: 'normal',
		unlock: '',
		cost: 'Free'
	},
	{
		name: 'Pirate',
		image: 'pirate_skull',
		description: [
			'In \'Buccaneers Ahoy!\', these swashbuckling undead heisters terrorized the treasure-laden galleons of the Caribbean for years, proving forever that....pirates arrrrrrrrrrrr cool.'
		],
		collection: 'Normal (CrimeFest 2015)',
		type: 'normal',
		unlock: '',
		cost: 'Free'
	},
	{
		name: 'Groucho',
		image: 'groucho_glasses',
		description: [
			'A perfect disguise doesn\'t have to mean dying your hair, changing your iris and burning off your fingerprints. Sometimes looking obviously strange makes people uncomfortable enough to look away and pay you no mind.'
		],
		collection: 'Normal (CrimeFest 2015)',
		type: 'normal',
		unlock: '',
		cost: 'Free'
	},
	{
		name: 'Tinted Love',
		image: 'glasses_tinted_love',
		description: [
			'Murder, extortion, violence, destruction, drugs, guns, and theft. These are all crimes associated with Vlad, but none are as great as his fashion sense.'
		],
		collection: 'Normal (CrimeFest 2015)',
		type: 'normal',
		unlock: '',
		cost: 'Free'
	},
	{
		name: 'Al Capone',
		image: 'gti_al_capone',
		description: [
			'The original mobster that really made the criminal way of life something to strive for. A given member of the PAYDAY crew if he were alive today. But now you can at least cosplay him, making the police scared as they think they’ve seen a ghost.'
		],
		collection: 'Normal (Hoxton\'s Housewarming Party)',
		type: 'normal',
		unlock: '',
		cost: 'Free'
	},
	{
		name: 'Charles \'Lucky\' Luciano',
		image: 'gti_bugsy',
		description: [
			'Considered the \'father of modern organized crime\'. Not clear why he’s nicknamed \'Lucky\', but he did managed to get arrested 25 times, but never spent one day in jail. And he survived a throat slashing as he refused to join another mob. Either way, he’s a true inspiration.'
		],
		collection: 'Normal (Hoxton\'s Housewarming Party)',
		type: 'normal',
		unlock: '',
		cost: 'Free'
	},
	{
		name: 'George \'Bugs\' Moran',
		image: 'gti_lucky_luciano',
		description: [
			'The rival of Al Capone. Two men battling it out as the prohibition era turned booze into gold for anyone who could get their hands on some bottles of whiskey. Capone even tried gunning him down in the infamous Saint Valentine’s Day Massacre. But he failed.'
		],
		collection: 'Normal (Hoxton\'s Housewarming Party)',
		type: 'normal',
		unlock: '',
		cost: 'Free'
	},
	{
		name: 'Stephanie \'Madame\' St. Clair',
		image: 'gti_madame_st_claire',
		description: [
			'This is one tough cookie. The criminal part of St. Clair was born as she went through hell one dark night. After that, she dove deep into the shady world of illegality. But she was also an advocate for civil rights and police corruption. Like a modern day, twisted version of Robin Hood one might say.'
		],
		collection: 'Normal (Hoxton\'s Housewarming Party)',
		type: 'normal',
		unlock: '',
		cost: 'Free'
	},
	{
		name: 'Commando',
		image: 'nyck_beret',
		description: [
			'Chains had this beret custom made in preparation for a mercenary operation in West Africa. What he did while wearing it is something he won’t talk about, though.'
		],
		collection: 'Normal (Hoxton\'s Housewarming Party)',
		type: 'normal',
		unlock: '',
		cost: 'Free'
	},
	{
		name: 'Dawn Patrol',
		image: 'nyck_ace',
		description: [
			'Way back in the day, on a secret and highly dangerous mercenary mission in Southeast Asia, Chains acquired this old US Army helmet. No one knows who the previous owner was.'
		],
		collection: 'Normal (Hoxton\'s Housewarming Party)',
		type: 'normal',
		unlock: '',
		cost: 'Free'
	},
	{
		name: 'Martial Law',
		image: 'nyck_cap',
		description: [
			'This is an old souvenir that Chains keeps as a memory of two long, boring months spent in Central America doing VIP security after an armed coup. Effectively, it reminds him of the kind of military monotony that made him leave mercenary life behind.'
		],
		collection: 'Normal (Hoxton\'s Housewarming Party)',
		type: 'normal',
		unlock: '',
		cost: 'Free'
	},
	{
		name: 'Pickle Face',
		image: 'nyck_pickle',
		description: [
			'Lean, mean, green killing machine. The perfect mask to wear when you’re in a pickle and need to make like a banana and split. Be water, my friend.'
		],
		collection: 'Normal (Hoxton\'s Housewarming Party)',
		type: 'normal',
		unlock: '',
		cost: 'Free'
	},
	{
		name: 'The Awkward Seal',
		image: 'urf_seal',
		description: [
			'That moment when you\'re going to finish off a Dozer but when you pull the trigger you\'re out of ammo. Or that moment when you\'re throwing the last bag straight into the sea. Or that moment when other robbers compliment your mask but you didn\'t put any effort into it. Or that moment when someone is repairing the drill at the same time as you.'
		],
		collection: 'Normal (Hoxton\'s Housewarming Party)',
		type: 'normal',
		unlock: '',
		cost: 'Free'
	},
	{
		name: 'Black Beanie',
		image: 'bny_03',
		description: [
			'Most robbers choose this snug, concealing headwear to help them blend in with the night. Unfortunately it won\'t do you much good to conceal yourself carrying all that equipment.'
		],
		collection: 'Normal (April Fools)',
		type: 'normal',
		unlock: '',
		cost: 'Free'
	},
	{
		name: 'Green Beanie',
		image: 'bny_02',
		description: [
			'A murky green that adds a touch of subtle mystery to your profile. The FBI will appreciate your fondness for their own green uniformed team. Not that it won\'t stop them firing on you openly anyway!'
		],
		collection: 'Normal (April Fools)',
		type: 'normal',
		unlock: '',
		cost: 'Free'
	},
	{
		name: 'Navy Beanie',
		image: 'bny_01',
		description: [
			'This fetching number will make you the talk of the town. You\'ll guaranteed'
		],
		collection: 'Normal (April Fools)',
		type: 'normal',
		unlock: '(sic) to hear things like: \'SEND IN THE TAZERS!\', \'THIS IS THE POLICE, COME OUT WITH YOUR HANDS UP!\', or \'WHO ARE THESE GUYS, EX-MILITARY?!\'',
		cost: 'Free'
	},
	{
		name: 'Red Beanie',
		image: 'bny_04',
		description: [
			'This supposedly \'three million dollar hat\' is either soaked in the blood of your enemies, or was just made with some red woolen material. Just wash it after each heist!'
		],
		collection: 'Normal (April Fools)',
		type: 'normal',
		unlock: '',
		cost: 'Free'
	},
	{
		name: 'Chains, The Weapons Expert',
		image: 'toon_03',
		description: [
			'When there\'s only one copy of something left in the world, it becomes priceless. Know what you can do, and what others can do better. Get the job done. Don\'t get carried away by jealousy: that\'s fear talking. Fear brings you down. It doesn\'t come from love. When you really love someone, you trust them. Trust them enough to not get mean over priceless things.'
		],
		collection: 'Normal (April Fools)',
		type: 'normal',
		unlock: '',
		cost: 'Free'
	},
	{
		name: 'Dallas, The Chief',
		image: 'toon_01',
		description: [
			'Some people expect a free ride through life, cruising on good looks and luck. The world doesn\'t work that way, even if it sometimes looks like it. Talent is just the start; it takes education, dedication, determination. As a leader, you gotta make up your own mind. Respect your decisions, and others will too.'
		],
		collection: 'Normal (April Fools)',
		type: 'normal',
		unlock: '',
		cost: 'Free'
	},
	{
		name: 'Hoxton, The Infiltrator',
		image: 'toon_04',
		description: [
			'The friends you have right now, may not be all the friends you\'ll ever need. Don\'t miss out on a future gain by keeping friends away. It\'s easy to get lost in the desert. One wrong turn is all it takes. And when you do, those new friends just might be your ticket to an oasis.'
		],
		collection: 'Normal (April Fools)',
		type: 'normal',
		unlock: '',
		cost: 'Free'
	},
	{
		name: 'Wolf, The Maniac',
		image: 'toon_02',
		description: [
			'Knowing when not to quit is harder than knowing when to throw in the towel. Don\'t get sidetracked by vanity or foolish pride. Sometimes, you get so wrapped up in a problem that you don\'t see what the problem really is. It gets everyone in a lot of trouble. Bad trouble. So do what\'s right, and you can\'t go wrong.'
		],
		collection: 'Normal (April Fools)',
		type: 'normal',
		unlock: '',
		cost: 'Free'
	},
	{
		name: 'Byrne',
		image: 'mp2_03',
		description: [
			'Byrne is gone. He\'s our koala and our \'pet\'. But we don\'t want him back. He\'s boring and tedious and all he does is eat eucalyptus leaves. And we mean like ALL day. He doesn\'t like when you touch or even talk to him. So now he\'s gone and we wanna keep it that way. If you find him (he looks like a douchebag pet) you can keep him or whatever. Consider this a warning of boredom.'
		],
		collection: 'Normal (The Search for Kento)',
		type: 'normal',
		unlock: '',
		cost: 'Free'
	},
	{
		name: 'Fluffedup',
		image: 'mp2_01',
		description: [
			'Our darling Fluffedup is gone. He\'s 95 years old, and part of our family. Fluffedup is a happy little individual who\'s absolutely not been trying to throw himself into the blender or off the roof several times. We just want to keep him forever, and never let him go. So it\'s super important that we get him back to us, to our home where he lives and loves and absolutely doesn\'t hate.'
		],
		collection: 'Normal (The Search for Kento)',
		type: 'normal',
		unlock: '',
		cost: 'Free'
	},
	{
		name: 'Stoibs',
		image: 'mp2_02',
		description: [
			'Stoibs is a bit frantic and \'speedy\'. He ran away last tuesday night and we would be glad to get him back. We have had a hard time finding a chinchilla with a good pedigree. So for us to start over again with a new one, feeding him corn to get him fat and tender will be tedious. If you find him, we\'ll invite you to dinner where we enjoy Stoibs!'
		],
		collection: 'Normal (The Search for Kento)',
		type: 'normal',
		unlock: '',
		cost: 'Free'
	},
	{
		name: 'Tempy',
		image: 'mp2_04',
		description: [
			'Tempy is our tame lion. He\'s been away for 2 weeks now and we miss him. Tempy loves all kind of cuddle, as long as it\'s done by us. If you spot Tempy: do not approach him in any way. Please tell us where you\'ve seen him. But you will get mutilated if he gets close. Other than that, he\'s a doll and loves sleeping in the sun. Also don\'t let him see any kids...that doesn\'t end well.'
		],
		collection: 'Normal (The Search for Kento)',
		type: 'normal',
		unlock: '',
		cost: 'Free'
	},
	{
		name: 'Keelhauled Alex',
		image: 'amp_02',
		description: [
			'Every ship come bearing tales of ghost. Restless phantoms seen by tired spotters late at night. Everything from Krakens to mermaids. But the tale of Keelhauled Alex is maybe one of the most feared. Alex had been stealing food during a long sail out at sea. As he was caught, he was sentenced to be keelhauled. Not a serious crime, but a serious punishment. But as Alex was beneath the boat, another ship opened fire, and Alex was forgotten on the bottom of the ship. As the dust settled, his corpse was thrown into the depths. But ever since then, Keelhauled Alex walks ships at night, staring down everyone from captains to simple deck hands. It is said that he can gaze into your soul and devour it.'
		],
		collection: 'Normal (The Search for Kento)',
		type: 'normal',
		unlock: '',
		cost: 'Free'
	},
	{
		name: 'Nilam',
		image: 'amp_03',
		description: [
			'Nilam grew up among buccaneers, pirates and corsairs. She knew rum before she could speak, and held a sword before she could walk. Nilam was without family, and instead she found the nomadic lifestyle of a pirate her destiny. She was swift with a blade and few could match her in combat. All she sought was the same respect her peers got, but this was a world ruled by men. Finally Nilam had reached her limit. Those who wronged her were \'sentenced\' by getting their throats slit. Her reputation preceded her, and harbours feared the bloodshed she brought with her when her ship \'Verdict\' came sailing in.'
		],
		collection: 'Normal (The Search for Kento)',
		type: 'normal',
		unlock: '',
		cost: 'Free'
	},
	{
		name: 'One-Eyed Jessicah',
		image: 'amp_04',
		description: [
			'With two eyes, Jessicah would never have been famous. After a shipwreck, she managed to swim to a small islet. Circled by a shark, with no rescue in sight, she was caught. With only a broken knife, her only choice was to kill the shark, so that she could safely swim to shore. But she needed a decoy, a lure so she could surprise the shark. The loss of a finger to toe would make swimming difficult, so instead, she scooped out one of her eyeballs and threw the bloody mess in the water. Then she dove in.'
		],
		collection: 'Normal (The Search for Kento)',
		type: 'normal',
		unlock: '',
		cost: 'Free'
	},
	{
		name: 'Schneider',
		image: 'amp_01',
		description: [
			'One of the most brutal and ruthless pirates to ever exist. But also one of the most unknown. Just the way Schneider wanted it. Instead, Schneider\'s moniker \'the Devil\' was much more well known. He found it more profitable if nobody actually knew his face. But tales of how the \'devil\' sailed the seven seas traveled among bars in the Caribbean. To \'spot the Devil on the horizon\' is a common saying whe someone had disappeared out at sea. But the truth was that Schneider had forever buried them in a watery grave.'
		],
		collection: 'Normal (The Search for Kento)',
		type: 'normal',
		unlock: '',
		cost: 'Free'
	},
	{
		name: 'Kurgan\'s Gas Mask',
		image: 'jfr_03',
		description: [],
		collection: 'Normal (Aldstone\'s Heritage)',
		type: 'normal',
		unlock: 'Kurgan doesn\'t wear the gas-mask to keep the fumes of war out. He wears it to keep the flames of fury in. Betrayed by his own side, Kurgan barely survived an ambush by armored flamers. Inside the mask, there is only the smell of his own immolated flesh, a constant reminder to trust no-one.',
		cost: 'Unlocked through Side Job'
	},
	{
		name: 'Rivet\'s Bandana',
		image: 'jfr_04',
		description: [],
		collection: 'Normal (Aldstone\'s Heritage)',
		type: 'normal',
		unlock: 'Rivet is American, and Americans value tradition. From the office of the President, to the lowliest scum-sucker in the land, tradition matters. So if you\'re going to stick a gun in a chump\'s face and demand they \'hand it over\' you better damn well know your history. Like Jesse James, like Billy The Kid,(sic) you wear a bandana.',
		cost: 'Unlocked through Side Job'
	},
	{
		name: 'Sterling\'s Beret',
		image: 'jfr_01',
		description: [
			'It would be lovely to think '
		],
		collection: 'Normal (Aldstone\'s Heritage)',
		type: 'normal',
		unlock: 'Sterling earned the beret and badge through hard-training and combat. The truth, however, is that he saw how it impressed a couple of young fillies at the Officers Club. An invitation to step outside, a few dirty punches and a knocked out Colonel later, and Sterling had his very own red beret. And a couple of fillies. Smashing!',
		cost: 'Unlocked through Side Job'
	},
	{
		name: 'Wolfgang\'s Cap',
		image: 'jfr_02',
		description: [
			'This cap may look like a normal, standard-issue M43 field cap. And you may think such humble headgear is an unusual choice for a man as vain as '
		],
		collection: 'Normal (Aldstone\'s Heritage)',
		type: 'normal',
		unlock: 'Wolfgang. But this cap holds special meaning for him. It may surprise you that Wolfgang can truly love. Pinned inside is a picture of his beloved. For whom he fights the good fight.',
		cost: 'Unlocked through Side Job'
	},
	{
		name: 'Retro Chains',
		image: 'cmo_04',
		description: [
			'Combat and shooter games that simulate intense situations between players is a great way to keep up your skills in between jobs. Chains likes games that train your situational awareness and award skillfull'
		],
		collection: 'Normal (Locke and Load)',
		type: 'normal',
		unlock: '(sic) play by gaining the upperhand in a fight.',
		cost: 'Free'
	},
	{
		name: 'Retro Dallas',
		image: 'cmo_01',
		description: [
			'A good tactical game is the perfect way to prep before a big heist. Dallas prefers to kick-start his strategic mind with something difficult and calculating where you need to manage units and resources to achieve victory.'
		],
		collection: 'Normal (Locke and Load)',
		type: 'normal',
		unlock: '',
		cost: 'Free'
	},
	{
		name: 'Retro Hoxton',
		image: 'cmo_02',
		description: [
			'Solving logic puzzles as a brain teaser is a great way to unwind after some intense criminal activity. Hoxton likes games that lets'
		],
		collection: 'Normal (Locke and Load)',
		type: 'normal',
		unlock: '(sic) him wrap his head around a problem and figure it out one step at a time with the clues given.',
		cost: 'Free'
	},
	{
		name: 'Retro Wolf',
		image: 'cmo_03',
		description: [
			'Violent games help Wolf getting into the mood'
		],
		collection: 'Normal (Locke and Load)',
		type: 'normal',
		unlock: '(sic) for a heist. The more blood, gore and carnage the better. He prefers games that test your reaction and speed.(sic) Games where every second counts for your survival against a nearly endless horde of enemies.',
		cost: 'Free'
	},
	{
		name: 'Z.A.M.S Helmet',
		image: 'mmj',
		description: [
			'Classic gear can be a wonderful thing. The mindset of a heroic thrill-seeker riding a 200BHP steel horse has many things in common with a heister that are not obvious at first glance- the aesthetic value of a piece of custom headgear being one of them!'
		],
		collection: 'Normal (Locke and Load)',
		type: 'normal',
		unlock: '',
		cost: 'Free'
	},
	{
		name: 'Rhubarb',
		image: 'kwm',
		description: [
			'A tribute to our legendary adventurer [MANY GUN] CLOVERAPTOR- solver of mysteries and bringer of The Mega Death! Giving up a dream of being a banker, he faced his destiny and faced the Cop Wizard and his minions, the Law Elementals. Who knows if it was his own will, or his pushy Crime Dad, that allowed him to prevail, but we will be forever grateful for his service.',
			'OVERKILL Salutes You!'
		],
		collection: 'Normal (Locke and Load)',
		type: 'normal',
		unlock: '',
		cost: 'Free'
	},
	{
		name: 'PNV - BriteNite',
		image: 'flm',
		description: [
			'On the one-thousand-and-first night, there was no light. But neither was it needed, for legends tell of an unruly rogue, who donned a visage that would allow all to be seen.',
			'Activate Night Vision Mode by holding down the Fire Mode button.'
		],
		collection: 'Normal (Spring Break 2018)',
		type: 'normal',
		unlock: 'THIS IS A SPRING BREAK 2018 ITEM!',
		cost: 'Free'
	},
	{
		name: 'Boxey',
		image: 'sdm_02',
		description: [
			'Old school street smarts and butch toughness is what you get here. A no nonsense get-the-job-done personality. You won\'t find a more devoted guard for your loot than this fellow.'
		],
		collection: 'Normal (Spring Break 2018)',
		type: 'normal',
		unlock: 'THIS IS A SPRING BREAK 2018 ITEM!',
		cost: 'Free'
	},
	{
		name: 'Crazy Lou',
		image: 'sdm_04',
		description: [
			'Don\'t let the small frame and disheveled fur fool you. This little guy\'s piercing eyes can intimidate just about anyone, and woe betide any who dares steal something while he\'s on watch.'
		],
		collection: 'Normal (Spring Break 2018)',
		type: 'normal',
		unlock: 'THIS IS A SPRING BREAK 2018 ITEM!',
		cost: 'Free'
	},
	{
		name: 'Frou Frou',
		image: 'sdm_03',
		description: [
			'With her charming, floppy ears, Frou Frou is no timid Afghan Hound. Sharp and witty, she\'s the ideal companion to cover your face with on those heists that require brains as well as cunning.'
		],
		collection: 'Normal (Spring Break 2018)',
		type: 'normal',
		unlock: 'THIS IS A SPRING BREAK 2018 ITEM!',
		cost: 'Free'
	},
	{
		name: 'Klaus',
		image: 'sdm_01',
		description: [
			'Klaus isn\'t a particularly smart dog, but what he lacks in brains, he makes up for in heart, and is always ready to share his bones with the rest of the pack.'
		],
		collection: 'Normal (Spring Break 2018)',
		type: 'normal',
		unlock: 'THIS IS A SPRING BREAK 2018 ITEM!',
		cost: 'Free'
	},
	{
		name: 'Bird Brain',
		image: 'xm20_owl',
		description: [
			'This mask has no signature inside, implying that it was not crafted by Eduardo Maquevera himself, but by one of his apprentices.'
		],
		collection: 'Normal (Little Heisters\' Holiday!)',
		type: 'normal',
		unlock: 'THIS IS A CHRISTMAS 2020 UPDATE ITEM!',
		cost: 'Free'
	},
	{
		name: 'Hyena Two-Face',
		image: 'xm20_dog',
		description: [
			'Accompanying this mask was a hand-written letter by the maker, Eduardo Maquevera. In it, he explain'
		],
		collection: 'Normal (Little Heisters\' Holiday!)',
		type: 'normal',
		unlock: 'THIS IS A CHRISTMAS 2020 UPDATE ITEM!',
		cost: 'Free'
	},
	{
		name: 'Mad Cat',
		image: 'xm20_jaguar',
		description: [
			'Buluc\'s henchmen demanded that real leopard skin be used to craft this mask, but master mask maker Eduardo Maquevera instead went out of his way to fake it. They never noticed the difference!'
		],
		collection: 'Normal (Little Heisters\' Holiday!)',
		type: 'normal',
		unlock: 'THIS IS A CHRISTMAS 2020 UPDATE ITEM!',
		cost: 'Free'
	},
	{
		name: 'Mayan Mosaic Death',
		image: 'xm20_serpent',
		description: [
			'This mask was made by master mask maker Eduardo Mauqevera, in his San Diego workshop. A craftsman of true renown, he supplies much of the film industry with masks and props.'
		],
		collection: 'Normal (Little Heisters\' Holiday!)',
		type: 'normal',
		unlock: 'THIS IS A CHRISTMAS 2020 UPDATE ITEM!',
		cost: 'Free'
	},
	{
		name: 'Relic Mask of the Body',
		image: 'msq_02',
		description: [
			'This mask was found, in the possession of an elderly farmer, whose family had it for generations. When he refused to sell it, Buluc\'s henchmen, in an act of utter cruelty, burned down his farm and livelihood, thereby forcing his hand. Hopefully, future owners of this historical relic will fare better, and act less barbarically.'
		],
		collection: 'Normal (Little Heisters\' Holiday!)',
		type: 'normal',
		unlock: 'THIS IS A CHRISTMAS 2020 UPDATE ITEM!',
		cost: 'Free'
	},
	{
		name: 'Relic Mask of the Mind',
		image: 'msq_04',
		description: [
			'Buluc\'s people found this mask while diving in an underwater Mayan ruin off the coast of Mexico, in search of precious relics for his collection. Rumor has it that his henchman Raul, who was on the boat, pushed the divers so hard that a couple of them died.'
		],
		collection: 'Normal (Little Heisters\' Holiday!)',
		type: 'normal',
		unlock: 'THIS IS A CHRISTMAS 2020 UPDATE ITEM!',
		cost: 'Free'
	},
	{
		name: 'Relic Mask of the Soul',
		image: 'msq_03',
		description: [
			'This is the second of Buluc\'s collection of masks to be found in an underwater ruin of Mayan origin. It too was recovered at great cost, and the sole survivor of the expedition to retrieve it claims that it\'s cursed. Buluc gives no regard to such notions, nor to the loss of people in his employ. The wreck of the small wooden boat used to retrieve it sits and decays on a beach near Buluc\'s mansion.'
		],
		collection: 'Normal (Little Heisters\' Holiday!)',
		type: 'normal',
		unlock: 'THIS IS A CHRISTMAS 2020 UPDATE ITEM!',
		cost: 'Free'
	},
	{
		name: 'Relic Mask of the Will',
		image: 'msq_01',
		description: [
			'Mucho Mike bought this mask on the black market for Buluc\'s 40th birthday. It was the last one he needed to complete his set. Buluc, in a rare moment of sincere gratitude, granted Mike a promotion, giving him the status of his fourth personal bodyguard and confidant.'
		],
		collection: 'Normal (Little Heisters\' Holiday!)',
		type: 'normal',
		unlock: 'THIS IS A CHRISTMAS 2020 UPDATE ITEM!',
		cost: 'Free'
	},
	{
		name: 'Tormentor',
		image: 'tormentor',
		description: [
			'A smile can hide the most murderous thought, but the eyes can never lie. Reading a person is mostly looking straight into their eyes. What\'s truly terrifying is people who wear their thoughts on their face and within a second it\'s hard for the beholder to suppress a scream.'
		],
		collection: 'Normal (Other)',
		type: 'normal',
		unlock: '',
		cost: 'Free'
	},
	{
		name: 'God Emperor',
		image: 'win_donald_mega',
		description: [
			'Bow down before him.',
			'The Mega 45th mask is an evolved version of the original mask. It symbolises transcendence and catharsis.',
			'Thank you for your support.'
		],
		collection: 'Normal (Other)',
		type: 'normal',
		unlock: 'OVERKILL salutes you!',
		cost: 'Free'
	},
	{
		name: 'The 45th',
		image: 'win_donald',
		description: [
			'Commander-In-Chief, father. Has an ambition to serve this great nation for 8 years. A talkative man, no doubt.',
			'The 45th is one of the most controversial presidents in history. Among criminals however, he remains extremely popular.'
		],
		collection: 'Normal (Other)',
		type: 'normal',
		unlock: '',
		cost: 'Free'
	},
	{
		name: 'Fire Rooster',
		image: 'yor',
		description: [
			'You\'re a reliable firestarter, always on time and always on target. As the new year begins, you will set your sights on that shining gold, the most noble metal of them all. Your motives may be shady, but seven is magnificent and before you know it you\'ll be high-fiving to celebrate that perfect heist. Maybe you\'ll finally get that eight-ball tattoo.'
		],
		collection: 'Normal (Other)',
		type: 'normal',
		unlock: '',
		cost: 'Free'
	},
	{
		name: 'The 46th',
		image: 'biden',
		description: [
			'Politician, Commander-In-Chief, father. Has an ambition to serve this great nation for 8 years.',
			'An opinionated man, no doubt.',
			'The 46th, some say, will bring order to chaos while others hold a very opposing opinion. Among criminals however, he remains extremely popular.',
			'Concept by Roger Mata.'
		],
		collection: 'Normal (Other)',
		type: 'normal',
		unlock: '',
		cost: 'Free'
	},
	{
		name: 'The Skull',
		image: 'skull',
		description: [
			'An exclusive mask representing death and mortality.',
			'Created in the heavens as a gift by the gods to men and women who believed in them early on, who built their shrines and spread their beliefs across the lands.',
			'Thank you for believing in us! We salute you!'
		],
		collection: 'Lootbag DLC',
		type: 'dlc',
		unlock: 'THIS IS A LOOT BAG ITEM!',
		cost: '$6,750'
	},
	{
		name: 'Furious Santa',
		image: 'santa_mad',
		description: [
			'Santa, more known as Santa Claus, Saint Nicholas, Father Christmas and Kris Kringle (?) is a man of epic proportions. Words like legendary, mythical, historical and folkloric best describe this beast of a man.',
			'This particular mask is the Furious Santa mask. It\'s worn by angry internet users and bad children who didn\'t get the presents they wanted.'
		],
		collection: 'A Merry Payday Christmas Soundtrack DLC',
		type: 'dlc',
		unlock: 'THIS IS A XMAS SOUNDTRACK ITEM!',
		cost: '$7,500'
	},
	{
		name: 'Surprised Santa',
		image: 'santa_surprise',
		description: [
			'Santa, more known as Santa Claus, Saint Nicholas, Father Christmas and Kris Kringle (?) is a man of epic proportions. Words like legendary, mythical, historical and folkloric best describe this beast of a man.',
			'This particular mask is the Surprised Santa mask. Who knows why he\'s surprised? Maybe someone stole his sled? Maybe someone stole his reindeers? Maybe he just saw someone rob a bank?'
		],
		collection: 'A Merry Payday Christmas Soundtrack DLC',
		type: 'dlc',
		unlock: 'THIS IS A XMAS SOUNDTRACK ITEM!',
		cost: '$7,500'
	},
	{
		name: 'Tipsy Santa',
		image: 'santa_drunk',
		description: [
			'Santa, more known as Santa Claus, Saint Nicholas, Father Christmas and Kris Kringle (?) is a man of epic proportions. Words like legendary, mythical, historical and folkloric best describe this beast of a man.',
			'This particular mask is the Tipsy Santa mask. You know that type of feeling when you\'re tipsy and are feeling something\'s going on but you aren\'t hammered yet. That\'s tipsy for ya.'
		],
		collection: 'A Merry Payday Christmas Soundtrack DLC',
		type: 'dlc',
		unlock: 'THIS IS A XMAS SOUNDTRACK ITEM!',
		cost: '$7,500'
	},
	{
		name: 'The 37th',
		image: 'nixon',
		description: [
			'Politican, Commander-In-Chief, father. Had an ambition to serve this great nation for 8 years. He wasn\'t a crook, for sure.',
			'The 37th was the only president who resigned from office. Among criminals however, he remains extremely popular.'
		],
		collection: 'Armored Transport DLC',
		type: 'dlc',
		unlock: 'THIS IS AN ARMORED TRANSPORT ITEM!',
		cost: '$10,800'
	},
	{
		name: 'The 42nd',
		image: 'clinton',
		description: [
			'Politican, Commander-In-Chief, father. Served this great nation for 8 years. A ladies man, no doubt.',
			'The 42nd was one of the most peaceful presidents in history. Among criminals however, he remains extremely popular.'
		],
		collection: 'Armored Transport DLC',
		type: 'dlc',
		unlock: 'THIS IS AN ARMORED TRANSPORT ITEM!',
		cost: '$10,800'
	},
	{
		name: 'The 43rd',
		image: 'bush',
		description: [
			'Politican, Commander-In-Chief, father. Served this great nation for 8 years. A wordsmith, no doubt.',
			'The 43rd was one of the most unpopular presidents in history. Among criminals however, he remains extremely popular.'
		],
		collection: 'Armored Transport DLC',
		type: 'dlc',
		unlock: 'THIS IS AN ARMORED TRANSPORT ITEM!',
		cost: '$10,800'
	},
	{
		name: 'The 44th',
		image: 'obama',
		description: [
			'Politican, Commander-In-Chief, father. Had an ambition to serve this great nation for 8 years. A hopeful man, and an award winner at that.',
			'The 44th is one of the most ambitious presidents in history. Among criminals however, he remains extremely popular.'
		],
		collection: 'Armored Transport DLC',
		type: 'dlc',
		unlock: 'THIS IS AN ARMORED TRANSPORT ITEM!',
		cost: '$10,800'
	},
	{
		name: 'Arnold',
		image: 'pitbull',
		description: [
			'Arnold the Bulldog has always been a doge of great ambition.',
			'He wanted to build much body - and he did. He became the biggest doge in his little mountain town and received such prize.',
			'He then moved States, got into office, starred in a couple of weird doge movies called \'The Dogenator\' and \'The Dogenator II - such judgement\'.'
		],
		collection: 'Gage Weapon Pack #01 DLC',
		type: 'dlc',
		unlock: 'THIS IS A GAGE WEAPON PACK #01 ITEM!',
		cost: '$10,500'
	},
	{
		name: 'Chuck',
		image: 'eagle',
		description: [
			'Chuck the Eagle represents everything that is righteous, good and true.',
			'A famous Martial Artist found this huge eagle while he was doing karate in the mountains of Alaska.',
			'They had a fight for several hours but eventually the Martial Artist won. He took the head, made it into a mask and named it after himself.'
		],
		collection: 'Gage Weapon Pack #01 DLC',
		type: 'dlc',
		unlock: 'THIS IS A GAGE WEAPON PACK #01 ITEM!',
		cost: '$10,500'
	},
	{
		name: 'Dolph',
		image: 'goat',
		description: [
			'Dolph the Goat represents natural strength and stone.',
			'It was found by a group of adventurers in a mountain cave in the most northern parts of Sweden.',
			'Legend has it that the god of thunder, Thor, had a chariot that was pulled by two goats. This mask probably has nothing to do with that legend though. That would be crazy.'
		],
		collection: 'Gage Weapon Pack #01 DLC',
		type: 'dlc',
		unlock: 'THIS IS A GAGE WEAPON PACK #01 ITEM!',
		cost: '$10,500'
	},
	{
		name: 'Jean-Claude',
		image: 'panda',
		description: [
			'Jean-Claude the Panda used to be really cool and star in all sorts of crazy stuff.',
			'Sadly, he later became a drug addict and stopped being cool. Because of training however, he managed to get back on track.',
			'Most recently, you could see him do this weird things with two trucks. That shit was fucked up. You should check it out if you haven\'t.'
		],
		collection: 'Gage Weapon Pack #01 DLC',
		type: 'dlc',
		unlock: 'THIS IS A GAGE WEAPON PACK #01 ITEM!',
		cost: '$10,500'
	},
	{
		name: 'Alpha Force',
		image: 'gage_deltaforce',
		description: [
			'4th Domestic Operation Group-force Enforcers-Alpha (4th DOGE-A), popularly ridiculed as Alpha Force, is a U.S. Army component of the Joint Common Operations Command. They\'re reputation is pretty poor and have become a less and less respected force to deal with.',
			'One of the members probably dropped this helmet when he fled from you.'
		],
		collection: 'Gage Weapon Pack #02 DLC',
		type: 'dlc',
		unlock: 'THIS IS A GAGE WEAPON PACK #02 ITEM!',
		cost: '$13,500'
	},
	{
		name: 'Commander Crime',
		image: 'cloth_commander',
		description: [
			'Commander Crime is an American fictional character, a supervillain and the supreme leader of the criminal network C.R.I.M.E. who appears in comic books by OVERKILL Comics.',
			'The character was created by now world renowned writer-editor-artist and professional badminton player Max Elmberg Sjöholm.',
			'Commander Crime made his first appearance in The Amazing Career Criminals: The PAYDAY gang gets a C.R.I.M.E. offer they can\'t refuse!'
		],
		collection: 'Gage Weapon Pack #02 DLC',
		type: 'dlc',
		unlock: 'THIS IS A GAGE WEAPON PACK #02 ITEM!',
		cost: '$13,500'
	},
	{
		name: 'The Gage Blade',
		image: 'gage_blade',
		description: [
			'The Gage Blade is one of Gage\'s own personal favorite ballistic face masks. It will protect your face from one or two 9mm bullets before your head explodes.',
			'Without this mask, Gage wouldn\'t be the wonderful human being he is today.'
		],
		collection: 'Gage Weapon Pack #02 DLC',
		type: 'dlc',
		unlock: 'THIS IS A GAGE WEAPON PACK #02 ITEM!',
		cost: '$13,500'
	},
	{
		name: 'The Troubled War Veteran',
		image: 'gage_rambo',
		description: [
			'The Troubled War Veteran is a mask that Gage has worked on for some time. Back in the Vietnam war Gage met this big-muscled guy who went nuts and started to use a bow instead of modern weapons.',
			'He died pretty early in the war, but for some strange reason Gage couldn\'t forget his face.'
		],
		collection: 'Gage Weapon Pack #02 DLC',
		type: 'dlc',
		unlock: 'THIS IS A GAGE WEAPON PACK #02 ITEM!',
		cost: '$13,500'
	},
	{
		name: 'Criminal Ambitions',
		image: 'tcn',
		description: [
			'A mask only for the most ambitious heister.',
			'Take all the loot, leave nothing behind.'
		],
		collection: 'Poetry Jam DLC',
		type: 'dlc',
		unlock: 'THIS IS A POETRY JAM ITEM!',
		cost: 'Free'
	},
	{
		name: 'Metalhead',
		image: 'metalhead',
		description: [
			'The origin of the Metalhead is unclear.',
			'It looks more of a helmet than a mask. It has spikes pointing out of it and looks very much like a pimped out gas mask made of iron. It\'s unclear if it protects the wearer from any gas or melee weapons however.',
			'It looks pretty rad though.'
		],
		collection: 'Poetry Jam DLC',
		type: 'dlc',
		unlock: 'THIS IS A POETRY JAM ITEM!',
		cost: 'Free'
	},
	{
		name: 'The Optimist',
		image: 'optimist_prime',
		description: [
			'\'Be the change you want to see in the world.\'',
			'That\'s what the Optimist believes.',
			'As the leader of a peaceful group of robots, he feels it is his responsibility to combat rival bands of robots obsessed with negativity and extermination. His prime weapon: rolling out positivity ',
			'through constructive reasoning and unbiased logic.',
			'Or through forced upgrades. Which are compulsory.'
		],
		collection: 'Poetry Jam DLC',
		type: 'dlc',
		unlock: 'THIS IS A POETRY JAM ITEM!',
		cost: 'Free'
	},
	{
		name: 'War Face',
		image: 'surprise',
		description: [
			'You got a war face! AAAAAAAAHH! That\'s a war face, let me see your war face!',
			'...',
			'Bullshit. You didn\'t convince me, let me see your REAL war face!',
			'...Actually, that one\'s pretty good...'
		],
		collection: 'Poetry Jam DLC',
		type: 'dlc',
		unlock: 'THIS IS A POETRY JAM ITEM!',
		cost: 'Free'
	},
	{
		name: 'Asilidae',
		image: 'mantis',
		description: [
			'The Asilidae, also known as robber fly or assassin fly, are powerfully built, bristly flies who are known for their notoriously aggressive predatory habits. They feed on other insects and as a rule, they wait in ambush and catch their prey in flight.'
		],
		collection: 'Gage Sniper Pack DLC',
		type: 'dlc',
		unlock: 'THIS IS A GAGE SNIPER PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Sphodromantis',
		image: 'robberfly',
		description: [
			'The common name for these lovely little fellows is \'praying mantis\'. The reason? It refers to the prayer-like posture where it folds its fore-limbs. More commonly however it\'s refered to as the preying mantis, because of it\'s nature.',
			'Basically, they eat anything they can successfully capture and devour.'
		],
		collection: 'Gage Sniper Pack DLC',
		type: 'dlc',
		unlock: 'THIS IS A GAGE SNIPER PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Tarantula',
		image: 'spider',
		description: [
			'Eight legs strong, tarantula sizes range from as small as a fingernail to as large as a handgun when the legs are fully extended. The name originally comes from the name Lycosa tarantula, a species of wolf spider. Tarantulas generally hunt in trees, on or near the ground. They\'re also popular as pets.'
		],
		collection: 'Gage Sniper Pack DLC',
		type: 'dlc',
		unlock: 'THIS IS A GAGE SNIPER PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Vespula',
		image: 'wasp',
		description: [
			'Two pairs of wings, an ovipositor or stinger, no thickened hairs and a pair of talons. That\'s the wasp for you. Almost every pest insect species has at least one wasp species that preys upon it or parasitizes it. This makes the wasps very important in natural control of their numbers.'
		],
		collection: 'Gage Sniper Pack DLC',
		type: 'dlc',
		unlock: 'THIS IS A GAGE SNIPER PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'The 16th',
		image: 'lincoln',
		description: [
			'Lawyer, Commander-In-Chief, father. Had an ambition to serve this great nation for 8 years.',
			' Consistently ranked by scholars and the public as one of the greatest U.S. presidents of all time.',
			' The 16th is one of the most beloved presidents in history. Among criminals, he remains well respected.'
		],
		collection: 'The Big Bank Heist DLC',
		type: 'dlc',
		unlock: 'THIS IS A BIG BANK HEIST ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'The 18th',
		image: 'grant',
		description: [
			'Soldier, Commander-In-Chief, father. Served this great nation for 8 years.',
			'A protector and a warrior, and a great one at that.',
			'The 18th was one of the most unpopular presidents in history. Among criminals however, he remains extremely popular.'
		],
		collection: 'The Big Bank Heist DLC',
		type: 'dlc',
		unlock: 'THIS IS A BIG BANK HEIST ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'The 1st',
		image: 'washington',
		description: [
			'General of the Armies, Commander-In-Chief,  Founding Father. Served this great nation for 8 years.',
			'The first ever president, and a great one at that.',
			'The 1st was one of the most popular presidents in history and the face of the $1 bill. Among criminals, he remains extremely popular.'
		],
		collection: 'The Big Bank Heist DLC',
		type: 'dlc',
		unlock: 'THIS IS A BIG BANK HEIST ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'The First American',
		image: 'franklin',
		description: [
			'Worls-renowned polymath, author, printer, political theorist, postmaster, scientist, inventor, civic activist, statesman, diplomat, Founding Father.',
			' Titulated as \'The First American\' and the face of the $100 bill.',
			'Among criminals, he remains extremely popular '
		],
		collection: 'The Big Bank Heist DLC',
		type: 'dlc',
		unlock: 'THIS IS A BIG BANK HEIST ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Clint',
		image: 'skullmonkey',
		description: [
			'Clint the black-capped squirrel monkey. Not really a monkey without a name. Just like the real Clint, this monkey doesn\'t fuck around. It minds its own business. Doesn\'t talk unless talked to, knowing that the less it says the stronger it becomes. When it actually tries to say something it ends up screeching because it\'s a FUCKING MONKEY.'
		],
		collection: 'Gage Shotgun Pack DLC',
		type: 'dlc',
		unlock: 'THIS IS A GAGE SHOTGUN PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'John',
		image: 'mandril',
		description: [
			'John the mandrill monkey. Mandrill\'s are closely related to baboons and even more to the drill. Not the kind of drill you use in a bank robbery, but the monkey drill, silly you! John is a monkey known for his sardonic one-liners, include the catch phrase \'unidentified monkey screech\'.'
		],
		collection: 'Gage Shotgun Pack DLC',
		type: 'dlc',
		unlock: 'THIS IS A GAGE SHOTGUN PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Rutger',
		image: 'orangutang',
		description: [
			'Rutger the motherfucking orangutan. If you\'re strolling down the jungle and suddenly face an orangutan, you\'re in trouble. Statistics show that one orangutan is as dangerous as ten hobos with shotguns. You remember that movie about dinosaurs with the big dinosaur in the end saving the kids? Know who killed the dinosaur after the credits? The kids did, but you know who killed the kids? Rutger the motherfucking orangutan did.'
		],
		collection: 'Gage Shotgun Pack DLC',
		type: 'dlc',
		unlock: 'THIS IS A GAGE SHOTGUN PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Steven',
		image: 'silverback',
		description: [
			'Steven the silverback gorilla. Not only is he fucking huge, he\'s strong as hell too. He can break your back by just looking at you. You\'ll be hospitalized for weeks. Not only that, but there\'ll be months of therapy as well. Do you know how hard it is learning to walk again? Want to know what else that is hard? Steven\'s muscles. 22 years ago he worked as a chef on a military ship. Killed everyone in 103 minutes.'
		],
		collection: 'Gage Shotgun Pack DLC',
		type: 'dlc',
		unlock: 'THIS IS A GAGE SHOTGUN PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Black Death',
		image: 'evil',
		description: [
			'Bob Robertson worked at a purple stuff factory. The purple stuff factory was old and in need of reperations. Bob mentioned this to his supervisors but they ignored him. Bob kept on hardly working, playing pre-installed games on his operative system. One day when he was checking out early, cracks started to form in a container filled with purple stuff. Just when he went past, the container burst and Bob was drenched in purple stuff.',
			'When he got out of hospital, he had become a super villain. His face has been purple ever since.'
		],
		collection: 'Gage Assault Pack DLC',
		type: 'dlc',
		unlock: 'THIS IS A GAGE ASSAULT PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Crow Goblin',
		image: 'crowgoblin',
		description: [
			'For the longest time ever no one knew who the real identity behind the Crow Goblin was. Twenty years later people found out, but it was unsatisfactory so they said that that person was an imposter or something. The real Crow Goblin was someone else.',
			'I don\'t want to bore you with the rest of it but the mask looks pretty nice, yeah? It\'s got a purple hat, or maybe it\'s a hoodie, I don\'t know. It sports a pretty cool grin and some thread sewn across its face. I wonder who hides behind the mask though.'
		],
		collection: 'Gage Assault Pack DLC',
		type: 'dlc',
		unlock: 'THIS IS A GAGE ASSAULT PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Professor Wrath',
		image: 'galax',
		description: [
			'Milhouse Anderson worked at a chemical plant handling dangerous chemical waste. As a prank, his friends thought it would be a good idea to lock him up in the room where they kept the dangerous chemical waste. What they didn\'t know was that the dangerous chemical waste was dangerous, and while being locked in for several hours, Milhouse was exposed to high levels of radiation and other bad stuff.',
			'When they finally let him out, he had become a super villain. He\'s been super angry ever since.'
		],
		collection: 'Gage Assault Pack DLC',
		type: 'dlc',
		unlock: 'THIS IS A GAGE ASSAULT PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Volt',
		image: 'volt',
		description: [
			'Being a snoopy lowlife, janitor David Davidson snuck around the military research facility he worked at, looking for something easy to steal. He found a door that he didn\'t have a key for. Curious, he kicked the door open and was instantly attacked by some kind of bright light. Somehow he survived the attack and got superhuman powers.',
			'With his new powers, he called himself Volt.'
		],
		collection: 'Gage Assault Pack DLC',
		type: 'dlc',
		unlock: 'THIS IS A GAGE ASSAULT PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Aubrey',
		image: 'pig',
		description: [
			'Aubrey is a real gun lover.',
			'Large headed and long snouted Aubrey is a master of arms and knows nothing better than to kill using some fine weaponry.',
			'Pigs have pretty small lungs though so Aubrey can\'t run that far.'
		],
		collection: 'Hotline Miami DLC',
		type: 'dlc',
		unlock: 'THIS IS A HOTLINE MIAMI DLC ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Dennis',
		image: 'white_wolf',
		description: [
			'Dennis loves knives.',
			'The gray wolf is one of the best known and well researched animals on the entire planet. It was the first animal and only large carnivore to be domesticated by humans.',
			'Today, there\'s only one third of the population left because of human persecution.'
		],
		collection: 'Hotline Miami DLC',
		type: 'dlc',
		unlock: 'THIS IS A HOTLINE MIAMI DLC ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Graham',
		image: 'rabbit',
		description: [
			'Graham enjoys long walks in the sun.',
			'Rabbits are small mammals that practically can be found anywhere. If confronted by a potential threat, rabbits will instantly freeze and warn others in the warren with powerful thumps on the ground.',
			'When fleeing, they hop in a zig-zag pattern, much like many Counter-Strike players do.'
		],
		collection: 'Hotline Miami DLC',
		type: 'dlc',
		unlock: 'THIS IS A HOTLINE MIAMI DLC ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Rasmus',
		image: 'owl',
		description: [
			'Rasmus has an eye for secrets.',
			'Owls are nocturnal birds of prey. They are known for their large eyes in comparison to their skulls. They can\'t actually move their eyes, they swivel their heads instead and are able to swivel 270 degrees. Shit you didn\'t know, amirite.',
			'\'I don\'t know you!\' \'You\'re no guest of mine!\''
		],
		collection: 'Hotline Miami DLC',
		type: 'dlc',
		unlock: 'THIS IS A HOTLINE MIAMI DLC ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'British Bulldog',
		image: 'churchill',
		description: [
			'Politician, prize winner, owner of many medals and the first honorary citizen of the United States of America. By some it was said that he had a flawed character, saying; \'never had people admired and despised a man simultaneously to the same extent; never had such opposite extremes been combined in the same human being.\''
		],
		collection: 'Gage Historical Pack DLC',
		type: 'dlc',
		unlock: 'THIS IS A GAGE HISTORICAL PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Old Blood and Guts',
		image: 'patton',
		description: [
			'One of the bravest men I saw in the African campaign was on a telegraph pole in the midst of furious fire while we were moving toward Tunis. I stopped and asked him what the hell he was doing up there. He answered, \'Fixing the wire, sir.\' \'Isn\'t it a little unhealthy up there right now?\' I asked. \'Yes sir, but this goddamn wire has got to be fixed.\' I asked, \'Don\'t those planes strafing the road bother you?\' And he answered, \'No sir, but you sure as hell do.\'',
			'Now, there was a real soldier. A real man. A man who devoted all he had to his duty, no matter how great the odds, no matter how seemingly insignificant his duty appeared at the time.'
		],
		collection: 'Gage Historical Pack DLC',
		type: 'dlc',
		unlock: 'THIS IS A GAGE HISTORICAL PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'The Constable',
		image: 'de_gaulle',
		description: [
			'For much between 1940-1969, the Constable was the dominant military and political leader of France. Refusing to accept his government\'s armistice with the German invaders in 1940, he set up his base in London, proclaimed himself the incarnation of France, and created the Free French movement. During the war he rallied the overseas colonies, especially those in Africa, organized the Resistance from abroad, and struggled to gain full recognition from the British and Americans.'
		],
		collection: 'Gage Historical Pack DLC',
		type: 'dlc',
		unlock: 'THIS IS A GAGE HISTORICAL PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'The Red Bear',
		image: 'red_hurricane',
		description: [
			'\'In Soviet Russia, Red Bear kills you.\' No one knows exactly who the Red Bear was; some say he was just a myth, a symbol of the motherland and everything that was strong, combined into one being. Only the stories are known and told again and again. Like that one time, when he killed a bunch of bears and came back home all in red, drenched in blood.'
		],
		collection: 'Gage Historical Pack DLC',
		type: 'dlc',
		unlock: 'THIS IS A GAGE HISTORICAL PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Anubis',
		image: 'anubis',
		description: [
			'The Egyptian jackal-headed god of the afterlife, Anubis sought to protect graves rather than fill them.'
		],
		collection: 'The Diamond Heist DLC',
		type: 'dlc',
		unlock: 'THIS IS A DIAMOND HEIST ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Medusa',
		image: 'medusa',
		description: [
			'A hideous visage, snakes for hair, a petrifying gaze and a hate for men. Her gazing eyes still sends chills down spines… But this is just a mask, right?'
		],
		collection: 'The Diamond Heist DLC',
		type: 'dlc',
		unlock: 'THIS IS A DIAMOND HEIST ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Pazuzu',
		image: 'pazuzu',
		description: [
			'Pazuzu was the king of the wind demons according to ancient Babylonian mythology. Legends also tell of him as a beastial behemoth fighting groups of adventurers in far away lands, and some even say he walked the earth as an immortal warrior in human form.'
		],
		collection: 'The Diamond Heist DLC',
		type: 'dlc',
		unlock: 'THIS IS A DIAMOND HEIST ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'The Cursed One',
		image: 'cursed_crown',
		description: [
			'His name is lost to legend. He might have been a King, or a mighty Sorceror. But even the great are undone by the Diamond.'
		],
		collection: 'The Diamond Heist DLC',
		type: 'dlc',
		unlock: 'THIS IS A DIAMOND HEIST ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Clover',
		image: 'msk_grizel',
		description: [
			'Clover\'s mask represents what Clover both fears and hates most of all - wearing a mask as your normal face. The surgically-shrunken nose, the botox\'d lips and the expression of all-consuming vanity and self-obsession - all are symbols of fear and weakness, twisted into a horrifying parody.'
		],
		collection: 'Clover Character Pack DLC',
		type: 'dlc',
		unlock: 'THIS IS A CLOVER CHARACTER PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Clover Begins',
		image: 'grizel_clean',
		description: [
			'This is a clean version of Clover\'s iconic mask, before it was painted.',
			'Never liked how the original one turned out? This is your chance to change history.'
		],
		collection: 'Clover Character Pack DLC',
		type: 'dlc',
		unlock: 'THIS IS A CLOVER CHARACTER PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Arch Nemesis',
		image: 'arch_nemesis',
		description: [
			'Nemesis, as defined by the dictionary;',
			'1. Something that a person cannot conquer, achieve, etc.: “That Chinese buffet at lunch proved to be my arch-nemesis.”',
			'As defined by Hoxton: “That fuckin’ dozer. He’s my arch-fucking-nemesis. ‘Orrible cunt!”'
		],
		collection: 'PAYDAY 2 Bundle Rewards',
		type: 'dlc',
		unlock: 'THIS IS A GOTY EDITION ITEM!',
		cost: 'Free'
	},
	{
		name: 'The Nun',
		image: 'nun_town',
		description: [
			'A Catholic nun may not seem like the obvious choice for a terrifying mask, unless you know an actual Catholic nun. In which case, you’ll know any notions of gentle, grandmotherly penguins are without merit. These bitter crones are the personification of evil, dishing out thrashings to any young buttocks within reach.'
		],
		collection: 'PAYDAY 2 Bundle Rewards',
		type: 'dlc',
		unlock: 'THIS IS A HEIST BUNDLE ITEM!',
		cost: 'Free'
	},
	{
		name: 'Robo-Arnold',
		image: 'robo_arnold',
		description: [
			'Iconic, time-travelling cyborg star of the ‘Exterminator’ movie series. In the first movie, he was sent to kill the mother of the leader of the future rebellion before she can steal the chip left by her son who was also her father… In the past. Noted for his deadpan delivery of the catchphrase “Await my return”.'
		],
		collection: 'PAYDAY 2 Bundle Rewards',
		type: 'dlc',
		unlock: 'THIS IS A WEAPON BUNDLE ITEM!',
		cost: 'Free'
	},
	{
		name: 'The Butcher from Hell',
		image: 'butcher',
		description: [
			'There are many rumours about the mad butcher from the east, one of them tells of a man who found such pleasure in butchering pigs that he slowly started to look like one.',
			'Working in a butchery as hot as hell itself his skin became disfigured with blisters and cuts, people tell of screams coming from inside... And not just the screams of pigs.'
		],
		collection: 'The Bomb Heists DLC',
		type: 'dlc',
		unlock: 'THIS IS A THE BOMB HEISTS ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Lady Butcher',
		image: 'lady_butcher',
		description: [
			'If you received a dollar every time the Butcher was called a \'witch\', a \'harlot\' or a \'banshee\' by her peers you could earn enough money to buy the entirety of Croatia. Cynical men around her bemoaned the fact that she was female, and felt endangered and distressed at the sight of her meteoric rise in the criminal underground. Keep in mind that the Balkans are not exactly known for their capacity to tolerate anybody who is in any way different, and one can only image the flat-out chauvinism and misogyny she must have dealt with while working with some of the most ruthless criminals every day of her existence. This mask shows how she is seen by both her rivals and her associates. It makes people feel afraid. As they should be.'
		],
		collection: 'The Bomb Heists DLC',
		type: 'dlc',
		unlock: 'THIS IS A THE BOMB HEISTS ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Tech Lion',
		image: 'tech_lion',
		description: [
			'This mask is a modern interpretation of the Egyptian war-god Maahes. Known as the \'Wield of the Knife\', \'Lord of Slaughter\' and \'Avenger of Wrongs\', Maahes punished those who transgressed from the rules of Ma`at - the personification of order and balance. Considered the embodiment of the burning heat of the sun, he was also seen as a protective deity that defended the Pharaoh during battle.',
			'He is usually depicted as lion-headed man carrying a knife wearing the Atef crown, the Solar Disk or is pictured as a lion devouring a victim.'
		],
		collection: 'The Bomb Heists DLC',
		type: 'dlc',
		unlock: 'THIS IS A THE BOMB HEISTS ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'The Doctor',
		image: 'doctor',
		description: [
			'A naso-buccal mask usually associated with hospitals and ambulances. This mask disables the host from spreading airborne viruses by catching the bacteria-laden saliva and mucus that is discharged upon sneezing or coughing. Both doctors and patients wear this, so you should ask yourself: am I the sick or the healthy one? The disease or the cure?',
			'In any case - it\'s fever season, and the only prescription is dead Bulldozers.'
		],
		collection: 'The Bomb Heists DLC',
		type: 'dlc',
		unlock: 'THIS IS A THE BOMB HEISTS ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Dragan',
		image: 'dragan',
		description: [
			'With a background like the one Dragan has, there\'s no surprise he aspires to greatness in the criminal underworld.',
			'His mask represents a lot of his own characteristics, with the clear resemblance to some of the original crew\'s masks that tells of his ability to infiltrate and blend in while still having some features that tells of his unending ruthlessness.',
			'The Croatian checker on the forehead serves as a reminder for both himself and his enemies to be aware that he is not your common western street thug.'
		],
		collection: 'Dragan Character Pack DLC',
		type: 'dlc',
		unlock: 'THIS IS A DRAGAN CHARACTER PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Dragan Begins',
		image: 'dragan_begins',
		description: [
			'This is a clean version of Dragan\'s iconic mask, before it was painted.',
			'Never liked how the original one turned out? This is your chance to change history.'
		],
		collection: 'Dragan Character Pack DLC',
		type: 'dlc',
		unlock: 'THIS IS A DRAGAN CHARACTER PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Alfred',
		image: 'carnotaurus',
		description: [
			'Alfred the Carnotaurus was a very fast dinosaur when he was alive and kicking. His distinctive horns and his muscular neck made him stand out next to all the other dinosaurs. His large head along with his horns working as shock absorbers made him particularly skilled at head butting other dinosaurs in order to show who had the largest prehistoric d-peen.'
		],
		collection: 'The Butcher\'s AK/CAR Mod Pack DLC',
		type: 'dlc',
		unlock: 'THIS IS AN AK/CAR MOD PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Pachy',
		image: 'pachy',
		description: [
			'Pachy the Pachycephalosaurus, meaning thick headed lizard, wasn\'t never that thick headed really. He never took that name for himself, the other dinosaurs gave it to him because they were jealous of his high rolls in intelligence, spirit and wisdom. Having earned a robe and a wizard hat as a second prize at the local prehistoric spelling bee didn\'t make it any better.'
		],
		collection: 'The Butcher\'s AK/CAR Mod Pack DLC',
		type: 'dlc',
		unlock: 'THIS IS AN AK/CAR MOD PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Timothy',
		image: 'triceratops',
		description: [
			'Timothy the Triceratops is one of the most popular dinosaurs at the Jurassic High. He had a huge grudge with Teddy the Tyrannosaurus though. Even though they were massive and lived together during the last epoch of the age of dinosaurs, they couldn\'t find it in them to be friends. Especially not since that one time when they went to that cabin during Spring Break and Teddy and his pals pranked Timothy with that horror movie and the phone call about seven days left before the meteorite would hit. Timothy did not think that was funny at all.'
		],
		collection: 'The Butcher\'s AK/CAR Mod Pack DLC',
		type: 'dlc',
		unlock: 'THIS IS AN AK/CAR MOD PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Vincent',
		image: 'velociraptor',
		description: [
			'Vincent the Velociraptor and his best friend Andreas HÃ¤ll Penninger the Protoceratops were out and about one day in the jungle when they got in a fight. It wasn\'t a big thing really but Vincent just wouldn\'t let it go. Andreas, being the stubborn Protoceratops he was, continued to mouth off to Vincent. Violent fighting ensued and to this day, no one is sure who actually won.'
		],
		collection: 'The Butcher\'s AK/CAR Mod Pack DLC',
		type: 'dlc',
		unlock: 'THIS IS AN AK/CAR MOD PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'General Overkill',
		image: 'the_overkill_mask',
		description: [
			'Ten-shun! Right, listen up, you heisting bastards. You\'re heading into war. You\'re gonna feel the sting of battle. And in war you need a leader. Meet General Overkill. He\'ll be there to make sure you go through those cop bastards like crap through a goose. Dismissed!'
		],
		collection: 'The OVERKILL Pack',
		type: 'dlc',
		unlock: 'THIS IS A OVERKILL PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Mega Chains',
		image: 'chains_glow',
		description: [
			'The Mega Chains mask is an evolved version of the original mask. It symbolises transcendence and catharsis.',
			'Thank you for your support.',
			'OVERKILL salutes you!'
		],
		collection: 'The COMPLETELY OVERKILL Pack',
		type: 'dlc',
		unlock: 'THIS IS A COMPLETELY OVERKILL PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Mega Cthulhu',
		image: 'megacthulhu',
		description: [
			'Somewhere, deep in the oceanic darkness dwells our lord and savior, Cthulhu. Praise be to Him who spares us His giant wrath and blesses us with His mind controlling tenderness. Don\'t eat squids or eternal damnation is yours.',
			'Thank you for your support.',
			'OVERKILL salutes you!'
		],
		collection: 'The COMPLETELY OVERKILL Pack',
		type: 'dlc',
		unlock: 'THIS IS A COMPLETELY OVERKILL PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Mega Dallas',
		image: 'dallas_glow',
		description: [
			'The Mega Dallas mask is an evolved version of the original mask. It symbolises transcendence and catharsis.',
			'Thank you for your support.',
			'OVERKILL salutes you!'
		],
		collection: 'The COMPLETELY OVERKILL Pack',
		type: 'dlc',
		unlock: 'THIS IS A COMPLETELY OVERKILL PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Mega Death Wish',
		image: 'cop_skull',
		description: [
			'We never get why hardcore heisters don\'t just call themselves Death Wishers. Maybe it\'s just too damn cool.',
			'Thank you for your support.',
			'OVERKILL salutes you!'
		],
		collection: 'The COMPLETELY OVERKILL Pack',
		type: 'dlc',
		unlock: 'THIS IS A COMPLETELY OVERKILL PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Mega Doctor Crime',
		image: 'fab_mega_doctor',
		description: [
			'In issue #34 of The Mazing Career Criminals, we saw the assumed death of Doctor Crime, but fear not - the Doctor is back! With a new power armor and a fancy new mask, he\'s set to take out his vengeance against our unknowing heroes.',
			'Thank you for your support.',
			'OVERKILL salutes you!'
		],
		collection: 'The COMPLETELY OVERKILL Pack',
		type: 'dlc',
		unlock: 'THIS IS A COMPLETELY OVERKILL PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Mega Gage Blade',
		image: 'cop_mega_gage_blade',
		description: [
			'The original Gage Blade is one of Gage\'s own personal favorite ballistic face masks. With the Mega Gage Blade, he\'s decided to give his favorite ballistic mask an upgrade. Before it was only practical, now it\'s also stylish.',
			'Thank you for your support.',
			'OVERKILL salutes you!'
		],
		collection: 'The COMPLETELY OVERKILL Pack',
		type: 'dlc',
		unlock: 'THIS IS A COMPLETELY OVERKILL PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Mega Grin',
		image: 'fab_mega_grin',
		description: [
			'The Grin was once the face representing a man\'s breakdown as he had to accept defeat. But now the times have changed, and the same man is back again, stronger than ever before. Rejuvenated and ready to take on the world with a determined fierceness and cunning, the mask still represents the face of a mad man, but a mad man that is winning.',
			'Thank you for your support.',
			'OVERKILL salutes you!'
		],
		collection: 'The COMPLETELY OVERKILL Pack',
		type: 'dlc',
		unlock: 'THIS IS A COMPLETELY OVERKILL PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Mega Hoxton',
		image: 'hoxton_glow',
		description: [
			'The Mega Hoxton mask is an evolved version of the original mask. It symbolises transcendence and catharsis.',
			'Thank you for your support.',
			'OVERKILL salutes you!'
		],
		collection: 'The COMPLETELY OVERKILL Pack',
		type: 'dlc',
		unlock: 'THIS IS A COMPLETELY OVERKILL PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Mega Kawaii',
		image: 'cop_kawaii',
		description: [
			'In the name of the kawaii, I will punish you! For love, for justice, FOR MERCURY BUBBLE BLAST!',
			'Thank you for your support.',
			'OVERKILL salutes you!'
		],
		collection: 'The COMPLETELY OVERKILL Pack',
		type: 'dlc',
		unlock: 'THIS IS A COMPLETELY OVERKILL PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Mega Kevin',
		image: 'hunter',
		description: [
			'For Kevin it was never enough to rip out the spine and scream defiantly at the sky. He always proceeded to also fuck the skull.',
			'Thank you for your support.',
			'OVERKILL salutes you!'
		],
		collection: 'The COMPLETELY OVERKILL Pack',
		type: 'dlc',
		unlock: 'THIS IS A COMPLETELY OVERKILL PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Mega Mark',
		image: 'fab_mega_mark',
		description: [
			'The mask is modeled after a legendary bear that was known to terrorize humans and other animals in an Eastern land far, far away. The story is wildly popular with the criminal underworld, and getting compared to to the fierce beast is considered a great honor, reserved only to the greatest and most ruthless criminals.',
			'Thank you for your support.',
			'OVERKILL salutes you!'
		],
		collection: 'The COMPLETELY OVERKILL Pack',
		type: 'dlc',
		unlock: 'THIS IS A COMPLETELY OVERKILL PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Mega Plague Doctor',
		image: 'cop_plague_doctor',
		description: [
			'Three years of healing took its toll. He witnessed man\'s cruel ways, born out of desperation. He stopped seeing the plague as a disease and started spreading it as the cure.',
			'Thank you for your support.',
			'OVERKILL salutes you!'
		],
		collection: 'The COMPLETELY OVERKILL Pack',
		type: 'dlc',
		unlock: 'THIS IS A COMPLETELY OVERKILL PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Mega Watcher',
		image: 'fab_mega_alien',
		description: [
			'The Watchers are a species of extraterrestials that act as spies on planet Earth. They communicate using their minds and use their large eyes to witness, gather and share information about humankind, preparing themselves for the coming invasion.',
			'Thank you for your support.',
			'OVERKILL salutes you!'
		],
		collection: 'The COMPLETELY OVERKILL Pack',
		type: 'dlc',
		unlock: 'THIS IS A COMPLETELY OVERKILL PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Mega Wolf',
		image: 'wolf_glow',
		description: [
			'The Mega Wolf mask is an evolved version of the original mask. It symbolises transcendence and catharsis.',
			'Thank you for your support.',
			'OVERKILL salutes you!'
		],
		collection: 'The COMPLETELY OVERKILL Pack',
		type: 'dlc',
		unlock: 'THIS IS A COMPLETELY OVERKILL PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Firefighter\'s Helmet',
		image: 'firemask',
		description: [
			'The crew may show scant respect to the police authorities, but they have huge respect for the men and women that clean up the burning messes left in their wake. This mask is a tribute to their efforts.'
		],
		collection: 'The Butcher\'s BBQ Pack DLC',
		type: 'dlc',
		unlock: 'THIS IS A BBQ WEAPON PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Graug',
		image: 'firedemon',
		description: [
			'The head of the legendary Graug. Towering beings of fire and smoking darkness, bound in blackened iron mail. Shaped like a man, but horned and visaged like a cruel demon. Body consumed by a furnace heat, hotter than Hell itself. Knows all the best tunes.'
		],
		collection: 'The Butcher\'s BBQ Pack DLC',
		type: 'dlc',
		unlock: 'THIS IS A BBQ WEAPON PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'The Chef',
		image: 'chef_hat',
		description: [
			'Whether you’re a line cook flipping patties at a roadside diner, or an itamae dissecting toadfish at a $1000-a-table joint, this hat means one thing: you’re the chef. '
		],
		collection: 'The Butcher\'s BBQ Pack DLC',
		type: 'dlc',
		unlock: 'THIS IS A BBQ WEAPON PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'The Gas Mask',
		image: 'gasmask',
		description: [
			'The gas mask may seem like it belongs to the wars of an older era, but it is a crucial piece of equipment on the urban battlefield, where gas can still be deployed. Also, gives you a cool, wheezy breathing sound.'
		],
		collection: 'The Butcher\'s BBQ Pack DLC',
		type: 'dlc',
		unlock: 'THIS IS A BBQ WEAPON PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Apache Mystic',
		image: 'kangee',
		description: [
			'The west that the white men entered was a land of mystery. A land populated with civilizations of warriors, who marked themselves, their lands and their mythologies with these sacred carvings.'
		],
		collection: 'The Butcher\'s Western Pack DLC',
		type: 'dlc',
		unlock: 'THIS IS A WESTERN PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Desert Skull',
		image: 'bullskull',
		description: [
			'When staggering through desolate barrancas, with only thoughts for company, the last thing you want to see is the parched bones of those who went before you. Suddenly those thoughts are screams.'
		],
		collection: 'The Butcher\'s Western Pack DLC',
		type: 'dlc',
		unlock: 'THIS IS A WESTERN PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Lone Heister',
		image: 'lone',
		description: [
			'Whether you\'re a murderous desperado or a lone, brooding ranger, sometimes you need to hide your identity. What does that better than a slender black eye-mask, covering a third of your face?'
		],
		collection: 'The Butcher\'s Western Pack DLC',
		type: 'dlc',
		unlock: 'THIS IS A WESTERN PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Wild West Classic',
		image: 'bandit',
		description: [
			'The wide-brimmed hat, the steely gaze and the scarf pulled up over the mouth. A combination so iconic, so classic and so effective that it remains the staple for gangsters and heisters everywhere.'
		],
		collection: 'The Butcher\'s Western Pack DLC',
		type: 'dlc',
		unlock: 'THIS IS A WESTERN PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Boombox',
		image: 'boombox',
		description: [
			'According to the brochure, Alesso\'s Boom Box features include \'No batteries to slay your vibe, sound insulation to keep suckas from hearing your beats and full-face armor to keep cops from checking your clock.\''
		],
		collection: 'The Alesso Heist DLC',
		type: 'dlc',
		unlock: 'THIS IS A THE ALESSO HEIST ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Cantus',
		image: 'cantus',
		description: [
			'Whether you\'re on the bus or in the boardroom, when Alesso is filling your ears with heavenly tunes, it\'s important to show the world a suitable face. Presenting Cantus - the Angel of Music and Song. Let your spirit soar!'
		],
		collection: 'The Alesso Heist DLC',
		type: 'dlc',
		unlock: 'THIS IS A THE ALESSO HEIST ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Female Concert Goer',
		image: 'concert_female',
		description: [
			'When you descend into the roiling whirlpool that is the ecstasy of an Alesso concert, you better be wearing your best face. The Female Concert Goer is impassive and detached, because nothing matters but the music.'
		],
		collection: 'The Alesso Heist DLC',
		type: 'dlc',
		unlock: 'THIS IS A THE ALESSO HEIST ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Male Concert Goer',
		image: 'concert_male',
		description: [
			'Tie-dyed shirts are so 70\'s. Holding up a lighter went out in the 80\'s. Whistles and glow sticks were left behind in the 90\'s, and the 00\'s, well, the less said the better. The modern concert goer, however, favors the mask.'
		],
		collection: 'The Alesso Heist DLC',
		type: 'dlc',
		unlock: 'THIS IS A THE ALESSO HEIST ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Murmillo Galea Helmet',
		image: 'gladiator_helmet',
		description: [
			'Gladiators were members of a brutal caste in Ancient Rome whose sole duty was to entertain by way of public exhibitions of horrific violence. This style of helmet with its high crest  resembles a fish. It was worn by a Murmillo - a heavy class of gladiator that fought with a sword and tower shield. They symbolize Vulcan - the roman god of fire, and they stand for strength and honor.'
		],
		collection: 'The Golden Grin Casino Heist DLC',
		type: 'dlc',
		unlock: 'THIS IS A GOLDEN GRIN CASINO ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Sports Utility Mask',
		image: 'sports_utility_mask',
		description: [
			'Forget bulky and unfashionable helmets, this glorious sucker is the best friend of every adrenaline junkie. The face-guard is made out of tough ABS plastic and it provides solid protection against snow, sand blasts and hail drops. Just avoid heavy blows to the head. Be the envy of your airboarding friends, brah!'
		],
		collection: 'The Golden Grin Casino Heist DLC',
		type: 'dlc',
		unlock: 'THIS IS A GOLDEN GRIN CASINO ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'King, The',
		image: 'the_king_mask',
		description: [
			'Mercy! Are you bad enough of a dude or dudette to rock the royal trifecta of slick aviators ,bad-ass pompadour and tactical sideburns? Summon forth the indomitable spirit of various used-car dealers and shotgun-wedding ministers all around Vegas who wore this thing all the way to success. Or at least mild public awkwardness. Hail to the king!'
		],
		collection: 'The Golden Grin Casino Heist DLC',
		type: 'dlc',
		unlock: 'THIS IS A GOLDEN GRIN CASINO ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Wheeler Dealer',
		image: 'croupier_hat',
		description: [
			'Spruce up your glamorous neon 80\'s look! This kind of mint-green headwear has been in use since the 19th century as a method of preventing eyestrain from intense light sources. Coked out gamblers and gonzo journalists have propelled the croupier\'s hat into the focus of the mainstream. They are also perfect for beach-front raves, picking up hotties on the beach, signing a contract on the 18th hole of your nearest country club and generally looking like an octogenarian.'
		],
		collection: 'The Golden Grin Casino Heist DLC',
		type: 'dlc',
		unlock: 'THIS IS A GOLDEN GRIN CASINO ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Sokol',
		image: 'sokol',
		description: [
			'If playing as a grinder for the St Petersburg Bombers hockey team taught Sokol the value of one thing, it was the importance of a terrifying mask that protects his handsome Russian face.'
		],
		collection: 'Sokol Character Pack DLC',
		type: 'dlc',
		unlock: 'THIS IS A SOKOL CHARACTER PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Sokol Begins',
		image: 'sokol_begins',
		description: [
			'This is a clean version of Sokol\'s iconic mask, before it was painted.',
			'Never liked how the original one turned out? This is your chance to change history.'
		],
		collection: 'Sokol Character Pack DLC',
		type: 'dlc',
		unlock: 'THIS IS A SOKOL CHARACTER PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Kage',
		image: 'kage',
		description: [
			'The kage mask was said to be haunted, originally from a kabuki theater in Osaka where the actor fell down dead on stage while wearing the mask. The last thing he said was \'No, I will not kill them, I will not\'. Legend says that the kage mask will kill whoever wears it if its thirst for blood is not satisfied.'
		],
		collection: 'Gage Ninja Pack DLC',
		type: 'dlc',
		unlock: 'THIS IS A GAGE NINJA PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Kuro Zukin',
		image: 'ninja_hood',
		description: [
			'A simple piece of cloth tied around their heads will transform anyone, be it beggar, farmer or common man into a ninja. A shadow among shadows, a dagger in the dark. He can be fierce or stealthy and can be anyone in a crowd. He does what he sets out to do and then disappears.'
		],
		collection: 'Gage Ninja Pack DLC',
		type: 'dlc',
		unlock: 'THIS IS A GAGE NINJA PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Shirai',
		image: 'shirai',
		description: [
			'Get over here! And let me tell you about the most badass ninjas you ever heard about. They are the protectors of our world and they only accept the best warriors. They are given the most kickass mask to show that they are better than everyone else. Here is your mask, welcome to the clan.'
		],
		collection: 'Gage Ninja Pack DLC',
		type: 'dlc',
		unlock: 'THIS IS A GAGE NINJA PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Slicer',
		image: 'slicer',
		description: [
			'After his brother\'s murder, Ikas joined an underground clan of ninjas to train and become their deadliest warrior. Ikas quickly proved himself and was put in charge of the whole American branch of the clan. His signature mask now inspires fear and respect and anyone who wears a mask like this will be seen as a brother of the Achilles Clan.'
		],
		collection: 'Gage Ninja Pack DLC',
		type: 'dlc',
		unlock: 'THIS IS A GAGE NINJA PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Jiro',
		image: 'jiro',
		description: [
			'Japan is a land of tradition. A land of warriors. Jiro\'s mask reflects this. The mask expresses Jiro\'s love for a traditional Japan, while the bared snarl represents his unshakable determination.'
		],
		collection: 'Yakuza Character Pack DLC',
		type: 'dlc',
		unlock: 'THIS IS A YAKUZA CHARACTER PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Jiro Begins',
		image: 'jiro_begins',
		description: [
			'This is a clean version of Jiro\'s iconic mask, before it was painted.',
			'Never liked how the original one turned out? This is your chance to change history.'
		],
		collection: 'Yakuza Character Pack DLC',
		type: 'dlc',
		unlock: 'THIS IS A YAKUZA CHARACTER PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Agatha Knight Veteran',
		image: 'agatha_knight',
		description: [
			'Excavated from the arid wastelands of Tenosia, the helmet of this Agathian Knight could protect him from swords and arrows, but not from the bloody ambitions of a leader as delusional as King Alphonso.'
		],
		collection: 'Gage Chivalry Pack DLC',
		type: 'dlc',
		unlock: 'THIS IS A GAGE CHIVALRY PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Agatha Vanguard Veteran',
		image: 'agatha_vanguard_veteran',
		description: [
			'When you\'re trying to reclaim your homeland and King\'s law from the upstart Masons, you need strength, support and a fearsome visage. This Vanguard helm provides all three.'
		],
		collection: 'Gage Chivalry Pack DLC',
		type: 'dlc',
		unlock: 'THIS IS A GAGE CHIVALRY PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Mason Knight Veteran',
		image: 'mason_knight_veteran',
		description: [
			'The helmet of the Knight Veterans of the Masons were effectively symbols of this powerful, upstart order. When peasants saw this helm, they knew that Malric\'s new order was close behind.'
		],
		collection: 'Gage Chivalry Pack DLC',
		type: 'dlc',
		unlock: 'THIS IS A GAGE CHIVALRY PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Mason Vanguard Veteran',
		image: 'mason_vanguard_veteran',
		description: [
			'This helmet was unearthed in an elaborate barrow, indicating that the wearer enjoyed prestige in the Mason army. These great warriors appear to have been Malric\'s elite troops, perhaps having served with him in the failed Tenosian crusade.'
		],
		collection: 'Gage Chivalry Pack DLC',
		type: 'dlc',
		unlock: 'THIS IS A GAGE CHIVALRY PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Maui',
		image: 'maui',
		description: [
			'Exploring the Pacific \'Ring of Fire\' in his youth, Bodhi came to the following revelation: honoring oneself means honoring the myths. A myth that stuck with him was that of Maui. Like Bodhi, Maui was a dauntless champion of humankind, a trickster and adventurer.'
		],
		collection: 'The Point Break Heists DLC',
		type: 'dlc',
		unlock: 'THIS IS A POINT BREAK HEISTS ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Oro',
		image: 'oro',
		description: [
			'It was exploring the Islands of French Polynesia, Bodhi encountered the disciples of the war-god Oro. The young adventurer quickly became enamored of this god, who valued the appreciation of beautiful crafts as much as the art of struggle.'
		],
		collection: 'The Point Break Heists DLC',
		type: 'dlc',
		unlock: 'THIS IS A POINT BREAK HEISTS ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Tane',
		image: 'tane',
		description: [
			'Tane was the god of the forest who used his mighty strength to separate his parents, the earth and the sky. Legends also credit him with creating Tiki, the first man. Thus, he created the world as we know it, and the people within it.'
		],
		collection: 'The Point Break Heists DLC',
		type: 'dlc',
		unlock: 'THIS IS A POINT BREAK HEISTS ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Tawhiri',
		image: 'water_spirit',
		description: [
			'Brother of Tane, Tawhiri is the god of weather, most particularly violent storms and lightning. Bodhi experienced plenty of both, and it was during a particularly vicious explosion while reef-diving in Tuvalu that Bodhi gained a true appreciation for this powerful deity.'
		],
		collection: 'The Point Break Heists DLC',
		type: 'dlc',
		unlock: 'THIS IS A POINT BREAK HEISTS ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Goat Goat',
		image: 'goat_goat',
		description: [
			'The goat doesn\'t get much respect in the animal kingdom, and often find themselves mocked by other animals - but that works perfectly in their favor. Putting on this foolish mask might give you the same advantage and make the cops underestimate you.'
		],
		collection: 'The Goat Simulator Heist DLC',
		type: 'dlc',
		unlock: 'THIS IS A GOAT SIMULATOR ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Mastermind Goat',
		image: 'wet_goat',
		description: [
			'The dolphin is the most sinister and vicious heister in the animal kingdom, tricking everyone with its friendly and cute appearance. But it\'s all a facade! The dolphin only cares about itself and the loot, and won\'t hesitate a second to leave anyone behind. Caution is advised if you meet a fellow heister with this mask.'
		],
		collection: 'The Goat Simulator Heist DLC',
		type: 'dlc',
		unlock: 'THIS IS A GOAT SIMULATOR ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Scout Goat',
		image: 'tall_goat',
		description: [
			'The giraffe doesn\'t miss a thing, always in control of its surroundings, acting as the perfect \'look-out\' companion for heisting in the animal kingdom. Whatever it is, you\'ll see it coming from miles away and the cops can forget to take you by surprise.'
		],
		collection: 'The Goat Simulator Heist DLC',
		type: 'dlc',
		unlock: 'THIS IS A GOAT SIMULATOR ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Slick Goat',
		image: 'fancy_goat',
		description: [
			'The penguin is the slickest heister in the animal kingdom, walking around with a \'know-it-all\' attitude, taking their time and taking what they want - when they want, not giving a damn. Put on this mask and show everyone you\'re the boss of things.'
		],
		collection: 'The Goat Simulator Heist DLC',
		type: 'dlc',
		unlock: 'THIS IS A GOAT SIMULATOR ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Hans',
		image: 'nutcracker',
		description: [
			'Hans hates people and will crack the skull of anyone who opposes him. But under his frightening appearance, Hans is a good boy. You could almost say he\'s a prince in disguise. Treat him well and he might take you to the Land of Sweets.'
		],
		collection: 'Wolf Pack DLC',
		type: 'dlc',
		unlock: 'THIS IS A WOLF PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'The Dragon Head',
		image: 'viking',
		description: [
			'Mounting the prow of Viking ships, the dragon head was used to scare off sea monsters and evil spirits. Dozers and Cloakers are evil, right? Why not give it a go and see if it can scare them away? But have your gun ready just in case. For safety.'
		],
		collection: 'Wolf Pack DLC',
		type: 'dlc',
		unlock: 'THIS IS A WOLF PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'The Viking',
		image: 'horned_king',
		description: [
			'The Germanic Norse seafarers known as Vikings were fierce warriors during the late 8th to late 11th centuries. Equipped with their mighty axes and horned helmets, they stood tall and proud in the heat of battle. If you want to capture the spirit of these old fighters, this mask will do the job.'
		],
		collection: 'Wolf Pack DLC',
		type: 'dlc',
		unlock: 'THIS IS A WOLF PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Trickster Demon',
		image: 'divided',
		description: [
			'The Trickster Demon is a mischievous being, who thrives on creating chaos and spreading mayhem. It might not look that scary, but don\'t let that smirk fool you; its idea of \'fun\' differ greatly from what you and me would enjoy. Trust me on this.'
		],
		collection: 'Wolf Pack DLC',
		type: 'dlc',
		unlock: 'THIS IS A WOLF PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Sydney',
		image: 'sydney',
		description: [
			'Smirk, Grin, Sneer - call it what you want. As you see this smiling punker mask approaching it\'s not synonyms that\'ll run through your head - it\'s bullets. Sydney will make sure of it.'
		],
		collection: 'Sydney Character Pack DLC',
		type: 'dlc',
		unlock: 'THIS IS A SYDNEY CHARACTER PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Sydney Begins',
		image: 'sydney_begins',
		description: [
			'This is a clean version of Sydney\'s iconic mask, before it was painted.',
			'Never liked how the original one turned out? This is your chance to change history.'
		],
		collection: 'Sydney Character Pack DLC',
		type: 'dlc',
		unlock: 'THIS IS A SYDNEY CHARACTER PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'The Classic',
		image: 'born_biker_01',
		description: [
			'This old school motorcycle helmet is part of a legacy all bikers around the world cherish. And it\'s more about nostalgia rather than style. This helmet transports you back to the golden biker days of the 1940\'s.'
		],
		collection: 'The Biker Heist DLC',
		type: 'dlc',
		unlock: 'THIS IS A BIKER HEIST DLC ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Speed Devil',
		image: 'born_biker_02',
		description: [
			'What better way to symbolize the do-not-give-a-fuck attitude of the biker lifestyle, than by wearing the face of the Devil. The ultimate symbol for breaking the law.'
		],
		collection: 'The Biker Heist DLC',
		type: 'dlc',
		unlock: 'THIS IS A BIKER HEIST DLC ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Flaming Skull',
		image: 'born_biker_03',
		description: [
			'The skull as a symbol can either mean death or mortality, and we humans have always had a fascination for it. Wearing this motorcycle helmet looks powerful and intimidating.'
		],
		collection: 'The Biker Heist DLC',
		type: 'dlc',
		unlock: 'THIS IS A BIKER HEIST DLC ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Road Rage',
		image: 'brutal',
		description: [
			'This helmet is reserved for the top dog in a biker gang. It demands respect and authority from your brothers, and when it\'s time to do battle, you wear this helmet proudly and ride at the front.'
		],
		collection: 'The Biker Heist DLC',
		type: 'dlc',
		unlock: 'THIS IS A BIKER HEIST DLC ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Rust',
		image: 'rust',
		description: [
			'The Devil is the moniker that has followed Rust for most of his life. Therefore, Rust\'s mask is a combination of a smiling clown with ominous horns protruding from his forehead, letting everyone know that the Devil is here.'
		],
		collection: 'Biker Character Pack DLC',
		type: 'dlc',
		unlock: 'THIS IS A BIKER CHARACTER PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Rust Begins',
		image: 'rust_begins',
		description: [
			'This is a clean version of Rust\'s iconic mask, before it was painted.',
			'Never liked how the original one turned out? This is your chance to change history.'
		],
		collection: 'Biker Character Pack DLC',
		type: 'dlc',
		unlock: 'THIS IS A BIKER CHARACTER PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Daisy',
		image: 'pim_dog',
		description: [
			'They might have not known what they did and to who, but that doesn\'t matter. They got what they deserved and then some. John is back.'
		],
		collection: 'John Wick Weapon Pack DLC',
		type: 'dlc',
		unlock: 'THIS IS A JOHN WICK WEAPON PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Hotelier',
		image: 'pim_hotelier',
		description: [
			'The Continental only serves the people who can respect the rules of the assassins\' sanctuary. It\'s not a cult or a secret society, it\'s a necessity in a business where everybody is willing to kill for money and everybody in there is on someone\'s list of targets.'
		],
		collection: 'John Wick Weapon Pack DLC',
		type: 'dlc',
		unlock: 'THIS IS A JOHN WICK WEAPON PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Zaschita',
		image: 'pim_russian_ballistic',
		description: [
			'A good way to not get shot in the head is to wear a helmet, but when you want to protect just your face from bullets and identification this will do. Does it really look bulletproof? What are you? A coward? Grab your fear by the balls and headbutt it in the face with this mask on.'
		],
		collection: 'John Wick Weapon Pack DLC',
		type: 'dlc',
		unlock: 'THIS IS A JOHN WICK WEAPON PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Mustang',
		image: 'pim_mustang',
		description: [
			'Do you think you\'re a car? Oh? But do you think you\'re a MUSCLE car? No? Heisting isn\'t about looking fast and sleek, it\'s about looking furious and dangerous. Vroom, vroom motherfuckers!'
		],
		collection: 'John Wick Weapon Pack DLC',
		type: 'dlc',
		unlock: 'THIS IS A JOHN WICK WEAPON PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Batshit Crazy',
		image: 'tng_cloaker',
		description: [
			'Somehow bending the laws of physics, the special unit of the WPD nicknamed the \'Cloaker\' is the bane of every bad guy trying to prove they can do things on their own. The first Cloaker is rumored to just have been a regular SWAT officer who nobody wanted to team up with. Might be because he was a fucked up killing machine with kung fu-kicks and bullets flying everywhere around him. He used excessive force almost always and left any combat tactic behind together with his unit. But he produced results, so the brass kept him on and made him train like minded individuals.',
			'Activate Night Vision Mode by holding down the Fire Mode button.'
		],
		collection: 'Gage Spec Ops Pack DLC',
		type: 'normal',
		unlock: 'THIS IS A GAGE SPEC OPS PACK ITEM!',
		cost: 'Unlocked through Side Jobs'
	},
	{
		name: 'A.W.O.L',
		image: 'tng_cap',
		description: [
			'Highly classified reports mentions this soldier from an elite special operations force. Engaged in high profile military operations and on constant alert, he was living his life under extreme pressure and constant adrenaline highs. During a sensitive strategic operation, the evidence suggest that he turned on his own unit. But no one knows certain, since the massacre left no witnesses. The soldier went A.W.O.L. and has not been seen since that day.'
		],
		collection: 'Gage Spec Ops Pack DLC',
		type: 'dlc',
		unlock: 'THIS IS A GAGE SPEC OPS PACK ITEM!',
		cost: 'Unlocked through Side Jobs'
	},
	{
		name: 'Bloody Bandana',
		image: 'tng_bandana',
		description: [
			'The identity of the soldier that wore this red headband is classified information. Leaked reports speak of a war veteran and former U.S. Army Special Forces soldier that was an expert in guerrilla tactics. His military comrades described him as tough, reckless and over the top aggressive. Based on how many high-ranking officers he tracked down and slaughtered, he may have major problem with authorities...'
		],
		collection: 'Gage Spec Ops Pack DLC',
		type: 'dlc',
		unlock: 'THIS IS A GAGE SPEC OPS PACK ITEM!',
		cost: 'Unlocked through Side Jobs'
	},
	{
		name: 'Dark Legion',
		image: 'tng_zeal_swat_mask',
		description: [
			'He did not exist, not officially. Not since he came aboard ZEAL, the top-secret strike force. He was always the last resort, deployed when extreme violence was needed. He never held back. For every operation, he lost a bit of his humanity. For every operation, he gained an edge as an instrument of death. He did not separate right from wrong, not anymore. Only obeyed the orders from above. Just one shadow in the dark legion of secret super soldiers. One day, he woke up and could only think of killing others. He had finally found his true purpose.'
		],
		collection: 'Gage Spec Ops Pack DLC',
		type: 'dlc',
		unlock: 'THIS IS A GAGE SPEC OPS PACK ITEM!',
		cost: 'Unlocked through Side Jobs'
	},
	{
		name: 'Exalted',
		image: 'sfm_01',
		description: [
			'Cold and unmoving, you watch them from above. They shall envy your majesty as your golden gaze falls on them, an undeserved blessing on these wretched soft ones. You unite the hard chill of the night with the dazzling radiance of the sun. Glorious, golden and beautiful, you shall turn their heads mad with desire - and it shall be their undoing.'
		],
		collection: 'Scarface Heist DLC',
		type: 'dlc',
		unlock: 'THIS IS A SCARFACE HEIST PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Golden Hour',
		image: 'sfm_02',
		description: [
			'Timothy Miller dreamt of working with movie lightning when he grew up. For a Halloween-party, he created the Golden Hour mask. But when he put it on and looked in the mirror, his eyes stared back surrounded by the perfect soft, red glow of the sunset. In that moment, a new dream was born. He wanted people to view the serenity of the sunset close-up, wanted it imprinted on their retina forever. The only thing the coroner could confirm was that all victims were killed shortly before sunset, their eyes always left wide open.'
		],
		collection: 'Scarface Heist DLC',
		type: 'dlc',
		unlock: 'THIS IS A SCARFACE HEIST PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Barrori Flex',
		image: 'sfm_03',
		description: [
			'The day Chad got the Barrori Flex sunglasses, everything changed. They gave him a brand new perspective on what’s important in life. Looking cool and blase became his purpose, his reason to live. With his Italian sports coat, beige linen pants and loafers he caught jealous looks and turned necks wherever he went. But it couldn’t last and when Chad’s beauty faded so did his will to live. He made a good-looking corpse, best clothes on, when he swallowed a whole can of diet pills.'
		],
		collection: 'Scarface Heist DLC',
		type: 'dlc',
		unlock: 'THIS IS A SCARFACE HEIST PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Panthera Tigris',
		image: 'sfm_04',
		description: [
			'The rage of the tiger is legendary, and the king of the jungle will not be contained willingly. They may think they have you under control, but hell hath no fury like a caged tiger. As you break out, they will come to know this. Claws will rip and teeth will tear, flesh from bone, as you claim your kingdom.'
		],
		collection: 'Scarface Heist DLC',
		type: 'dlc',
		unlock: 'THIS IS A SCARFACE HEIST PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Scarface',
		image: 'chc_terry',
		description: [
			'Scarface came to the US with nothing more than two empty hands and a bad attitude, the darkness in his heart matched only by the brilliance of his criminal mind. His mask tells the story, complete with the trail of blood he left in his wake as he began to make his mark.'
		],
		collection: 'Scarface Character Pack DLC',
		type: 'normal',
		unlock: 'THIS IS A SCARFACE CHARACTER PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Scarface Begins',
		image: 'chc_terry_begins',
		description: [
			'This is a clean version of the iconic Scarface mask, before it was painted.',
			'Never liked how the original one turned out? This is your chance to change history.'
		],
		collection: 'Scarface Character Pack DLC',
		type: 'normal',
		unlock: 'THIS IS A SCARFACE CHARACTER PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Lady Liberty',
		image: 'spa_04',
		description: [
			'Liberty. Liberty for all those heisters that have fallen and been sent to prison. Liberty for all that gold which sits sadly in the dark basement vaults of banks. Liberty for the spirit of enterpise, the will to take what you want, the rule of the gun. Liberty for those seeking a bigger PAYDAY.'
		],
		collection: 'John Wick Heists Pack DLC',
		type: 'dlc',
		unlock: 'THIS IS A JOHN WICK HEISTS PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Captain',
		image: 'spa_01',
		description: [
			'Captain on the bridge! Guide your crew safely through the banks, and a favourite wind will lead you to great adventures. Strike the coast and take their treasure, then disappear over the horizon.'
		],
		collection: 'John Wick Heists Pack DLC',
		type: 'dlc',
		unlock: 'THIS IS A JOHN WICK HEISTS PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Bird of Prey',
		image: 'spa_03',
		description: [
			'Soar high, swoop down and strike your prey with merciless, deadly claws. Then fly home to your lofty nest, enjoying the spoils of your hunt. You are the apex predator and you shall devour it all.'
		],
		collection: 'John Wick Heists Pack DLC',
		type: 'dlc',
		unlock: 'THIS IS A JOHN WICK HEISTS PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Sailor',
		image: 'spa_02',
		description: [
			'Sail on the treasure fleet - climb the rigging and keep an eye out for pursuing ships as you scour the sea for sunken gold. If they catch up with you, abandon ship like the rat you are - but don\'t forget to bring the gold.'
		],
		collection: 'John Wick Heists Pack DLC',
		type: 'dlc',
		unlock: 'THIS IS A JOHN WICK HEISTS PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Red Machine',
		image: 'grv_04',
		description: [
			'No one can stop the Red Machine! It’s fast, ice-cold and merciless. With swift moves, lightning strikes and flawless tactics it humiliates the oppostion, leaving them crying in desperation. Just like The Payday Gang.'
		],
		collection: 'Gage Russian Weapon Pack DLC',
		type: 'dlc',
		unlock: 'THIS IS A GAGE RUSSIAN WEAPON PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Matryoshka',
		image: 'grv_02',
		description: [
			'Things are not always what they seem. Behind the mask there is a face, true. But what\'s behind the face? Another face, perhaps. How do you know where the real person is, and how many layers must be removed before you reach the core - the inner self?'
		],
		collection: 'Gage Russian Weapon Pack DLC',
		type: 'dlc',
		unlock: 'THIS IS A GAGE RUSSIAN WEAPON PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'War Balaclava',
		image: 'grv_01',
		description: [
			'Half a block, half a block'
		],
		collection: 'Gage Russian Weapon Pack DLC',
		type: 'dlc',
		unlock: 'THIS IS A GAGE RUSSIAN WEAPON PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Kokoshnik',
		image: 'grv_03',
		description: [
			'Finely crested for glory, this elaborate headpiece will impress. Wear it proudly, displaying the fine embriodery for all to envy. But watch out for low doorways.'
		],
		collection: 'Gage Russian Weapon Pack DLC',
		type: 'dlc',
		unlock: 'THIS IS A GAGE RUSSIAN WEAPON PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'The Almir',
		image: 'ztm',
		description: [
			'This mask will instil',
			'The Almir is a mask that many would hesitate to unleash on a crew. that many would hesitate to unleash on a crew. Someone crazy enough to wear it would be capable of great deeds one day, only to go on a psychotic rampage the next. But sometimes, that\'s the kind of person you need to get you out of a sticky situation and avoid botching a heist completely.',
			'Knowing that such a person has an equal chance of bringing success or failure, would you dare bring an Almir into your crew?',
			';)'
		],
		collection: 'Zag Toys',
		type: 'dlc',
		unlock: 'THIS IS A ZAG TOYS ITEM!',
		cost: 'Free'
	},
	{
		name: 'Ethan',
		image: 'ecp_male',
		description: [
			'This mask exudes power and brute force, in stark contrast to the man who wears it. Equal parts clown-like sadness and begrudging anger, it perfectly captures the mood of someone who has somewhat reluctantly chosen to be a heister.'
		],
		collection: 'h3h3 Character Pack DLC',
		type: 'dlc',
		unlock: 'THIS IS A h3h3 CHARACTER PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Hila',
		image: 'ecp_female',
		description: [
			'Something about this mask radiates a playful malice and most who gaze upon it immediately feel a sense of unease, which is just the kind of thing you need when you\'re robbing a bank.'
		],
		collection: 'h3h3 Character Pack DLC',
		type: 'dlc',
		unlock: 'THIS IS A h3h3 CHARACTER PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Ethan Begins',
		image: 'ecp_male_begins',
		description: [
			'This is a clean version of Ethan\'s iconic mask, before it was painted.',
			'Never liked how the original one turned out? This is your chance to change history.'
		],
		collection: 'h3h3 Character Pack DLC',
		type: 'dlc',
		unlock: 'THIS IS A h3h3 CHARACTER PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Hila Begins',
		image: 'ecp_female_begins',
		description: [
			'This is a clean version of Hila\'s iconic mask, before it was painted.',
			'Never liked how the original one turned out? This is your chance to change history.'
		],
		collection: 'h3h3 Character Pack DLC',
		type: 'dlc',
		unlock: 'THIS IS A h3h3 CHARACTER PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Laughing Dragon',
		image: 'dragon01',
		description: [
			'Do dragons laugh? For Real? They\'re usually such cranky bastards, even if some of them have nice manners. Still, imagine you\'re on the receiving end of a heister wearing this, gunning at you with a big, fat hand-cannon.'
		],
		collection: 'Border Crossing Heist DLC',
		type: 'normal',
		unlock: 'THIS IS A DRAGON PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Mahakala',
		image: 'daemon',
		description: [
			'There\'s probably a song based on the name of this mask out there somewhere. All those even syllables make for a catchy rhythm, don\'t they?'
		],
		collection: 'Border Crossing Heist DLC',
		type: 'normal',
		unlock: 'THIS IS A DRAGON PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Serenity',
		image: 'godess',
		description: [
			'The label on this says it\'s great for those situations when you\'re all stressed out and need a bit of Feng Shui to center yourself. But note the fine print: \'The manufacturer takes no responsibility for its use, misuse or resulting incarceration!\''
		],
		collection: 'Border Crossing Heist DLC',
		type: 'normal',
		unlock: 'THIS IS A DRAGON PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Shouting Dragon',
		image: 'dragon02',
		description: [
			'If the dragon is shouting, does that make the tiger roar? Usually, making a loud statement during a heist can be detrimental to its success. But you know, sometimes you just gotta roll with it because it\'s cool, so go ahead... treat yo\'self.'
		],
		collection: 'Border Crossing Heist DLC',
		type: 'normal',
		unlock: 'THIS IS A DRAGON PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Sweettooth',
		image: 'Sweettooth',
		description: [
			'Sweet Tooth, real name Marcus \'Needles\' Kane is a character from the Twisted Metal video game series. Sweet Tooth is best known for being a killer clown that drives a combat ice cream truck.',
			'It\'s said that he once had escaped from a mental institution. He now leads a life of crime.'
		],
		collection: 'Twisted Metal DLC',
		type: 'normal',
		unlock: '',
		cost: '$10,250'
	},
	{
		name: 'Thespian',
		image: 'Thespian',
		description: [
			'Thespian is a superhuman soldier of fortune. In the future, space marines like Thespian protect the world of mankind and its space colonies from the forces of evil.',
			'His helmet is popular gift in the criminal underworld and is given to thieves, thugs and career criminals who show loyalty and patience to their syndicate.',
			'We at OVERKILL salute you for your loyalty and patience!'
		],
		collection: 'Thespian Mask Pack DLC',
		type: 'normal',
		unlock: 'THIS IS A THESPIAN MASK PACK ITEM!',
		cost: '$6,750'
	},
	{
		name: 'The Griefer',
		image: 'The_Griefer',
		description: [
			'The Griefer is a mythical beast, known to have been a part of this world long ago. The beast deliberately chased and harassed common folk in villages and towns, hunting them down in unsuspecting ways. The Griefer derived pleasure from these acts and was a threat to the peace until the King\'s men finally found him and destroyed him.'
		],
		collection: 'PS4 Pre-Order Mask',
		type: 'dlc',
		unlock: 'THIS IS A LOOT BAG ITEM!',
		cost: '$9,750'
	},
	{
		name: 'The Intuition',
		image: 'The_Intuition',
		description: [
			'This mask belonged to a mysterious warrior from far away place. He walked the lands, guided by his intuition, hunting evil forces across the world. He ventured to dungeons and slew thousands of evil beings he came across. In the end, he found peace, knowing that the next generation would continue as he did.'
		],
		collection: 'Xbox One Pre-Order Mask',
		type: 'dlc',
		unlock: 'THIS IS A LOOT BAG ITEM!',
		cost: '$9,750'
	},
	{
		name: 'Frank',
		image: 'frank',
		description: [
			'Frank is a monster, but he is - contrary to popular belief - a sensitive, emotional creature whose only aim is to share his life with another monster.',
			'However, he realized from the moment of his \'birth\' that even his own creator cannot stand being around him. Knowing this, Frank decided to become a bank robber instead. The end.'
		],
		collection: 'Halloween Event',
		type: 'event',
		unlock: 'THIS IS A HALLOWEEN ITEM!',
		cost: '$8,250'
	},
	{
		name: 'Pumpkin King',
		image: 'pumpkin_king',
		description: [
			'Legend has it that a boy named Jack was getting chased by some villagers from whom he had stolen, when he suddenly bumped into the Devil.',
			'Jack was a clever little heister and managed to convince the devil that the loot he was carrying was worth to be shared. The Devil agreed and the two ran to the escape horses and got away.'
		],
		collection: 'Halloween Event',
		type: 'event',
		unlock: 'THIS IS A HALLOWEEN ITEM!',
		cost: '$8,250'
	},
	{
		name: 'Venomorph',
		image: 'venomorph',
		description: [
			'When you see the Venomorph, you know it\'s game over, man. GAME OVER!',
			'In reality, you better go back and hide, because it will be dark soon, and these babies mostly only come at night... Mostly.'
		],
		collection: 'Halloween Event',
		type: 'event',
		unlock: 'THIS IS A HALLOWEEN ITEM!',
		cost: '$8,250'
	},
	{
		name: 'Witch',
		image: 'witch',
		description: [
			'A witch is someone practicing black witchcraft, often with the aid of a devil or familiar.',
			'It can be anything from an ugly old hag to a charming, alluring woman.',
			'And then you have the broom, the hat and all that. Boo.'
		],
		collection: 'Halloween Event',
		type: 'event',
		unlock: 'THIS IS A HALLOWEEN ITEM!',
		cost: '$8,250'
	},
	{
		name: 'Angry Baby',
		image: 'baby_angry',
		description: [
			'GRRRRRRRR GRRR grrr grr grr GRRRR Wah, wah, WAAAAAAAAAAH! GRRR! Grr.',
			'GRRRR grr GRRRR rawr GRRRRRRRRRRRRR, wahh, WAH, WAH, WAH, GRRR.'
		],
		collection: 'Halloween Event',
		type: 'event',
		unlock: 'THIS IS A HALLOWEEN ITEM!',
		cost: '$11,000'
	},
	{
		name: 'Cry Baby',
		image: 'baby_cry',
		description: [
			'Waaaah, waah, wah, WAAAAAAAAAAAAAAAAAH, wah, WAAAAAAAAH, WAAAAAAH!',
			'WAAAAAAAAAAAAAAAAAH, wah, WAAAAAAAAH, WAAAAAAH, Waaaah, waah, wah. Wah. WAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH!'
		],
		collection: 'Halloween Event',
		type: 'event',
		unlock: 'THIS IS A HALLOWEEN ITEM!',
		cost: '$11,000'
	},
	{
		name: 'Happy Baby',
		image: 'baby_happy',
		description: [
			'Ffff, gaga, bo, gaga bo GAGA GAGA? GAGAGAGA? GAGA? Gagag GOGOGO GAGA? GAGA! GOGO! Bah. Gaga bah gogo go.',
			'GAGA? GAGA! GOGO! Bah. GAGAGA? GAGA GOGO GAGAGA? GAGA! Gagaga gogoga. Fff.'
		],
		collection: 'Halloween Event',
		type: 'event',
		unlock: 'THIS IS A HALLOWEEN ITEM!',
		cost: '$11,000'
	},
	{
		name: 'Brazil Baby',
		image: 'brazil_baby',
		description: [
			'GAGA? GAGA! GOGO! Boo! GAGAGA? GAGA GOGO GAGAGA? GAGA? GAGA!  GAGAGA? GAGA GAGAGA?',
			'GAGAGA? GAGAGAGOGO? Boo! BOOO! Gagagaga boo gaga.'
		],
		collection: 'Halloween Event',
		type: 'event',
		unlock: 'THIS IS A HALLOWEEN ITEM!',
		cost: '$11,000'
	},
	{
		name: 'Invader',
		image: 'invader',
		description: [
			'I want to belie... ZAP! May the for... ZAP! Live long a.. ZAP! Why can\'t we all just get along? Because ZAP! That\'s why.'
		],
		collection: 'Halloween Event',
		type: 'event',
		unlock: 'THIS IS A HALLOWEEN ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Satan',
		image: 'satan',
		description: [
			'The second greatest trick the devil ever pulled was to be depicted as a big horned, red skinned demon. Now nobody knows who the person listening to music through their phone\'s speakers on the subway truly is.'
		],
		collection: 'Halloween Event',
		type: 'event',
		unlock: 'THIS IS A HALLOWEEN ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Risen Chains',
		image: 'howl_chains_zombie',
		description: [
			'Go darker, hear the calling and become the daredevil of nightmares with an itchy trigger finger. This is a tribute to all the moments you have cheated death out on the field. You are a soldier from an army of darkness. Your veins are pumping of adrenaline and you have enough ammo packed to take on hell itself. Invincible in the darkness and ready to challenge death. All chains will break this time around and anyone in your path will meet their maker.',
			'This mask is an achievement reward. It can\'t drop during a PAYDAY and it can\'t be sold. Instead, it can be returned to your mask stash for free, but any pattern, color or material as well as the customization fee to put that together will be lost.'
		],
		collection: 'Halloween Event',
		type: 'event',
		unlock: 'THIS IS A HALLOWEEN ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Risen Dallas',
		image: 'hwl_dallas_zombie',
		description: [
			'There needs to be a harsh statement made about the rotting corruption penetrating every sinew of today\'s society. The self-deception, the scrambling for a false sense of a security. But you\'re not safe, not now and not ever. The American Dream is a brutally scarred nightmare disguised to lead poor souls astray. Take what you need; grab your future by the throat and force down your ambitions until it chokes on it. Mark where you tread with the bodies you leave in your wake.'
		],
		collection: 'Halloween Event',
		type: 'event',
		unlock: 'THIS IS A HALLOWEEN ITEM!',
		cost: 'Free'
	},
	{
		name: 'Risen Houston',
		image: 'hwl_hoxton_zombie',
		description: [
			'This distorted face is what ghost stories are truly made of. You linger in the shadows, torn and grim. Before you step out and scare the living daylights out of anyone that crosses your path. The knowledge of true fear is gained from looking upon this horror. That fear, that delicious, pure, crispy fear is what drives this monster. It triggers an unquenchable thirst for more. Don\'t look, but don\'t close your eyes.',
			'This mask is an achievement reward. It can\'t drop during a PAYDAY and it can\'t be sold. Instead, it can be returned to your mask stash for free, but any pattern, color or material as well as the customization fee to put that together will be lost.'
		],
		collection: 'Halloween Event',
		type: 'event',
		unlock: 'THIS IS A HALLOWEEN ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Risen Wolf',
		image: 'hwl_wolf_zombie',
		description: [
			'The sheer sight is enough to drive an opponent into madness. As if made of blood and old bones, it\'s like a second skin on your face. Always listen to the choir of voices in the back of your head. The ones that keep telling you about the destructive things you should be doing. Succumb to the temptation, relish in your own insanity. This time, do not hold back. Not for anything. This time, drive any foes into your own roaming and frothing madness. Become the demon you truly are, cause you\'ve been to hell and you liked it. It\'s pointless to hold back, the only soothing is to feel an enemy\'s blood gently trickle down your lips',
			'This mask is an achievement reward. It can\'t drop during a PAYDAY and it can\'t be sold. Instead, it can be returned to your mask stash for free, but any pattern, color or material as well as the customization fee to put that together will be lost.'
		],
		collection: 'Halloween Event',
		type: 'event',
		unlock: 'THIS IS A HALLOWEEN ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Envy',
		image: 'sds_03',
		description: [
			'It isn\'t fair, is it? There you stand, deserving of everything in life and the cosmos refuse to give unto you. The Others smile and dance, while you twist inward, wondering why no one has gifted you with whatever success everyone else has been given for free. Oh, you want it so, but how could you ever dare to take it?'
		],
		collection: 'Halloween Event',
		type: 'event',
		unlock: 'THIS IS A HALLOWEEN ITEM!',
		cost: 'Unlocked'
	},
	{
		name: 'Gluttony',
		image: 'sds_06',
		description: [
			'There it is, your unquenchable need to stuff your face and fill your belly with the ravaging furor of someone in a constant state of starvation. And when you stop, it\'s like a gaping hole opens up in the pit of your stomache,'
		],
		collection: 'Halloween Event',
		type: 'event',
		unlock: 'THIS IS A HALLOWEEN ITEM!',
		cost: 'Unlocked'
	},
	{
		name: 'Greed',
		image: 'sds_07',
		description: [
			'More is never enough. No amount of gold or treasure can satisfy you. It\'s all about obtaining the next pile of needless wealth to add to your bloated coffers, be they spiritual or physical. The plights of your fellows matter are inconsequential if you can gain from their suffering.'
		],
		collection: 'Halloween Event',
		type: 'event',
		unlock: 'THIS IS A HALLOWEEN ITEM!',
		cost: 'Unlocked'
	},
	{
		name: 'Lust',
		image: 'sds_01',
		description: [
			'You lock your eyes on your prize until they water. Unattended, your slacking jaw lets slip a drop of saliva onto the floor as the need for possession takes over. The person you pine for is an object, the object is a person. It matters not, to your blinded senses.'
		],
		collection: 'Halloween Event',
		type: 'event',
		unlock: 'THIS IS A HALLOWEEN ITEM!',
		cost: 'Unlocked'
	},
	{
		name: 'Pride',
		image: 'sds_05',
		description: [
			'You are unbreakable. The ship is filling with water, but you refuse to move. Such are your principles that you would rather go into the deep with a failing institution than admit your folly and admit yourself as fallible as your peers. Justice is what you deem it to be, and damned be those who would oppose your righteous wisdom.'
		],
		collection: 'Halloween Event',
		type: 'event',
		unlock: 'THIS IS A HALLOWEEN ITEM!',
		cost: 'Unlocked'
	},
	{
		name: 'Sloth',
		image: 'sds_02',
		description: [
			'Why bother? Let the universe expand, die and grow dark. You have endless time to lift your fingers in protest at whatever mindless chore that demands you exert yourself in the slightest. Your life energy oozes from your soul, wasted and dissolved in the emptiness as you remain perpetually drained of ambition.'
		],
		collection: 'Halloween Event',
		type: 'event',
		unlock: 'THIS IS A HALLOWEEN ITEM!',
		cost: 'Unlocked'
	},
	{
		name: 'Wrath',
		image: 'sds_04',
		description: [
			'There is a cold fire in your heart. All those who have wronged you will pay. If you so have to burn with them in the conflagration, you will extract payment for any perceived or actual slight against your person. There is no rationality to your rage- it must simply be indulged.'
		],
		collection: 'Halloween Event',
		type: 'event',
		unlock: 'THIS IS A HALLOWEEN ITEM!',
		cost: 'Unlocked'
	},
	{
		name: 'The Crossbreed',
		image: 'ancient',
		description: [
			'A powerful alien race, described by some as the most advanced beings in the universe. Different races that have come in contact with them have different names for the Crossbreed.',
			'Strong, lean and intelligent, the Crossbreed takes the best from the DNA of each alien race that it meets, always making sure it evolves in the right direction.'
		],
		collection: 'Humble Mask Pack',
		type: 'event',
		unlock: 'THIS IS A HUMBLE MASK PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'The Orc',
		image: 'twitch_orc',
		description: [
			'Brutish, aggressive and generally repulsive, the orcs have always been a hated race. Orcs are larger stronger than their goblin cousins but smaller and less powerful than their ogre brethren.',
			'This particular purple-skinned orc came from the Stonetremble clan who were known for their fierce warriors and overpowered, hybrid shamans.'
		],
		collection: 'Humble Mask Pack',
		type: 'event',
		unlock: 'THIS IS A HUMBLE MASK PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Lycanwulf',
		image: 'lycan',
		description: [
			'\'Lycanwulf, Lycanwulf!\' they yelled, the frightened villagers, as they laid eyes upon this abomination known as the Lycanwulf. The petty humans were now prisoners of the beast, in a prison without walls, ceilings or a key, where the only escape was death.'
		],
		collection: 'Humble Mask Pack 2',
		type: 'event',
		unlock: 'THIS IS A HUMBLE MASK PACK 2 ITEM!',
		cost: 'Free'
	},
	{
		name: 'The One Below',
		image: 'the_one_below',
		description: [
			'The head is what remains of this aquatic horror from the old days, when dark lords ruled the lands and good men grew up only to die; when the summer was short and the winter felt like an eternity; when the One Below stepped out of the ocean and walked the earth.'
		],
		collection: 'Humble Mask Pack 2',
		type: 'event',
		unlock: 'THIS IS A HUMBLE MASK PACK 2 ITEM!',
		cost: 'Free'
	},
	{
		name: 'Alpha Grey',
		image: 'alien_helmet',
		description: [
			'Grey Aliens are alleged extraterrestrial beings whose existence is promoted in ufological, paranormal, and New Age communities, and who are named for their skin color.',
			'Or are they?'
		],
		collection: 'Alienware Alpha Mask Pack',
		type: 'event',
		unlock: 'THIS IS AN ALIENWARE ALPHA ITEM!',
		cost: 'Free'
	},
	{
		name: 'The Anomaly',
		image: 'area51',
		description: [
			'Forged from Penrose patterned rapidly quenched metallic alloys, this helmet was constructed from debris recovered from a top secret crash site. The government continues to deny any knowledge of its existence.'
		],
		collection: 'Alienware Alpha Mask Pack',
		type: 'event',
		unlock: 'THIS IS AN ALIENWARE ALPHA ITEM!',
		cost: 'Free'
	},
	{
		name: 'Electarodent',
		image: 'pokachu',
		description: [
			'Untrained, the Electarodent can be found nibbling sweet carrots or frolicking across Alpine meadows. However, fully trained, the Electarodent is most often found wielding Bernetti 9\'s and eating through the face-plates of Skulldozers'
		],
		collection: 'Humble Mask Pack 3',
		type: 'event',
		unlock: 'THIS IS A HUMBLE MASK PACK 3 ITEM!',
		cost: 'Free'
	},
	{
		name: 'Titan',
		image: 'titan',
		description: [
			'Once, they strode amongs us. Cyclopean beings, tall as towers. They were old, even when our primate ancestors howled at fire. Now, they are gone, and only their shades come to us in half-dreamt race memories.'
		],
		collection: 'Humble Mask Pack 3',
		type: 'event',
		unlock: 'THIS IS A HUMBLE MASK PACK 3 ITEM!',
		cost: 'Free'
	},
	{
		name: 'Borsuk',
		image: 'borsuk',
		description: [
			'There is more to being a world-class heister than picking up a gun. It requires training, conditioning and a singular focus on developing far beyond the norm. Such heisters are near mutants, who wade into furious battle and always emerge victorious.'
		],
		collection: 'Humble Mask Pack 4',
		type: 'event',
		unlock: 'THIS IS A HUMBLE MASK PACK 4 ITEM!',
		cost: 'Free'
	},
	{
		name: 'Mask of the Moon',
		image: 'moon',
		description: [
			'Legend speaks of an entity so malevolent it tried to smash the Moon into the Earth. Though defeated by four masked warriors, the entity escaped and inhabited... something. We hope it will never return, but remember: sometimes the man wears the mask, and sometimes the mask wears the man.'
		],
		collection: 'Humble Mask Pack 4',
		type: 'event',
		unlock: 'THIS IS A HUMBLE MASK PACK 4 ITEM!',
		cost: 'Free'
	},
	{
		name: 'Jack of Cards',
		image: 'card_jack',
		description: [
			'A classic made into a mask. The standard 52-card deck is the most played deck of playing cards used today, and regardless if you are a rookie or professional player, you will most likely recognize this face. A proper poker face-mask.'
		],
		collection: 'E3 2015 Secret Masks',
		type: 'event',
		unlock: 'THIS IS AN E3 2015 SECRET MASK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Queen of Cards',
		image: 'card_queen',
		description: [
			'A classic made into a mask. The standard 52-card deck is the most played deck of playing cards used today, and regardless if you are a rookie or professional player, you will most likely recognize this face. A proper poker face-mask.'
		],
		collection: 'E3 2015 Secret Masks',
		type: 'event',
		unlock: 'THIS IS AN E3 2015 SECRET MASK ITEM!',
		cost: 'Free'
	},
	{
		name: 'King of Cards',
		image: 'card_king',
		description: [
			'A classic made into a mask. The standard 52-card deck is the most played deck of playing cards used today, and regardless if you are a rookie or professional player, you will most likely recognize this face. A proper poker face-mask.'
		],
		collection: 'E3 2015 Secret Masks',
		type: 'event',
		unlock: 'THIS IS AN E3 2015 SECRET MASK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Joker of Cards',
		image: 'card_joker',
		description: [
			'A classic made into a mask. The standard 52-card deck is the most played deck of playing cards used today, and regardless if you are a rookie or professional player, you will most likely recognize this face. A proper poker face-mask.'
		],
		collection: 'E3 2015 Secret Masks',
		type: 'event',
		unlock: 'THIS IS AN E3 2015 SECRET MASK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Dozer Mask',
		image: 'bobblehead_dozer',
		description: [
			'\'Senpai Noticed Me!!! :3\'',
			'A big thank you to community member Far2close for making a hilarious version of an otherwise intimidating dozer face plate.',
			'This mask can only be obtained from a code accompanying the PAYDAY 2 DOZER BOBBLEHEAD bought from the online OVERKILL merchandise store.'
		],
		collection: 'Merchandise',
		type: 'event',
		unlock: 'THIS IS A MERCHANDISE ITEM!',
		cost: 'Free'
	},
	{
		name: 'King of Jesters',
		image: 'king_of_jesters',
		description: [
			'Wearing brightly coloured clothes and eccentric hats in a motley pattern, jesters have always had a place in these parts.',
			'Whether walking on stilts, performing with fire or telling jokes; their sole purpose is to spread joy in our hearts.',
			'However, this is your time to shine so why not put on the mask and spread some joy.',
			'So, pull out your gun, rob your guests and tell them it was all a big ploy.'
		],
		collection: 'PAYDAYCON 2015 Secret Mask',
		type: 'event',
		unlock: 'THIS IS A PAYDAYCON 2015 SECRET MASK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Floating Guy',
		image: 'damned',
		description: [
			'As you walk down the corridor you see this scary, but also somewhat slow guy. Hovering there, ominously. Hard to tell if he\'s a threat or just floating around a bit. But then. A blast breaks the silence and you cease to exist. So next time you meet Floating Guy: come prepared and don\'t take him lightly.'
		],
		collection: 'Humble Mask Pack 5',
		type: 'event',
		unlock: 'THIS IS A HUMBLE MASK PACK 5 ITEM!',
		cost: 'Free'
	},
	{
		name: 'Garreth',
		image: 'jig_01',
		description: [
			'In space you need a trusted companion. As everything from huge monsters on distant planets to space itself is deadly - you need an ally. Not just a hired gun. But instead a friend and a soldier that makes sure that you survive and others don\'t. Be happy that Garreth is on your team. Be happy that he helps you shepherd the herd'
		],
		collection: 'Humble Mask Pack 5',
		type: 'event',
		unlock: 'THIS IS A HUMBLE MASK PACK 5 ITEM!',
		cost: 'Free'
	},
	{
		name: 'The Judge',
		image: 'jig_02',
		description: [
			'\'Those pesky youngsters think they can just run around doing whatever they feel like. Don\'t they understand? I exist for a reason. One must obey me - my ruling and my saying. Escaping the world, just feeling free? What kind of life is that? Riding around on those yellow bird creations. No respect for the empire or the emperor. Disgraceful!\''
		],
		collection: 'Humble Mask Pack 5',
		type: 'event',
		unlock: 'THIS IS A HUMBLE MASK PACK 5 ITEM!',
		cost: 'Free'
	},
	{
		name: 'Party Hat',
		image: 'spk_party',
		description: [
			'Party hats never get old. It\'s an essential accessory to any fun event, be it a festivity of misdeeds or a celebration of moving into a new home. Strap one on and loosen that tie. It\'s party time. Excellent.'
		],
		collection: 'Hoxton\'s Housewarming Party',
		type: 'event',
		unlock: 'THIS IS A HOUSEWARMING PARTY ITEM!',
		cost: 'Free'
	},
	{
		name: 'Mega Clover',
		image: 'pdc16_clover',
		description: [
			'The Mega Clover mask is an evolved version of the original mask. It symbolises transcendence and catharsis.',
			'Thank you for your support.',
			'OVERKILL salutes you!'
		],
		collection: 'PAYDAYCON 2016 Secret Mask',
		type: 'event',
		unlock: 'THIS IS A PAYDAYCON 2016 SECRET ITEM!',
		cost: 'Free'
	},
	{
		name: 'Mega Sydney',
		image: 'swm_sydney',
		description: [
			'The Mega Sydney mask is an evolved version of the original mask. It symbolises transcendence and catharsis.',
			'Thank you for your support.',
			'OVERKILL salutes you!'
		],
		collection: 'Sydney\'s Swim Challenge',
		type: 'event',
		unlock: 'THIS IS A SYDNEY SWIM ITEM!',
		cost: 'Free'
	},
	{
		name: 'The Fedora',
		image: 'fdm',
		description: [
			'The fedora, the very height of fashion and class. Where the line is drawn between boys and men. Carry this classical headgear with the pride and resolve that it deserves. Feel the legacy and tradition of the millions of gentlemen and gangsters that wore a fedora throughout the ages.'
		],
		collection: 'Fedora',
		type: 'event',
		unlock: 'THIS IS AN ALDSTONE\'S HERITAGE ITEM!',
		cost: 'Free'
	},
	{
		name: 'Simon',
		image: 'pbm',
		description: [
			'A wanna-be robber tried to knock over a liquor store, but neglected to properly conceil'
		],
		collection: 'Locke and Load Day 9',
		type: 'event',
		unlock: 'THIS IS A LOCKE AND LOAD ITEM(sic)',
		cost: 'Free'
	},
	{
		name: 'Brandon',
		image: 'panther',
		description: [
			'Brandon has a thing for walking really, really fast.',
			'Brandon is a panther, and panthers are large cats. One funny thing is that only the tiger, lion, leopard and jaguar has the anatomical structure which enables them to roar. Poor panther.'
		],
		collection: 'Hotline Miami',
		type: 'collaboration',
		unlock: '',
		cost: 'Requires ownership of Hotline Miami on Steam.'
	},
	{
		name: 'Don Juan',
		image: 'horse',
		description: [
			'Don Juan loves slamming doors in.',
			'Knock, knock. Who\'s there? It\'s Don Juan. Prepare yourself.',
			'Pro tip: In Hotline Miami, you get 2200 points while performing ground kills against the wall when using this mask.'
		],
		collection: 'Hotline Miami',
		type: 'collaboration',
		unlock: '',
		cost: 'Requires ownership of Hotline Miami on Steam.'
	},
	{
		name: 'Richard',
		image: 'rooster',
		description: [
			'Richard enjoys spending time with different personas and asking questions.',
			'Do you like hurting other people?',
			'Who is leaving messages on your answering machine?',
			'Where are you right now?',
			'Why are we having this conversation?'
		],
		collection: 'Hotline Miami',
		type: 'collaboration',
		unlock: '',
		cost: 'Requires ownership of Hotline Miami on Steam.'
	},
	{
		name: 'Tony',
		image: 'tiger',
		description: [
			'Tony uses his fists of fury to beat the crap of anyone who messes with him.',
			'Tony was born in the 1970s and was of Italian-American nationality. Many people easily recognize Tony. Probably in part because of his Tiger mask, and in part because of his physical brutality when dealing with people he don\'t like.'
		],
		collection: 'Hotline Miami',
		type: 'collaboration',
		unlock: '',
		cost: 'Requires ownership of Hotline Miami on Steam.'
	},
	{
		name: 'Alex',
		image: 'alex',
		description: [
			'One half of a brother and sister duo, Alex. Like swans, they are fierce. Unlike swans, they wield chainsaws and SMG\'s. Like swans, they are closely bonded. Unlike swans, they have a penchant for slaughter.'
		],
		collection: 'Hotline Miami 2',
		type: 'collaboration',
		unlock: 'THIS IS A HOTLINE MIAMI 2 ITEM!',
		cost: 'Requires ownership of Hotline Miami 2: Wrong Number on Steam.'
	},
	{
		name: 'Biker',
		image: 'biker',
		description: [
			'When you\'re a thrill-seeker, and a risk-taker, and a live-for-the-moment kind of heister, it is important to have at least some measure of protection. That also goes if you are a meat-cleaver waving maniac.'
		],
		collection: 'Hotline Miami 2',
		type: 'collaboration',
		unlock: 'THIS IS A HOTLINE MIAMI 2 ITEM!',
		cost: 'Requires ownership of Hotline Miami 2: Wrong Number on Steam.'
	},
	{
		name: 'Corey',
		image: 'corey',
		description: [
			'When you\'re the most delicious lunch on the savannah, you have to be fast, agile and cunning if you\'re going to survive. Corey is all of these things. Zebras are also peaceful, gentle and herbivorous. Corey is none of these things.'
		],
		collection: 'Hotline Miami 2',
		type: 'collaboration',
		unlock: 'THIS IS A HOTLINE MIAMI 2 ITEM!',
		cost: 'Requires ownership of Hotline Miami 2: Wrong Number on Steam.'
	},
	{
		name: 'Jake',
		image: 'jake',
		description: [
			'There\'s no such thing as a good snake, but even among the deadly serpents the cobra is bad news. The broad hood, when seen, is a display of threat - so run. Its long fangs can pierce elephant skin - so run. And just a drop of its venom can fell a dozer - so... look, basically, when you see this, just run. Because they also spit.'
		],
		collection: 'Hotline Miami 2',
		type: 'collaboration',
		unlock: 'THIS IS A HOTLINE MIAMI 2 ITEM!',
		cost: 'Requires ownership of Hotline Miami 2: Wrong Number on Steam.'
	},
	{
		name: 'Richter',
		image: 'richter',
		description: [
			'Like the rat, Richter is a silent killer. It can make its way into just about anywhere - into the most secure banks and apartments. It can avoid detection when it wants, and, once there, spread death like a plague. It kills without remorse. Nothing personal.'
		],
		collection: 'Hotline Miami 2',
		type: 'collaboration',
		unlock: 'THIS IS A HOTLINE MIAMI 2 ITEM!',
		cost: 'Requires ownership of Hotline Miami 2: Wrong Number on Steam.'
	},
	{
		name: 'Tony\'s Revenge',
		image: 'tonys_revenge',
		description: [
			'The near-perfect predator. Tigers are immensely strong, yet fast. They are brutal, yet patient. They can stalk silently, before exploding into violence. The perfect killing machine. Despite this, the tiger is in decline. Poachers prize the tiger penis in traditional medicine. So don\'t get taken alive.'
		],
		collection: 'Hotline Miami 2',
		type: 'collaboration',
		unlock: 'THIS IS A HOTLINE MIAMI 2 ITEM!',
		cost: 'Requires ownership of Hotline Miami 2: Wrong Number on Steam.'
	},
	{
		name: 'Richard Begins',
		image: 'richard_begins',
		description: [
			'This is a clean version of the iconic Richard Returns mask, before it was painted.',
			'Never liked how the original one turned out? This is your chance to change history.'
		],
		collection: 'Hotline Miami 2 Deluxe',
		type: 'collaboration',
		unlock: 'THIS IS A HOTLINE MIAMI 2 DELUXE ITEM!',
		cost: 'Requires ownership of Hotline Miami 2: Wrong Number - Digital Special Edition on Steam.'
	},
	{
		name: 'Richard Returns',
		image: 'richard_returns',
		description: [
			'Is this mask a reflection of a deep-seated psychological problem? Possibly a dissociative identity disorder? Schizophrenia? Trauma of a disturbed psyche? Or is it not a reflection at all, but instead something to cause them?'
		],
		collection: 'Hotline Miami 2 Deluxe',
		type: 'collaboration',
		unlock: 'THIS IS A HOTLINE MIAMI 2 DELUXE ITEM!',
		cost: 'Requires ownership of Hotline Miami 2: Wrong Number - Digital Special Edition on Steam.'
	},
	{
		name: 'Hothead',
		image: 'hothead',
		description: [
			'With the rage of fearsome volcano, the hostile Hothead lights up the night with blazing speed! What ignites his frenzied flame? From what does the raging bull run? Very few have caought up close enough to ask, and even fewer have gotten a coherent response!'
		],
		collection: 'SpeedRunners',
		type: 'collaboration',
		unlock: 'THIS IS A SPEEDRUNNERS ITEM!',
		cost: 'Requires ownership of SpeedRunners on Steam.'
	},
	{
		name: 'SpeedRunner',
		image: 'speedrunner',
		description: [
			'It\'s time for a speedy run! SpeedRunner is the people\'s champ in New Rush City. Running, sliding, swinging his way toward crime and those in need, he accepts no less than first place. SpeedRunner\'s got the need... for running!'
		],
		collection: 'SpeedRunners',
		type: 'collaboration',
		unlock: 'THIS IS A SPEEDRUNNERS ITEM!',
		cost: 'Requires ownership of SpeedRunners on Steam.'
	},
	{
		name: 'The Falcon',
		image: 'falcon',
		description: [
			'Life\'s not all about speed and running! With his livelihood destroyed from a speedy accident, he became the hero that New Rush City truly deserves. Flacon vows to take down SpeedRunner and get the city back. Is Falcon the only one sane in a world gone mad- or is he a man in a chicken suit?'
		],
		collection: 'SpeedRunners',
		type: 'collaboration',
		unlock: 'THIS IS A SPEEDRUNNERS ITEM!',
		cost: 'Requires ownership of SpeedRunners on Steam.'
	},
	{
		name: 'Unic',
		image: 'unic',
		description: [
			'Clop Clop- who\'s there? It\'s Unic! In the dark streets of New Rush City, what could shine brighter than an honest smile? Galloping in meadows, and sharing time with his friends, Unic is dedicated to showing the world\'s positive side, A pink leotard and purple boots make this speedy runner truly unique!'
		],
		collection: 'SpeedRunners',
		type: 'collaboration',
		unlock: 'THIS IS A SPEEDRUNNERS ITEM!',
		cost: 'Requires ownership of SpeedRunners on Steam.'
	},
	{
		name: 'Feeder',
		image: 'dbd_02',
		description: [
			'Feeder has dislodged his jaw with one sole purpose: to be able to swallow a whole, human heart. When he roams the night he seeks out teens with strong hearts that can sustain him. So if you spot a corpse with a ripped chest - run.'
		],
		collection: 'Dead by Daylight Deluxe',
		type: 'collaboration',
		unlock: 'THIS IS A DEAD BY DAYLIGHT DELUXE ITEM!',
		cost: 'Requires ownership of Dead by Daylight Deluxe Edition on Steam.'
	},
	{
		name: 'Dendron',
		image: 'dbd_03',
		description: [
			'A dark forest is scary to anyone, no matter how old you are. You fear whatever is in it, and the things lurking in the shadows. But you seldom think of the actual trees. You never think of Dendron. And when you do, it\'s already too late. Dendron strikes without mercy. So fear not what\'s behind the trees, but instead the trees.'
		],
		collection: 'Dead by Daylight Deluxe',
		type: 'collaboration',
		unlock: 'THIS IS A DEAD BY DAYLIGHT DELUXE ITEM!',
		cost: 'Requires ownership of Dead by Daylight Deluxe Edition on Steam.'
	},
	{
		name: 'Ameonna',
		image: 'sha_01',
		description: [
			'Mighty horned demon. Vengeful, weeping destroyer. Do not arouse her anger.'
		],
		collection: 'Shadow Warrior 2 Collaboration',
		type: 'collaboration',
		unlock: 'THIS IS A SHADOW WARRIOR 2 ITEM!',
		cost: 'Free'
	},
	{
		name: 'Co-Cop Ninja',
		image: 'sha_02',
		description: [
			'Strike fast, strike hard, strike silently. You will leave even the cloakers sulking in shame.'
		],
		collection: 'Shadow Warrior 2 Collaboration',
		type: 'collaboration',
		unlock: 'THIS IS A SHADOW WARRIOR 2 ITEM!',
		cost: 'Free'
	},
	{
		name: 'Hata Mari',
		image: 'sha_04',
		description: [
			'A fast and agile killer, sending blades flying through the air. Always ready to strike. A popular killer with many fans.'
		],
		collection: 'Shadow Warrior 2 Collaboration',
		type: 'collaboration',
		unlock: 'THIS IS A SHADOW WARRIOR 2 ITEM!',
		cost: 'Free'
	},
	{
		name: 'Thorntail',
		image: 'sha_03',
		description: [
			'Be an aggressive, merciless, swarming menace. As you roll into town, death follows in the form of fire.'
		],
		collection: 'Shadow Warrior 2 Collaboration',
		type: 'collaboration',
		unlock: 'THIS IS A SHADOW WARRIOR 2 ITEM!',
		cost: 'Free'
	},
	{
		name: 'DOME',
		image: 'ant_04',
		description: [
			'Dome was the centerpiece of a grand scheme, planned and set in motion by the other side. A simple robot, assembled to restore/reassemble/rearrange, Dome was on mission to reassemble a government building that got destroyed by the enemy. A stealth attack - to take out Commander Wasp - was taking place near the location as the Commander\'s car drove passed the debris. Dome saw the coming attack and sacrificed himself to protect the Commander by throwing himself in front of the car, making it steer away from the blast. Wasp survived, Dome did not.'
		],
		collection: 'Antisphere Collaboration',
		type: 'collaboration',
		unlock: 'THIS IS AN ANTISPHERE ITEM!',
		cost: 'Requires ownership of Antisphere on Steam.'
	},
	{
		name: 'DRONE',
		image: 'ant_06',
		description: [
			'Engineered to be as lethal as robotly possible. Drone was solely responsible for the Great Purge. Forever imprinted in all minds and historical dataservers. Drone had the skills needed to go beyond what was expected by a \'grunt\'. Someone who seemed disposable. but would prove invaluable. The Great Purge turned the war: sleeper cells got exposed, robots got disconnected, and the Hive Mind lost thousands of zettabytes. Drone became a statue to be gazed upon in Ming Ji Memorial Park.'
		],
		collection: 'Antisphere Collaboration',
		type: 'collaboration',
		unlock: 'THIS IS AN ANTISPHERE ITEM!',
		cost: 'Requires ownership of Antisphere on Steam.'
	},
	{
		name: 'INTERCEPTOR',
		image: 'ant_01',
		description: [
			'Interceptor model BX-99 was built to keep \'things in order\'. A mission with a lof to interpret. Roaming the streets, making sure that civilians are safe and that things are \'OK\'. This Interceptor took things too far as a situation occurred near a assembly factory. Some civilians came to harm, others destroyed, ammo slugs filled the air, and Interceptor did what it thought was absolutely necessary to not obstruct the assembly factory. Interceptor BX-99 with serial number 151010130807 was later disassembled.'
		],
		collection: 'Antisphere Collaboration',
		type: 'collaboration',
		unlock: 'THIS IS AN ANTISPHERE ITEM!',
		cost: 'Requires ownership of Antisphere on Steam.'
	},
	{
		name: 'MOTH',
		image: 'ant_03',
		description: [
			'Every war has its traitor. Moth was one of them. A sentinel robot assembled to retrieve information - by any means necessary. But hierarchy and power are often coveted. Wars breed corruption, and Moth followed his logic and switched sides - causing millions of robots to disconnect. Celebrated by one side and hated by another - Moth came to be one of the pawns that turned the war.'
		],
		collection: 'Antisphere Collaboration',
		type: 'collaboration',
		unlock: 'THIS IS AN ANTISPHERE ITEM!',
		cost: 'Requires ownership of Antisphere on Steam.'
	},
	{
		name: 'RAPTOR',
		image: 'ant_08',
		description: [
			'Raptor was a fighter pilot. Hooked into the central hub on each plane he flew, he steered with certainty. It became a matter of accumulated knowledge. Even though all pilots got the same software installed - an AI learns. And somehow, Raptor managed to stay alive enough to keep his knowledge. The Hive Mind was off limits to fighter pilots, as they could be captured and hacked when they crossed into enemy territory. But Raptor learned to be the best at taking out enemy bases without hesitation.'
		],
		collection: 'Antisphere Collaboration',
		type: 'collaboration',
		unlock: 'THIS IS AN ANTISPHERE ITEM!',
		cost: 'Requires ownership of Antisphere on Steam.'
	},
	{
		name: 'VIZOR',
		image: 'ant_02',
		description: [
			'Robot wars are easy to make fun of. Dead things that fight other dead things. But as the AI evolved, things turned real. Soldiers like Vizor played a crucial role in the mayhem orchestrated by long dead humans. Humans who pushed the button, but failed to experience the consequences. As robots turned against robots, soldiers like Vizor rose, and those with a heartbeat became a memory.'
		],
		collection: 'Antisphere Collaboration',
		type: 'collaboration',
		unlock: 'THIS IS AN ANTISPHERE ITEM!',
		cost: 'Requires ownership of Antisphere on Steam.'
	},
	{
		name: 'SKULL',
		image: 'ant_05',
		description: [
			'Every war requires executioners. Not a simple soldier, but someone who can take a life with a threatening demeanor. Someone working for the \'system\', who blindly follow orders. Skull was one of those. Someone who, tirelessly disconnected robot after robot, war criminals and everyone else deemed \'dangerous\' to the \'cause\'.'
		],
		collection: 'Antisphere Collaboration',
		type: 'collaboration',
		unlock: 'THIS IS AN ANTISPHERE ITEM!',
		cost: 'Free'
	},
	{
		name: 'WASP',
		image: 'ant_07',
		description: [
			'Commander Wasp sat on incredible technical capacity. Strength and intelligence was by far superior to the other side. A prototype that would have the needed circuits to outsmart the opposing forces. But an untested prototype. Something rushed. Something that was too experimental. Madness strikes circuit boards, but we refer to it as a \'bug\'. Killing his fellow troops in a rage of paranoia - Commander Wasp became a criminal of war.'
		],
		collection: 'Antisphere Collaboration',
		type: 'collaboration',
		unlock: 'THIS IS AN ANTISPHERE ITEM!',
		cost: 'Free'
	},
	{
		name: 'The Bullet',
		image: 'eng_01',
		description: [
			'Equipped with his Blasphemy sword of infinite ammo the Bullet'
		],
		collection: 'Enter the Gungeon',
		type: 'collaboration',
		unlock: 'THIS IS AN ENTER THE GUNGEON ITEM!',
		cost: 'Free'
	},
	{
		name: 'The Cultist',
		image: 'eng_03',
		description: [
			'Always being referred to as \'Number 2\' the Cultist'
		],
		collection: 'Enter the Gungeon',
		type: 'collaboration',
		unlock: 'THIS IS AN ENTER THE GUNGEON ITEM!',
		cost: 'Free'
	},
	{
		name: 'The Marine',
		image: 'eng_04',
		description: [
			'The Marine was a guard stationed at Primerdyne R&amp;D when an experiment went awry and unleashing'
		],
		collection: 'Enter the Gungeon',
		type: 'collaboration',
		unlock: 'THIS IS AN ENTER THE GUNGEON ITEM!',
		cost: 'Free'
	},
	{
		name: 'The Robot',
		image: 'eng_02',
		description: [
			'The Robot was an honored member of the killbot army. When commanded by his master, EMP-R0R to kill the leader of the human resistance, he broke protocol, failing to eliminate humanity.'
		],
		collection: 'Enter the Gungeon',
		type: 'collaboration',
		unlock: 'THIS IS AN ENTER THE GUNGEON ITEM!',
		cost: 'Free'
	},
	{
		name: 'Futuras',
		image: 'rvd_02',
		description: [
			'Look no further for a bad ass cherry to put on top of your Ice Cream of Minigun mayhem.'
		],
		collection: 'Reservoir Dogs',
		type: 'collaboration',
		unlock: '\'THIS IS A RESERVOIR DOGS ITEM!',
		cost: 'Free'
	},
	{
		name: 'Producers',
		image: 'rvd_01',
		description: [
			'These frames harken back to a time when moon-landings were envisioned, all dreams were possible and people all dressed a little nicer.'
		],
		collection: 'Reservoir Dogs',
		type: 'collaboration',
		unlock: '\'THIS IS A RESERVOIR DOGS ITEM!',
		cost: 'Free'
	},
	{
		name: 'The Dons',
		image: 'rvd_01',
		description: [
			'True class is eternal when accepted by scoundrels and heroes alike.'
		],
		collection: 'Reservoir Dogs',
		type: 'collaboration',
		unlock: '\'THIS IS A RESERVOIR DOGS ITEM!',
		cost: 'Free'
	},
	{
		name: 'Dallas',
		image: 'dallas',
		description: [
			'The mask that everyone fears.'
		],
		collection: 'Infamous (Card Drops)',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: '$48,750'
	},
	{
		name: 'Chains',
		image: 'chains',
		description: [
			'The mask of Chains.'
		],
		collection: 'Infamous (Card Drops)',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: '$48,750'
	},
	{
		name: 'Hoxton',
		image: 'hoxton',
		description: [
			'The mask of Hoxton.'
		],
		collection: 'Infamous (Card Drops)',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: '$48,750'
	},
	{
		name: 'Wolf',
		image: 'wolf',
		description: [
			'The mask of Wolf.'
		],
		collection: 'Infamous (Card Drops)',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: '$48,750'
	},
	{
		name: 'Dallas Begins',
		image: 'dallas_clean',
		description: [
			'This is a clean version of the iconic Dallas mask,before it was painted.',
			'Never liked how the original one turned out? This is your chance to change history.'
		],
		collection: 'Infamous (Card Drops)',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: '$67,500'
	},
	{
		name: 'Chains Begins',
		image: 'chains_clean',
		description: [
			'This is a clean version of the iconic Chains mask, before it was painted.',
			'Never liked how the original one turned out? This is your chance to change history.'
		],
		collection: 'Infamous (Card Drops)',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: '$61,250'
	},
	{
		name: 'Hoxton Begins',
		image: 'hoxton_clean',
		description: [
			'This is a clean version of the iconic Hoxton mask,before it was painted.',
			'Never liked how the original one turned out? This is your chance to change history.'
		],
		collection: 'Infamous (Card Drops)',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: '$61,250'
	},
	{
		name: 'Wolf Begins',
		image: 'wolf_clean',
		description: [
			'This is a clean version of the iconic Wolf mask,before it was painted.',
			'Never liked how the original one turned out? This is your chance to change history.'
		],
		collection: 'Infamous (Card Drops)',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: '$61,250'
	},
	{
		name: 'Anonymous',
		image: 'anonymous',
		description: [
			'Don the mask, become anonymous and do as you wish.',
			'Do it because you mean it, do it because you were told to, or do it for the lulz.',
			'Do all the things that regular society will not allow you. Like robbing a bank.'
		],
		collection: 'Infamous (Card Drops)',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: '$45,000'
	},
	{
		name: 'Cthulhu',
		image: 'cthulhu',
		description: [
			'A mask with a hideous appearance, the very face of terror.',
			'They say that an evil beast has many names. That must be why this beast is known as Tulu, Clulu, Clooloo, Cthulu, C\'thulhu, Cighulu, Cathulu, C\'thlu among other names,',
			'Part human, part octopus and part dragon, this is one of the greatest evils known to man.'
		],
		collection: 'Infamous (Card Drops)',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: '$55,000'
	},
	{
		name: 'Dillinger Death Mask, The',
		image: 'dillinger_death_mask',
		description: [
			'John Herbert Dillinger was a famous American bank robber.',
			'His gang robbed two dozen banks and even four police stations.',
			'Dillinger himself escaped jail twice and was widely known as one of the meanest motherfuckers in the depression-era United States.'
		],
		collection: 'Infamous (Card Drops)',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: '$61,250'
	},
	{
		name: 'Grin, The',
		image: 'grin',
		description: [
			'There once was a man and his brother.',
			'Together, they owned a successful company.',
			'One day, the man and his brother temporarily only had one client. The client got cold feet and wanted out. Rather than simply pulling out and having to pay a fine for breach of contract, the client starved the man and his brother\'s company to death.',
			'The Man and his brother lost everything, and it is said that this mask was the very image of the man\'s facial expression the day that he went mad.'
		],
		collection: 'Infamous (Card Drops)',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: '$55,000'
	},
	{
		name: 'Somen Mempo',
		image: 'samurai',
		description: [
			'In ancient Japan, samurai warriors wore somen masks to protect themselves in war and to incite fear in their enemies. Somen masks were tied to the large kabuto helmets, making the samurai look like demons from jigoku.',
			'No one knows what fierce and ruthless warrior wore this intimidating mask in the past. Now however, it is ready for battle once more.',
			'\'Boku no ikari wo osoreru\''
		],
		collection: 'Infamous (Achievement)',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked via \'I Will Walk Faceless Among Men\''
	},
	{
		name: 'Hoxton Reborn',
		image: 'old_hoxton',
		description: [
			'The Hoxton Reborn mask is a mask that Hoxton made while in prison. For him, it\'s a symbol of everything he experienced in the past years while the PAYDAY gang kept on going without him. No one knows how his experiences in prison has changed him, and he won\'t talk about it when asked.',
			'All we can assume is that he has been changed forever, and that he is reborn into... Something different.'
		],
		collection: 'Infamous (Achievement)',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked via \'Why Don’t We Just Use a Spoon?\''
	},
	{
		name: 'The Hard Hat',
		image: 'hectors_helmet',
		description: [
			'When you rat out the Payday gang, you need to expect some form of retribution. And the gang aren\'t big on wagging fingers and a stern telling off. You can expect bullets, and plenty of them. This hard hat is cold school riot cop tech - heavy iron, fronted with reinforced glass. Good luck getting through it.'
		],
		collection: 'Infamous (Achievement)',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked via \'I\'m An Avenger!\''
	},
	{
		name: 'Rad Mutant',
		image: 'grendel',
		description: [
			'Genetic mutation is the key to our evolution. Assuming that our evolution is of the green, scaly, homicidal and irradiated kind.',
			'This mask is an achievement reward.It can\'t drop during a PAYDAY and can\'t be sold. It can be returned to your mask stash for free, but any pattern, color or material as well as the customization fee to put these together will be lost.'
		],
		collection: 'Infamous (Achievement)',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked via \'They Don’t Pay Us Enough\''
	},
	{
		name: 'Mega Rust',
		image: 'mrm',
		description: [
			'The Mega Rust mask is an evolved version of the original mask. It symbolises transcendence and catharsis.',
			'Thank you for your support.',
			'OVERKILL salutes you!'
		],
		collection: 'Infamous (Achievement)',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked via \'A Vast Amount of Unlawful Transgressions\''
	},
	{
		name: 'Mega Sangres',
		image: 'mega_max',
		description: [
			'As the drunken tale goes, the gods themselves came together in Xibala to forge this mask, which has been tempered in the blood of 1000 warriors and cleansed tequila made from the tears of 1000 virgins. Well, that\'s what Sangres says. And really, who\'s gonna argue with him?',
			'Thank you for your support.',
			'OVERKILL salutes you!'
		],
		collection: 'Infamous (Achievement)',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked via \'Only For Us Naughty Heisters\''
	},
	{
		name: 'StarVR',
		image: 'starvr',
		description: [
			'Real life is dirty, uncomfortable, sticky, sweaty, stinky, it tastes bad and leaves you old and broken. Screw that. The StarVR Headset lets you immerse yourself in a virtual world of incredible realism.'
		],
		collection: 'Infamous (Other)',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	},
	{
		name: 'Mega Death',
		image: 'mdm',
		description: [
			'Death can be the end but it can also be a beginning, a transcendence and catharsis. And Mega Death has a million times the power of Death.'
		],
		collection: 'Infamous (Other)',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	},
	{
		name: 'Mega Duke',
		image: 'mmh',
		description: [
			'Aristole, Plato, Confucius, Michelangelo, DaVinci, Newton, Galileo... artists and thinkers forever engraved in history. And somewhere in that history, the place of a heister is assured. Contained herein is their essence, so magnificent in combination that the very surface of the mask can barely contain it.'
		],
		collection: 'Infamous (Other)',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	},
	{
		name: 'Omen',
		image: 'maw_01',
		description: [
			'The mask is made from ancient stone, with carvings from each previous owner, and a symbol that radiates immense power. As the writing on the edge suggests, it is the beginning of the end for anyone who opposes the wearer.'
		],
		collection: 'Infamous (Other)',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	},
	{
		name: 'Bonnie',
		image: 'bonnie',
		description: [
			'Few nations have contributed to humanity as Scotland has. In every field of endeavor - science, arts, cuisine - it is the people of this blessed land that give freely and generously. With this mask, Bonnie is determined to reverse this trend.'
		],
		collection: 'Bonnie Character Pack',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	},
	{
		name: 'Bonnie Begins',
		image: 'bonnie_begins',
		description: [
			'This is a clean version of the iconic Bonnie mask, before it was painted.',
			'Never liked how the original one turned out? This is your chance to change history.'
		],
		collection: 'Bonnie Character Pack',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	},
	{
		name: 'Hoxton Reborn Begins',
		image: 'old_hoxton_begins',
		description: [
			'This is a clean version of the iconic Hoxton Reborn mask, before it was painted.',
			'Never liked how the original one turned out? This is your chance to change history.'
		],
		collection: 'Hoxton Revenge',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	},
	{
		name: 'Bodhi',
		image: 'bodhi',
		description: [
			'Masks have always been used in spiritual traditions that relate to deities, the divine and those chasing the apotheosis of the self. Bodhi\'s mask reflects the man behind it. Strong, cunning, single-minded and centered.'
		],
		collection: 'Bodhi Character Pack',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	},
	{
		name: 'Bodhi Begins',
		image: 'bodhi_begins',
		description: [
			'This is a clean version of the iconic Bodhi mask, before it was painted.',
			'Never liked how the original one turned out? This is your chance to change history.'
		],
		collection: 'Bodhi Character Pack',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	},
	{
		name: 'Jimmy',
		image: 'jimmy_duct',
		description: [
			'Jimmy hasn\'t really made many masks before he made his signature mask - and it shows. His mask design captures his free spirit and his disregard to things as appearance, planning and such. Good is good enough for Jimmy, he doesn\'t get stuck in ideas and wants to move forward at all times.'
		],
		collection: 'Jimmy Character Pack',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	},
	{
		name: 'The White Death',
		image: 'jimmy',
		description: [
			'Jimmys second attempt at making a mask went much better - that\'s because he got some help from Gage. It represents the Grim Reaper himself if he was coked up. The mask captures both the crazy and deadly sides of Jimmy, aimed to sending fear into his enemies.'
		],
		collection: 'Jimmy Character Pack',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	},
	{
		name: 'Collateral',
		image: 'jw_shades',
		description: [
			'These shades belonged to a colleague of John\'s that he was hired to kill.',
			'It started like any other night. Only this night, he got a contract to kill another contract killer who was making rounds that day. John knew he had five stops to make and was using the same taxi cab between all of them.',
			'In the end, he didn\'t even need to do the deed himself - he was already dead when he found him.'
		],
		collection: 'John Wick',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	},
	{
		name: 'Sangres',
		image: 'max',
		description: [
			'The skull is Death, Sangres\' faithful companion throughout his career. The gold tooth is the coin that has been paid. The kill counter represents his past as a hitman, the blood-red ruby the new wealth he\'s seeking in the US. Sangres\' name spreaks of the many bloody episodes in his life, and that red blood is also present on his mask.'
		],
		collection: 'Sangres Character Pac',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	},
	{
		name: 'Sangres Begins',
		image: 'max_begins',
		description: [
			'This is a clean version of the iconic Sangres mask, before it was painted.'
		],
		collection: 'Sangres Character Pac',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	},
	{
		name: 'Duke',
		image: 'myh',
		description: [
			'Duke is a man of culture, virtue and stone-hard composure. Thus his mask has been modeled of of the',
			'A big draw for Duke is his love for mystery- you never really know what\'s inside the safe until you open it, or behind the painting until you take it out of the frame. And with the Payday gang, the biggest mystery may be just around the corner...'
		],
		collection: 'Duke Character Pack',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	},
	{
		name: 'Duke Begins',
		image: 'myh_begins',
		description: [
			'This is a clean version of the iconic Duke mask, before it was painted.'
		],
		collection: 'Duke Character Pack',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	},
	{
		name: 'Joy',
		image: 'joy',
		description: [
			'Bring back disco in style and confuse the hell out of your enemies when they gaze into your fabulously flashy face.'
		],
		collection: 'Joy Character Pack',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	},
	{
		name: 'Joy Begins',
		image: 'joy_begins',
		description: [
			'Flair and flash always have to start somewhere. Sometimes it\'s a thumping white basline,'
		],
		collection: 'Joy Character Pack',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	},
	{
		name: 'Normal Skull, The',
		image: 'dnm',
		description: [
			'A strange thing, the human skull. It\'s both simple and beautiful. Humans can often recognize a human skull, even if it\'s only partially shown. The human brain even has a special region for it.',
			'You finished all heists on the Normal difficulty? What are you, some kind of gangster? Maybe this mask will suit you after all.'
		],
		collection: 'Difficulty Skulls',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked via \'Criminal Origins\''
	},
	{
		name: 'Hard Skull, The',
		image: 'skullhard',
		description: [
			'A strange thing, the human skull. Humans can often recognize a human skull, even if it\'s only partially shown. The human brain even has a specific region for it.',
			'You finished all heists on the Hard difficulty? What are you, some kind of pro? Maybe this mask will suit you after all.'
		],
		collection: 'Difficulty Skulls',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked via \'Tough Act to Follow\''
	},
	{
		name: 'Very Hard Skull, The',
		image: 'skullveryhard',
		description: [
			'A strange thing, the human skull. Not that this skull looks that human anymore. Humans can often recognize a human skull, even if it\'s only partially shown. The human brain even has a specific region for it. There\'s something strange with this skull though.',
			'You finished all heists on the Very Hard difficulty? What are you, some kind of monster? Maybe this mask will suit you after all.'
		],
		collection: 'Difficulty Skulls',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked via \'Shit Just Got Real\''
	},
	{
		name: 'OVERKILL Skull, The',
		image: 'skulloverkill',
		description: [
			'Holy Shit - what is this new devilry? Humans can often recognize a human skull, even if it\'s only partially shown. The human brain even has a specific region for it. This doesn\'t look like a human skull however.',
			'You finished all heists on the OVERKILL difficulty? What are you, some kind of pit fiend? Maybe this mask will suit you after all.'
		],
		collection: 'Difficulty Skulls',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked via \'Completely OVERKILL!\''
	},
	{
		name: 'Mayhem Skull, The',
		image: 'gitgud_e_wish',
		description: [
			'Your full potential is close. Embrace the change. Humans can often recognize a human skull, even if it\'s only partially shown. The human brain even has a specific region for it. This doesn\'t look like a human skull however, but you don\'t have to worry about it.',
			'You finished all heists on Mayhem difficulty? What are you, some kind of beast? Maybe this mask will suit you after all.'
		],
		collection: 'Difficulty Skulls',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked via \'Master of Mayhem\''
	},
	{
		name: 'Death Wish Skull, The',
		image: 'skulloverkillplus',
		description: [
			'OVERKILL salutes you, bringer of death, slayer of law enforcers and finisher of difficulties. Humans can often recognize a human skull, even if only partially shown. The human brain even has a specific region for it. This isn\'t a human skull however, this is something completely different.',
			'You finished all heists on the Death Wish difficulty? What are you, some kind of demon? Maybe this mask will suit you after all.'
		],
		collection: 'Difficulty Skulls',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked via \'OVERKILL Salutes You!\''
	},
	{
		name: 'Death Sentence Skull, The',
		image: 'gitgud_sm_wish',
		description: [
			'DEMON! The Humans can often recognize a human skull, even if it\'s only partially shown. The human brain even has a specific region for it. This is definitely not a human skull anymore. This is what happens when you summon your demonic powers to get good.',
			'We at OVERKILL are surprised, baffled and genuinely impressed. You did it. You are among a certain few who stuck with it and actually finished the hardest difficulty we could think of. You fought, you suffered and you persevered. You have our eternal respect, you ruler of demons.'
		],
		collection: 'Difficulty Skulls',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked via \'A Heister of Legend\''
	},
	{
		name: 'One Down Skull, The',
		image: 'ggac_od_t2',
		description: [
			'So arrives the Harbinger! Humans can often recognize a human skull, even if it\'s only partially shown. The brain even has a special region for it. This is definitely not a human skull, it belongs to a demon of carnage.',
			'Look ye into the sky, as fire rains down from the heavens, followed by molten gold, to cover the land in a glittering metal blanket of awesome to illuminate your greatness as a heister. With every bar that is raised, you step up to the challenge, and have so done yet again. Construction of a throne is underway here at the OVERKILL office, so that we may bow to and worship your utterly divine skills at not getting beaten by anything we throw at you.'
		],
		collection: 'Difficulty Skulls',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked via \'One More Down, No More To Go\''
	},
	{
		name: 'Classy Monocle',
		image: 'skm_03',
		description: [
			'If only this magnificent seeing glass contained a monolens, but alas it will only help you look classically stylish while typing the correct key combo on a vault.'
		],
		collection: 'Holdout',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free (Wave 5)'
	},
	{
		name: 'Fancy Top Hat',
		image: 'skm_01',
		description: [
			'There is something for the distinguished heister in everyone. This vintage hat, made by famous hatters in New York, is sure to distract the gaze of any law enforcement officer.'
		],
		collection: 'Holdout',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free (Wave 5)'
	},
	{
		name: 'Spirit Fox',
		image: 'smo_02',
		description: [
			'In the woods of Okinawa, legends say there lives a spirit of a fox with a head of flame. Being seen by this fox is said to be a blessing, but being seen by a heister wearing this mask, is probably not!'
		],
		collection: 'Holdout',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free (Wave 5)'
	},
	{
		name: 'The Classically Fancy Super Villain',
		image: 'skm_04',
		description: [
			'Ultimate old-school evil. Whether combined with a tail coat or body armor, this set will tell all that you mean business, in the most criminal sense.'
		],
		collection: 'Holdout',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free (Wave 5)'
	},
	{
		name: 'The Super Villain Moustache',
		image: 'skm_02',
		description: [
			'Wax on, wax off. Twirl it to your heart\'s content as you disappear into the foggy night with your bounty and laugh.'
		],
		collection: 'Holdout',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free (Wave 5)'
	},
	{
		name: 'Arcade Simian',
		image: 'smo_05',
		description: [
			'When wearing this mask, you can always pretend that the grenades you\'re lobbing at the cops are barrels. They won\'t appreciate it, but it might break up the monotony of blowing things up!'
		],
		collection: 'Holdout',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free (Wave 5)'
	},
	{
		name: 'Black Bird',
		image: 'smo_06',
		description: [
			'Oh, how you can ponder, all rich and sweary, over a quaint and not-forgotten pile of cash. Quote, The Heister.'
		],
		collection: 'Holdout',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free (Wave 5)'
	},
	{
		name: 'Chibi Kitteh',
		image: 'smo_01',
		description: [
			'If a heister walks down the street wearing this mask, the world knows he\'s not afraid of anything, nine lives be damned!'
		],
		collection: 'Holdout',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free (Wave 5)'
	},
	{
		name: 'Jamaican Nightmare',
		image: 'smo_04',
		description: [
			'Some Voodoo priests claim to know the secret of eternal life. There\'s no guarantee that wearing this mask will grant it, but it\'ll likely scare the crap out of your enemies. And it might get you invited to a Jamaican barbeque.'
		],
		collection: 'Holdout',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free (Wave 5)'
	},
	{
		name: 'Poly Goat',
		image: 'smo_03',
		description: [
			'Satanic worshippers from a video game in the 1990s called and want their low-poly goat back. Are you gonna give it, or just stick it to \'em?'
		],
		collection: 'Holdout',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free (Wave 5)'
	},
	{
		name: 'Mega Optimist Prime',
		image: 'skm_05',
		description: [
			'Robot Overlords from the Future rejoice! For thy leader has come, and is the bearer of many positively charged particles.'
		],
		collection: 'Holdout',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free (Wave 9)'
	},
	{
		name: 'Mega Pirate',
		image: 'skm_07',
		description: [
			'Skulltooth the Terrible, ye most mystical of Pirate Kings, will shiver the timbers of any law enforcement officers present. Yarr!'
		],
		collection: 'Holdout',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free (Wave 9)'
	},
	{
		name: 'Mega Vlad Armor',
		image: 'skm_08',
		description: [
			'Rumor has it that this helmet was found in an abandoned Russian nuclear facility and that its wearer will gain super powers over time. But it\'s just a rumor.'
		],
		collection: 'Holdout',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free (Wave 9)'
	},
	{
		name: 'Mega War',
		image: 'skm_06',
		description: [
			'With this helmet, make the cops think they are being assaulted by the God of All 80s Metal Bands!'
		],
		collection: 'Holdout',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free (Wave 9)'
	},
	{
		name: 'Mega Anubis',
		image: 'smo_11',
		description: [
			'Bark like an Egyptian god and stand guard for eternity as you watch over and protect your piles of loot.'
		],
		collection: 'Holdout',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free (Wave 9)'
	},
	{
		name: 'Mega Biker',
		image: 'smo_07',
		description: [
			'Any child of the 1980s would kill for this mask. Show everyone who really rules the neon highways.'
		],
		collection: 'Holdout',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free (Wave 9)'
	},
	{
		name: 'Mega Krampus',
		image: 'smo_08',
		description: [
			'Devils and demons alike will tremble in awe as they behold the glory of any heister that chooses to don this mask.'
		],
		collection: 'Holdout',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free (Wave 9)'
	},
	{
		name: 'Mega Robber Fly',
		image: 'smo_12',
		description: [
			'Make both cops and civillians'
		],
		collection: 'Holdout',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free (Wave 9)'
	},
	{
		name: 'Mega Smiley',
		image: 'smo_09',
		description: [
			'See the torturously happy grin, the rotting golden teeth, and the deeply mesmerizing glare of this ultimate tribute to the Tragic Clown.'
		],
		collection: 'Holdout',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free (Wave 9)'
	},
	{
		name: 'Mega Tiara',
		image: 'smo_10',
		description: [
			'Prom queens ain\'t got nothin\' on the heister who wears this shiny piece of forehead decor. Rumor has it that the gemstones all came from a Perseid meteorite that fell to Earth in the 1800s.'
		],
		collection: 'Holdout',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free (Wave 9)'
	},
	{
		name: 'Secret Chains Mask',
		image: 'sms_02',
		description: [
			'Chains never took the search for the Secret too seriously, often calling it a bunch of \'weird mumbo jumbo\'. As a practical man, with real-world sensibilities, he has however remained steadfast and loyal, trusting in his relationship with Bain.'
		],
		collection: 'The Secret',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	},
	{
		name: 'Secret Dallas Mask',
		image: 'sms_01',
		description: [
			'Dallas sometimes felt Bain held out on him regarding certain details of the Secret. After the job in the First World Bank, Bain never did explain why the Mayan gold was so important. The Payday gang is a family, and trust isn\'t always bullet-proof, but Dallas has come to understand Bain\'s need for secrecy now, at the end. And his wisdom let them both get what they each wanted.'
		],
		collection: 'The Secret',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	},
	{
		name: 'Secret Hoxton Mask',
		image: 'sms_03',
		description: [
			'Hoxton left the Old Country to get his Payday in the new. When Bain first told him about the Secret, he fancied the idea of going after ancient items for their potential value, never really caring whether or not the legendary power Bain talked about was real or not.'
		],
		collection: 'The Secret',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	},
	{
		name: 'Secret Wolf Mask',
		image: 'sms_04',
		description: [
			'Wolf has always been a violent and unpredictable ally, so initially Bain was unsure about how much about the hunt for the Secret he should tell him. Eventually, his worth became clear, but when Bain eventually revealed his quest, Wolf went crazy over it. Not only would he reap the golden benefits, he also loves a good conspiracy.'
		],
		collection: 'The Secret',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	},
	{
		name: 'Guardian of Kings',
		image: 'scm_01',
		description: [
			'Bast, consort of Anubis, worshipped by the ancient Egyptians as a feline warrior, but in fact a much older force in the world. Blessed by her power, the Guardians of The Ark of the Watcher don her mask in tribute as they carry out their unending task. It is said that mortals who wear her visage are blessed with uncanny luck, and have the ability to trick death when it comes calling.'
		],
		collection: 'The Secret',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	},
	{
		name: 'Guardian of Watchers',
		image: 'scm_02',
		description: [
			'Anubis, Warrior Guardian of the underworld and consort of Bast, an ancient power born at the dawn of time itself. The Guardians of the Ark of the Watcher are strengthened by his wisdom and ferocity, as they hold closed the gates through which no unworthy soul may enter. Mortals strong enough to defeat this ancient warrior may don his mask, and perhaps catch a glimpse of the power it holds.'
		],
		collection: 'The Secret',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	},
	{
		name: 'Egyptian Wolf Mask',
		image: 'sms_06',
		description: [
			'Viciousness, denial of death, and gold- all aspects of how the ancient Egyptians prospered and conquered, in defiance of all. So it is somehow fitting that Wolf should don a mask honoring that ancient culture.'
		],
		collection: 'The Secret',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	},
	{
		name: 'Mesoamerican Dallas Mask',
		image: 'sms_05',
		description: [
			'As a leader, he has had to sacrifice much throughout his career. Jobs, team members, personal goals- whatever it takes to get the job done. As Mesoamerican cultures sacrificed to the gods to appease them, so has Dallas sacrificed to the gods of heisting- the contractors. '
		],
		collection: 'The Secret',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	},
	{
		name: 'Watchers Hoxton Mask',
		image: 'sms_08',
		description: [
			'Where did they come from, the ones who gifted mankind with the greatest gift, the ones whose civilization may lie beneath the surface of earth and water? Whoever they were, most traces of their existence has been wiped away by the passage of time. Hoxton, the traveler in search of a new future, may not know the truth, but he bears their mask nonetheless in honor of the origin of the Secret.'
		],
		collection: 'The Secret',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	},
	{
		name: 'Summerian Chains Mask',
		image: 'sms_07',
		description: [
			'The Sumerians began an age of wisdom, music, spiritual strength and had the imagination to dream up ideas of how the world began. On the surface, Chains may be a professional weapons-master, but inside, he is larger than life itself, and thus honors the culture which this mask represents. '
		],
		collection: 'The Secret',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	},
	{
		name: 'Heat, The',
		image: 'aviator',
		description: [
			'Everyone loves a good pair of sunglasses.',
			'But only the cockiest, most wanted, cops be damned sons of bitches are crazy enough to rob a goddamn bank wearing \'em.',
			'That\'s you.'
		],
		collection: 'Infamy Reward',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked at Infamy level 1'
	},
	{
		name: 'Plague Doctor, The',
		image: 'plague',
		description: [
			'A plague doctor mask for the Mastermind.',
			'In the word of the Bhagavad-Gita: \'Now I am become death, destroyer of worlds.\'',
			'Or at least, that was the art direction.'
		],
		collection: 'Infamy Reward',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked at Infamy level 3'
	},
	{
		name: 'Butcher, The',
		image: 'welder',
		description: [
			'A truly legendary Enforcer mask.',
			'The story goes it was made for one of the premier hitters in the Pink Panther crew years back but he didn\'t have the guts to wear it. It\'d draw too much attention.',
			'Not your concern.'
		],
		collection: 'Infamy Reward',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked at Infamy level 5'
	},
	{
		name: 'Specialist, The',
		image: 'smoker',
		description: [
			'Only a true Technician could come up with a mask like this.',
			'Featuring a state of the art air filtration system, the mask can double as a chemist\'s hood in those unlikely \'must cook meth\' scenarios.'
		],
		collection: 'Infamy Reward',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked at Infamy level 7'
	},
	{
		name: 'Spectre, The',
		image: 'ghost',
		description: [
			'This Ghost mask look like it\'s from the future and it might as well be.',
			'Full head protection, made out of carbon fiber and genetically engineered spider-silk. People might even mistake you for a high-end Moto GP rider.',
			'Last mistake they\'ll make.'
		],
		collection: 'Infamy Reward',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked at Infamy level 9'
	},
	{
		name: 'Balaclava',
		image: 'balaclava',
		description: [
			'The weapons may change, the ideologies may shift and the accents may swap, but the balaclava has been a mainstay for the armed robber and terrorist for decades. Covering all but your steely, flint-like eyes and your cruel, twisted mouth, it keeps you warm when it\'s chilly too.'
		],
		collection: 'Infamy Reward',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked at Infamy level 11'
	},
	{
		name: 'Lurker',
		image: 'infamy_lurker',
		description: [
			'Teeth are scary. Big teeth are scarier. And giant sharp fang-like teeth suddenly gnashing out where they lurk in the darkness are downright shit-yourself-terrifying. With all of that in mind, can you think of a better mask to keep the civilians in line?'
		],
		collection: 'Infamy Reward',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked at Infamy level 13'
	},
	{
		name: 'Android',
		image: 'daft',
		description: [
			'For the truly detached and impassive, we provide the Android mask. Lightweight alloys, chromium finish and really cool LED lights means this mask is ready for the bank job or the dancefloor. Alas, it does not make you fluent in six million languages.'
		],
		collection: 'Infamy Reward',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked at Infamy level 15'
	},
	{
		name: 'Being, The',
		image: 'punk',
		description: [
			'This mask is based on the experiments of the peculiar Dr Rudolf Mastaba. A modern Prometheus, he sought to return life to the dead with the application of Industrial Revolution technology. Rumour suggests that he was partly successful - the undead rose, but had an insatiable appetite for wheat, barley and maize.'
		],
		collection: 'Infamy Reward',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked at Infamy level 17'
	},
	{
		name: 'Venger',
		image: 'pain',
		description: [
			'Based on the crazed leader of the League of Darkness. It\'s unclear if this was a breathing apparatus or a vocabulator. Some speculate that it was a delivery system, designed to provide Nemesis with the narcotics that gave him both his superhuman strength and psychotic rage.'
		],
		collection: 'Infamy Reward',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked at Infamy level 19'
	},
	{
		name: 'Heister Sentry',
		image: 'ranger',
		description: [
			'This mask was originally designed to be part of a complete head-to-toe heisting outfit. However, field testing revealed that the gaudy spandex suit offered no protection against bullets, knives or grenades. The mask, however, was found to be lightweight, durable and stylish. It\'s heistin\' time!'
		],
		collection: 'Infamy Reward',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked at Infamy level 21'
	},
	{
		name: 'Kamul',
		image: 'infamy_hood',
		description: [
			'There are things older and fouler than heisters in the dark places of the world. And one of them is Kamul. We do not know if he is the lingering spirit of a long dead man, or something that has crossed from the realm of shade. All we know is that few look into this face and live to tell of it.'
		],
		collection: 'Infamy Reward',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked at Infamy level 23'
	},
	{
		name: 'Demonshank',
		image: 'destroyer',
		description: [
			'A warrior spirit doesn\'t appear naturally. It isn\'t something you are born with. Like steel, it is forged in fire. It is beaten in the furnace of battle - tempered, polished and sharpened. This mask celebrates the birth of this warrior spirit - the furnace-born steel given wings.'
		],
		collection: 'Infamy Reward',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked at Infamy level 25'
	},
	{
		name: 'Gangsta Pranksta',
		image: 'lastlaugh',
		description: [
			'Is there a madness behind the shell? Does it represent the wearer, or is it just the projection of the contempt heisters feel for the law?'
		],
		collection: 'Infamy Reward',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked at Infamy level 72'
	},
	{
		name: 'Max, The',
		image: 'cyberpunk',
		description: [
			'Like impeccable clockwork, digital precision flows from the heister who dons this facial covering. No enemy can avoid being just a little bit freaked when you confront them.'
		],
		collection: 'Infamy Reward',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked at Infamy level 76'
	},
	{
		name: 'Vanity Gold',
		image: 'goldenbrute',
		description: [
			'When you\'ve got the gold, there\'s always a question of what to do with it. Put it in a vault, change it into cash or use it to make yourself look rather bad-ass. There are, of course, lots of ways to do the latter. Someone decided that one of them was by forging this gleaming visage. Good choice? Your decision.'
		],
		collection: 'Infamy Reward',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked at Infamy level 88'
	},
	{
		name: 'Masquerade, The',
		image: 'ingoldnito',
		description: [
			'Hokey religions and ancient weapons may not be a match for a good submachine gun, or a getaway van that never breaks down, but a mask like this, intricately crafted by an artisan using techniques handed down through generations, can certainly make you feel like a million bucks when you\'re putting down a Dozer. Also good for that strange masquerade ball that occasionally comes around.'
		],
		collection: 'Infamy Reward',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked at Infamy level 94'
	},
	{
		name: 'Mega Famine',
		image: 'ami_02',
		description: [
			'That loaf of bread you wanted. Imagine that hunger one thousandfold. More than just a lack of food, your very soul is deprived of sustenance until it\'s as empty on nourishment as your belly. If starvation could continue beyond death, this is the visage it would take. But such a plight can be a mighty motivator for heisting.'
		],
		collection: 'Achievement Milestones',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked at 90 Achievements'
	},
	{
		name: 'Mega Conquest',
		image: 'ami_03',
		description: [
			'If only the Kings of Old had such an artifact, they would have been invincible. What enemy could withstand bowing before you, as they gaze upon your magnificence? Sun Tzu can go suck a lemon, because with a mask like this, who needs to employ art in war?'
		],
		collection: 'Achievement Milestones',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked at 200 Achievements'
	},
	{
		name: 'Mega Tormentor',
		image: 'ami_05',
		description: [
			'Torturer or tortured? Perhaps both, as the seething glow from your eyes sends chills of terror into the souls of the Law. hear the lamentations of the Uniformed Blue as you evade them skillfully, with evil glee flowing through your veins as you foil every one of their attempts to apprehend you.'
		],
		collection: 'Achievement Milestones',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked at 350 Achievements'
	},
	{
		name: 'Mega Arch Nemesis',
		image: 'ami_04',
		description: [
			'One move, then another. Your opponent makes a move and you respond. he stands there, atop the mountain of gold, daring you to come forward and take on his challenge. By wearing this mask, you declare your defiance, and the rivalry unending.'
		],
		collection: 'Achievement Milestones',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked at 550 Achievements'
	},
	{
		name: 'Mega Rad Mutant',
		image: 'ami_01',
		description: [
			'As if high on radioactive spray paint, the power level has been turned up a notch and is now close to bursting. When you go on a heist, everyone around you will duck for cover as you roll by. Every geiger counter in town is about to go haywire.'
		],
		collection: 'Achievement Milestones',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked at 750 Achievements'
	},
	{
		name: 'Mega Greed',
		image: 'ami_06',
		description: [
			'It burns into your heart and tears the flesh from your skull- orange flames to contrast the color of an unquenchable need for more. How many trips back into the vault will you make until you are satisfied? How many weapons will make you happy? All of them! Maybe.'
		],
		collection: 'Achievement Milestones',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked at 950 Achievements'
	},
	{
		name: 'The Great Immortal',
		image: 'tam',
		description: [
			'For a thousand years, the traveller slept, biding his time until the stars did align and a mortal of sufficient ability would unlock him from his unholy prison. Rejoice! For that day has come. Wield this power... wisely.'
		],
		collection: 'Achievement Milestones',
		type: 'infamous',
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked at 1000 Achievements'
	},
	{
		name: 'Buluc',
		image: 'buluc',
		description: [
			'Used in the Buluc\'s Mansion Heist'
		],
		collection: 'Unobtainable',
		type: 'infamous',
		unlock: 'THIS ITEM IS UNOBTAINABLE',
		cost: ''
	},
	{
		name: 'Roman',
		image: 'roman',
		description: [
			'Used in the Border Crossing Heist'
		],
		collection: 'Unobtainable',
		type: 'infamous',
		unlock: 'THIS ITEM IS UNOBTAINABLE',
		cost: ''
	},
	{
		name: 'Sombrero',
		image: 'sombrero',
		description: [
			'Used in the San Marín Bank Heist'
		],
		collection: 'Unobtainable',
		type: 'infamous',
		unlock: 'THIS ITEM IS UNOBTAINABLE',
		cost: ''
	}
]

export default masks