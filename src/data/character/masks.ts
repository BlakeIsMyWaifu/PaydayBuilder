interface maskData {
	name: string;
	imageBase: string;
	imageColour: string;
	description: string[];
	unlock: string;
	cost: string;
}

/*
https://payday.fandom.com/wiki/Masks_(Payday_2)

[...document.getElementsByClassName('lightbox-caption')].map((element => {
	let parent = element.children[0];
	let name = parent.children[0].children[0].children[0].innerText;
	let unlock;
	let description = [];
	[...parent.children[1].children].forEach(element => {
		if (element.nodeName === 'DIV') return;
		let [desc, ...unlck] = element.innerHTML.split('<');
		if (desc.length > 0) description.push(desc);
		let div = document.createElement('div');
		div.innerHTML = `<${unlck.join('<')}`;
		unlock = div.textContent.replace('<', '');
	});
	return ({
		name,
		imageBase: '',
		imageColour: '',
		description,
		unlock,
		cost: element.innerText.replace(name, '').replaceAll('\n', ' ').trim()
	});
})).flat();
*/

const masks: maskData[] = [
	{
		name: 'Preferred Character',
		imageBase: '',
		imageColour: '',
		description: [
			'Equipping this mask slot will make you wear your preferred character\'s mask.'
		],
		unlock: '',
		cost: ''
	},
	{
		name: 'Collateral',
		imageBase: '',
		imageColour: '',
		description: [
			'These shades belonged to a colleague of John\'s that he was hired to kill.',
			'It started like any other night. Only this night, he got a contract to kill another contract killer who was making rounds that day. John knew he had five stops to make and was using the same taxi cab between all of them.',
			'In the end, he didn\'t even need to do the deed himself - he was already dead when he found him.'
		],
		unlock: '',
		cost: ''
	},
	{
		name: 'Hoxton Reborn',
		imageBase: '',
		imageColour: '',
		description: [
			'The Hoxton Reborn mask is a mask that Hoxton made while in prison. For him, it\'s a symbol of everything he experienced in the past years while the PAYDAY gang kept on going without him. No one knows how his experiences in prison has changed him, and he won\'t talk about it when asked.',
			'All we can assume is that he has been changed forever, and that he is reborn into... Something different.'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: ''
	},
	{
		name: 'Clover',
		imageBase: '',
		imageColour: '',
		description: [
			'Clover\'s mask represents what Clover both fears and hates most of all - wearing a mask as your normal face. The surgically-shrunken nose, the botox\'d lips and the expression of all-consuming vanity and self-obsession - all are symbols of fear and weakness, twisted into a horrifying parody.'
		],
		unlock: 'THIS IS A CLOVER CHARACTER PACK ITEM!',
		cost: ''
	},
	{
		name: 'Dragan',
		imageBase: '',
		imageColour: '',
		description: [
			'With a background like the one Dragan has, there\'s no surprise he aspires to greatness in the criminal underworld.',
			'His mask represents a lot of his own characteristics, with the clear resemblance to some of the original crew\'s masks that tells of his ability to infiltrate and blend in while still having some features that tells of his unending ruthlessness.',
			'The Croatian checker on the forehead serves as a reminder for both himself and his enemies to be aware that he is not your common western street thug.'
		],
		unlock: 'THIS IS A DRAGAN CHARACTER PACK ITEM!',
		cost: ''
	},
	{
		name: 'Richard Returns',
		imageBase: '',
		imageColour: '',
		description: [
			'Is this mask a reflection of a deep-seated psychological problem? Possibly a dissociative identity disorder? Schizophrenia? Trauma of a disturbed psyche? Or is it not a reflection at all, but instead something to cause them?'
		],
		unlock: 'THIS IS A HOTLINE MIAMI 2 DELUXE ITEM!',
		cost: ''
	},
	{
		name: 'Bonnie',
		imageBase: '',
		imageColour: '',
		description: [
			'Few nations have contributed to humanity as Scotland has. In every field of endeavor - science, arts, cuisine - it is the people of this blessed land that give freely and generously. With this mask, Bonnie is determined to reverse this trend.'
		],
		unlock: '',
		cost: ''
	},
	{
		name: 'Sokol',
		imageBase: '',
		imageColour: '',
		description: [
			'If playing as a grinder for the St Petersburg Bombers hockey team taught Sokol the value of one thing, it was the importance of a terrifying mask that protects his handsome Russian face.'
		],
		unlock: 'THIS IS A SOKOL CHARACTER PACK ITEM!',
		cost: ''
	},
	{
		name: 'Jiro',
		imageBase: '',
		imageColour: '',
		description: [
			'Japan is a land of tradition. A land of warriors. Jiro\'s mask reflects this. The mask expresses Jiro\'s love for a traditional Japan, while the bared snarl represents his unshakable determination.'
		],
		unlock: 'THIS IS A YAKUZA CHARACTER PACK ITEM!',
		cost: ''
	},
	{
		name: 'Bodhi',
		imageBase: '',
		imageColour: '',
		description: [
			'Masks have always been used in spiritual traditions that relate to deities, the divine and those chasing the apotheosis of the self. Bodhi\'s mask reflects the man behind it. Strong, cunning, single-minded and centered.'
		],
		unlock: '',
		cost: ''
	},
	{
		name: 'Jimmy',
		imageBase: '',
		imageColour: '',
		description: [
			'Jimmy hasn\'t really made many masks before he made his signature mask - and it shows. His mask design captures his free spirit and his disregard to things as appearance, planning and such. Good is good enough for Jimmy, he doesn\'t get stuck in ideas and wants to move forward at all times.'
		],
		unlock: '',
		cost: ''
	},
	{
		name: 'Sydney',
		imageBase: '',
		imageColour: '',
		description: [
			'Smirk, Grin, Sneer - call it what you want. As you see this smiling punker mask approaching it\'s not synonyms that\'ll run through your head - it\'s bullets. Sydney will make sure of it.'
		],
		unlock: 'THIS IS A SYDNEY CHARACTER PACK ITEM!',
		cost: ''
	},
	{
		name: 'Rust',
		imageBase: '',
		imageColour: '',
		description: [
			'The Devil is the moniker that has followed Rust for most of his life. Therefore, Rust\'s mask is a combination of a smiling clown with ominous horns protruding from his forehead, letting everyone know that the Devil is here.'
		],
		unlock: 'THIS IS A BIKER CHARACTER PACK ITEM!',
		cost: ''
	},
	{
		name: 'Scarface',
		imageBase: '',
		imageColour: '',
		description: [
			'Scarface came to the US with nothing more than two empty hands and a bad attitude, the darkness in his heart matched only by the brilliance of his criminal mind. His mask tells the story, complete with the trail of blood he left in his wake as he began to make his mark.'
		],
		unlock: 'THIS IS A SCARFACE CHARACTER PACK ITEM!',
		cost: ''
	},
	{
		name: 'Sangres',
		imageBase: '',
		imageColour: '',
		description: [
			'The skull is Death, Sangres\' faithful companion throughout his career. The gold tooth is the coin that has been paid. The kill counter represents his past as a hitman, the blood-red ruby the new wealth he\'s seeking in the US. Sangres\' name spreaks of the many bloody episodes in his life, and that red blood is also present on his mask.'
		],
		unlock: '',
		cost: ''
	},
	{
		name: 'Duke',
		imageBase: '',
		imageColour: '',
		description: [
			'Duke is a man of culture, virtue and stone-hard composure. Thus his mask has been modeled of of the',
			'A big draw for Duke is his love for mystery- you never really know what\'s inside the safe until you open it, or behind the painting until you take it out of the frame. And with the Payday gang, the biggest mystery may be just around the corner...'
		],
		unlock: '',
		cost: ''
	},
	{
		name: 'Ethan',
		imageBase: '',
		imageColour: '',
		description: [
			'This mask exudes power and brute force, in stark contrast to the man who wears it. Equal parts clown-like sadness and begrudging anger, it perfectly captures the mood of someone who has somewhat reluctantly chosen to be a heister.'
		],
		unlock: 'THIS IS A h3h3 CHARACTER PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Hila',
		imageBase: '',
		imageColour: '',
		description: [
			'Something about this mask radiates a playful malice and most who gaze upon it immediately feel a sense of unease, which is just the kind of thing you need when you\'re robbing a bank.'
		],
		unlock: 'THIS IS A h3h3 CHARACTER PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Mark',
		imageBase: '',
		imageColour: '',
		description: [
			'hello from Russia.',
			'I think it will be the best game in the world.',
			'It\'s just a bear.',
			'Just before there was an empty.',
			'Thank you',
			'- Vasiliy'
		],
		unlock: 'THIS IS A COMMUNITY ITEM!',
		cost: '$7,250'
	},
	{
		name: 'Hockey Heat',
		imageBase: '',
		imageColour: '',
		description: [
			'A classic hockey mask.',
			'A guy told me one time...',
			'\'Don\'t let yourself get attached to anything you are not willing to walk out on in 30 seconds flat if you feel the heat around the corner.\''
		],
		unlock: 'THIS IS A COMMUNITY ITEM!',
		cost: '$9,000'
	},
	{
		name: 'Happy Santa',
		imageBase: '',
		imageColour: '',
		description: [
			'Santa, more known as Santa Claus, Saint Nicholas, Father Christmas and Kris Kringle (?) is a man of epic proportions. Words like legendary, mythical, historical and folkloric best describe this beast of a man.',
			'This particular mask is the Happy Santa mask. Big smile and super jolly with red cheeks and all, wearing this you\'ll even bring the most negative of Bulldozers into a joyous smile.'
		],
		unlock: 'THIS IS A COMMUNITY ITEM!',
		cost: '$7,500'
	},
	{
		name: 'Peter',
		imageBase: '',
		imageColour: '',
		description: [
			'Peter is a true legend and has been so for like, ever. A beast with a large, pointed, spiraling horn projected from its forehead, Peter is known by all of mankind as the go-to guy for whenever you need to touch the rainbow. No, touch it. Touch the motherfucking rainbow. Now taste it.',
			'Shh. It\'s okay. You did good.'
		],
		unlock: 'THIS IS A COMMUNITY ITEM!',
		cost: 'Free'
	},
	{
		name: 'Firestarter',
		imageBase: '',
		imageColour: '',
		description: [
			'This clown used to be a master of pyrotechnics, having a fire breathing number that no one could top. His competitors in the not-so-known-firebreathing-clown-scene were unhappy with his success... And spiked his cocktail.',
			'With third degree burns on his face and an evil look in his eyes he fought fire with fire and set the other clowns ablaze. But he didn\'t stop there, the fiery hatred in him burned too bright. Now he seeks to set the world on fire.'
		],
		unlock: 'THIS IS A COMMUNITY ITEM!',
		cost: 'Free'
	},
	{
		name: 'Spackle',
		imageBase: '',
		imageColour: '',
		description: [
			'Once a well renowned circus clown Spackle was the best make-up artist in the scene. Known for her skill and ability to make people look so unlike themselves, she became obsessed with the art.',
			'With her own face as canvas she tirelessly applied layer after layer, each becoming more twisted. She was sent to an asylum after killing five people during their make-up process.'
		],
		unlock: 'THIS IS A COMMUNITY ITEM!',
		cost: 'Free'
	},
	{
		name: 'Gumbo',
		imageBase: '',
		imageColour: '',
		description: [
			'Little is known about the man known as the devouring clown, but for a long time people believed that his red eyes were part of his outfit. Needless to say, they were wrong. Now people fear the red eyed clown with a laugh so evil it makes even the most seasoned badasses quiver in fear.',
			'Word on the street is that he haunts alletways in a demonic shape looking for something... Or someone. All that is known is that people end up dead, more dead than you thought possible...'
		],
		unlock: 'THIS IS A COMMUNITY ITEM!',
		cost: 'Free'
	},
	{
		name: 'Smiley',
		imageBase: '',
		imageColour: '',
		description: [
			'There was once a clown who couldn\'t smile. He watched as the other clowns brought joy and happiness to both young and old. He grew enviuos and angry, so to the point that he stapled his lips to his cheecks, giving him a wide grin. But instead of making everyone happy, they were all afraid, why, he did not understand.',
			'He came to the conclusion perhaps this was his calling, to make people afraid... Very afraid.'
		],
		unlock: 'THIS IS A COMMUNITY ITEM!',
		cost: 'Free'
	},
	{
		name: 'Reservoir Dog',
		imageBase: '',
		imageColour: '',
		description: [
			'These shades belonged to five strangers. John was hired to kill a group of people who were about to commit the perfect crime. They all dressed the same and had code names so they were easy to identify.',
			'However, John arrived too late to the scene. The police were already there. He made sure the strangers were all dead before he left the scene.'
		],
		unlock: 'THIS IS A COMMUNITY ITEM!',
		cost: 'Free'
	},
	{
		name: 'Terminator',
		imageBase: '',
		imageColour: '',
		description: [
			'These shades belonged to an assassin from a distant land. The assassin John was sent to kill was built like a machine. This one would prove to be hard. He used a customized Improved Combined Tactical Vest. He was fully armored and very tough. Behind all that armor however, John knew there was only flesh and bones.',
			'John managed to to kill him in the end. He knew however that when he removed him from his place, another would replace him.'
		],
		unlock: 'THIS IS A COMMUNITY ITEM!',
		cost: 'Free'
	},
	{
		name: 'Mad Lion',
		imageBase: '',
		imageColour: '',
		description: [
			'A horrifying mask shaped like the head of a lion.',
			'Little is known about this mask. It is said it was made by a crazy Balkan scientist who had a sick fascination for lions. Only he could see the beauty in this mask.',
			'The mask was given to you by someone who wishes you well.'
		],
		unlock: 'THIS IS A COMMUNITY ITEM!',
		cost: 'Free'
	},
	{
		name: 'Conquest',
		imageBase: '',
		imageColour: '',
		description: [
			'The identity of the first horseman of the Apocalypse, and exactly what he represents is something still greatly debated to this day. Some call him Conquest, some say he was Christ himself, and some claim he was even the Antichrist.'
		],
		unlock: 'THIS IS A COMMUNITY ITEM!',
		cost: 'Free'
	},
	{
		name: 'Death',
		imageBase: '',
		imageColour: '',
		description: [
			'The fourth and final horseman of the Apocalypse is Death himself. Wherever Death went, Hades always followed with jaws wide open, ready to devour the souls of the victims slain by Death.'
		],
		unlock: 'THIS IS A COMMUNITY ITEM!',
		cost: 'Free'
	},
	{
		name: 'Famine',
		imageBase: '',
		imageColour: '',
		description: [
			'The third horseman of the apocalypse is the embodiment of Famine, a force so powerful he would leave people starving to their deaths if they laid eyes upon him.'
		],
		unlock: 'THIS IS A COMMUNITY ITEM!',
		cost: 'Free'
	},
	{
		name: 'War',
		imageBase: '',
		imageColour: '',
		description: [
			'The second horseman of the Apocalypse is War and the violent spirit of mankind. War believes humans are naturally vicious, and that they don\'t require a real reason to fight or kill. He rode a fiery red horse, suggesting that blood would flow wherever he went.'
		],
		unlock: 'THIS IS A COMMUNITY ITEM!',
		cost: 'Free'
	},
	{
		name: 'The Cat',
		imageBase: '',
		imageColour: '',
		description: [
			'Agile as a Cat, and lucky as one too, you will dare any heist and successfully breach any defenses. When the shit hits the fan, you will always dodge and land on your feet. There is no better way to spend your nine lives - a stone-cold killer is what you are and everyone knows it.'
		],
		unlock: 'THIS IS A COMMUNITY ITEM!',
		cost: 'Free'
	},
	{
		name: 'The Fox',
		imageBase: '',
		imageColour: '',
		description: [
			'The Fox - slickest and slyest of all predators. No locks can keep you out, no defensive plan can withstand your guile and artifice. You will take what you want and leave everyone wondering who did it, or if it even happened at all.'
		],
		unlock: 'THIS IS A COMMUNITY ITEM!',
		cost: 'Free'
	},
	{
		name: 'The Rabbit',
		imageBase: '',
		imageColour: '',
		description: [
			'Mad as March Hare. As they stare into your crazed yellow eyes, they\'d better hand the cash over quick. Then take the money and run. No one outruns a hare.'
		],
		unlock: 'THIS IS A COMMUNITY ITEM!',
		cost: 'Free'
	},
	{
		name: 'The Mouse',
		imageBase: '',
		imageColour: '',
		description: [
			'Quiet as a Mouse, you\'ll enter and exit silently and none will be the wiser. And if they should spot you, who would expect such wickedness from such a small creature? But yes, you are capable of it - all of it.'
		],
		unlock: 'THIS IS A COMMUNITY ITEM!',
		cost: 'Free'
	},
	{
		name: 'Golden Dallas',
		imageBase: '',
		imageColour: '',
		description: [
			'To commemorate the day PAYDAY became the most played co-op game in a single day - 10th of June 2017. Some 221k heisters per hour were robbing banks together in style. Earning us the Top 5 Position among Most Played Games in a day of all time - PAYDAY leaves its golden mark on history. Dallas is pleased.'
		],
		unlock: 'THIS IS A COMMUNITY ITEM!',
		cost: 'Free'
	},
	{
		name: 'A Proud Pilotka',
		imageBase: '',
		imageColour: '',
		description: [
			'This pilotka was found on a corpse near Lake Müritz in Germany. It was attached with a string around the poor, dead soldier\'s head. There were no other bodies next to unnamed fellow,'
		],
		unlock: 'THIS IS A COMMUNITY ITEM!',
		cost: 'Free'
	},
	{
		name: 'The Officer\'s Hat',
		imageBase: '',
		imageColour: '',
		description: [
			'This item popped up at an auction in North France during the 1990s. Among the auction goers sat a woman in her 50s. She recognized it and even though she could not remember the name of the officer who wore it, she paid a hefty sum for it. As a young girl she visited a square to buy vegetables when paratroopers came dropping down. Gunfire, explosions and screams of fear and pain filled the air. The officer took her to a shelter in a government building. He had no reason but kindness to save her. But even as his life was on stake,'
		],
		unlock: 'THIS IS A COMMUNITY ITEM!',
		cost: 'Free'
	},
	{
		name: 'The Survivor\'s Pilot Hat',
		imageBase: '',
		imageColour: '',
		description: [
			'A pilot in the Royal Air Force went down during WW2 a few miles outside Bialystok, Poland. Considered K.I.A, he was later found deep in the Bialowieza Forest where he\'d survived on fish, roots and animals he managed to caught'
		],
		unlock: 'THIS IS A COMMUNITY ITEM!',
		cost: 'Free'
	},
	{
		name: 'The Trophy Helmet',
		imageBase: '',
		imageColour: '',
		description: [
			'In the small village of Pomtsburg, you can find a small monument. Few read the plaque covered with moss, but it holds the tale of a young boy. As the Germans came marching into Pomtsburg he lead the resistance with bravery and determination. Pomtsburg was his birthplace and no one were to destroy it. The Battle of Pomtsburg never reached the history books, and few even remember how it ended. But the boy managed to steal this souvenir. Something to remind him and others you should always stand up to oppression.'
		],
		unlock: 'THIS IS A COMMUNITY ITEM!',
		cost: 'Free'
	},
	{
		name: 'Golden Chains',
		imageBase: '',
		imageColour: '',
		description: [
			'It\'s been four years. Four years of hard work, meth cooked, shots fired and loot hauled. But we\'ve only just began. We do feel a bit nostalgic. It\'s been four years since we came to Washington and took on our first heist here and now we\'re pros. And when it\'s someone\'s birthday, you need to get them a gift. Therefore we\'ve poured 24k hot, luscious gold all over Chain\'s Mask. Happy Birthday PAYDAY 2!'
		],
		unlock: 'THIS IS A COMMUNITY ITEM!',
		cost: 'Free'
	},
	{
		name: 'Golden Wolf',
		imageBase: '',
		imageColour: '',
		description: [
			'Has it been five years already? Damn. Not many make it this far into the life. This last year has been hard. Real hard. The family has been hit where we are most vulnerable, the cops are getting closer every day, and we\'re almost in over our heads. This situation would have killed most heisters or put them away forever, but we\'re not just any two-bit crooks. We\'re PAYDAY. We always get it done right. And we always get the gold.'
		],
		unlock: 'THIS IS A COMMUNITY ITEM!',
		cost: 'Free'
	},
	{
		name: 'Golden Hoxton',
		imageBase: '',
		imageColour: '',
		description: [
			'I remember the first time I put on a mask. Was it really seven years ago? When you\'ve been doing something for a long time, you eventually end up at a crossroads. In this line of work, you\'re either staring down the barrel of a gun or looking at the sweet life. Everybody has to make their choice. Everybody has to decide what that choice is worth risking. For Payday, it\'s always been all-or-nothing!'
		],
		unlock: 'THIS IS A COMMUNITY ITEM!',
		cost: 'Free'
	},
	{
		name: 'Golden Houston',
		imageBase: '',
		imageColour: '',
		description: [
			'So this is it- the time of reckoning. Our family of heisters against a power we haven\'t seen the limit of. I know one thing- we\'ll either come out of this together or die trying. We\'re the Clowns, the fucking gods of thieving, and we play by our rules. So, whatever comes next, we\'re ready for a blaze of golden glory.'
		],
		unlock: 'THIS IS A COMMUNITY ITEM!',
		cost: 'Free'
	},
	{
		name: 'Devourer',
		imageBase: '',
		imageColour: '',
		description: [
			'This mask, heavily inspired by the Great Old Ones that rule below the seas was recovered from a police storage where it had been kept since it was found during a raid on a murderous cult. It\'s monstrous look makes you wonder what beings lurk out in the dark.'
		],
		unlock: 'THIS IS A DEAD BY DAYLIGHT COMMUNITY ITEM!',
		cost: 'Free'
	},
	{
		name: 'Unborn',
		imageBase: '',
		imageColour: '',
		description: [
			'A once great actor who claimed to have become possessed by a demonic spirit started to wear a mask to hide his deformed appearance. The mask one day broke and what was hiding underneath could never be sealed again.'
		],
		unlock: 'THIS IS A DEAD BY DAYLIGHT COMMUNITY ITEM!',
		cost: 'Free'
	},
	{
		name: 'Blister Head',
		imageBase: '',
		imageColour: '',
		description: [
			'This blister stricken creature is the embodiment of true terror. All your childhood fears poured into something unfathomable and horrendous. Question is if you will even need bullets anymore.'
		],
		unlock: 'THIS IS A DEAD BY DAYLIGHT COMMUNITY ITEM!',
		cost: 'Free'
	},
	{
		name: 'The Clawer',
		imageBase: '',
		imageColour: '',
		description: [
			'On gloomy nights when the moon is bright, one might witness how the Clawer emerges from the watery depths. It yearns for fresh meat and won\'t stop until its hunger is still. The Clawer is one of those urban myths that campfire teens tell - just before The Clawer strikes. Afterwards, it returns to the deep. Hibernating until its stomach growls yet again.'
		],
		unlock: 'THIS IS A DEAD BY DAYLIGHT COMMUNITY ITEM!',
		cost: 'Free'
	},
	{
		name: 'The Killer',
		imageBase: '',
		imageColour: '',
		description: [
			'Even stark raving mad Killers need cash. It\'s a fact. So sometimes you simply must take a break from slashing teens and hang up the blood stained machete. But killing can be done in so many ways and it\'s real important with a hobby - and remember that cops bleed too.'
		],
		unlock: 'THIS IS A DEAD BY DAYLIGHT COMMUNITY ITEM!',
		cost: 'Free'
	},
	{
		name: 'Planetary Tomb Guardian',
		imageBase: '',
		imageColour: '',
		description: [
			'Being a Planetary Tomb Guardian is a lonely job. But a job that must be done. Eons of time float by without a single living organism in sight. Stars and suns brighten the day and night. But solitude is a horrid thing. But then one day, a spacecraft breaks the silence and you are not alone anymore. Someone is visiting this planet you call home.'
		],
		unlock: 'THIS IS A THE SOLUS PROJECT COMMUNITY ITEM!',
		cost: ''
	},
	{
		name: 'Alienware',
		imageBase: '',
		imageColour: '',
		description: [
			'Based on the visions of a madman who thought he saw an extraterrestrial being.',
			'It is strange though, as the powerful materials is not from anywhere on Earth.'
		],
		unlock: '',
		cost: '$7,250'
	},
	{
		name: 'Baby Rhino',
		imageBase: '',
		imageColour: '',
		description: [
			'Who would not want to wear the head of a baby rhino. Is it not cute? Putting it on makes you feel a little stupid, maybe because how it looks.',
			'While wearing it, you are worried that it is a bit hard seeing through the mask. You will do fine as long as you do not wander off with your pig-headed friends.'
		],
		unlock: '',
		cost: '$7,250'
	},
	{
		name: 'The Big Lips',
		imageBase: '',
		imageColour: '',
		description: [
			'Throw someone a lip by wearing this mask.',
			'The thing that gets people is the two fleshy folds that surround the mouth of this mask, the biggest lips you ever saw.',
			'Open your mouth and say \'aaah\', directed the bank robber.'
		],
		unlock: '',
		cost: '$7,250'
	},
	{
		name: 'Blackhearted',
		imageBase: '',
		imageColour: '',
		description: [
			'Evil and treacherous in a haunting way, this mask is said to change the wearer in mysterious ways.',
			'Worn long enough, it is said it turns the wearers heart into a black one, filled with lust for black deeds.'
		],
		unlock: '',
		cost: '$8,250'
	},
	{
		name: 'The Brainiac',
		imageBase: '',
		imageColour: '',
		description: [
			'This is the mask of someone who has a lot on his mind.',
			'Putting on this mask sparks an excessive, almost explosive desire to learn more about crimes and how to commit them.'
		],
		unlock: '',
		cost: '$9,000'
	},
	{
		name: 'The Bullet',
		imageBase: '',
		imageColour: '',
		description: [
			'Worried about getting shot in the face with a high powered firearm?',
			'Scared that you will get stomped by a bulldozer, cloaker and a shield at the same time?',
			'Wearing this mask will not help you, but you will get downed in style. The Bullet - out in Black Markets near you, right now!'
		],
		unlock: '',
		cost: '$7,250'
	},
	{
		name: 'Calaca',
		imageBase: '',
		imageColour: '',
		description: [
			'A skeleton mask connected to the Mexican Day of the Dead festival.',
			'Origins have been traced back to Aztec imagery, but no one is really sure.',
			'Wearing the Calaca is all about finding the joy in death happening all around you. The death of others should be a joyous occasion!'
		],
		unlock: '',
		cost: '$7,250'
	},
	{
		name: 'The Cannula',
		imageBase: '',
		imageColour: '',
		description: [
			'This mask is made of strange materials, holding it feels awkward. Wearing it feels even stranger.',
			'Putting on the mask, you feel like an outsider, a foreigner, someone who constantly changes locations, staying away, not wanting to be recognized by anyone.'
		],
		unlock: '',
		cost: '$7,000'
	},
	{
		name: 'The Crybaby',
		imageBase: '',
		imageColour: '',
		description: [
			'Is there anything sadder than a crying clown?',
			'Probably crying civilians, being shouted to the ground by a criminal wearing a horrific mask.',
			'Or maybe a bank manager with an empty vault.'
		],
		unlock: '',
		cost: '$7,500'
	},
	{
		name: 'The Dripper',
		imageBase: '',
		imageColour: '',
		description: [
			'The Dripper was made by atomization of a larger mass of liquid, somehow made into a hard material while retaining a smooth surface.',
			'Everyone who looks at it sees different things.',
			'What do you see?'
		],
		unlock: '',
		cost: '$11,000'
	},
	{
		name: 'Doctor Crime',
		imageBase: '',
		imageColour: '',
		description: [
			'Doctor Mayhem is an American fictional character, a supervillain who appears in comic books by OVERKILL Comics.',
			'The character was created by writer-editor David Goldfarb and designed by artist Max Elmberg Sjöholm.',
			'He made his first appearance in \'The Amazing Career Criminals: The PAYDAY gang meets Doctor Mayhem!\''
		],
		unlock: '',
		cost: '$7,250'
	},
	{
		name: 'The Gagball',
		imageBase: '',
		imageColour: '',
		description: [
			'Take a walk on the submissive side with a gagball stuck to your face.',
			'People wear these for a variety of reasons, one being roleplays involving bondage. This isn\'t necessarily the case though, as gagballs apparently can be used in bank robberies too.'
		],
		unlock: '',
		cost: '$7,500'
	},
	{
		name: 'Greek Tragedy',
		imageBase: '',
		imageColour: '',
		description: [
			'A mask that symbolizes all the parts in a greek tragedy.',
			'In old Greece, masks were used to worship the gods in ceremonial rites and celebrations.',
			'This particular mask summarizes every heist in existence; the anger of someone triggering the alarm, the joy of opening the vault and the tragedy of being caught.'
		],
		unlock: '',
		cost: '$9,750'
	},
	{
		name: 'Hockey Mask',
		imageBase: '',
		imageColour: '',
		description: [
			'A hockey mask is a mask worn by hockey goaltenders to protect their heads from injury.',
			'It is also the iconic robber mask, hand-crafted using only high-quality materials. Instead of protecting you from pucks, it protects you from being recognized while going about, doing your thing.',
			'You know, the thing you do so well. Stealing.'
		],
		unlock: '',
		cost: '$8,250'
	},
	{
		name: 'The Hog',
		imageBase: '',
		imageColour: '',
		description: [
			'You have a new message! *BEEP*',
			'Salutations, this is \'Almir\' at OVERKILL. The Mask that you ordered should be delivered by now...',
			'A list of instructions is included...',
			'Make sure that you read them carefully!',
			'Do you like hurting other people? Then this mask is for you.'
		],
		unlock: '',
		cost: '$7,250'
	},
	{
		name: 'The Horned Beast',
		imageBase: '',
		imageColour: '',
		description: [
			'A beast that came from the abyss.',
			'It has a lion\'s body, bear feet and a leopard\'s mouth.',
			'Not much else is know of this beast, nor who designed the mask.'
		],
		unlock: '',
		cost: '$13,500'
	},
	{
		name: 'The Jaw',
		imageBase: '',
		imageColour: '',
		description: [
			'Protect your glass chin with a metal jaw.',
			'The only thing you will be chewing from now on with your jaw is law enforcers, right?'
		],
		unlock: '',
		cost: '$7,500'
	},
	{
		name: 'Kawaii',
		imageBase: '',
		imageColour: '',
		description: [
			'Lovable, cute, aborable, cool and hip, charming, non-threatening, innocent, happy-go-lucky.',
			'These are words not commonly used in crimonology.',
			'Because of you, they now are.'
		],
		unlock: '',
		cost: '$7,250'
	},
	{
		name: 'Kenneth',
		imageBase: '',
		imageColour: '',
		description: [
			'A horrifying mask shaped like the head of a demon.',
			'Not much is known about it other than the name - Kenneth.',
			'Now, this vengeful spirit has returned to earth to haunt mankind once more.'
		],
		unlock: '',
		cost: '$7,250'
	},
	{
		name: 'Mrs. Mannequin',
		imageBase: '',
		imageColour: '',
		description: [
			'The Female Mannequin.',
			'The face of an articulated doll used by tailors, dressmakers, artists, windowdressers and now bank robbers.',
			'They are most often used to display or fit clothing, but are also used to simulate how to teach first aid, CPR, tracheal intubation and now bank robbery.'
		],
		unlock: '',
		cost: '$7,250'
	},
	{
		name: 'Mr. Mannequin',
		imageBase: '',
		imageColour: '',
		description: [
			'The Male Mannequin.',
			'The face of an articulated doll used by tailors, dressmakers, artists, windowdressers and now bank robbers.',
			'They are most often used to display or fit clothing, but are also used to simulate how to teach first aid, CPR, tracheal intubation and now bank robbery.'
		],
		unlock: '',
		cost: '$7,250'
	},
	{
		name: 'Mr. Sackcloth',
		imageBase: '',
		imageColour: '',
		description: [
			'Discourage crows, sparrows and law enforcers from entering your field of terror.',
			'The legend goes that in distant lands, there lived a god who knew everything yet could not walk. The greed of man found the god and beheaded it, thinking they could gain its wisdom.'
		],
		unlock: '',
		cost: '$9,750'
	},
	{
		name: 'Mr. Smooth',
		imageBase: '',
		imageColour: '',
		description: [
			'This mask somehow simultaneously conveys and expresses opposing or contradictory feelings, beliefs, and motivations.',
			'Legends says that four creatures merged together, forming a greater entity with the face of this mask.',
			'To summarize, it is a scary fucking mask.'
		],
		unlock: '',
		cost: '$7,000'
	},
	{
		name: 'Monkey Business',
		imageBase: '',
		imageColour: '',
		description: [
			'Worn by someone who does not take life that seriously.',
			'Because it is a mask of a monkey.'
		],
		unlock: '',
		cost: '$8,250'
	},
	{
		name: 'The Mummy',
		imageBase: '',
		imageColour: '',
		description: [
			'The face of a mummy that has had its skin and organs preserved. Either intentional or incidental exposure to extreme cold (ice mummies!), low humidity, lack of air or chemicals might have caused this.',
			'Who knows what part of the world it is from? Having been preserved for the longest time, its ready to be exposed to the world again.'
		],
		unlock: '',
		cost: '$7,250'
	},
	{
		name: 'Oni',
		imageBase: '',
		imageColour: '',
		description: [
			'The Oni is a Japanese devil.',
			'They are hideous, gigantic ogre-like creatures that have sharp claws and two horns growing from their heads.',
			'Their skin may have any number of colors, though red and blue are the most common.'
		],
		unlock: '',
		cost: '$7,500'
	},
	{
		name: 'The Outlander',
		imageBase: '',
		imageColour: '',
		description: [
			'Have you ever had that feeling when you have no mouth but feel the urge to scream?',
			'That is how you are going to feel if you are a civilian looking at a criminal wearing this mask, pointing a gun at you, shouting you to the floor.'
		],
		unlock: '',
		cost: '$7,250'
	},
	{
		name: 'The Perfect Stranger',
		imageBase: '',
		imageColour: '',
		description: [
			'The mask of a stranger in a strange land.',
			'Masks like these were used in a lost civilization, in war, on soldiers; ceremonially, for burial rites and for shamanistic ceremonies to drive away evil spirits.'
		],
		unlock: '',
		cost: '$7,500'
	},
	{
		name: 'The Pout',
		imageBase: '',
		imageColour: '',
		description: [
			'The pout is a facial expression that humans can make.',
			'It is a protrusion of the lips, especially as an expression of sullen discontent.',
			'Who would not be discontent, having had their horns sawed off like that.'
		],
		unlock: '',
		cost: '$7,500'
	},
	{
		name: 'The Rage',
		imageBase: '',
		imageColour: '',
		description: [
			'Probably one of the angriest looking clown masks you have ever seen.',
			'It almostputs Wolf\'s mask to shame.',
			'Almost.'
		],
		unlock: '',
		cost: '$8,250'
	},
	{
		name: 'The Shogun',
		imageBase: '',
		imageColour: '',
		description: [
			'Don the mask and feel like a Japanese general from a distant past.',
			'It is said that this mask was the mask of a mad and desperate warrior, who rose above the ranks and became a great general, winning many battles.',
			'Common sense will not accomplish great things. You must become mad and desperate to do so.'
		],
		unlock: '',
		cost: '$9,000'
	},
	{
		name: 'The Shrunken Head',
		imageBase: '',
		imageColour: '',
		description: [
			'Ritually prepared, the cranium is removed fromthe head, eyes and mouth sewn shut. Boiled in hot water, dried with hot rocks and sand and molded to keep the features of a human face.',
			'Taken by ship to the Americas by Westerns long ago, it now somehow has ended up in your possession.'
		],
		unlock: '',
		cost: '$7,250'
	},
	{
		name: 'The Starved',
		imageBase: '',
		imageColour: '',
		description: [
			'This mask has a hideous appearance, a bony facial structure and dehydrated skin.',
			'It is the kind of mask gives you nightmares.'
		],
		unlock: '',
		cost: '$7,250'
	},
	{
		name: 'The Troll',
		imageBase: '',
		imageColour: '',
		description: [
			'Now here is a troll that is tired of hiding under the bridge.',
			'Why not see the world, pillage a village, take the local inhabitants gold treasures and flee from the the angry mobs instead?'
		],
		unlock: '',
		cost: '$7,250'
	},
	{
		name: 'The Undead',
		imageBase: '',
		imageColour: '',
		description: [
			'An undead is a being that is dead yet somehow behaves like it is still alive.',
			'Created in mysterious ways, this might as well be a zombie as it could be a Vampire.',
			'If you are going to rob a bank, why not scare the living hell out of people while doing so?'
		],
		unlock: '',
		cost: '$7,000'
	},
	{
		name: 'The Vampire',
		imageBase: '',
		imageColour: '',
		description: [
			'The Vampire is a mythological undead creature, said to feed on the blood of the living.',
			'Vampires can appear as normal humans.',
			'When attacked they will reveal their vampire visage where their face changes and they grow fangs and pointed teeth.'
		],
		unlock: '',
		cost: '$7,000'
	},
	{
		name: 'The Zipper',
		imageBase: '',
		imageColour: '',
		description: [
			'The zipper mask consists of two parallel tracks of teeth that can be interlocked or separated by the pulling of a slide between them.',
			'Separate the zipper when you need to communicate.'
		],
		unlock: '',
		cost: '$8,250'
	},
	{
		name: 'The Zombie',
		imageBase: '',
		imageColour: '',
		description: [
			'A zombie is an animated corpse that somehow has been brought to life again.',
			'Brains?'
		],
		unlock: '',
		cost: '$7,250'
	},
	{
		name: 'Almir\'s Beard',
		imageBase: '',
		imageColour: '',
		description: [
			'Some say that real men don\'t shave, but the truth is that real men can\'t shave. Ordinary razors simply bounce off the dense, magnificent foliage that is a truly full Almir beard.'
		],
		unlock: '',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Krampus',
		imageBase: '',
		imageColour: '',
		description: [
			'Been a bad boy or girl this year? Then you can expect a visit from Krampus. Or a phone-call from Bain.'
		],
		unlock: '',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Mechanical Santa',
		imageBase: '',
		imageColour: '',
		description: [
			'This jolly, festive automaton has the heart of Santa. He keeps it in a box, under a pile of elf corpses, and surrounded by severed reindeer heads.'
		],
		unlock: '',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Mrs. Claus',
		imageBase: '',
		imageColour: '',
		description: [
			'When Santa is flying through December skies, someone has to stay home and keep the elves in line. No-one does that better than the whip-cracking, cigar-smoking kommandant of the Claus household.'
		],
		unlock: '',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'The Strinch',
		imageBase: '',
		imageColour: '',
		description: [
			'A seasoned heister over the festival period, the Strinch has been stealing Christmases since 1957. Also linked with the Halloween Heist of 1972.'
		],
		unlock: '',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'The Champ',
		imageBase: '',
		imageColour: '',
		description: [
			'This is the Champ mask. Based on a bad day for Dallas. How bad?, imagine being on the business end of thirteen rounds with a professional boxer. Swollen brow, concussions, dislocated jaw - you name it, and this mask has it. Yeah, a really bad day for Dallas.'
		],
		unlock: '',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'The Tids',
		imageBase: '',
		imageColour: '',
		description: [
			'Some say his racing leathers are made from bleached dolphin skin, and that his oily secretions are prized in Chinese medicine. All we know is... he\'s called The Tids.'
		],
		unlock: '',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Funnyman',
		imageBase: '',
		imageColour: '',
		description: [
			'The Funnyman knows how to make people laugh. The Funnyman might go too far and take a hit or two. Beware though, because a person who can control others laughter knows how to get the last laugh.'
		],
		unlock: '',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Dawg',
		imageBase: '',
		imageColour: '',
		description: [
			'Such mask. Much disguise. Very robber.'
		],
		unlock: '',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'No Me Gusta',
		imageBase: '',
		imageColour: '',
		description: [
			'When you\'re robbing a bank and there\'s only a toast in the deposit box.'
		],
		unlock: '',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Rageface',
		imageBase: '',
		imageColour: '',
		description: [
			'Dodging a cloaker kick and your buddy gets hit. Lol.'
		],
		unlock: '',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Greedy the Elf',
		imageBase: '',
		imageColour: '',
		description: [
			'Santa\'s elves have a tough job. No medical, dental and they endure the whip of Mrs. Claus, but at least they have these fucking sweet hats.'
		],
		unlock: '',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Rudelf',
		imageBase: '',
		imageColour: '',
		description: [
			'Houston wore these at the Payday crews\' Christmas party until Hoxton told him he \'looked a proper tit\'. Ignore Hox. Embrace the spirit of Christmas.'
		],
		unlock: '',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Cloaker-san',
		imageBase: '',
		imageColour: '',
		description: [
			'It\'s not only the American government that uses specially trained operatives for infiltration missions. Japan has their own unit called the Anbu, and while this mask is only a prototype, it\'s very similar to the actual thing they use.',
			'Activate Night Vision Mode by holding down the Fire Mode button.'
		],
		unlock: '',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Zero 68',
		imageBase: '',
		imageColour: '',
		description: [
			'Inspired by the immensely popular anime Zero 68, this mask is modeled after the helmet of the cyborg-ninja hero of the show.'
		],
		unlock: '',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Augmentation',
		imageBase: '',
		imageColour: '',
		description: [
			'The future is now. This special mouthpiece is believed to be developed for soldiers of the future, acting not only as a gasmask but also give the wearer the ability to breathe under water. Unfortunately, this one seems broken, but it still looks cool.'
		],
		unlock: '',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Safety First',
		imageBase: '',
		imageColour: '',
		description: [
			'A scientist inspired by the virtual-reality sex scene in Demolition Man made his own attempt at building a device where no physical contact would actually be needed when performing intercourse. The experiment was an utter failure but a few of the prototypes still exist.'
		],
		unlock: '',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Paycheck Chains',
		imageBase: '',
		imageColour: '',
		description: [
			'Paycheck Chains longs to be completely bonkers. But truth be told, behind that mask he\'s just a regular guy trying to make an indecent living. When trying to push his normal self into craziness, he took a poodle hostage during a robbery when a police'
		],
		unlock: '(sic) showed up. What crazy person would do that, right? But he picked the wrong vicious mongrel to mess with. The dog ended up biting everyone in the crew before they managed to escape the beast. News report(sic) after the robbery claimed the dog showed symptoms of rabies. Maybe Paycheck Chains will finally become as crazy as he wants to be...',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Paycheck Dallas',
		imageBase: '',
		imageColour: '',
		description: [
			'Paycheck Dallas finally made the decision to stop using black plastic bags for concealment. He gathered the nerve to order a real Dallas-mask to honor his idol, but that online printing service didn\'t exactly deliver the real deal... Even so, with the mask, he\'s trying to step up his game and convinced the Paycheck gang to raid a china shop. The CCTV footage shows that Paycheck Dallas accidentally broke the biggest vase while storming in. That made him apologize to the owner, grabb'
		],
		unlock: '(sic) all small changes(sic) from the register and run for the door. Probably blushing like a tomato behind that smiling neon mask.',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Alces',
		imageBase: '',
		imageColour: '',
		description: [
			'Make the hunted become the hunter and stagger your way through any heist with these impressive horns.'
		],
		unlock: '',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Canis Lupus',
		imageBase: '',
		imageColour: '',
		description: [
			'Blow down the bank vaults and scare the crap out of all the little pigs with this mask.'
		],
		unlock: '',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Felis Lynx',
		imageBase: '',
		imageColour: '',
		description: [
			'Never come between a cat and his prey, or a heister and his loot!'
		],
		unlock: '',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Ursus Maritimus',
		imageBase: '',
		imageColour: '',
		description: [
			'Fight global warming with a mighty roar while wearing this magnificent face covering.'
		],
		unlock: '',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Baba Yaga',
		imageBase: '',
		imageColour: '',
		description: [
			'Occasionally villainous, always mysterious. The Baba Yaga stalks the dark forests of Slavic myth. She flies around in a mortar, wields a pestle and lives in a hut that stomps about on giant chicken legs.'
		],
		unlock: '',
		cost: 'Free'
	},
	{
		name: 'Russian Hat',
		imageBase: '',
		imageColour: '',
		description: [
			'The world would be very different were it not for the howling, freezing Russian winter. Napoleon and Hitler both learned this. History could be very different if they only packed a warm hat.'
		],
		unlock: '',
		cost: 'Free'
	},
	{
		name: 'Sputnik',
		imageBase: '',
		imageColour: '',
		description: [
			'Despite being just a tiny, beeping sphere, the original Sputnik sent political shock-waves across 1950\'s Washington. Send some criminal shock-waves around the capital with this vintage-yet-pimped version.'
		],
		unlock: '',
		cost: 'Free'
	},
	{
		name: 'Tiara',
		imageBase: '',
		imageColour: '',
		description: [
			'Okay, it doesn\'t hide your face and it is certainly not going to stop any bullets whizzing your way....but, damn. You\'re going to look like the belle of the ball wearing Mrs Volkov\'s wedding tiara.'
		],
		unlock: '',
		cost: 'Free'
	},
	{
		name: 'Vlad Armor',
		imageBase: '',
		imageColour: '',
		description: [
			'\'Hey! Payday clowns! Vlad here with a little something from the Motherland. I wore this beautiful heavy bastard all through my days in Donetsk. It ain\'t pretty like your delicate American masks, but it kept me pretty!\''
		],
		unlock: '',
		cost: 'Free'
	},
	{
		name: 'Le Castle Vania',
		imageBase: '',
		imageColour: '',
		description: [
			'It\'s modern, dynamic and a real crowd-pleaser. It\'s sleek, slick and totally stylish. It\'s both the music of Le Castle Vania, and his mask.'
		],
		unlock: '',
		cost: 'Free'
	},
	{
		name: 'Eggian',
		imageBase: '',
		imageColour: '',
		description: [
			'In \'Xenogogs\', this creature embodied fear itself, as it tore its way from the butt of Troy Templeton during that scene.'
		],
		unlock: '',
		cost: 'Free'
	},
	{
		name: 'Fatboy',
		imageBase: '',
		imageColour: '',
		description: [
			'It\'s the full-cheeked, pink, healthy face that represents the wonderful, magical alchemy of deep-fried dough and sugar found in the lobby of theaters across the States.'
		],
		unlock: '',
		cost: 'Free'
	},
	{
		name: 'Oliver',
		imageBase: '',
		imageColour: '',
		description: [
			'\'And the nominees for The Greatest Heisters In The World are.....\''
		],
		unlock: '',
		cost: 'Free'
	},
	{
		name: 'Pirate',
		imageBase: '',
		imageColour: '',
		description: [
			'In \'Buccaneers Ahoy!\', these swashbuckling undead heisters terrorized the treasure-laden galleons of the Caribbean for years, proving forever that....pirates arrrrrrrrrrrr cool.'
		],
		unlock: '',
		cost: 'Free'
	},
	{
		name: 'Groucho',
		imageBase: '',
		imageColour: '',
		description: [
			'A perfect disguise doesn\'t have to mean dying your hair, changing your iris and burning off your fingerprints. Sometimes looking obviously strange makes people uncomfortable enough to look away and pay you no mind.'
		],
		unlock: '',
		cost: 'Free'
	},
	{
		name: 'Tinted Love',
		imageBase: '',
		imageColour: '',
		description: [
			'Murder, extortion, violence, destruction, drugs, guns, and theft. These are all crimes associated with Vlad, but none are as great as his fashion sense.'
		],
		unlock: '',
		cost: 'Free'
	},
	{
		name: 'Al Capone',
		imageBase: '',
		imageColour: '',
		description: [
			'The original mobster that really made the criminal way of life something to strive for. A given member of the PAYDAY crew if he were alive today. But now you can at least cosplay him, making the police scared as they think they’ve seen a ghost.'
		],
		unlock: '',
		cost: 'Free'
	},
	{
		name: 'Charles \'Lucky\' Luciano',
		imageBase: '',
		imageColour: '',
		description: [
			'Considered the \'father of modern organized crime\'. Not clear why he’s nicknamed \'Lucky\', but he did managed to get arrested 25 times, but never spent one day in jail. And he survived a throat slashing as he refused to join another mob. Either way, he’s a true inspiration.'
		],
		unlock: '',
		cost: 'Free'
	},
	{
		name: 'George \'Bugs\' Moran',
		imageBase: '',
		imageColour: '',
		description: [
			'The rival of Al Capone. Two men battling it out as the prohibition era turned booze into gold for anyone who could get their hands on some bottles of whiskey. Capone even tried gunning him down in the infamous Saint Valentine’s Day Massacre. But he failed.'
		],
		unlock: '',
		cost: 'Free'
	},
	{
		name: 'Stephanie \'Madame\' St. Clair',
		imageBase: '',
		imageColour: '',
		description: [
			'This is one tough cookie. The criminal part of St. Clair was born as she went through hell one dark night. After that, she dove deep into the shady world of illegality. But she was also an advocate for civil rights and police corruption. Like a modern day, twisted version of Robin Hood one might say.'
		],
		unlock: '',
		cost: 'Free'
	},
	{
		name: 'Commando',
		imageBase: '',
		imageColour: '',
		description: [
			'Chains had this beret custom made in preparation for a mercenary operation in West Africa. What he did while wearing it is something he won’t talk about, though.'
		],
		unlock: '',
		cost: 'Free'
	},
	{
		name: 'Dawn Patrol',
		imageBase: '',
		imageColour: '',
		description: [
			'Way back in the day, on a secret and highly dangerous mercenary mission in Southeast Asia, Chains acquired this old US Army helmet. No one knows who the previous owner was.'
		],
		unlock: '',
		cost: 'Free'
	},
	{
		name: 'Martial Law',
		imageBase: '',
		imageColour: '',
		description: [
			'This is an old souvenir that Chains keeps as a memory of two long, boring months spent in Central America doing VIP security after an armed coup. Effectively, it reminds him of the kind of military monotony that made him leave mercenary life behind.'
		],
		unlock: '',
		cost: 'Free'
	},
	{
		name: 'Pickle Face',
		imageBase: '',
		imageColour: '',
		description: [
			'Lean, mean, green killing machine. The perfect mask to wear when you’re in a pickle and need to make like a banana and split. Be water, my friend.'
		],
		unlock: '',
		cost: 'Free'
	},
	{
		name: 'The Awkward Seal',
		imageBase: '',
		imageColour: '',
		description: [
			'That moment when you\'re going to finish off a Dozer but when you pull the trigger you\'re out of ammo. Or that moment when you\'re throwing the last bag straight into the sea. Or that moment when other robbers compliment your mask but you didn\'t put any effort into it. Or that moment when someone is repairing the drill at the same time as you.'
		],
		unlock: '',
		cost: 'Free'
	},
	{
		name: 'Black Beanie',
		imageBase: '',
		imageColour: '',
		description: [
			'Most robbers choose this snug, concealing headwear to help them blend in with the night. Unfortunately it won\'t do you much good to conceal yourself carrying all that equipment.'
		],
		unlock: '',
		cost: 'Free'
	},
	{
		name: 'Green Beanie',
		imageBase: '',
		imageColour: '',
		description: [
			'A murky green that adds a touch of subtle mystery to your profile. The FBI will appreciate your fondness for their own green uniformed team. Not that it won\'t stop them firing on you openly anyway!'
		],
		unlock: '',
		cost: 'Free'
	},
	{
		name: 'Navy Beanie',
		imageBase: '',
		imageColour: '',
		description: [
			'This fetching number will make you the talk of the town. You\'ll guaranteed'
		],
		unlock: '(sic) to hear things like: \'SEND IN THE TAZERS!\', \'THIS IS THE POLICE, COME OUT WITH YOUR HANDS UP!\', or \'WHO ARE THESE GUYS, EX-MILITARY?!\'',
		cost: 'Free'
	},
	{
		name: 'Red Beanie',
		imageBase: '',
		imageColour: '',
		description: [
			'This supposedly \'three million dollar hat\' is either soaked in the blood of your enemies, or was just made with some red woolen material. Just wash it after each heist!'
		],
		unlock: '',
		cost: 'Free'
	},
	{
		name: 'Chains, The Weapons Expert',
		imageBase: '',
		imageColour: '',
		description: [
			'When there\'s only one copy of something left in the world, it becomes priceless. Know what you can do, and what others can do better. Get the job done. Don\'t get carried away by jealousy: that\'s fear talking. Fear brings you down. It doesn\'t come from love. When you really love someone, you trust them. Trust them enough to not get mean over priceless things.'
		],
		unlock: '',
		cost: 'Free'
	},
	{
		name: 'Dallas, The Chief',
		imageBase: '',
		imageColour: '',
		description: [
			'Some people expect a free ride through life, cruising on good looks and luck. The world doesn\'t work that way, even if it sometimes looks like it. Talent is just the start; it takes education, dedication, determination. As a leader, you gotta make up your own mind. Respect your decisions, and others will too.'
		],
		unlock: '',
		cost: 'Free'
	},
	{
		name: 'Hoxton, The Infiltrator',
		imageBase: '',
		imageColour: '',
		description: [
			'The friends you have right now, may not be all the friends you\'ll ever need. Don\'t miss out on a future gain by keeping friends away. It\'s easy to get lost in the desert. One wrong turn is all it takes. And when you do, those new friends just might be your ticket to an oasis.'
		],
		unlock: '',
		cost: 'Free'
	},
	{
		name: 'Wolf, The Maniac',
		imageBase: '',
		imageColour: '',
		description: [
			'Knowing when not to quit is harder than knowing when to throw in the towel. Don\'t get sidetracked by vanity or foolish pride. Sometimes, you get so wrapped up in a problem that you don\'t see what the problem really is. It gets everyone in a lot of trouble. Bad trouble. So do what\'s right, and you can\'t go wrong.'
		],
		unlock: '',
		cost: 'Free'
	},
	{
		name: 'Byrne',
		imageBase: '',
		imageColour: '',
		description: [
			'Byrne is gone. He\'s our koala and our \'pet\'. But we don\'t want him back. He\'s boring and tedious and all he does is eat eucalyptus leaves. And we mean like ALL day. He doesn\'t like when you touch or even talk to him. So now he\'s gone and we wanna keep it that way. If you find him (he looks like a douchebag pet) you can keep him or whatever. Consider this a warning of boredom.'
		],
		unlock: '',
		cost: 'Free'
	},
	{
		name: 'Fluffedup',
		imageBase: '',
		imageColour: '',
		description: [
			'Our darling Fluffedup is gone. He\'s 95 years old, and part of our family. Fluffedup is a happy little individual who\'s absolutely not been trying to throw himself into the blender or off the roof several times. We just want to keep him forever, and never let him go. So it\'s super important that we get him back to us, to our home where he lives and loves and absolutely doesn\'t hate.'
		],
		unlock: '',
		cost: 'Free'
	},
	{
		name: 'Stoibs',
		imageBase: '',
		imageColour: '',
		description: [
			'Stoibs is a bit frantic and \'speedy\'. He ran away last tuesday night and we would be glad to get him back. We have had a hard time finding a chinchilla with a good pedigree. So for us to start over again with a new one, feeding him corn to get him fat and tender will be tedious. If you find him, we\'ll invite you to dinner where we enjoy Stoibs!'
		],
		unlock: '',
		cost: 'Free'
	},
	{
		name: 'Tempy',
		imageBase: '',
		imageColour: '',
		description: [
			'Tempy is our tame lion. He\'s been away for 2 weeks now and we miss him. Tempy loves all kind of cuddle, as long as it\'s done by us. If you spot Tempy: do not approach him in any way. Please tell us where you\'ve seen him. But you will get mutilated if he gets close. Other than that, he\'s a doll and loves sleeping in the sun. Also don\'t let him see any kids...that doesn\'t end well.'
		],
		unlock: '',
		cost: 'Free'
	},
	{
		name: 'Keelhauled Alex',
		imageBase: '',
		imageColour: '',
		description: [
			'Every ship come bearing tales of ghost. Restless phantoms seen by tired spotters late at night. Everything from Krakens to mermaids. But the tale of Keelhauled Alex is maybe one of the most feared. Alex had been stealing food during a long sail out at sea. As he was caught, he was sentenced to be keelhauled. Not a serious crime, but a serious punishment. But as Alex was beneath the boat, another ship opened fire, and Alex was forgotten on the bottom of the ship. As the dust settled, his corpse was thrown into the depths. But ever since then, Keelhauled Alex walks ships at night, staring down everyone from captains to simple deck hands. It is said that he can gaze into your soul and devour it.'
		],
		unlock: '',
		cost: 'Free'
	},
	{
		name: 'Nilam',
		imageBase: '',
		imageColour: '',
		description: [
			'Nilam grew up among buccaneers, pirates and corsairs. She knew rum before she could speak, and held a sword before she could walk. Nilam was without family, and instead she found the nomadic lifestyle of a pirate her destiny. She was swift with a blade and few could match her in combat. All she sought was the same respect her peers got, but this was a world ruled by men. Finally Nilam had reached her limit. Those who wronged her were \'sentenced\' by getting their throats slit. Her reputation preceded her, and harbours feared the bloodshed she brought with her when her ship \'Verdict\' came sailing in.'
		],
		unlock: '',
		cost: 'Free'
	},
	{
		name: 'One-Eyed Jessicah',
		imageBase: '',
		imageColour: '',
		description: [
			'With two eyes, Jessicah would never have been famous. After a shipwreck, she managed to swim to a small islet. Circled by a shark, with no rescue in sight, she was caught. With only a broken knife, her only choice was to kill the shark, so that she could safely swim to shore. But she needed a decoy, a lure so she could surprise the shark. The loss of a finger to toe would make swimming difficult, so instead, she scooped out one of her eyeballs and threw the bloody mess in the water. Then she dove in.'
		],
		unlock: '',
		cost: 'Free'
	},
	{
		name: 'Schneider',
		imageBase: '',
		imageColour: '',
		description: [
			'One of the most brutal and ruthless pirates to ever exist. But also one of the most unknown. Just the way Schneider wanted it. Instead, Schneider\'s moniker \'the Devil\' was much more well known. He found it more profitable if nobody actually knew his face. But tales of how the \'devil\' sailed the seven seas traveled among bars in the Caribbean. To \'spot the Devil on the horizon\' is a common saying whe someone had disappeared out at sea. But the truth was that Schneider had forever buried them in a watery grave.'
		],
		unlock: '',
		cost: 'Free'
	},
	{
		name: 'Kurgan\'s Gas Mask',
		imageBase: '',
		imageColour: '',
		description: [
			
		],
		unlock: 'Kurgan doesn\'t wear the gas-mask to keep the fumes of war out. He wears it to keep the flames of fury in. Betrayed by his own side, Kurgan barely survived an ambush by armored flamers. Inside the mask, there is only the smell of his own immolated flesh, a constant reminder to trust no-one.',
		cost: 'Unlocked through Side Job'
	},
	{
		name: 'Rivet\'s Bandana',
		imageBase: '',
		imageColour: '',
		description: [
			
		],
		unlock: 'Rivet is American, and Americans value tradition. From the office of the President, to the lowliest scum-sucker in the land, tradition matters. So if you\'re going to stick a gun in a chump\'s face and demand they \'hand it over\' you better damn well know your history. Like Jesse James, like Billy The Kid,(sic) you wear a bandana.',
		cost: 'Unlocked through Side Job'
	},
	{
		name: 'Sterling\'s Beret',
		imageBase: '',
		imageColour: '',
		description: [
			'It would be lovely to think '
		],
		unlock: 'Sterling earned the beret and badge through hard-training and combat. The truth, however, is that he saw how it impressed a couple of young fillies at the Officers Club. An invitation to step outside, a few dirty punches and a knocked out Colonel later, and Sterling had his very own red beret. And a couple of fillies. Smashing!',
		cost: 'Unlocked through Side Job'
	},
	{
		name: 'Wolfgang\'s Cap',
		imageBase: '',
		imageColour: '',
		description: [
			'This cap may look like a normal, standard-issue M43 field cap. And you may think such humble headgear is an unusual choice for a man as vain as '
		],
		unlock: 'Wolfgang. But this cap holds special meaning for him. It may surprise you that Wolfgang can truly love. Pinned inside is a picture of his beloved. For whom he fights the good fight.',
		cost: 'Unlocked through Side Job'
	},
	{
		name: 'Retro Chains',
		imageBase: '',
		imageColour: '',
		description: [
			'Combat and shooter games that simulate intense situations between players is a great way to keep up your skills in between jobs. Chains likes games that train your situational awareness and award skillfull'
		],
		unlock: '(sic) play by gaining the upperhand in a fight.',
		cost: 'Free'
	},
	{
		name: 'Retro Dallas',
		imageBase: '',
		imageColour: '',
		description: [
			'A good tactical game is the perfect way to prep before a big heist. Dallas prefers to kick-start his strategic mind with something difficult and calculating where you need to manage units and resources to achieve victory.'
		],
		unlock: '',
		cost: 'Free'
	},
	{
		name: 'Retro Hoxton',
		imageBase: '',
		imageColour: '',
		description: [
			'Solving logic puzzles as a brain teaser is a great way to unwind after some intense criminal activity. Hoxton likes games that lets'
		],
		unlock: '(sic) him wrap his head around a problem and figure it out one step at a time with the clues given.',
		cost: 'Free'
	},
	{
		name: 'Retro Wolf',
		imageBase: '',
		imageColour: '',
		description: [
			'Violent games help Wolf getting into the mood'
		],
		unlock: '(sic) for a heist. The more blood, gore and carnage the better. He prefers games that test your reaction and speed.(sic) Games where every second counts for your survival against a nearly endless horde of enemies.',
		cost: 'Free'
	},
	{
		name: 'Z.A.M.S Helmet',
		imageBase: '',
		imageColour: '',
		description: [
			'Classic gear can be a wonderful thing. The mindset of a heroic thrill-seeker riding a 200BHP steel horse has many things in common with a heister that are not obvious at first glance- the aesthetic value of a piece of custom headgear being one of them!'
		],
		unlock: '',
		cost: 'Free'
	},
	{
		name: 'Rhubarb',
		imageBase: '',
		imageColour: '',
		description: [
			'A tribute to our legendary adventurer [MANY GUN] CLOVERAPTOR- solver of mysteries and bringer of The Mega Death! Giving up a dream of being a banker, he faced his destiny and faced the Cop Wizard and his minions, the Law Elementals. Who knows if it was his own will, or his pushy Crime Dad, that allowed him to prevail, but we will be forever grateful for his service.',
			'OVERKILL Salutes You!'
		],
		unlock: '',
		cost: 'Free'
	},
	{
		name: 'PNV - BriteNite',
		imageBase: '',
		imageColour: '',
		description: [
			'On the one-thousand-and-first night, there was no light. But neither was it needed, for legends tell of an unruly rogue, who donned a visage that would allow all to be seen.',
			'Activate Night Vision Mode by holding down the Fire Mode button.'
		],
		unlock: 'THIS IS A SPRING BREAK 2018 ITEM!',
		cost: 'Free'
	},
	{
		name: 'Boxey',
		imageBase: '',
		imageColour: '',
		description: [
			'Old school street smarts and butch toughness is what you get here. A no nonsense get-the-job-done personality. You won\'t find a more devoted guard for your loot than this fellow.'
		],
		unlock: 'THIS IS A SPRING BREAK 2018 ITEM!',
		cost: 'Free'
	},
	{
		name: 'Crazy Lou',
		imageBase: '',
		imageColour: '',
		description: [
			'Don\'t let the small frame and disheveled fur fool you. This little guy\'s piercing eyes can intimidate just about anyone, and woe betide any who dares steal something while he\'s on watch.'
		],
		unlock: 'THIS IS A SPRING BREAK 2018 ITEM!',
		cost: 'Free'
	},
	{
		name: 'Frou Frou',
		imageBase: '',
		imageColour: '',
		description: [
			'With her charming, floppy ears, Frou Frou is no timid Afghan Hound. Sharp and witty, she\'s the ideal companion to cover your face with on those heists that require brains as well as cunning.'
		],
		unlock: 'THIS IS A SPRING BREAK 2018 ITEM!',
		cost: 'Free'
	},
	{
		name: 'Klaus',
		imageBase: '',
		imageColour: '',
		description: [
			'Klaus isn\'t a particularly smart dog, but what he lacks in brains, he makes up for in heart, and is always ready to share his bones with the rest of the pack.'
		],
		unlock: 'THIS IS A SPRING BREAK 2018 ITEM!',
		cost: 'Free'
	},
	{
		name: 'Tormentor',
		imageBase: '',
		imageColour: '',
		description: [
			'A smile can hide the most murderous thought, but the eyes can never lie. Reading a person is mostly looking straight into their eyes. What\'s truly terrifying is people who wear their thoughts on their face and within a second it\'s hard for the beholder to suppress a scream.'
		],
		unlock: '',
		cost: 'Free'
	},
	{
		name: 'God Emperor',
		imageBase: '',
		imageColour: '',
		description: [
			'Bow down before him.',
			'The Mega 45th mask is an evolved version of the original mask. It symbolises transcendence and catharsis.',
			'Thank you for your support.'
		],
		unlock: 'OVERKILL salutes you!',
		cost: 'Free'
	},
	{
		name: 'The 45th',
		imageBase: '',
		imageColour: '',
		description: [
			'Commander-In-Chief, father. Has an ambition to serve this great nation for 8 years. A talkative man, no doubt.',
			'The 45th is one of the most controversial presidents in history. Among criminals however, he remains extremely popular.'
		],
		unlock: '',
		cost: 'Free'
	},
	{
		name: 'Fire Rooster',
		imageBase: '',
		imageColour: '',
		description: [
			'You\'re a reliable firestarter, always on time and always on target. As the new year begins, you will set your sights on that shining gold, the most noble metal of them all. Your motives may be shady, but seven is magnificent and before you know it you\'ll be high-fiving to celebrate that perfect heist. Maybe you\'ll finally get that eight-ball tattoo.'
		],
		unlock: '',
		cost: 'Free'
	},
	{
		name: 'The Skull',
		imageBase: '',
		imageColour: '',
		description: [
			'An exclusive mask representing death and mortality.',
			'Created in the heavens as a gift by the gods to men and women who believed in them early on, who built their shrines and spread their beliefs across the lands.',
			'Thank you for believing in us! We salute you!'
		],
		unlock: 'THIS IS A LOOT BAG ITEM!',
		cost: '$6,750'
	},
	{
		name: 'Furious Santa',
		imageBase: '',
		imageColour: '',
		description: [
			'Santa, more known as Santa Claus, Saint Nicholas, Father Christmas and Kris Kringle (?) is a man of epic proportions. Words like legendary, mythical, historical and folkloric best describe this beast of a man.',
			'This particular mask is the Furious Santa mask. It\'s worn by angry internet users and bad children who didn\'t get the presents they wanted.'
		],
		unlock: 'THIS IS A XMAS SOUNDTRACK ITEM!',
		cost: '$7,500'
	},
	{
		name: 'Surprised Santa',
		imageBase: '',
		imageColour: '',
		description: [
			'Santa, more known as Santa Claus, Saint Nicholas, Father Christmas and Kris Kringle (?) is a man of epic proportions. Words like legendary, mythical, historical and folkloric best describe this beast of a man.',
			'This particular mask is the Surprised Santa mask. Who knows why he\'s surprised? Maybe someone stole his sled? Maybe someone stole his reindeers? Maybe he just saw someone rob a bank?'
		],
		unlock: 'THIS IS A XMAS SOUNDTRACK ITEM!',
		cost: '$7,500'
	},
	{
		name: 'Tipsy Santa',
		imageBase: '',
		imageColour: '',
		description: [
			'Santa, more known as Santa Claus, Saint Nicholas, Father Christmas and Kris Kringle (?) is a man of epic proportions. Words like legendary, mythical, historical and folkloric best describe this beast of a man.',
			'This particular mask is the Tipsy Santa mask. You know that type of feeling when you\'re tipsy and are feeling something\'s going on but you aren\'t hammered yet. That\'s tipsy for ya.'
		],
		unlock: 'THIS IS A XMAS SOUNDTRACK ITEM!',
		cost: '$7,500'
	},
	{
		name: 'The 37th',
		imageBase: '',
		imageColour: '',
		description: [
			'Politican, Commander-In-Chief, father. Had an ambition to serve this great nation for 8 years. He wasn\'t a crook, for sure.',
			'The 37th was the only president who resigned from office. Among criminals however, he remains extremely popular.'
		],
		unlock: 'THIS IS AN ARMORED TRANSPORT ITEM!',
		cost: '$10,800'
	},
	{
		name: 'The 42nd',
		imageBase: '',
		imageColour: '',
		description: [
			'Politican, Commander-In-Chief, father. Served this great nation for 8 years. A ladies man, no doubt.',
			'The 42nd was one of the most peaceful presidents in history. Among criminals however, he remains extremely popular.'
		],
		unlock: 'THIS IS AN ARMORED TRANSPORT ITEM!',
		cost: '$10,800'
	},
	{
		name: 'The 43rd',
		imageBase: '',
		imageColour: '',
		description: [
			'Politican, Commander-In-Chief, father. Served this great nation for 8 years. A wordsmith, no doubt.',
			'The 43rd was one of the most unpopular presidents in history. Among criminals however, he remains extremely popular.'
		],
		unlock: 'THIS IS AN ARMORED TRANSPORT ITEM!',
		cost: '$10,800'
	},
	{
		name: 'The 44th',
		imageBase: '',
		imageColour: '',
		description: [
			'Politican, Commander-In-Chief, father. Had an ambition to serve this great nation for 8 years. A hopeful man, and an award winner at that.',
			'The 44th is one of the most ambitious presidents in history. Among criminals however, he remains extremely popular.'
		],
		unlock: 'THIS IS AN ARMORED TRANSPORT ITEM!',
		cost: '$10,800'
	},
	{
		name: 'Arnold',
		imageBase: '',
		imageColour: '',
		description: [
			'Arnold the Bulldog has always been a doge of great ambition.',
			'He wanted to build much body - and he did. He became the biggest doge in his little mountain town and received such prize.',
			'He then moved States, got into office, starred in a couple of weird doge movies called \'The Dogenator\' and \'The Dogenator II - such judgement\'.'
		],
		unlock: 'THIS IS A GAGE WEAPON PACK #01 ITEM!',
		cost: '$10,500'
	},
	{
		name: 'Chuck',
		imageBase: '',
		imageColour: '',
		description: [
			'Chuck the Eagle represents everything that is righteous, good and true.',
			'A famous Martial Artist found this huge eagle while he was doing karate in the mountains of Alaska.',
			'They had a fight for several hours but eventually the Martial Artist won. He took the head, made it into a mask and named it after himself.'
		],
		unlock: 'THIS IS A GAGE WEAPON PACK #01 ITEM!',
		cost: '$10,500'
	},
	{
		name: 'Dolph',
		imageBase: '',
		imageColour: '',
		description: [
			'Dolph the Goat represents natural strength and stone.',
			'It was found by a group of adventurers in a mountain cave in the most northern parts of Sweden.',
			'Legend has it that the god of thunder, Thor, had a chariot that was pulled by two goats. This mask probably has nothing to do with that legend though. That would be crazy.'
		],
		unlock: 'THIS IS A GAGE WEAPON PACK #01 ITEM!',
		cost: '$10,500'
	},
	{
		name: 'Jean-Claude',
		imageBase: '',
		imageColour: '',
		description: [
			'Jean-Claude the Panda used to be really cool and star in all sorts of crazy stuff.',
			'Sadly, he later became a drug addict and stopped being cool. Because of training however, he managed to get back on track.',
			'Most recently, you could see him do this weird things with two trucks. That shit was fucked up. You should check it out if you haven\'t.'
		],
		unlock: 'THIS IS A GAGE WEAPON PACK #01 ITEM!',
		cost: '$10,500'
	},
	{
		name: 'Alpha Force',
		imageBase: '',
		imageColour: '',
		description: [
			'4th Domestic Operation Group-force Enforcers-Alpha (4th DOGE-A), popularly ridiculed as Alpha Force, is a U.S. Army component of the Joint Common Operations Command. They\'re reputation is pretty poor and have become a less and less respected force to deal with.',
			'One of the members probably dropped this helmet when he fled from you.'
		],
		unlock: 'THIS IS A GAGE WEAPON PACK #02 ITEM!',
		cost: '$13,500'
	},
	{
		name: 'Commander Crime',
		imageBase: '',
		imageColour: '',
		description: [
			'Commander Crime is an American fictional character, a supervillain and the supreme leader of the criminal network C.R.I.M.E. who appears in comic books by OVERKILL Comics.',
			'The character was created by now world renowned writer-editor-artist and professional badminton player Max Elmberg Sjöholm.',
			'Commander Crime made his first appearance in The Amazing Career Criminals: The PAYDAY gang gets a C.R.I.M.E. offer they can\'t refuse!'
		],
		unlock: 'THIS IS A GAGE WEAPON PACK #02 ITEM!',
		cost: '$13,500'
	},
	{
		name: 'The Gage Blade',
		imageBase: '',
		imageColour: '',
		description: [
			'The Gage Blade is one of Gage\'s own personal favorite ballistic face masks. It will protect your face from one or two 9mm bullets before your head explodes.',
			'Without this mask, Gage wouldn\'t be the wonderful human being he is today.'
		],
		unlock: 'THIS IS A GAGE WEAPON PACK #02 ITEM!',
		cost: '$13,500'
	},
	{
		name: 'The Troubled War Veteran',
		imageBase: '',
		imageColour: '',
		description: [
			'The Troubled War Veteran is a mask that Gage has worked on for some time. Back in the Vietnam war Gage met this big-muscled guy who went nuts and started to use a bow instead of modern weapons.',
			'He died pretty early in the war, but for some strange reason Gage couldn\'t forget his face.'
		],
		unlock: 'THIS IS A GAGE WEAPON PACK #02 ITEM!',
		cost: '$13,500'
	},
	{
		name: 'Criminal Ambitions',
		imageBase: '',
		imageColour: '',
		description: [
			'A mask only for the most ambitious heister.',
			'Take all the loot, leave nothing behind.'
		],
		unlock: 'THIS IS A POETRY JAM ITEM!',
		cost: 'Free'
	},
	{
		name: 'Metalhead',
		imageBase: '',
		imageColour: '',
		description: [
			'The origin of the Metalhead is unclear.',
			'It looks more of a helmet than a mask. It has spikes pointing out of it and looks very much like a pimped out gas mask made of iron. It\'s unclear if it protects the wearer from any gas or melee weapons however.',
			'It looks pretty rad though.'
		],
		unlock: 'THIS IS A POETRY JAM ITEM!',
		cost: 'Free'
	},
	{
		name: 'The Optimist',
		imageBase: '',
		imageColour: '',
		description: [
			'\'Be the change you want to see in the world.\'',
			'That\'s what the Optimist believes.',
			'As the leader of a peaceful group of robots, he feels it is his responsibility to combat rival bands of robots obsessed with negativity and extermination. His prime weapon: rolling out positivity ',
			'through constructive reasoning and unbiased logic.',
			'Or through forced upgrades. Which are compulsory.'
		],
		unlock: 'THIS IS A POETRY JAM ITEM!',
		cost: 'Free'
	},
	{
		name: 'War Face',
		imageBase: '',
		imageColour: '',
		description: [
			'You got a war face! AAAAAAAAHH! That\'s a war face, let me see your war face!',
			'...',
			'Bullshit. You didn\'t convince me, let me see your REAL war face!',
			'...Actually, that one\'s pretty good...'
		],
		unlock: 'THIS IS A POETRY JAM ITEM!',
		cost: 'Free'
	},
	{
		name: 'Asilidae',
		imageBase: '',
		imageColour: '',
		description: [
			'The Asilidae, also known as robber fly or assassin fly, are powerfully built, bristly flies who are known for their notoriously aggressive predatory habits. They feed on other insects and as a rule, they wait in ambush and catch their prey in flight.'
		],
		unlock: 'THIS IS A GAGE SNIPER PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Sphodromantis',
		imageBase: '',
		imageColour: '',
		description: [
			'The common name for these lovely little fellows is \'praying mantis\'. The reason? It refers to the prayer-like posture where it folds its fore-limbs. More commonly however it\'s refered to as the preying mantis, because of it\'s nature.',
			'Basically, they eat anything they can successfully capture and devour.'
		],
		unlock: 'THIS IS A GAGE SNIPER PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Tarantula',
		imageBase: '',
		imageColour: '',
		description: [
			'Eight legs strong, tarantula sizes range from as small as a fingernail to as large as a handgun when the legs are fully extended. The name originally comes from the name Lycosa tarantula, a species of wolf spider. Tarantulas generally hunt in trees, on or near the ground. They\'re also popular as pets.'
		],
		unlock: 'THIS IS A GAGE SNIPER PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Vespula',
		imageBase: '',
		imageColour: '',
		description: [
			'Two pairs of wings, an ovipositor or stinger, no thickened hairs and a pair of talons. That\'s the wasp for you. Almost every pest insect species has at least one wasp species that preys upon it or parasitizes it. This makes the wasps very important in natural control of their numbers.'
		],
		unlock: 'THIS IS A GAGE SNIPER PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'The 16th',
		imageBase: '',
		imageColour: '',
		description: [
			'Lawyer, Commander-In-Chief, father. Had an ambition to serve this great nation for 8 years.',
			' Consistently ranked by scholars and the public as one of the greatest U.S. presidents of all time.',
			' The 16th is one of the most beloved presidents in history. Among criminals, he remains well respected.'
		],
		unlock: 'THIS IS A BIG BANK HEIST ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'The 18th',
		imageBase: '',
		imageColour: '',
		description: [
			'Soldier, Commander-In-Chief, father. Served this great nation for 8 years.',
			'A protector and a warrior, and a great one at that.',
			'The 18th was one of the most unpopular presidents in history. Among criminals however, he remains extremely popular.'
		],
		unlock: 'THIS IS A BIG BANK HEIST ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'The 1st',
		imageBase: '',
		imageColour: '',
		description: [
			'General of the Armies, Commander-In-Chief,  Founding Father. Served this great nation for 8 years.',
			'The first ever president, and a great one at that.',
			'The 1st was one of the most popular presidents in history and the face of the $1 bill. Among criminals, he remains extremely popular.'
		],
		unlock: 'THIS IS A BIG BANK HEIST ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'The First American',
		imageBase: '',
		imageColour: '',
		description: [
			'Worls-renowned polymath, author, printer, political theorist, postmaster, scientist, inventor, civic activist, statesman, diplomat, Founding Father.',
			' Titulated as \'The First American\' and the face of the $100 bill.',
			'Among criminals, he remains extremely popular '
		],
		unlock: 'THIS IS A BIG BANK HEIST ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Clint',
		imageBase: '',
		imageColour: '',
		description: [
			'Clint the black-capped squirrel monkey. Not really a monkey without a name. Just like the real Clint, this monkey doesn\'t fuck around. It minds its own business. Doesn\'t talk unless talked to, knowing that the less it says the stronger it becomes. When it actually tries to say something it ends up screeching because it\'s a FUCKING MONKEY.'
		],
		unlock: 'THIS IS A GAGE SHOTGUN PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'John',
		imageBase: '',
		imageColour: '',
		description: [
			'John the mandrill monkey. Mandrill\'s are closely related to baboons and even more to the drill. Not the kind of drill you use in a bank robbery, but the monkey drill, silly you! John is a monkey known for his sardonic one-liners, include the catch phrase \'unidentified monkey screech\'.'
		],
		unlock: 'THIS IS A GAGE SHOTGUN PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Rutger',
		imageBase: '',
		imageColour: '',
		description: [
			'Rutger the motherfucking orangutan. If you\'re strolling down the jungle and suddenly face an orangutan, you\'re in trouble. Statistics show that one orangutan is as dangerous as ten hobos with shotguns. You remember that movie about dinosaurs with the big dinosaur in the end saving the kids? Know who killed the dinosaur after the credits? The kids did, but you know who killed the kids? Rutger the motherfucking orangutan did.'
		],
		unlock: 'THIS IS A GAGE SHOTGUN PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Steven',
		imageBase: '',
		imageColour: '',
		description: [
			'Steven the silverback gorilla. Not only is he fucking huge, he\'s strong as hell too. He can break your back by just looking at you. You\'ll be hospitalized for weeks. Not only that, but there\'ll be months of therapy as well. Do you know how hard it is learning to walk again? Want to know what else that is hard? Steven\'s muscles. 22 years ago he worked as a chef on a military ship. Killed everyone in 103 minutes.'
		],
		unlock: 'THIS IS A GAGE SHOTGUN PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Black Death',
		imageBase: '',
		imageColour: '',
		description: [
			'Bob Robertson worked at a purple stuff factory. The purple stuff factory was old and in need of reperations. Bob mentioned this to his supervisors but they ignored him. Bob kept on hardly working, playing pre-installed games on his operative system. One day when he was checking out early, cracks started to form in a container filled with purple stuff. Just when he went past, the container burst and Bob was drenched in purple stuff.',
			'When he got out of hospital, he had become a super villain. His face has been purple ever since.'
		],
		unlock: 'THIS IS A GAGE ASSAULT PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Crow Goblin',
		imageBase: '',
		imageColour: '',
		description: [
			'For the longest time ever no one knew who the real identity behind the Crow Goblin was. Twenty years later people found out, but it was unsatisfactory so they said that that person was an imposter or something. The real Crow Goblin was someone else.',
			'I don\'t want to bore you with the rest of it but the mask looks pretty nice, yeah? It\'s got a purple hat, or maybe it\'s a hoodie, I don\'t know. It sports a pretty cool grin and some thread sewn across its face. I wonder who hides behind the mask though.'
		],
		unlock: 'THIS IS A GAGE ASSAULT PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Professor Wrath',
		imageBase: '',
		imageColour: '',
		description: [
			'Milhouse Anderson worked at a chemical plant handling dangerous chemical waste. As a prank, his friends thought it would be a good idea to lock him up in the room where they kept the dangerous chemical waste. What they didn\'t know was that the dangerous chemical waste was dangerous, and while being locked in for several hours, Milhouse was exposed to high levels of radiation and other bad stuff.',
			'When they finally let him out, he had become a super villain. He\'s been super angry ever since.'
		],
		unlock: 'THIS IS A GAGE ASSAULT PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Volt',
		imageBase: '',
		imageColour: '',
		description: [
			'Being a snoopy lowlife, janitor David Davidson snuck around the military research facility he worked at, looking for something easy to steal. He found a door that he didn\'t have a key for. Curious, he kicked the door open and was instantly attacked by some kind of bright light. Somehow he survived the attack and got superhuman powers.',
			'With his new powers, he called himself Volt.'
		],
		unlock: 'THIS IS A GAGE ASSAULT PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Aubrey',
		imageBase: '',
		imageColour: '',
		description: [
			'Aubrey is a real gun lover.',
			'Large headed and long snouted Aubrey is a master of arms and knows nothing better than to kill using some fine weaponry.',
			'Pigs have pretty small lungs though so Aubrey can\'t run that far.'
		],
		unlock: 'THIS IS A HOTLINE MIAMI DLC ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Dennis',
		imageBase: '',
		imageColour: '',
		description: [
			'Dennis loves knives.',
			'The gray wolf is one of the best known and well researched animals on the entire planet. It was the first animal and only large carnivore to be domesticated by humans.',
			'Today, there\'s only one third of the population left because of human persecution.'
		],
		unlock: 'THIS IS A HOTLINE MIAMI DLC ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Graham',
		imageBase: '',
		imageColour: '',
		description: [
			'Graham enjoys long walks in the sun.',
			'Rabbits are small mammals that practically can be found anywhere. If confronted by a potential threat, rabbits will instantly freeze and warn others in the warren with powerful thumps on the ground.',
			'When fleeing, they hop in a zig-zag pattern, much like many Counter-Strike players do.'
		],
		unlock: 'THIS IS A HOTLINE MIAMI DLC ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Rasmus',
		imageBase: '',
		imageColour: '',
		description: [
			'Rasmus has an eye for secrets.',
			'Owls are nocturnal birds of prey. They are known for their large eyes in comparison to their skulls. They can\'t actually move their eyes, they swivel their heads instead and are able to swivel 270 degrees. Shit you didn\'t know, amirite.',
			'\'I don\'t know you!\' \'You\'re no guest of mine!\''
		],
		unlock: 'THIS IS A HOTLINE MIAMI DLC ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'British Bulldog',
		imageBase: '',
		imageColour: '',
		description: [
			'Politician, prize winner, owner of many medals and the first honorary citizen of the United States of America. By some it was said that he had a flawed character, saying; \'never had people admired and despised a man simultaneously to the same extent; never had such opposite extremes been combined in the same human being.\''
		],
		unlock: 'THIS IS A GAGE HISTORICAL PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Old Blood and Guts',
		imageBase: '',
		imageColour: '',
		description: [
			'One of the bravest men I saw in the African campaign was on a telegraph pole in the midst of furious fire while we were moving toward Tunis. I stopped and asked him what the hell he was doing up there. He answered, \'Fixing the wire, sir.\' \'Isn\'t it a little unhealthy up there right now?\' I asked. \'Yes sir, but this goddamn wire has got to be fixed.\' I asked, \'Don\'t those planes strafing the road bother you?\' And he answered, \'No sir, but you sure as hell do.\'',
			'Now, there was a real soldier. A real man. A man who devoted all he had to his duty, no matter how great the odds, no matter how seemingly insignificant his duty appeared at the time.'
		],
		unlock: 'THIS IS A GAGE HISTORICAL PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'The Constable',
		imageBase: '',
		imageColour: '',
		description: [
			'For much between 1940-1969, the Constable was the dominant military and political leader of France. Refusing to accept his government\'s armistice with the German invaders in 1940, he set up his base in London, proclaimed himself the incarnation of France, and created the Free French movement. During the war he rallied the overseas colonies, especially those in Africa, organized the Resistance from abroad, and struggled to gain full recognition from the British and Americans.'
		],
		unlock: 'THIS IS A GAGE HISTORICAL PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'The Red Bear',
		imageBase: '',
		imageColour: '',
		description: [
			'\'In Soviet Russia, Red Bear kills you.\' No one knows exactly who the Red Bear was; some say he was just a myth, a symbol of the motherland and everything that was strong, combined into one being. Only the stories are known and told again and again. Like that one time, when he killed a bunch of bears and came back home all in red, drenched in blood.'
		],
		unlock: 'THIS IS A GAGE HISTORICAL PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Anubis',
		imageBase: '',
		imageColour: '',
		description: [
			'The Egyptian jackal-headed god of the afterlife, Anubis sought to protect graves rather than fill them.'
		],
		unlock: 'THIS IS A DIAMOND HEIST ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Medusa',
		imageBase: '',
		imageColour: '',
		description: [
			'A hideous visage, snakes for hair, a petrifying gaze and a hate for men. Her gazing eyes still sends chills down spines… But this is just a mask, right?'
		],
		unlock: 'THIS IS A DIAMOND HEIST ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Pazuzu',
		imageBase: '',
		imageColour: '',
		description: [
			'Pazuzu was the king of the wind demons according to ancient Babylonian mythology. Legends also tell of him as a beastial behemoth fighting groups of adventurers in far away lands, and some even say he walked the earth as an immortal warrior in human form.'
		],
		unlock: 'THIS IS A DIAMOND HEIST ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'The Cursed One',
		imageBase: '',
		imageColour: '',
		description: [
			'His name is lost to legend. He might have been a King, or a mighty Sorceror. But even the great are undone by the Diamond.'
		],
		unlock: 'THIS IS A DIAMOND HEIST ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Clover',
		imageBase: '',
		imageColour: '',
		description: [
			'Clover\'s mask represents what Clover both fears and hates most of all - wearing a mask as your normal face. The surgically-shrunken nose, the botox\'d lips and the expression of all-consuming vanity and self-obsession - all are symbols of fear and weakness, twisted into a horrifying parody.'
		],
		unlock: 'THIS IS A CLOVER CHARACTER PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Clover Begins',
		imageBase: '',
		imageColour: '',
		description: [
			'This is a clean version of Clover\'s iconic mask, before it was painted.',
			'Never liked how the original one turned out? This is your chance to change history.'
		],
		unlock: 'THIS IS A CLOVER CHARACTER PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Arch Nemesis',
		imageBase: '',
		imageColour: '',
		description: [
			'Nemesis, as defined by the dictionary;',
			'1. Something that a person cannot conquer, achieve, etc.: “That Chinese buffet at lunch proved to be my arch-nemesis.”',
			'As defined by Hoxton: “That fuckin’ dozer. He’s my arch-fucking-nemesis. ‘Orrible cunt!”'
		],
		unlock: 'THIS IS A GOTY EDITION ITEM!',
		cost: 'Free'
	},
	{
		name: 'The Nun',
		imageBase: '',
		imageColour: '',
		description: [
			'A Catholic nun may not seem like the obvious choice for a terrifying mask, unless you know an actual Catholic nun. In which case, you’ll know any notions of gentle, grandmotherly penguins are without merit. These bitter crones are the personification of evil, dishing out thrashings to any young buttocks within reach.'
		],
		unlock: 'THIS IS A HEIST BUNDLE ITEM!',
		cost: 'Free'
	},
	{
		name: 'Robo-Arnold',
		imageBase: '',
		imageColour: '',
		description: [
			'Iconic, time-travelling cyborg star of the ‘Exterminator’ movie series. In the first movie, he was sent to kill the mother of the leader of the future rebellion before she can steal the chip left by her son who was also her father… In the past. Noted for his deadpan delivery of the catchphrase “Await my return”.'
		],
		unlock: 'THIS IS A WEAPON BUNDLE ITEM!',
		cost: 'Free'
	},
	{
		name: 'The Butcher from Hell',
		imageBase: '',
		imageColour: '',
		description: [
			'There are many rumours about the mad butcher from the east, one of them tells of a man who found such pleasure in butchering pigs that he slowly started to look like one.',
			'Working in a butchery as hot as hell itself his skin became disfigured with blisters and cuts, people tell of screams coming from inside... And not just the screams of pigs.'
		],
		unlock: 'THIS IS A THE BOMB HEISTS ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Lady Butcher',
		imageBase: '',
		imageColour: '',
		description: [
			'If you received a dollar every time the Butcher was called a \'witch\', a \'harlot\' or a \'banshee\' by her peers you could earn enough money to buy the entirety of Croatia. Cynical men around her bemoaned the fact that she was female, and felt endangered and distressed at the sight of her meteoric rise in the criminal underground. Keep in mind that the Balkans are not exactly known for their capacity to tolerate anybody who is in any way different, and one can only image the flat-out chauvinism and misogyny she must have dealt with while working with some of the most ruthless criminals every day of her existence. This mask shows how she is seen by both her rivals and her associates. It makes people feel afraid. As they should be.'
		],
		unlock: 'THIS IS A THE BOMB HEISTS ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Tech Lion',
		imageBase: '',
		imageColour: '',
		description: [
			'This mask is a modern interpretation of the Egyptian war-god Maahes. Known as the \'Wield of the Knife\', \'Lord of Slaughter\' and \'Avenger of Wrongs\', Maahes punished those who transgressed from the rules of Ma`at - the personification of order and balance. Considered the embodiment of the burning heat of the sun, he was also seen as a protective deity that defended the Pharaoh during battle.',
			'He is usually depicted as lion-headed man carrying a knife wearing the Atef crown, the Solar Disk or is pictured as a lion devouring a victim.'
		],
		unlock: 'THIS IS A THE BOMB HEISTS ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'The Doctor',
		imageBase: '',
		imageColour: '',
		description: [
			'A naso-buccal mask usually associated with hospitals and ambulances. This mask disables the host from spreading airborne viruses by catching the bacteria-laden saliva and mucus that is discharged upon sneezing or coughing. Both doctors and patients wear this, so you should ask yourself: am I the sick or the healthy one? The disease or the cure?',
			'In any case - it\'s fever season, and the only prescription is dead Bulldozers.'
		],
		unlock: 'THIS IS A THE BOMB HEISTS ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Dragan',
		imageBase: '',
		imageColour: '',
		description: [
			'With a background like the one Dragan has, there\'s no surprise he aspires to greatness in the criminal underworld.',
			'His mask represents a lot of his own characteristics, with the clear resemblance to some of the original crew\'s masks that tells of his ability to infiltrate and blend in while still having some features that tells of his unending ruthlessness.',
			'The Croatian checker on the forehead serves as a reminder for both himself and his enemies to be aware that he is not your common western street thug.'
		],
		unlock: 'THIS IS A DRAGAN CHARACTER PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Dragan Begins',
		imageBase: '',
		imageColour: '',
		description: [
			'This is a clean version of Dragan\'s iconic mask, before it was painted.',
			'Never liked how the original one turned out? This is your chance to change history.'
		],
		unlock: 'THIS IS A DRAGAN CHARACTER PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Alfred',
		imageBase: '',
		imageColour: '',
		description: [
			'Alfred the Carnotaurus was a very fast dinosaur when he was alive and kicking. His distinctive horns and his muscular neck made him stand out next to all the other dinosaurs. His large head along with his horns working as shock absorbers made him particularly skilled at head butting other dinosaurs in order to show who had the largest prehistoric d-peen.'
		],
		unlock: 'THIS IS AN AK/CAR MOD PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Pachy',
		imageBase: '',
		imageColour: '',
		description: [
			'Pachy the Pachycephalosaurus, meaning thick headed lizard, wasn\'t never that thick headed really. He never took that name for himself, the other dinosaurs gave it to him because they were jealous of his high rolls in intelligence, spirit and wisdom. Having earned a robe and a wizard hat as a second prize at the local prehistoric spelling bee didn\'t make it any better.'
		],
		unlock: 'THIS IS AN AK/CAR MOD PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Timothy',
		imageBase: '',
		imageColour: '',
		description: [
			'Timothy the Triceratops is one of the most popular dinosaurs at the Jurassic High. He had a huge grudge with Teddy the Tyrannosaurus though. Even though they were massive and lived together during the last epoch of the age of dinosaurs, they couldn\'t find it in them to be friends. Especially not since that one time when they went to that cabin during Spring Break and Teddy and his pals pranked Timothy with that horror movie and the phone call about seven days left before the meteorite would hit. Timothy did not think that was funny at all.'
		],
		unlock: 'THIS IS AN AK/CAR MOD PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Vincent',
		imageBase: '',
		imageColour: '',
		description: [
			'Vincent the Velociraptor and his best friend Andreas HÃ¤ll Penninger the Protoceratops were out and about one day in the jungle when they got in a fight. It wasn\'t a big thing really but Vincent just wouldn\'t let it go. Andreas, being the stubborn Protoceratops he was, continued to mouth off to Vincent. Violent fighting ensued and to this day, no one is sure who actually won.'
		],
		unlock: 'THIS IS AN AK/CAR MOD PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'General Overkill',
		imageBase: '',
		imageColour: '',
		description: [
			'Ten-shun! Right, listen up, you heisting bastards. You\'re heading into war. You\'re gonna feel the sting of battle. And in war you need a leader. Meet General Overkill. He\'ll be there to make sure you go through those cop bastards like crap through a goose. Dismissed!'
		],
		unlock: 'THIS IS A OVERKILL PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Mega Chains',
		imageBase: '',
		imageColour: '',
		description: [
			'The Mega Chains mask is an evolved version of the original mask. It symbolises transcendence and catharsis.',
			'Thank you for your support.',
			'OVERKILL salutes you!'
		],
		unlock: 'THIS IS A COMPLETELY OVERKILL PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Mega Cthulhu',
		imageBase: '',
		imageColour: '',
		description: [
			'Somewhere, deep in the oceanic darkness dwells our lord and savior, Cthulhu. Praise be to Him who spares us His giant wrath and blesses us with His mind controlling tenderness. Don\'t eat squids or eternal damnation is yours.',
			'Thank you for your support.',
			'OVERKILL salutes you!'
		],
		unlock: 'THIS IS A COMPLETELY OVERKILL PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Mega Dallas',
		imageBase: '',
		imageColour: '',
		description: [
			'The Mega Dallas mask is an evolved version of the original mask. It symbolises transcendence and catharsis.',
			'Thank you for your support.',
			'OVERKILL salutes you!'
		],
		unlock: 'THIS IS A COMPLETELY OVERKILL PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Mega Death Wish',
		imageBase: '',
		imageColour: '',
		description: [
			'We never get why hardcore heisters don\'t just call themselves Death Wishers. Maybe it\'s just too damn cool.',
			'Thank you for your support.',
			'OVERKILL salutes you!'
		],
		unlock: 'THIS IS A COMPLETELY OVERKILL PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Mega Doctor Crime',
		imageBase: '',
		imageColour: '',
		description: [
			'In issue #34 of The Mazing Career Criminals, we saw the assumed death of Doctor Crime, but fear not - the Doctor is back! With a new power armor and a fancy new mask, he\'s set to take out his vengeance against our unknowing heroes.',
			'Thank you for your support.',
			'OVERKILL salutes you!'
		],
		unlock: 'THIS IS A COMPLETELY OVERKILL PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Mega Gage Blade',
		imageBase: '',
		imageColour: '',
		description: [
			'The original Gage Blade is one of Gage\'s own personal favorite ballistic face masks. With the Mega Gage Blade, he\'s decided to give his favorite ballistic mask an upgrade. Before it was only practical, now it\'s also stylish.',
			'Thank you for your support.',
			'OVERKILL salutes you!'
		],
		unlock: 'THIS IS A COMPLETELY OVERKILL PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Mega Grin',
		imageBase: '',
		imageColour: '',
		description: [
			'The Grin was once the face representing a man\'s breakdown as he had to accept defeat. But now the times have changed, and the same man is back again, stronger than ever before. Rejuvenated and ready to take on the world with a determined fierceness and cunning, the mask still represents the face of a mad man, but a mad man that is winning.',
			'Thank you for your support.',
			'OVERKILL salutes you!'
		],
		unlock: 'THIS IS A COMPLETELY OVERKILL PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Mega Hoxton',
		imageBase: '',
		imageColour: '',
		description: [
			'The Mega Hoxton mask is an evolved version of the original mask. It symbolises transcendence and catharsis.',
			'Thank you for your support.',
			'OVERKILL salutes you!'
		],
		unlock: 'THIS IS A COMPLETELY OVERKILL PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Mega Kawaii',
		imageBase: '',
		imageColour: '',
		description: [
			'In the name of the kawaii, I will punish you! For love, for justice, FOR MERCURY BUBBLE BLAST!',
			'Thank you for your support.',
			'OVERKILL salutes you!'
		],
		unlock: 'THIS IS A COMPLETELY OVERKILL PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Mega Kevin',
		imageBase: '',
		imageColour: '',
		description: [
			'For Kevin it was never enough to rip out the spine and scream defiantly at the sky. He always proceeded to also fuck the skull.',
			'Thank you for your support.',
			'OVERKILL salutes you!'
		],
		unlock: 'THIS IS A COMPLETELY OVERKILL PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Mega Mark',
		imageBase: '',
		imageColour: '',
		description: [
			'The mask is modeled after a legendary bear that was known to terrorize humans and other animals in an Eastern land far, far away. The story is wildly popular with the criminal underworld, and getting compared to to the fierce beast is considered a great honor, reserved only to the greatest and most ruthless criminals.',
			'Thank you for your support.',
			'OVERKILL salutes you!'
		],
		unlock: 'THIS IS A COMPLETELY OVERKILL PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Mega Plague Doctor',
		imageBase: '',
		imageColour: '',
		description: [
			'Three years of healing took its toll. He witnessed man\'s cruel ways, born out of desperation. He stopped seeing the plague as a disease and started spreading it as the cure.',
			'Thank you for your support.',
			'OVERKILL salutes you!'
		],
		unlock: 'THIS IS A COMPLETELY OVERKILL PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Mega Watcher',
		imageBase: '',
		imageColour: '',
		description: [
			'The Watchers are a species of extraterrestials that act as spies on planet Earth. They communicate using their minds and use their large eyes to witness, gather and share information about humankind, preparing themselves for the coming invasion.',
			'Thank you for your support.',
			'OVERKILL salutes you!'
		],
		unlock: 'THIS IS A COMPLETELY OVERKILL PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Mega Wolf',
		imageBase: '',
		imageColour: '',
		description: [
			'The Mega Wolf mask is an evolved version of the original mask. It symbolises transcendence and catharsis.',
			'Thank you for your support.',
			'OVERKILL salutes you!'
		],
		unlock: 'THIS IS A COMPLETELY OVERKILL PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Firefighter\'s Helmet',
		imageBase: '',
		imageColour: '',
		description: [
			'The crew may show scant respect to the police authorities, but they have huge respect for the men and women that clean up the burning messes left in their wake. This mask is a tribute to their efforts.'
		],
		unlock: 'THIS IS A BBQ WEAPON PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Graug',
		imageBase: '',
		imageColour: '',
		description: [
			'The head of the legendary Graug. Towering beings of fire and smoking darkness, bound in blackened iron mail. Shaped like a man, but horned and visaged like a cruel demon. Body consumed by a furnace heat, hotter than Hell itself. Knows all the best tunes.'
		],
		unlock: 'THIS IS A BBQ WEAPON PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'The Chef',
		imageBase: '',
		imageColour: '',
		description: [
			'Whether you’re a line cook flipping patties at a roadside diner, or an itamae dissecting toadfish at a $1000-a-table joint, this hat means one thing: you’re the chef. '
		],
		unlock: 'THIS IS A BBQ WEAPON PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'The Gas Mask',
		imageBase: '',
		imageColour: '',
		description: [
			'The gas mask may seem like it belongs to the wars of an older era, but it is a crucial piece of equipment on the urban battlefield, where gas can still be deployed. Also, gives you a cool, wheezy breathing sound.'
		],
		unlock: 'THIS IS A BBQ WEAPON PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Apache Mystic',
		imageBase: '',
		imageColour: '',
		description: [
			'The west that the white men entered was a land of mystery. A land populated with civilizations of warriors, who marked themselves, their lands and their mythologies with these sacred carvings.'
		],
		unlock: 'THIS IS A WESTERN PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Desert Skull',
		imageBase: '',
		imageColour: '',
		description: [
			'When staggering through desolate barrancas, with only thoughts for company, the last thing you want to see is the parched bones of those who went before you. Suddenly those thoughts are screams.'
		],
		unlock: 'THIS IS A WESTERN PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Lone Heister',
		imageBase: '',
		imageColour: '',
		description: [
			'Whether you\'re a murderous desperado or a lone, brooding ranger, sometimes you need to hide your identity. What does that better than a slender black eye-mask, covering a third of your face?'
		],
		unlock: 'THIS IS A WESTERN PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Wild West Classic',
		imageBase: '',
		imageColour: '',
		description: [
			'The wide-brimmed hat, the steely gaze and the scarf pulled up over the mouth. A combination so iconic, so classic and so effective that it remains the staple for gangsters and heisters everywhere.'
		],
		unlock: 'THIS IS A WESTERN PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Boombox',
		imageBase: '',
		imageColour: '',
		description: [
			'According to the brochure, Alesso\'s Boom Box features include \'No batteries to slay your vibe, sound insulation to keep suckas from hearing your beats and full-face armor to keep cops from checking your clock.\''
		],
		unlock: 'THIS IS A THE ALESSO HEIST ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Cantus',
		imageBase: '',
		imageColour: '',
		description: [
			'Whether you\'re on the bus or in the boardroom, when Alesso is filling your ears with heavenly tunes, it\'s important to show the world a suitable face. Presenting Cantus - the Angel of Music and Song. Let your spirit soar!'
		],
		unlock: 'THIS IS A THE ALESSO HEIST ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Female Concert Goer',
		imageBase: '',
		imageColour: '',
		description: [
			'When you descend into the roiling whirlpool that is the ecstasy of an Alesso concert, you better be wearing your best face. The Female Concert Goer is impassive and detached, because nothing matters but the music.'
		],
		unlock: 'THIS IS A THE ALESSO HEIST ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Male Concert Goer',
		imageBase: '',
		imageColour: '',
		description: [
			'Tie-dyed shirts are so 70\'s. Holding up a lighter went out in the 80\'s. Whistles and glow sticks were left behind in the 90\'s, and the 00\'s, well, the less said the better. The modern concert goer, however, favors the mask.'
		],
		unlock: 'THIS IS A THE ALESSO HEIST ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Murmillo Galea Helmet',
		imageBase: '',
		imageColour: '',
		description: [
			'Gladiators were members of a brutal caste in Ancient Rome whose sole duty was to entertain by way of public exhibitions of horrific violence. This style of helmet with its high crest  resembles a fish. It was worn by a Murmillo - a heavy class of gladiator that fought with a sword and tower shield. They symbolize Vulcan - the roman god of fire, and they stand for strength and honor.'
		],
		unlock: 'THIS IS A GOLDEN GRIN CASINO ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Sports Utility Mask',
		imageBase: '',
		imageColour: '',
		description: [
			'Forget bulky and unfashionable helmets, this glorious sucker is the best friend of every adrenaline junkie. The face-guard is made out of tough ABS plastic and it provides solid protection against snow, sand blasts and hail drops. Just avoid heavy blows to the head. Be the envy of your airboarding friends, brah!'
		],
		unlock: 'THIS IS A GOLDEN GRIN CASINO ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'King, The',
		imageBase: '',
		imageColour: '',
		description: [
			'Mercy! Are you bad enough of a dude or dudette to rock the royal trifecta of slick aviators ,bad-ass pompadour and tactical sideburns? Summon forth the indomitable spirit of various used-car dealers and shotgun-wedding ministers all around Vegas who wore this thing all the way to success. Or at least mild public awkwardness. Hail to the king!'
		],
		unlock: 'THIS IS A GOLDEN GRIN CASINO ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Wheeler Dealer',
		imageBase: '',
		imageColour: '',
		description: [
			'Spruce up your glamorous neon 80\'s look! This kind of mint-green headwear has been in use since the 19th century as a method of preventing eyestrain from intense light sources. Coked out gamblers and gonzo journalists have propelled the croupier\'s hat into the focus of the mainstream. They are also perfect for beach-front raves, picking up hotties on the beach, signing a contract on the 18th hole of your nearest country club and generally looking like an octogenarian.'
		],
		unlock: 'THIS IS A GOLDEN GRIN CASINO ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Sokol',
		imageBase: '',
		imageColour: '',
		description: [
			'If playing as a grinder for the St Petersburg Bombers hockey team taught Sokol the value of one thing, it was the importance of a terrifying mask that protects his handsome Russian face.'
		],
		unlock: 'THIS IS A SOKOL CHARACTER PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Sokol Begins',
		imageBase: '',
		imageColour: '',
		description: [
			'This is a clean version of Sokol\'s iconic mask, before it was painted.',
			'Never liked how the original one turned out? This is your chance to change history.'
		],
		unlock: 'THIS IS A SOKOL CHARACTER PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Kage',
		imageBase: '',
		imageColour: '',
		description: [
			'The kage mask was said to be haunted, originally from a kabuki theater in Osaka where the actor fell down dead on stage while wearing the mask. The last thing he said was \'No, I will not kill them, I will not\'. Legend says that the kage mask will kill whoever wears it if its thirst for blood is not satisfied.'
		],
		unlock: 'THIS IS A GAGE NINJA PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Kuro Zukin',
		imageBase: '',
		imageColour: '',
		description: [
			'A simple piece of cloth tied around their heads will transform anyone, be it beggar, farmer or common man into a ninja. A shadow among shadows, a dagger in the dark. He can be fierce or stealthy and can be anyone in a crowd. He does what he sets out to do and then disappears.'
		],
		unlock: 'THIS IS A GAGE NINJA PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Shirai',
		imageBase: '',
		imageColour: '',
		description: [
			'Get over here! And let me tell you about the most badass ninjas you ever heard about. They are the protectors of our world and they only accept the best warriors. They are given the most kickass mask to show that they are better than everyone else. Here is your mask, welcome to the clan.'
		],
		unlock: 'THIS IS A GAGE NINJA PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Slicer',
		imageBase: '',
		imageColour: '',
		description: [
			'After his brother\'s murder, Ikas joined an underground clan of ninjas to train and become their deadliest warrior. Ikas quickly proved himself and was put in charge of the whole American branch of the clan. His signature mask now inspires fear and respect and anyone who wears a mask like this will be seen as a brother of the Achilles Clan.'
		],
		unlock: 'THIS IS A GAGE NINJA PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Jiro',
		imageBase: '',
		imageColour: '',
		description: [
			'Japan is a land of tradition. A land of warriors. Jiro\'s mask reflects this. The mask expresses Jiro\'s love for a traditional Japan, while the bared snarl represents his unshakable determination.'
		],
		unlock: 'THIS IS A YAKUZA CHARACTER PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Jiro Begins',
		imageBase: '',
		imageColour: '',
		description: [
			'This is a clean version of Jiro\'s iconic mask, before it was painted.',
			'Never liked how the original one turned out? This is your chance to change history.'
		],
		unlock: 'THIS IS A YAKUZA CHARACTER PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Agatha Knight Veteran',
		imageBase: '',
		imageColour: '',
		description: [
			'Excavated from the arid wastelands of Tenosia, the helmet of this Agathian Knight could protect him from swords and arrows, but not from the bloody ambitions of a leader as delusional as King Alphonso.'
		],
		unlock: 'THIS IS A GAGE CHIVALRY PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Agatha Vanguard Veteran',
		imageBase: '',
		imageColour: '',
		description: [
			'When you\'re trying to reclaim your homeland and King\'s law from the upstart Masons, you need strength, support and a fearsome visage. This Vanguard helm provides all three.'
		],
		unlock: 'THIS IS A GAGE CHIVALRY PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Mason Knight Veteran',
		imageBase: '',
		imageColour: '',
		description: [
			'The helmet of the Knight Veterans of the Masons were effectively symbols of this powerful, upstart order. When peasants saw this helm, they knew that Malric\'s new order was close behind.'
		],
		unlock: 'THIS IS A GAGE CHIVALRY PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Mason Vanguard Veteran',
		imageBase: '',
		imageColour: '',
		description: [
			'This helmet was unearthed in an elaborate barrow, indicating that the wearer enjoyed prestige in the Mason army. These great warriors appear to have been Malric\'s elite troops, perhaps having served with him in the failed Tenosian crusade.'
		],
		unlock: 'THIS IS A GAGE CHIVALRY PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Maui',
		imageBase: '',
		imageColour: '',
		description: [
			'Exploring the Pacific \'Ring of Fire\' in his youth, Bodhi came to the following revelation: honoring oneself means honoring the myths. A myth that stuck with him was that of Maui. Like Bodhi, Maui was a dauntless champion of humankind, a trickster and adventurer.'
		],
		unlock: 'THIS IS A POINT BREAK HEISTS ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Oro',
		imageBase: '',
		imageColour: '',
		description: [
			'It was exploring the Islands of French Polynesia, Bodhi encountered the disciples of the war-god Oro. The young adventurer quickly became enamored of this god, who valued the appreciation of beautiful crafts as much as the art of struggle.'
		],
		unlock: 'THIS IS A POINT BREAK HEISTS ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Tane',
		imageBase: '',
		imageColour: '',
		description: [
			'Tane was the god of the forest who used his mighty strength to separate his parents, the earth and the sky. Legends also credit him with creating Tiki, the first man. Thus, he created the world as we know it, and the people within it.'
		],
		unlock: 'THIS IS A POINT BREAK HEISTS ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Tawhiri',
		imageBase: '',
		imageColour: '',
		description: [
			'Brother of Tane, Tawhiri is the god of weather, most particularly violent storms and lightning. Bodhi experienced plenty of both, and it was during a particularly vicious explosion while reef-diving in Tuvalu that Bodhi gained a true appreciation for this powerful deity.'
		],
		unlock: 'THIS IS A POINT BREAK HEISTS ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Goat Goat',
		imageBase: '',
		imageColour: '',
		description: [
			'The goat doesn\'t get much respect in the animal kingdom, and often find themselves mocked by other animals - but that works perfectly in their favor. Putting on this foolish mask might give you the same advantage and make the cops underestimate you.'
		],
		unlock: 'THIS IS A GOAT SIMULATOR ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Mastermind Goat',
		imageBase: '',
		imageColour: '',
		description: [
			'The dolphin is the most sinister and vicious heister in the animal kingdom, tricking everyone with its friendly and cute appearance. But it\'s all a facade! The dolphin only cares about itself and the loot, and won\'t hesitate a second to leave anyone behind. Caution is advised if you meet a fellow heister with this mask.'
		],
		unlock: 'THIS IS A GOAT SIMULATOR ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Scout Goat',
		imageBase: '',
		imageColour: '',
		description: [
			'The giraffe doesn\'t miss a thing, always in control of its surroundings, acting as the perfect \'look-out\' companion for heisting in the animal kingdom. Whatever it is, you\'ll see it coming from miles away and the cops can forget to take you by surprise.'
		],
		unlock: 'THIS IS A GOAT SIMULATOR ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Slick Goat',
		imageBase: '',
		imageColour: '',
		description: [
			'The penguin is the slickest heister in the animal kingdom, walking around with a \'know-it-all\' attitude, taking their time and taking what they want - when they want, not giving a damn. Put on this mask and show everyone you\'re the boss of things.'
		],
		unlock: 'THIS IS A GOAT SIMULATOR ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Hans',
		imageBase: '',
		imageColour: '',
		description: [
			'Hans hates people and will crack the skull of anyone who opposes him. But under his frightening appearance, Hans is a good boy. You could almost say he\'s a prince in disguise. Treat him well and he might take you to the Land of Sweets.'
		],
		unlock: 'THIS IS A WOLF PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'The Dragon Head',
		imageBase: '',
		imageColour: '',
		description: [
			'Mounting the prow of Viking ships, the dragon head was used to scare off sea monsters and evil spirits. Dozers and Cloakers are evil, right? Why not give it a go and see if it can scare them away? But have your gun ready just in case. For safety.'
		],
		unlock: 'THIS IS A WOLF PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'The Viking',
		imageBase: '',
		imageColour: '',
		description: [
			'The Germanic Norse seafarers known as Vikings were fierce warriors during the late 8th to late 11th centuries. Equipped with their mighty axes and horned helmets, they stood tall and proud in the heat of battle. If you want to capture the spirit of these old fighters, this mask will do the job.'
		],
		unlock: 'THIS IS A WOLF PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Trickster Demon',
		imageBase: '',
		imageColour: '',
		description: [
			'The Trickster Demon is a mischievous being, who thrives on creating chaos and spreading mayhem. It might not look that scary, but don\'t let that smirk fool you; its idea of \'fun\' differ greatly from what you and me would enjoy. Trust me on this.'
		],
		unlock: 'THIS IS A WOLF PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Sydney',
		imageBase: '',
		imageColour: '',
		description: [
			'Smirk, Grin, Sneer - call it what you want. As you see this smiling punker mask approaching it\'s not synonyms that\'ll run through your head - it\'s bullets. Sydney will make sure of it.'
		],
		unlock: 'THIS IS A SYDNEY CHARACTER PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Sydney Begins',
		imageBase: '',
		imageColour: '',
		description: [
			'This is a clean version of Sydney\'s iconic mask, before it was painted.',
			'Never liked how the original one turned out? This is your chance to change history.'
		],
		unlock: 'THIS IS A SYDNEY CHARACTER PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'The Classic',
		imageBase: '',
		imageColour: '',
		description: [
			'This old school motorcycle helmet is part of a legacy all bikers around the world cherish. And it\'s more about nostalgia rather than style. This helmet transports you back to the golden biker days of the 1940\'s.'
		],
		unlock: 'THIS IS A BIKER HEIST DLC ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Speed Devil',
		imageBase: '',
		imageColour: '',
		description: [
			'What better way to symbolize the do-not-give-a-fuck attitude of the biker lifestyle, than by wearing the face of the Devil. The ultimate symbol for breaking the law.'
		],
		unlock: 'THIS IS A BIKER HEIST DLC ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Flaming Skull',
		imageBase: '',
		imageColour: '',
		description: [
			'The skull as a symbol can either mean death or mortality, and we humans have always had a fascination for it. Wearing this motorcycle helmet looks powerful and intimidating.'
		],
		unlock: 'THIS IS A BIKER HEIST DLC ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Road Rage',
		imageBase: '',
		imageColour: '',
		description: [
			'This helmet is reserved for the top dog in a biker gang. It demands respect and authority from your brothers, and when it\'s time to do battle, you wear this helmet proudly and ride at the front.'
		],
		unlock: 'THIS IS A BIKER HEIST DLC ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Rust',
		imageBase: '',
		imageColour: '',
		description: [
			'The Devil is the moniker that has followed Rust for most of his life. Therefore, Rust\'s mask is a combination of a smiling clown with ominous horns protruding from his forehead, letting everyone know that the Devil is here.'
		],
		unlock: 'THIS IS A BIKER CHARACTER PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Rust Begins',
		imageBase: '',
		imageColour: '',
		description: [
			'This is a clean version of Rust\'s iconic mask, before it was painted.',
			'Never liked how the original one turned out? This is your chance to change history.'
		],
		unlock: 'THIS IS A BIKER CHARACTER PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Daisy',
		imageBase: '',
		imageColour: '',
		description: [
			'They might have not known what they did and to who, but that doesn\'t matter. They got what they deserved and then some. John is back.'
		],
		unlock: 'THIS IS A JOHN WICK WEAPON PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Hotelier',
		imageBase: '',
		imageColour: '',
		description: [
			'The Continental only serves the people who can respect the rules of the assassins\' sanctuary. It\'s not a cult or a secret society, it\'s a necessity in a business where everybody is willing to kill for money and everybody in there is on someone\'s list of targets.'
		],
		unlock: 'THIS IS A JOHN WICK WEAPON PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Zaschita',
		imageBase: '',
		imageColour: '',
		description: [
			'A good way to not get shot in the head is to wear a helmet, but when you want to protect just your face from bullets and identification this will do. Does it really look bulletproof? What are you? A coward? Grab your fear by the balls and headbutt it in the face with this mask on.'
		],
		unlock: 'THIS IS A JOHN WICK WEAPON PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Mustang',
		imageBase: '',
		imageColour: '',
		description: [
			'Do you think you\'re a car? Oh? But do you think you\'re a MUSCLE car? No? Heisting isn\'t about looking fast and sleek, it\'s about looking furious and dangerous. Vroom, vroom motherfuckers!'
		],
		unlock: 'THIS IS A JOHN WICK WEAPON PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Batshit Crazy',
		imageBase: '',
		imageColour: '',
		description: [
			'Somehow bending the laws of physics, the special unit of the WPD nicknamed the \'Cloaker\' is the bane of every bad guy trying to prove they can do things on their own. The first Cloaker is rumored to just have been a regular SWAT officer who nobody wanted to team up with. Might be because he was a fucked up killing machine with kung fu-kicks and bullets flying everywhere around him. He used excessive force almost always and left any combat tactic behind together with his unit. But he produced results, so the brass kept him on and made him train like minded individuals.',
			'Activate Night Vision Mode by holding down the Fire Mode button.'
		],
		unlock: 'THIS IS A GAGE SPEC OPS PACK ITEM!',
		cost: 'Unlocked through Side Jobs'
	},
	{
		name: 'A.W.O.L',
		imageBase: '',
		imageColour: '',
		description: [
			'Highly classified reports mentions this soldier from an elite special operations force. Engaged in high profile military operations and on constant alert, he was living his life under extreme pressure and constant adrenaline highs. During a sensitive strategic operation, the evidence suggest that he turned on his own unit. But no one knows certain, since the massacre left no witnesses. The soldier went A.W.O.L. and has not been seen since that day.'
		],
		unlock: 'THIS IS A GAGE SPEC OPS PACK ITEM!',
		cost: 'Unlocked through Side Jobs'
	},
	{
		name: 'Bloody Bandana',
		imageBase: '',
		imageColour: '',
		description: [
			'The identity of the soldier that wore this red headband is classified information. Leaked reports speak of a war veteran and former U.S. Army Special Forces soldier that was an expert in guerrilla tactics. His military comrades described him as tough, reckless and over the top aggressive. Based on how many high-ranking officers he tracked down and slaughtered, he may have major problem with authorities...'
		],
		unlock: 'THIS IS A GAGE SPEC OPS PACK ITEM!',
		cost: 'Unlocked through Side Jobs'
	},
	{
		name: 'Dark Legion',
		imageBase: '',
		imageColour: '',
		description: [
			'He did not exist, not officially. Not since he came aboard ZEAL, the top-secret strike force. He was always the last resort, deployed when extreme violence was needed. He never held back. For every operation, he lost a bit of his humanity. For every operation, he gained an edge as an instrument of death. He did not separate right from wrong, not anymore. Only obeyed the orders from above. Just one shadow in the dark legion of secret super soldiers. One day, he woke up and could only think of killing others. He had finally found his true purpose.'
		],
		unlock: 'THIS IS A GAGE SPEC OPS PACK ITEM!',
		cost: 'Unlocked through Side Jobs'
	},
	{
		name: 'Exalted',
		imageBase: '',
		imageColour: '',
		description: [
			'Cold and unmoving, you watch them from above. They shall envy your majesty as your golden gaze falls on them, an undeserved blessing on these wretched soft ones. You unite the hard chill of the night with the dazzling radiance of the sun. Glorious, golden and beautiful, you shall turn their heads mad with desire - and it shall be their undoing.'
		],
		unlock: 'THIS IS A SCARFACE HEIST PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Golden Hour',
		imageBase: '',
		imageColour: '',
		description: [
			'Timothy Miller dreamt of working with movie lightning when he grew up. For a Halloween-party, he created the Golden Hour mask. But when he put it on and looked in the mirror, his eyes stared back surrounded by the perfect soft, red glow of the sunset. In that moment, a new dream was born. He wanted people to view the serenity of the sunset close-up, wanted it imprinted on their retina forever. The only thing the coroner could confirm was that all victims were killed shortly before sunset, their eyes always left wide open.'
		],
		unlock: 'THIS IS A SCARFACE HEIST PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Barrori Flex',
		imageBase: '',
		imageColour: '',
		description: [
			'The day Chad got the Barrori Flex sunglasses, everything changed. They gave him a brand new perspective on what’s important in life. Looking cool and blase became his purpose, his reason to live. With his Italian sports coat, beige linen pants and loafers he caught jealous looks and turned necks wherever he went. But it couldn’t last and when Chad’s beauty faded so did his will to live. He made a good-looking corpse, best clothes on, when he swallowed a whole can of diet pills.'
		],
		unlock: 'THIS IS A SCARFACE HEIST PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Panthera Tigris',
		imageBase: '',
		imageColour: '',
		description: [
			'The rage of the tiger is legendary, and the king of the jungle will not be contained willingly. They may think they have you under control, but hell hath no fury like a caged tiger. As you break out, they will come to know this. Claws will rip and teeth will tear, flesh from bone, as you claim your kingdom.'
		],
		unlock: 'THIS IS A SCARFACE HEIST PACK ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Scarface',
		imageBase: '',
		imageColour: '',
		description: [
			'Scarface came to the US with nothing more than two empty hands and a bad attitude, the darkness in his heart matched only by the brilliance of his criminal mind. His mask tells the story, complete with the trail of blood he left in his wake as he began to make his mark.'
		],
		unlock: 'THIS IS A SCARFACE CHARACTER PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Scarface Begins',
		imageBase: '',
		imageColour: '',
		description: [
			'This is a clean version of the iconic Scarface mask, before it was painted.',
			'Never liked how the original one turned out? This is your chance to change history.'
		],
		unlock: 'THIS IS A SCARFACE CHARACTER PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Lady Liberty',
		imageBase: '',
		imageColour: '',
		description: [
			'Liberty. Liberty for all those heisters that have fallen and been sent to prison. Liberty for all that gold which sits sadly in the dark basement vaults of banks. Liberty for the spirit of enterpise, the will to take what you want, the rule of the gun. Liberty for those seeking a bigger PAYDAY.'
		],
		unlock: 'THIS IS A JOHN WICK HEISTS PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Captain',
		imageBase: '',
		imageColour: '',
		description: [
			'Captain on the bridge! Guide your crew safely through the banks, and a favourite wind will lead you to great adventures. Strike the coast and take their treasure, then disappear over the horizon.'
		],
		unlock: 'THIS IS A JOHN WICK HEISTS PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Bird of Prey',
		imageBase: '',
		imageColour: '',
		description: [
			'Soar high, swoop down and strike your prey with merciless, deadly claws. Then fly home to your lofty nest, enjoying the spoils of your hunt. You are the apex predator and you shall devour it all.'
		],
		unlock: 'THIS IS A JOHN WICK HEISTS PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Sailor',
		imageBase: '',
		imageColour: '',
		description: [
			'Sail on the treasure fleet - climb the rigging and keep an eye out for pursuing ships as you scour the sea for sunken gold. If they catch up with you, abandon ship like the rat you are - but don\'t forget to bring the gold.'
		],
		unlock: 'THIS IS A JOHN WICK HEISTS PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Red Machine',
		imageBase: '',
		imageColour: '',
		description: [
			'No one can stop the Red Machine! It’s fast, ice-cold and merciless. With swift moves, lightning strikes and flawless tactics it humiliates the oppostion, leaving them crying in desperation. Just like The Payday Gang.'
		],
		unlock: 'THIS IS A GAGE RUSSIAN WEAPON PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Matryoshka',
		imageBase: '',
		imageColour: '',
		description: [
			'Things are not always what they seem. Behind the mask there is a face, true. But what\'s behind the face? Another face, perhaps. How do you know where the real person is, and how many layers must be removed before you reach the core - the inner self?'
		],
		unlock: 'THIS IS A GAGE RUSSIAN WEAPON PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'War Balaclava',
		imageBase: '',
		imageColour: '',
		description: [
			'Half a block, half a block'
		],
		unlock: 'THIS IS A GAGE RUSSIAN WEAPON PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Kokoshnik',
		imageBase: '',
		imageColour: '',
		description: [
			'Finely crested for glory, this elaborate headpiece will impress. Wear it proudly, displaying the fine embriodery for all to envy. But watch out for low doorways.'
		],
		unlock: 'THIS IS A GAGE RUSSIAN WEAPON PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'The Almir',
		imageBase: '',
		imageColour: '',
		description: [
			'This mask will instil',
			'The Almir is a mask that many would hesitate to unleash on a crew. that many would hesitate to unleash on a crew. Someone crazy enough to wear it would be capable of great deeds one day, only to go on a psychotic rampage the next. But sometimes, that\'s the kind of person you need to get you out of a sticky situation and avoid botching a heist completely.',
			'Knowing that such a person has an equal chance of bringing success or failure, would you dare bring an Almir into your crew?'
		],
		unlock: 'THIS IS A ZAG TOYS ITEM!',
		cost: 'Free'
	},
	{
		name: 'Ethan',
		imageBase: '',
		imageColour: '',
		description: [
			'This mask exudes power and brute force, in stark contrast to the man who wears it. Equal parts clown-like sadness and begrudging anger, it perfectly captures the mood of someone who has somewhat reluctantly chosen to be a heister.'
		],
		unlock: 'THIS IS A h3h3 CHARACTER PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Hila',
		imageBase: '',
		imageColour: '',
		description: [
			'Something about this mask radiates a playful malice and most who gaze upon it immediately feel a sense of unease, which is just the kind of thing you need when you\'re robbing a bank.'
		],
		unlock: 'THIS IS A h3h3 CHARACTER PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Ethan Begins',
		imageBase: '',
		imageColour: '',
		description: [
			'This is a clean version of Ethan\'s iconic mask, before it was painted.',
			'Never liked how the original one turned out? This is your chance to change history.'
		],
		unlock: 'THIS IS A h3h3 CHARACTER PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Hila Begins',
		imageBase: '',
		imageColour: '',
		description: [
			'This is a clean version of Hila\'s iconic mask, before it was painted.',
			'Never liked how the original one turned out? This is your chance to change history.'
		],
		unlock: 'THIS IS A h3h3 CHARACTER PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Sweettooth',
		imageBase: '',
		imageColour: '',
		description: [
			'Sweet Tooth, real name Marcus \'Needles\' Kane is a character from the Twisted Metal video game series. Sweet Tooth is best known for being a killer clown that drives a combat ice cream truck.',
			'It\'s said that he once had escaped from a mental institution. He now leads a life of crime.'
		],
		unlock: '',
		cost: '$10,250'
	},
	{
		name: 'Thespian',
		imageBase: '',
		imageColour: '',
		description: [
			'Thespian is a superhuman soldier of fortune. In the future, space marines like Thespian protect the world of mankind and its space colonies from the forces of evil.',
			'His helmet is popular gift in the criminal underworld and is given to thieves, thugs and career criminals who show loyalty and patience to their syndicate.',
			'We at OVERKILL salute you for your loyalty and patience!'
		],
		unlock: 'THIS IS A THESPIAN MASK PACK ITEM!',
		cost: '$6,750'
	},
	{
		name: 'The Griefer',
		imageBase: '',
		imageColour: '',
		description: [
			'The Griefer is a mythical beast, known to have been a part of this world long ago. The beast deliberately chased and harassed common folk in villages and towns, hunting them down in unsuspecting ways. The Griefer derived pleasure from these acts and was a threat to the peace until the King\'s men finally found him and destroyed him.'
		],
		unlock: 'THIS IS A LOOT BAG ITEM!',
		cost: '$9,750'
	},
	{
		name: 'The Intuition',
		imageBase: '',
		imageColour: '',
		description: [
			'This mask belonged to a mysterious warrior from far away place. He walked the lands, guided by his intuition, hunting evil forces across the world. He ventured to dungeons and slew thousands of evil beings he came across. In the end, he found peace, knowing that the next generation would continue as he did.'
		],
		unlock: 'THIS IS A LOOT BAG ITEM!',
		cost: '$9,750'
	},
	{
		name: 'Frank',
		imageBase: '',
		imageColour: '',
		description: [
			'Frank is a monster, but he is - contrary to popular belief - a sensitive, emotional creature whose only aim is to share his life with another monster.',
			'However, he realized from the moment of his \'birth\' that even his own creator cannot stand being around him. Knowing this, Frank decided to become a bank robber instead. The end.'
		],
		unlock: 'THIS IS A HALLOWEEN ITEM!',
		cost: '$8,250'
	},
	{
		name: 'Pumpkin King',
		imageBase: '',
		imageColour: '',
		description: [
			'Legend has it that a boy named Jack was getting chased by some villagers from whom he had stolen, when he suddenly bumped into the Devil.',
			'Jack was a clever little heister and managed to convince the devil that the loot he was carrying was worth to be shared. The Devil agreed and the two ran to the escape horses and got away.'
		],
		unlock: 'THIS IS A HALLOWEEN ITEM!',
		cost: '$8,250'
	},
	{
		name: 'Venomorph',
		imageBase: '',
		imageColour: '',
		description: [
			'When you see the Venomorph, you know it\'s game over, man. GAME OVER!',
			'In reality, you better go back and hide, because it will be dark soon, and these babies mostly only come at night... Mostly.'
		],
		unlock: 'THIS IS A HALLOWEEN ITEM!',
		cost: '$8,250'
	},
	{
		name: 'Witch',
		imageBase: '',
		imageColour: '',
		description: [
			'A witch is someone practicing black witchcraft, often with the aid of a devil or familiar.',
			'It can be anything from an ugly old hag to a charming, alluring woman.',
			'And then you have the broom, the hat and all that. Boo.'
		],
		unlock: 'THIS IS A HALLOWEEN ITEM!',
		cost: '$8,250'
	},
	{
		name: 'Angry Baby',
		imageBase: '',
		imageColour: '',
		description: [
			'GRRRRRRRR GRRR grrr grr grr GRRRR Wah, wah, WAAAAAAAAAAH! GRRR! Grr.',
			'GRRRR grr GRRRR rawr GRRRRRRRRRRRRR, wahh, WAH, WAH, WAH, GRRR.'
		],
		unlock: 'THIS IS A HALLOWEEN ITEM!',
		cost: '$11,000'
	},
	{
		name: 'Cry Baby',
		imageBase: '',
		imageColour: '',
		description: [
			'Waaaah, waah, wah, WAAAAAAAAAAAAAAAAAH, wah, WAAAAAAAAH, WAAAAAAH!',
			'WAAAAAAAAAAAAAAAAAH, wah, WAAAAAAAAH, WAAAAAAH, Waaaah, waah, wah. Wah. WAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH!'
		],
		unlock: 'THIS IS A HALLOWEEN ITEM!',
		cost: '$11,000'
	},
	{
		name: 'Happy Baby',
		imageBase: '',
		imageColour: '',
		description: [
			'Ffff, gaga, bo, gaga bo GAGA GAGA? GAGAGAGA? GAGA? Gagag GOGOGO GAGA? GAGA! GOGO! Bah. Gaga bah gogo go.',
			'GAGA? GAGA! GOGO! Bah. GAGAGA? GAGA GOGO GAGAGA? GAGA! Gagaga gogoga. Fff.'
		],
		unlock: 'THIS IS A HALLOWEEN ITEM!',
		cost: '$11,000'
	},
	{
		name: 'Brazil Baby',
		imageBase: '',
		imageColour: '',
		description: [
			'GAGA? GAGA! GOGO! Boo! GAGAGA? GAGA GOGO GAGAGA? GAGA? GAGA!  GAGAGA? GAGA GAGAGA?',
			'GAGAGA? GAGAGAGOGO? Boo! BOOO! Gagagaga boo gaga.'
		],
		unlock: 'THIS IS A HALLOWEEN ITEM!',
		cost: '$11,000'
	},
	{
		name: 'Invader',
		imageBase: '',
		imageColour: '',
		description: [
			'I want to belie... ZAP! May the for... ZAP! Live long a.. ZAP! Why can\'t we all just get along? Because ZAP! That\'s why.'
		],
		unlock: 'THIS IS A HALLOWEEN ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Satan',
		imageBase: '',
		imageColour: '',
		description: [
			'The second greatest trick the devil ever pulled was to be depicted as a big horned, red skinned demon. Now nobody knows who the person listening to music through their phone\'s speakers on the subway truly is.'
		],
		unlock: 'THIS IS A HALLOWEEN ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Risen Chains',
		imageBase: '',
		imageColour: '',
		description: [
			'Go darker, hear the calling and become the daredevil of nightmares with an itchy trigger finger. This is a tribute to all the moments you have cheated death out on the field. You are a soldier from an army of darkness. Your veins are pumping of adrenaline and you have enough ammo packed to take on hell itself. Invincible in the darkness and ready to challenge death. All chains will break this time around and anyone in your path will meet their maker.',
			'This mask is an achievement reward. It can\'t drop during a PAYDAY and it can\'t be sold. Instead, it can be returned to your mask stash for free, but any pattern, color or material as well as the customization fee to put that together will be lost.'
		],
		unlock: 'THIS IS A HALLOWEEN ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Risen Dallas',
		imageBase: '',
		imageColour: '',
		description: [
			'There needs to be a harsh statement made about the rotting corruption penetrating every sinew of today\'s society. The self-deception, the scrambling for a false sense of a security. But you\'re not safe, not now and not ever. The American Dream is a brutally scarred nightmare disguised to lead poor souls astray. Take what you need; grab your future by the throat and force down your ambitions until it chokes on it. Mark where you tread with the bodies you leave in your wake.'
		],
		unlock: 'THIS IS A HALLOWEEN ITEM!',
		cost: 'Free'
	},
	{
		name: 'Risen Houston',
		imageBase: '',
		imageColour: '',
		description: [
			'This distorted face is what ghost stories are truly made of. You linger in the shadows, torn and grim. Before you step out and scare the living daylights out of anyone that crosses your path. The knowledge of true fear is gained from looking upon this horror. That fear, that delicious, pure, crispy fear is what drives this monster. It triggers an unquenchable thirst for more. Don\'t look, but don\'t close your eyes.',
			'This mask is an achievement reward. It can\'t drop during a PAYDAY and it can\'t be sold. Instead, it can be returned to your mask stash for free, but any pattern, color or material as well as the customization fee to put that together will be lost.'
		],
		unlock: 'THIS IS A HALLOWEEN ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Risen Wolf',
		imageBase: '',
		imageColour: '',
		description: [
			'The sheer sight is enough to drive an opponent into madness. As if made of blood and old bones, it\'s like a second skin on your face. Always listen to the choir of voices in the back of your head. The ones that keep telling you about the destructive things you should be doing. Succumb to the temptation, relish in your own insanity. This time, do not hold back. Not for anything. This time, drive any foes into your own roaming and frothing madness. Become the demon you truly are, cause you\'ve been to hell and you liked it. It\'s pointless to hold back, the only soothing is to feel an enemy\'s blood gently trickle down your lips',
			'This mask is an achievement reward. It can\'t drop during a PAYDAY and it can\'t be sold. Instead, it can be returned to your mask stash for free, but any pattern, color or material as well as the customization fee to put that together will be lost.'
		],
		unlock: 'THIS IS A HALLOWEEN ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Envy',
		imageBase: '',
		imageColour: '',
		description: [
			'It isn\'t fair, is it? There you stand, deserving of everything in life and the cosmos refuse to give unto you. The Others smile and dance, while you twist inward, wondering why no one has gifted you with whatever success everyone else has been given for free. Oh, you want it so, but how could you ever dare to take it?'
		],
		unlock: 'THIS IS A HALLOWEEN ITEM!',
		cost: 'Unlocked'
	},
	{
		name: 'Gluttony',
		imageBase: '',
		imageColour: '',
		description: [
			'There it is, your unquenchable need to stuff your face and fill your belly with the ravaging furor of someone in a constant state of starvation. And when you stop, it\'s like a gaping hole opens up in the pit of your stomache,'
		],
		unlock: 'THIS IS A HALLOWEEN ITEM!',
		cost: 'Unlocked'
	},
	{
		name: 'Greed',
		imageBase: '',
		imageColour: '',
		description: [
			'More is never enough. No amount of gold or treasure can satisfy you. It\'s all about obtaining the next pile of needless wealth to add to your bloated coffers, be they spiritual or physical. The plights of your fellows matter are inconsequential if you can gain from their suffering.'
		],
		unlock: 'THIS IS A HALLOWEEN ITEM!',
		cost: 'Unlocked'
	},
	{
		name: 'Lust',
		imageBase: '',
		imageColour: '',
		description: [
			'You lock your eyes on your prize until they water. Unattended, your slacking jaw lets slip a drop of saliva onto the floor as the need for possession takes over. The person you pine for is an object, the object is a person. It matters not, to your blinded senses.'
		],
		unlock: 'THIS IS A HALLOWEEN ITEM!',
		cost: 'Unlocked'
	},
	{
		name: 'Pride',
		imageBase: '',
		imageColour: '',
		description: [
			'You are unbreakable. The ship is filling with water, but you refuse to move. Such are your principles that you would rather go into the deep with a failing institution than admit your folly and admit yourself as fallible as your peers. Justice is what you deem it to be, and damned be those who would oppose your righteous wisdom.'
		],
		unlock: 'THIS IS A HALLOWEEN ITEM!',
		cost: 'Unlocked'
	},
	{
		name: 'Sloth',
		imageBase: '',
		imageColour: '',
		description: [
			'Why bother? Let the universe expand, die and grow dark. You have endless time to lift your fingers in protest at whatever mindless chore that demands you exert yourself in the slightest. Your life energy oozes from your soul, wasted and dissolved in the emptiness as you remain perpetually drained of ambition.'
		],
		unlock: 'THIS IS A HALLOWEEN ITEM!',
		cost: 'Unlocked'
	},
	{
		name: 'Wrath',
		imageBase: '',
		imageColour: '',
		description: [
			'There is a cold fire in your heart. All those who have wronged you will pay. If you so have to burn with them in the conflagration, you will extract payment for any perceived or actual slight against your person. There is no rationality to your rage- it must simply be indulged.'
		],
		unlock: 'THIS IS A HALLOWEEN ITEM!',
		cost: 'Unlocked'
	},
	{
		name: 'The Crossbreed',
		imageBase: '',
		imageColour: '',
		description: [
			'A powerful alien race, described by some as the most advanced beings in the universe. Different races that have come in contact with them have different names for the Crossbreed.',
			'Strong, lean and intelligent, the Crossbreed takes the best from the DNA of each alien race that it meets, always making sure it evolves in the right direction.'
		],
		unlock: 'THIS IS A HUMBLE MASK PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'The Orc',
		imageBase: '',
		imageColour: '',
		description: [
			'Brutish, aggressive and generally repulsive, the orcs have always been a hated race. Orcs are larger stronger than their goblin cousins but smaller and less powerful than their ogre brethren.',
			'This particular purple-skinned orc came from the Stonetremble clan who were known for their fierce warriors and overpowered, hybrid shamans.'
		],
		unlock: 'THIS IS A HUMBLE MASK PACK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Lycanwulf',
		imageBase: '',
		imageColour: '',
		description: [
			'\'Lycanwulf, Lycanwulf!\' they yelled, the frightened villagers, as they laid eyes upon this abomination known as the Lycanwulf. The petty humans were now prisoners of the beast, in a prison without walls, ceilings or a key, where the only escape was death.'
		],
		unlock: 'THIS IS A HUMBLE MASK PACK 2 ITEM!',
		cost: 'Free'
	},
	{
		name: 'The One Below',
		imageBase: '',
		imageColour: '',
		description: [
			'The head is what remains of this aquatic horror from the old days, when dark lords ruled the lands and good men grew up only to die; when the summer was short and the winter felt like an eternity; when the One Below stepped out of the ocean and walked the earth.'
		],
		unlock: 'THIS IS A HUMBLE MASK PACK 2 ITEM!',
		cost: 'Free'
	},
	{
		name: 'Alpha Grey',
		imageBase: '',
		imageColour: '',
		description: [
			'Grey Aliens are alleged extraterrestrial beings whose existence is promoted in ufological, paranormal, and New Age communities, and who are named for their skin color.',
			'Or are they?'
		],
		unlock: 'THIS IS AN ALIENWARE ALPHA ITEM!',
		cost: 'Free'
	},
	{
		name: 'The Anomaly',
		imageBase: '',
		imageColour: '',
		description: [
			'Forged from Penrose patterned rapidly quenched metallic alloys, this helmet was constructed from debris recovered from a top secret crash site. The government continues to deny any knowledge of its existence.'
		],
		unlock: 'THIS IS AN ALIENWARE ALPHA ITEM!',
		cost: 'Free'
	},
	{
		name: 'Electarodent',
		imageBase: '',
		imageColour: '',
		description: [
			'Untrained, the Electarodent can be found nibbling sweet carrots or frolicking across Alpine meadows. However, fully trained, the Electarodent is most often found wielding Bernetti 9\'s and eating through the face-plates of Skulldozers'
		],
		unlock: 'THIS IS A HUMBLE MASK PACK 3 ITEM!',
		cost: 'Free'
	},
	{
		name: 'Titan',
		imageBase: '',
		imageColour: '',
		description: [
			'Once, they strode amongs us. Cyclopean beings, tall as towers. They were old, even when our primate ancestors howled at fire. Now, they are gone, and only their shades come to us in half-dreamt race memories.'
		],
		unlock: 'THIS IS A HUMBLE MASK PACK 3 ITEM!',
		cost: 'Free'
	},
	{
		name: 'Borsuk',
		imageBase: '',
		imageColour: '',
		description: [
			'There is more to being a world-class heister than picking up a gun. It requires training, conditioning and a singular focus on developing far beyond the norm. Such heisters are near mutants, who wade into furious battle and always emerge victorious.'
		],
		unlock: 'THIS IS A HUMBLE MASK PACK 4 ITEM!',
		cost: 'Free'
	},
	{
		name: 'Mask of the Moon',
		imageBase: '',
		imageColour: '',
		description: [
			'Legend speaks of an entity so malevolent it tried to smash the Moon into the Earth. Though defeated by four masked warriors, the entity escaped and inhabited... something. We hope it will never return, but remember: sometimes the man wears the mask, and sometimes the mask wears the man.'
		],
		unlock: 'THIS IS A HUMBLE MASK PACK 4 ITEM!',
		cost: 'Free'
	},
	{
		name: 'Jack of Cards',
		imageBase: '',
		imageColour: '',
		description: [
			'A classic made into a mask. The standard 52-card deck is the most played deck of playing cards used today, and regardless if you are a rookie or professional player, you will most likely recognize this face. A proper poker face-mask.'
		],
		unlock: 'THIS IS AN E3 2015 SECRET MASK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Queen of Cards',
		imageBase: '',
		imageColour: '',
		description: [
			'A classic made into a mask. The standard 52-card deck is the most played deck of playing cards used today, and regardless if you are a rookie or professional player, you will most likely recognize this face. A proper poker face-mask.'
		],
		unlock: 'THIS IS AN E3 2015 SECRET MASK ITEM!',
		cost: 'Free'
	},
	{
		name: 'King of Cards',
		imageBase: '',
		imageColour: '',
		description: [
			'A classic made into a mask. The standard 52-card deck is the most played deck of playing cards used today, and regardless if you are a rookie or professional player, you will most likely recognize this face. A proper poker face-mask.'
		],
		unlock: 'THIS IS AN E3 2015 SECRET MASK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Joker of Cards',
		imageBase: '',
		imageColour: '',
		description: [
			'A classic made into a mask. The standard 52-card deck is the most played deck of playing cards used today, and regardless if you are a rookie or professional player, you will most likely recognize this face. A proper poker face-mask.'
		],
		unlock: 'THIS IS AN E3 2015 SECRET MASK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Dozer Mask',
		imageBase: '',
		imageColour: '',
		description: [
			'\'Senpai Noticed Me!!! :3\'',
			'A big thank you to community member Far2close for making a hilarious version of an otherwise intimidating dozer face plate.',
			'This mask can only be obtained from a code accompanying the PAYDAY 2 DOZER BOBBLEHEAD bought from the online OVERKILL merchandise store.'
		],
		unlock: 'THIS IS A MERCHANDISE ITEM!',
		cost: 'Free'
	},
	{
		name: 'King of Jesters',
		imageBase: '',
		imageColour: '',
		description: [
			'Wearing brightly coloured clothes and eccentric hats in a motley pattern, jesters have always had a place in these parts.',
			'Whether walking on stilts, performing with fire or telling jokes; their sole purpose is to spread joy in our hearts.',
			'However, this is your time to shine so why not put on the mask and spread some joy.',
			'So, pull out your gun, rob your guests and tell them it was all a big ploy.'
		],
		unlock: 'THIS IS A PAYDAYCON 2015 SECRET MASK ITEM!',
		cost: 'Free'
	},
	{
		name: 'Floating Guy',
		imageBase: '',
		imageColour: '',
		description: [
			'As you walk down the corridor you see this scary, but also somewhat slow guy. Hovering there, ominously. Hard to tell if he\'s a threat or just floating around a bit. But then. A blast breaks the silence and you cease to exist. So next time you meet Floating Guy: come prepared and don\'t take him lightly.'
		],
		unlock: 'THIS IS A HUMBLE MASK PACK 5 ITEM!',
		cost: 'Free'
	},
	{
		name: 'Garreth',
		imageBase: '',
		imageColour: '',
		description: [
			'In space you need a trusted companion. As everything from huge monsters on distant planets to space itself is deadly - you need an ally. Not just a hired gun. But instead a friend and a soldier that makes sure that you survive and others don\'t. Be happy that Garreth is on your team. Be happy that he helps you shepherd the herd'
		],
		unlock: 'THIS IS A HUMBLE MASK PACK 5 ITEM!',
		cost: 'Free'
	},
	{
		name: 'The Judge',
		imageBase: '',
		imageColour: '',
		description: [
			'\'Those pesky youngsters think they can just run around doing whatever they feel like. Don\'t they understand? I exist for a reason. One must obey me - my ruling and my saying. Escaping the world, just feeling free? What kind of life is that? Riding around on those yellow bird creations. No respect for the empire or the emperor. Disgraceful!\''
		],
		unlock: 'THIS IS A HUMBLE MASK PACK 5 ITEM!',
		cost: 'Free'
	},
	{
		name: 'Party Hat',
		imageBase: '',
		imageColour: '',
		description: [
			'Party hats never get old. It\'s an essential accessory to any fun event, be it a festivity of misdeeds or a celebration of moving into a new home. Strap one on and loosen that tie. It\'s party time. Excellent.'
		],
		unlock: 'THIS IS A HOUSEWARMING PARTY ITEM!',
		cost: 'Free'
	},
	{
		name: 'Mega Clover',
		imageBase: '',
		imageColour: '',
		description: [
			'The Mega Clover mask is an evolved version of the original mask. It symbolises transcendence and catharsis.',
			'Thank you for your support.',
			'OVERKILL salutes you!'
		],
		unlock: 'THIS IS A PAYDAYCON 2016 SECRET ITEM!',
		cost: 'Free'
	},
	{
		name: 'Mega Sydney',
		imageBase: '',
		imageColour: '',
		description: [
			'The Mega Sydney mask is an evolved version of the original mask. It symbolises transcendence and catharsis.',
			'Thank you for your support.',
			'OVERKILL salutes you!'
		],
		unlock: 'THIS IS A SYDNEY SWIM ITEM!',
		cost: 'Free'
	},
	{
		name: 'The Fedora',
		imageBase: '',
		imageColour: '',
		description: [
			'The fedora, the very height of fashion and class. Where the line is drawn between boys and men. Carry this classical headgear with the pride and resolve that it deserves. Feel the legacy and tradition of the millions of gentlemen and gangsters that wore a fedora throughout the ages.'
		],
		unlock: 'THIS IS AN ALDSTONE\'S HERITAGE ITEM!',
		cost: 'Free'
	},
	{
		name: 'Simon',
		imageBase: '',
		imageColour: '',
		description: [
			'A wanna-be robber tried to knock over a liquor store, but neglected to properly conceil'
		],
		unlock: 'THIS IS A LOCKE AND LOAD ITEM(sic)',
		cost: 'Free'
	},
	{
		name: 'Brandon',
		imageBase: '',
		imageColour: '',
		description: [
			'Brandon has a thing for walking really, really fast.',
			'Brandon is a panther, and panthers are large cats. One funny thing is that only the tiger, lion, leopard and jaguar has the anatomical structure which enables them to roar. Poor panther.'
		],
		unlock: '',
		cost: 'Requires ownership of Hotline Miami on Steam.'
	},
	{
		name: 'Don Juan',
		imageBase: '',
		imageColour: '',
		description: [
			'Don Juan loves slamming doors in.',
			'Knock, knock. Who\'s there? It\'s Don Juan. Prepare yourself.',
			'Pro tip: In Hotline Miami, you get 2200 points while performing ground kills against the wall when using this mask.'
		],
		unlock: '',
		cost: 'Requires ownership of Hotline Miami on Steam.'
	},
	{
		name: 'Richard',
		imageBase: '',
		imageColour: '',
		description: [
			'Richard enjoys spending time with different personas and asking questions.',
			'Do you like hurting other people?',
			'Who is leaving messages on your answering machine?',
			'Where are you right now?',
			'Why are we having this conversation?'
		],
		unlock: '',
		cost: 'Requires ownership of Hotline Miami on Steam.'
	},
	{
		name: 'Tony',
		imageBase: '',
		imageColour: '',
		description: [
			'Tony uses his fists of fury to beat the crap of anyone who messes with him.',
			'Tony was born in the 1970s and was of Italian-American nationality. Many people easily recognize Tony. Probably in part because of his Tiger mask, and in part because of his physical brutality when dealing with people he don\'t like.'
		],
		unlock: '',
		cost: 'Requires ownership of Hotline Miami on Steam.'
	},
	{
		name: 'Alex',
		imageBase: '',
		imageColour: '',
		description: [
			'One half of a brother and sister duo, Alex. Like swans, they are fierce. Unlike swans, they wield chainsaws and SMG\'s. Like swans, they are closely bonded. Unlike swans, they have a penchant for slaughter.'
		],
		unlock: 'THIS IS A HOTLINE MIAMI 2 ITEM!',
		cost: 'Requires ownership of Hotline Miami 2: Wrong Number on Steam.'
	},
	{
		name: 'Biker',
		imageBase: '',
		imageColour: '',
		description: [
			'When you\'re a thrill-seeker, and a risk-taker, and a live-for-the-moment kind of heister, it is important to have at least some measure of protection. That also goes if you are a meat-cleaver waving maniac.'
		],
		unlock: 'THIS IS A HOTLINE MIAMI 2 ITEM!',
		cost: 'Requires ownership of Hotline Miami 2: Wrong Number on Steam.'
	},
	{
		name: 'Corey',
		imageBase: '',
		imageColour: '',
		description: [
			'When you\'re the most delicious lunch on the savannah, you have to be fast, agile and cunning if you\'re going to survive. Corey is all of these things. Zebras are also peaceful, gentle and herbivorous. Corey is none of these things.'
		],
		unlock: 'THIS IS A HOTLINE MIAMI 2 ITEM!',
		cost: 'Requires ownership of Hotline Miami 2: Wrong Number on Steam.'
	},
	{
		name: 'Jake',
		imageBase: '',
		imageColour: '',
		description: [
			'There\'s no such thing as a good snake, but even among the deadly serpents the cobra is bad news. The broad hood, when seen, is a display of threat - so run. Its long fangs can pierce elephant skin - so run. And just a drop of its venom can fell a dozer - so... look, basically, when you see this, just run. Because they also spit.'
		],
		unlock: 'THIS IS A HOTLINE MIAMI 2 ITEM!',
		cost: 'Requires ownership of Hotline Miami 2: Wrong Number on Steam.'
	},
	{
		name: 'Richter',
		imageBase: '',
		imageColour: '',
		description: [
			'Like the rat, Richter is a silent killer. It can make its way into just about anywhere - into the most secure banks and apartments. It can avoid detection when it wants, and, once there, spread death like a plague. It kills without remorse. Nothing personal.'
		],
		unlock: 'THIS IS A HOTLINE MIAMI 2 ITEM!',
		cost: 'Requires ownership of Hotline Miami 2: Wrong Number on Steam.'
	},
	{
		name: 'Tony\'s Revenge',
		imageBase: '',
		imageColour: '',
		description: [
			'The near-perfect predator. Tigers are immensely strong, yet fast. They are brutal, yet patient. They can stalk silently, before exploding into violence. The perfect killing machine. Despite this, the tiger is in decline. Poachers prize the tiger penis in traditional medicine. So don\'t get taken alive.'
		],
		unlock: 'THIS IS A HOTLINE MIAMI 2 ITEM!',
		cost: 'Requires ownership of Hotline Miami 2: Wrong Number on Steam.'
	},
	{
		name: 'Richard Begins',
		imageBase: '',
		imageColour: '',
		description: [
			'This is a clean version of the iconic Richard Returns mask, before it was painted.',
			'Never liked how the original one turned out? This is your chance to change history.'
		],
		unlock: 'THIS IS A HOTLINE MIAMI 2 DELUXE ITEM!',
		cost: 'Requires ownership of Hotline Miami 2: Wrong Number - Digital Special Edition on Steam.'
	},
	{
		name: 'Richard Returns',
		imageBase: '',
		imageColour: '',
		description: [
			'Is this mask a reflection of a deep-seated psychological problem? Possibly a dissociative identity disorder? Schizophrenia? Trauma of a disturbed psyche? Or is it not a reflection at all, but instead something to cause them?'
		],
		unlock: 'THIS IS A HOTLINE MIAMI 2 DELUXE ITEM!',
		cost: 'Requires ownership of Hotline Miami 2: Wrong Number - Digital Special Edition on Steam.'
	},
	{
		name: 'Hothead',
		imageBase: '',
		imageColour: '',
		description: [
			'With the rage of fearsome volcano, the hostile Hothead lights up the night with blazing speed! What ignites his frenzied flame? From what does the raging bull run? Very few have caought up close enough to ask, and even fewer have gotten a coherent response!'
		],
		unlock: 'THIS IS A SPEEDRUNNERS ITEM!',
		cost: 'Requires ownership of SpeedRunners on Steam.'
	},
	{
		name: 'SpeedRunner',
		imageBase: '',
		imageColour: '',
		description: [
			'It\'s time for a speedy run! SpeedRunner is the people\'s champ in New Rush City. Running, sliding, swinging his way toward crime and those in need, he accepts no less than first place. SpeedRunner\'s got the need... for running!'
		],
		unlock: 'THIS IS A SPEEDRUNNERS ITEM!',
		cost: 'Requires ownership of SpeedRunners on Steam.'
	},
	{
		name: 'The Falcon',
		imageBase: '',
		imageColour: '',
		description: [
			'Life\'s not all about speed and running! With his livelihood destroyed from a speedy accident, he became the hero that New Rush City truly deserves. Flacon vows to take down SpeedRunner and get the city back. Is Falcon the only one sane in a world gone mad- or is he a man in a chicken suit?'
		],
		unlock: 'THIS IS A SPEEDRUNNERS ITEM!',
		cost: 'Requires ownership of SpeedRunners on Steam.'
	},
	{
		name: 'Unic',
		imageBase: '',
		imageColour: '',
		description: [
			'Clop Clop- who\'s there? It\'s Unic! In the dark streets of New Rush City, what could shine brighter than an honest smile? Galloping in meadows, and sharing time with his friends, Unic is dedicated to showing the world\'s positive side, A pink leotard and purple boots make this speedy runner truly unique!'
		],
		unlock: 'THIS IS A SPEEDRUNNERS ITEM!',
		cost: 'Requires ownership of SpeedRunners on Steam.'
	},
	{
		name: 'Feeder',
		imageBase: '',
		imageColour: '',
		description: [
			'Feeder has dislodged his jaw with one sole purpose: to be able to swallow a whole, human heart. When he roams the night he seeks out teens with strong hearts that can sustain him. So if you spot a corpse with a ripped chest - run.'
		],
		unlock: 'THIS IS A DEAD BY DAYLIGHT DELUXE ITEM!',
		cost: 'Requires ownership of Dead by Daylight Deluxe Edition on Steam.'
	},
	{
		name: 'Dendron',
		imageBase: '',
		imageColour: '',
		description: [
			'A dark forest is scary to anyone, no matter how old you are. You fear whatever is in it, and the things lurking in the shadows. But you seldom think of the actual trees. You never think of Dendron. And when you do, it\'s already too late. Dendron strikes without mercy. So fear not what\'s behind the trees, but instead the trees.'
		],
		unlock: 'THIS IS A DEAD BY DAYLIGHT DELUXE ITEM!',
		cost: 'Requires ownership of Dead by Daylight Deluxe Edition on Steam.'
	},
	{
		name: 'Ameonna',
		imageBase: '',
		imageColour: '',
		description: [
			'Mighty horned demon. Vengeful, weeping destroyer. Do not arouse her anger.'
		],
		unlock: 'THIS IS A SHADOW WARRIOR 2 ITEM!',
		cost: 'Free'
	},
	{
		name: 'Co-Cop Ninja',
		imageBase: '',
		imageColour: '',
		description: [
			'Strike fast, strike hard, strike silently. You will leave even the cloakers sulking in shame.'
		],
		unlock: 'THIS IS A SHADOW WARRIOR 2 ITEM!',
		cost: 'Free'
	},
	{
		name: 'Hata Mari',
		imageBase: '',
		imageColour: '',
		description: [
			'A fast and agile killer, sending blades flying through the air. Always ready to strike. A popular killer with many fans.'
		],
		unlock: 'THIS IS A SHADOW WARRIOR 2 ITEM!',
		cost: 'Free'
	},
	{
		name: 'Thorntail',
		imageBase: '',
		imageColour: '',
		description: [
			'Be an aggressive, merciless, swarming menace. As you roll into town, death follows in the form of fire.'
		],
		unlock: 'THIS IS A SHADOW WARRIOR 2 ITEM!',
		cost: 'Free'
	},
	{
		name: 'DOME',
		imageBase: '',
		imageColour: '',
		description: [
			'Dome was the centerpiece of a grand scheme, planned and set in motion by the other side. A simple robot, assembled to restore/reassemble/rearrange, Dome was on mission to reassemble a government building that got destroyed by the enemy. A stealth attack - to take out Commander Wasp - was taking place near the location as the Commander\'s car drove passed the debris. Dome saw the coming attack and sacrificed himself to protect the Commander by throwing himself in front of the car, making it steer away from the blast. Wasp survived, Dome did not.'
		],
		unlock: 'THIS IS AN ANTISPHERE ITEM!',
		cost: 'Requires ownership of Antisphere on Steam.'
	},
	{
		name: 'DRONE',
		imageBase: '',
		imageColour: '',
		description: [
			'Engineered to be as lethal as robotly possible. Drone was solely responsible for the Great Purge. Forever imprinted in all minds and historical dataservers. Drone had the skills needed to go beyond what was expected by a \'grunt\'. Someone who seemed disposable. but would prove invaluable. The Great Purge turned the war: sleeper cells got exposed, robots got disconnected, and the Hive Mind lost thousands of zettabytes. Drone became a statue to be gazed upon in Ming Ji Memorial Park.'
		],
		unlock: 'THIS IS AN ANTISPHERE ITEM!',
		cost: 'Requires ownership of Antisphere on Steam.'
	},
	{
		name: 'INTERCEPTOR',
		imageBase: '',
		imageColour: '',
		description: [
			'Interceptor model BX-99 was built to keep \'things in order\'. A mission with a lof to interpret. Roaming the streets, making sure that civilians are safe and that things are \'OK\'. This Interceptor took things too far as a situation occurred near a assembly factory. Some civilians came to harm, others destroyed, ammo slugs filled the air, and Interceptor did what it thought was absolutely necessary to not obstruct the assembly factory. Interceptor BX-99 with serial number 151010130807 was later disassembled.'
		],
		unlock: 'THIS IS AN ANTISPHERE ITEM!',
		cost: 'Requires ownership of Antisphere on Steam.'
	},
	{
		name: 'MOTH',
		imageBase: '',
		imageColour: '',
		description: [
			'Every war has its traitor. Moth was one of them. A sentinel robot assembled to retrieve information - by any means necessary. But hierarchy and power are often coveted. Wars breed corruption, and Moth followed his logic and switched sides - causing millions of robots to disconnect. Celebrated by one side and hated by another - Moth came to be one of the pawns that turned the war.'
		],
		unlock: 'THIS IS AN ANTISPHERE ITEM!',
		cost: 'Requires ownership of Antisphere on Steam.'
	},
	{
		name: 'RAPTOR',
		imageBase: '',
		imageColour: '',
		description: [
			'Raptor was a fighter pilot. Hooked into the central hub on each plane he flew, he steered with certainty. It became a matter of accumulated knowledge. Even though all pilots got the same software installed - an AI learns. And somehow, Raptor managed to stay alive enough to keep his knowledge. The Hive Mind was off limits to fighter pilots, as they could be captured and hacked when they crossed into enemy territory. But Raptor learned to be the best at taking out enemy bases without hesitation.'
		],
		unlock: 'THIS IS AN ANTISPHERE ITEM!',
		cost: 'Requires ownership of Antisphere on Steam.'
	},
	{
		name: 'VIZOR',
		imageBase: '',
		imageColour: '',
		description: [
			'Robot wars are easy to make fun of. Dead things that fight other dead things. But as the AI evolved, things turned real. Soldiers like Vizor played a crucial role in the mayhem orchestrated by long dead humans. Humans who pushed the button, but failed to experience the consequences. As robots turned against robots, soldiers like Vizor rose, and those with a heartbeat became a memory.'
		],
		unlock: 'THIS IS AN ANTISPHERE ITEM!',
		cost: 'Requires ownership of Antisphere on Steam.'
	},
	{
		name: 'SKULL',
		imageBase: '',
		imageColour: '',
		description: [
			'Every war requires executioners. Not a simple soldier, but someone who can take a life with a threatening demeanor. Someone working for the \'system\', who blindly follow orders. Skull was one of those. Someone who, tirelessly disconnected robot after robot, war criminals and everyone else deemed \'dangerous\' to the \'cause\'.'
		],
		unlock: 'THIS IS AN ANTISPHERE ITEM!',
		cost: 'Free'
	},
	{
		name: 'WASP',
		imageBase: '',
		imageColour: '',
		description: [
			'Commander Wasp sat on incredible technical capacity. Strength and intelligence was by far superior to the other side. A prototype that would have the needed circuits to outsmart the opposing forces. But an untested prototype. Something rushed. Something that was too experimental. Madness strikes circuit boards, but we refer to it as a \'bug\'. Killing his fellow troops in a rage of paranoia - Commander Wasp became a criminal of war.'
		],
		unlock: 'THIS IS AN ANTISPHERE ITEM!',
		cost: 'Free'
	},
	{
		name: 'The Bullet',
		imageBase: '',
		imageColour: '',
		description: [
			'Equipped with his Blasphemy sword of infinite ammo the Bullet'
		],
		unlock: 'THIS IS AN ENTER THE GUNGEON ITEM!',
		cost: 'Free'
	},
	{
		name: 'The Cultist',
		imageBase: '',
		imageColour: '',
		description: [
			'Always being referred to as \'Number 2\' the Cultist'
		],
		unlock: 'THIS IS AN ENTER THE GUNGEON ITEM!',
		cost: 'Free'
	},
	{
		name: 'The Marine',
		imageBase: '',
		imageColour: '',
		description: [
			'The Marine was a guard stationed at Primerdyne R&amp;D when an experiment went awry and unleashing'
		],
		unlock: 'THIS IS AN ENTER THE GUNGEON ITEM!',
		cost: 'Free'
	},
	{
		name: 'The Robot',
		imageBase: '',
		imageColour: '',
		description: [
			'The Robot was an honored member of the killbot army. When commanded by his master, EMP-R0R to kill the leader of the human resistance, he broke protocol, failing to eliminate humanity.'
		],
		unlock: 'THIS IS AN ENTER THE GUNGEON ITEM!',
		cost: 'Free'
	},
	{
		name: 'Futuras',
		imageBase: '',
		imageColour: '',
		description: [
			'Look no further for a bad ass cherry to put on top of your Ice Cream of Minigun mayhem.'
		],
		unlock: '\'THIS IS A RESERVOIR DOGS ITEM!',
		cost: 'Free'
	},
	{
		name: 'Producers',
		imageBase: '',
		imageColour: '',
		description: [
			'These frames harken back to a time when moon-landings were envisioned, all dreams were possible and people all dressed a little nicer.'
		],
		unlock: '\'THIS IS A RESERVOIR DOGS ITEM!',
		cost: 'Free'
	},
	{
		name: 'The Dons',
		imageBase: '',
		imageColour: '',
		description: [
			'True class is eternal when accepted by scoundrels and heroes alike.'
		],
		unlock: '\'THIS IS A RESERVOIR DOGS ITEM!',
		cost: 'Free'
	},
	{
		name: 'Dallas',
		imageBase: '',
		imageColour: '',
		description: [
			'The mask that everyone fears.'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: '$48,750'
	},
	{
		name: 'Chains',
		imageBase: '',
		imageColour: '',
		description: [
			'The mask of Chains.'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: '$48,750'
	},
	{
		name: 'Hoxton',
		imageBase: '',
		imageColour: '',
		description: [
			'The mask of Hoxton.'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: '$48,750'
	},
	{
		name: 'Wolf',
		imageBase: '',
		imageColour: '',
		description: [
			'The mask of Wolf.'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: '$48,750'
	},
	{
		name: 'Dallas Begins',
		imageBase: '',
		imageColour: '',
		description: [
			'This is a clean version of the iconic Dallas mask,before it was painted.',
			'Never liked how the original one turned out? This is your chance to change history.'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: '$67,500'
	},
	{
		name: 'Chains Begins',
		imageBase: '',
		imageColour: '',
		description: [
			'This is a clean version of the iconic Chains mask, before it was painted.',
			'Never liked how the original one turned out? This is your chance to change history.'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: '$61,250'
	},
	{
		name: 'Hoxton Begins',
		imageBase: '',
		imageColour: '',
		description: [
			'This is a clean version of the iconic Hoxton mask,before it was painted.',
			'Never liked how the original one turned out? This is your chance to change history.'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: '$61,250'
	},
	{
		name: 'Wolf Begins',
		imageBase: '',
		imageColour: '',
		description: [
			'This is a clean version of the iconic Wolf mask,before it was painted.',
			'Never liked how the original one turned out? This is your chance to change history.'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: '$61,250'
	},
	{
		name: 'Anonymous',
		imageBase: '',
		imageColour: '',
		description: [
			'Don the mask, become anonymous and do as you wish.',
			'Do it because you mean it, do it because you were told to, or do it for the lulz.',
			'Do all the things that regular society will not allow you. Like robbing a bank.'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: '$45,000'
	},
	{
		name: 'Cthulhu',
		imageBase: '',
		imageColour: '',
		description: [
			'A mask with a hideous appearance, the very face of terror.',
			'They say that an evil beast has many names. That must be why this beast is known as Tulu, Clulu, Clooloo, Cthulu, C\'thulhu, Cighulu, Cathulu, C\'thlu among other names,',
			'Part human, part octopus and part dragon, this is one of the greatest evils known to man.'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: '$55,000'
	},
	{
		name: 'Dillinger Death Mask, The',
		imageBase: '',
		imageColour: '',
		description: [
			'John Herbert Dillinger was a famous American bank robber.',
			'His gang robbed two dozen banks and even four police stations.',
			'Dillinger himself escaped jail twice and was widely known as one of the meanest motherfuckers in the depression-era United States.'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: '$61,250'
	},
	{
		name: 'Grin, The',
		imageBase: '',
		imageColour: '',
		description: [
			'There once was a man and his brother.',
			'Together, they owned a successful company.',
			'One day, the man and his brother temporarily only had one client. The client got cold feet and wanted out. Rather than simply pulling out and having to pay a fine for breach of contract, the client starved the man and his brother\'s company to death.',
			'The Man and his brother lost everything, and it is said that this mask was the very image of the man\'s facial expression the day that he went mad.'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: '$55,000'
	},
	{
		name: 'Bonnie',
		imageBase: '',
		imageColour: '',
		description: [
			'Few nations have contributed to humanity as Scotland has. In every field of endeavor - science, arts, cuisine - it is the people of this blessed land that give freely and generously. With this mask, Bonnie is determined to reverse this trend.'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	},
	{
		name: 'Bonnie Begins',
		imageBase: '',
		imageColour: '',
		description: [
			'This is a clean version of the iconic Bonnie mask, before it was painted.',
			'Never liked how the original one turned out? This is your chance to change history.'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	},
	{
		name: 'Bodhi',
		imageBase: '',
		imageColour: '',
		description: [
			'Masks have always been used in spiritual traditions that relate to deities, the divine and those chasing the apotheosis of the self. Bodhi\'s mask reflects the man behind it. Strong, cunning, single-minded and centered.'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	},
	{
		name: 'Bodhi Begins',
		imageBase: '',
		imageColour: '',
		description: [
			'This is a clean version of the iconic Bodhi mask, before it was painted.',
			'Never liked how the original one turned out? This is your chance to change history.'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	},
	{
		name: 'Jimmy',
		imageBase: '',
		imageColour: '',
		description: [
			'Jimmy hasn\'t really made many masks before he made his signature mask - and it shows. His mask design captures his free spirit and his disregard to things as appearance, planning and such. Good is good enough for Jimmy, he doesn\'t get stuck in ideas and wants to move forward at all times.'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	},
	{
		name: 'The White Death',
		imageBase: '',
		imageColour: '',
		description: [
			'Jimmys second attempt at making a mask went much better - that\'s because he got some help from Gage. It represents the Grim Reaper himself if he was coked up. The mask captures both the crazy and deadly sides of Jimmy, aimed to sending fear into his enemies.'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	},
	{
		name: 'Collateral',
		imageBase: '',
		imageColour: '',
		description: [
			'These shades belonged to a colleague of John\'s that he was hired to kill.',
			'It started like any other night. Only this night, he got a contract to kill another contract killer who was making rounds that day. John knew he had five stops to make and was using the same taxi cab between all of them.',
			'In the end, he didn\'t even need to do the deed himself - he was already dead when he found him.'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	},
	{
		name: 'Sangres',
		imageBase: '',
		imageColour: '',
		description: [
			'The skull is Death, Sangres\' faithful companion throughout his career. The gold tooth is the coin that has been paid. The kill counter represents his past as a hitman, the blood-red ruby the new wealth he\'s seeking in the US. Sangres\' name spreaks of the many bloody episodes in his life, and that red blood is also present on his mask.'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	},
	{
		name: 'Sangres Begins',
		imageBase: '',
		imageColour: '',
		description: [
			'This is a clean version of the iconic Sangres mask, before it was painted.'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	},
	{
		name: 'Duke',
		imageBase: '',
		imageColour: '',
		description: [
			'Duke is a man of culture, virtue and stone-hard composure. Thus his mask has been modeled of of the',
			'A big draw for Duke is his love for mystery- you never really know what\'s inside the safe until you open it, or behind the painting until you take it out of the frame. And with the Payday gang, the biggest mystery may be just around the corner...'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	},
	{
		name: 'Duke Begins',
		imageBase: '',
		imageColour: '',
		description: [
			'This is a clean version of the iconic Duke mask, before it was painted.'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	},
	{
		name: 'Joy',
		imageBase: '',
		imageColour: '',
		description: [
			'Bring back disco in style and confuse the hell out of your enemies when they gaze into your fabulously flashy face.'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	},
	{
		name: 'Joy Begins',
		imageBase: '',
		imageColour: '',
		description: [
			'Flair and flash always have to start somewhere. Sometimes it\'s a thumping white basline,'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	},
	{
		name: 'Somen Mempo',
		imageBase: '',
		imageColour: '',
		description: [
			'In ancient Japan, samurai warriors wore somen masks to protect themselves in war and to incite fear in their enemies. Somen masks were tied to the large kabuto helmets, making the samurai look like demons from jigoku.',
			'No one knows what fierce and ruthless warrior wore this intimidating mask in the past. Now however, it is ready for battle once more.',
			'\'Boku no ikari wo osoreru\''
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Hoxton Reborn',
		imageBase: '',
		imageColour: '',
		description: [
			'The Hoxton Reborn mask is a mask that Hoxton made while in prison. For him, it\'s a symbol of everything he experienced in the past years while the PAYDAY gang kept on going without him. No one knows how his experiences in prison has changed him, and he won\'t talk about it when asked.',
			'All we can assume is that he has been changed forever, and that he is reborn into... Something different.'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Hard Hat, The',
		imageBase: '',
		imageColour: '',
		description: [
			'When you rat out the Payday gang, you need to expect some form of retribution. And the gang aren\'t big on wagging fingers and a stern telling off. You can expect bullets, and plenty of them. This hard hat is cold school riot cop tech - heavy iron, fronted with reinforced glass. Good luck getting through it.'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Hoxton Reborn Begins',
		imageBase: '',
		imageColour: '',
		description: [
			'This is a clean version of the iconic Hoxton Reborn mask, before it was painted.',
			'Never liked how the original one turned out? This is your chance to change history.'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	},
	{
		name: 'Rad Mutant',
		imageBase: '',
		imageColour: '',
		description: [
			'Genetic mutation is the key to our evolution. Assuming that our evolution is of the green, scaly, homicidal and irradiated kind.',
			'This mask is an achievement reward.It can\'t drop during a PAYDAY and can\'t be sold. It can be returned to your mask stash for free, but any pattern, color or material as well as the customization fee to put these together will be lost.'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'StarVR',
		imageBase: '',
		imageColour: '',
		description: [
			'Real life is dirty, uncomfortable, sticky, sweaty, stinky, it tastes bad and leaves you old and broken. Screw that. The StarVR Headset lets you immerse yourself in a virtual world of incredible realism.'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	},
	{
		name: 'Mega Death',
		imageBase: '',
		imageColour: '',
		description: [
			'Death can be the end but it can also be a beginning, a transcendence and catharsis. And Mega Death has a million times the power of Death.'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	},
	{
		name: 'Mega Duke',
		imageBase: '',
		imageColour: '',
		description: [
			'Aristole, Plato, Confucius, Michelangelo, DaVinci, Newton, Galileo... artists and thinkers forever engraved in history. And somewhere in that history, the place of a heister is assured. Contained herein is their essence, so magnificent in combination that the very surface of the mask can barely contain it.'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	},
	{
		name: 'Hard Skull, The',
		imageBase: '',
		imageColour: '',
		description: [
			'A strange thing, the human skull. Humans can often recognize a human skull, even if it\'s only partially shown. The human brain even has a specific region for it.',
			'You finished all heists on the Hard difficulty? What are you, some kind of pro? Maybe this mask will suit you after all.'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Very Hard Skull, The',
		imageBase: '',
		imageColour: '',
		description: [
			'A strange thing, the human skull. Not that this skull looks that human anymore. Humans can often recognize a human skull, even if it\'s only partially shown. The human brain even has a specific region for it. There\'s something strange with this skull though.',
			'You finished all heists on the Very Hard difficulty? What are you, some kind of monster? Maybe this mask will suit you after all.'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'OVERKILL Skull, The',
		imageBase: '',
		imageColour: '',
		description: [
			'Holy Shit - what is this new devilry? Humans can often recognize a human skull, even if it\'s only partially shown. The human brain even has a specific region for it. This doesn\'t look like a human skull however.',
			'You finished all heists on the OVERKILL difficulty? What are you, some kind of pit fiend? Maybe this mask will suit you after all.'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Death Wish Skull, The',
		imageBase: '',
		imageColour: '',
		description: [
			'OVERKILL salutes you, bringer of death, slayer of law enforcers and finisher of difficulties. Humans can often recognize a human skull, even if only partially shown. The human brain even has a specific region for it. This isn\'t a human skull however, this is something completely different.',
			'You finished all heists on the Death Wish difficulty? What are you, some kind of demon? Maybe this mask will suit you after all.'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Mayhem Skull, The',
		imageBase: '',
		imageColour: '',
		description: [
			'Your full potential is close. Embrace the change. Humans can often recognize a human skull, even if it\'s only partially shown. The human brain even has a specific region for it. This doesn\'t look like a human skull however, but you don\'t have to worry about it.',
			'You finished all heists on Mayhem difficulty? What are you, some kind of beast? Maybe this mask will suit you after all.'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Death Sentence Skull, The',
		imageBase: '',
		imageColour: '',
		description: [
			'DEMON! The Humans can often recognize a human skull, even if it\'s only partially shown. The human brain even has a specific region for it. This is definitely not a human skull anymore. This is what happens when you summon your demonic powers to get good.',
			'We at OVERKILL are surprised, baffled and genuinely impressed. You did it. You are among a certain few who stuck with it and actually finished the hardest difficulty we could think of. You fought, you suffered and you persevered. You have our eternal respect, you ruler of demons.'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Normal Skull, The',
		imageBase: '',
		imageColour: '',
		description: [
			'A strange thing, the human skull. It\'s both simple and beautiful. Humans can often recognize a human skull, even if it\'s only partially shown. The human brain even has a special region for it.',
			'You finished all heists on the Normal difficulty? What are you, some kind of gangster? Maybe this mask will suit you after all.'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'One Down Skull, The',
		imageBase: '',
		imageColour: '',
		description: [
			'So arrives the Harbinger! Humans can often recognize a human skull, even if it\'s only partially shown. The brain even has a special region for it. This is definitely not a human skull, it belongs to a demon of carnage.',
			'Look ye into the sky, as fire rains down from the heavens, followed by molten gold, to cover the land in a glittering metal blanket of awesome to illuminate your greatness as a heister. With every bar that is raised, you step up to the challenge, and have so done yet again. Construction of a throne is underway here at the OVERKILL office, so that we may bow to and worship your utterly divine skills at not getting beaten by anything we throw at you.'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Mega Rust',
		imageBase: '',
		imageColour: '',
		description: [
			'The Mega Rust mask is an evolved version of the original mask. It symbolises transcendence and catharsis.',
			'Thank you for your support.',
			'OVERKILL salutes you!'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked through Achievement'
	},
	{
		name: 'Classy Monocle',
		imageBase: '',
		imageColour: '',
		description: [
			'If only this magnificent seeing glass contained a monolens, but alas it will only help you look classically stylish while typing the correct key combo on a vault.'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free (Wave 5)'
	},
	{
		name: 'Fancy Top Hat',
		imageBase: '',
		imageColour: '',
		description: [
			'There is something for the distinguished heister in everyone. This vintage hat, made by famous hatters in New York, is sure to distract the gaze of any law enforcement officer.'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free (Wave 5)'
	},
	{
		name: 'Spirit Fox',
		imageBase: '',
		imageColour: '',
		description: [
			'In the woods of Okinawa, legends say there lives a spirit of a fox with a head of flame. Being seen by this fox is said to be a blessing, but being seen by a heister wearing this mask, is probably not!'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free (Wave 5)'
	},
	{
		name: 'The Classically Fancy Super Villain',
		imageBase: '',
		imageColour: '',
		description: [
			'Ultimate old-school evil. Whether combined with a tail coat or body armor, this set will tell all that you mean business, in the most criminal sense.'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free (Wave 5)'
	},
	{
		name: 'The Super Villain Moustache',
		imageBase: '',
		imageColour: '',
		description: [
			'Wax on, wax off. Twirl it to your heart\'s content as you disappear into the foggy night with your bounty and laugh.'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free (Wave 5)'
	},
	{
		name: 'Arcade Simian',
		imageBase: '',
		imageColour: '',
		description: [
			'When wearing this mask, you can always pretend that the grenades you\'re lobbing at the cops are barrels. They won\'t appreciate it, but it might break up the monotony of blowing things up!'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free (Wave 5)'
	},
	{
		name: 'Black Bird',
		imageBase: '',
		imageColour: '',
		description: [
			'Oh, how you can ponder, all rich and sweary, over a quaint and not-forgotten pile of cash. Quote, The Heister.'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free (Wave 5)'
	},
	{
		name: 'Chibi Kitteh',
		imageBase: '',
		imageColour: '',
		description: [
			'If a heister walks down the street wearing this mask, the world knows he\'s not afraid of anything, nine lives be damned!'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free (Wave 5)'
	},
	{
		name: 'Jamaican Nightmare',
		imageBase: '',
		imageColour: '',
		description: [
			'Some Voodoo priests claim to know the secret of eternal life. There\'s no guarantee that wearing this mask will grant it, but it\'ll likely scare the crap out of your enemies. And it might get you invited to a Jamaican barbeque.'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free (Wave 5)'
	},
	{
		name: 'Poly Goat',
		imageBase: '',
		imageColour: '',
		description: [
			'Satanic worshippers from a video game in the 1990s called and want their low-poly goat back. Are you gonna give it, or just stick it to \'em?'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free (Wave 5)'
	},
	{
		name: 'Mega Optimist Prime',
		imageBase: '',
		imageColour: '',
		description: [
			'Robot Overlords from the Future rejoice! For thy leader has come, and is the bearer of many positively charged particles.'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free (Wave 9)'
	},
	{
		name: 'Mega Pirate',
		imageBase: '',
		imageColour: '',
		description: [
			'Skulltooth the Terrible, ye most mystical of Pirate Kings, will shiver the timbers of any law enforcement officers present. Yarr!'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free (Wave 9)'
	},
	{
		name: 'Mega Vlad Armor',
		imageBase: '',
		imageColour: '',
		description: [
			'Rumor has it that this helmet was found in an abandoned Russian nuclear facility and that its wearer will gain super powers over time. But it\'s just a rumor.'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free (Wave 9)'
	},
	{
		name: 'Mega War',
		imageBase: '',
		imageColour: '',
		description: [
			'With this helmet, make the cops think they are being assaulted by the God of All 80s Metal Bands!'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free (Wave 9)'
	},
	{
		name: 'Mega Anubis',
		imageBase: '',
		imageColour: '',
		description: [
			'Bark like an Egyptian god and stand guard for eternity as you watch over and protect your piles of loot.'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free (Wave 9)'
	},
	{
		name: 'Mega Biker',
		imageBase: '',
		imageColour: '',
		description: [
			'Any child of the 1980s would kill for this mask. Show everyone who really rules the neon highways.'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free (Wave 9)'
	},
	{
		name: 'Mega Krampus',
		imageBase: '',
		imageColour: '',
		description: [
			'Devils and demons alike will tremble in awe as they behold the glory of any heister that chooses to don this mask.'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free (Wave 9)'
	},
	{
		name: 'Mega Robber Fly',
		imageBase: '',
		imageColour: '',
		description: [
			'Make both cops and civillians'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free (Wave 9)'
	},
	{
		name: 'Mega Smiley',
		imageBase: '',
		imageColour: '',
		description: [
			'See the torturously happy grin, the rotting golden teeth, and the deeply mesmerizing glare of this ultimate tribute to the Tragic Clown.'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free (Wave 9)'
	},
	{
		name: 'Mega Tiara',
		imageBase: '',
		imageColour: '',
		description: [
			'Prom queens ain\'t got nothin\' on the heister who wears this shiny piece of forehead decor. Rumor has it that the gemstones all came from a Perseid meteorite that fell to Earth in the 1800s.'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free (Wave 9)'
	},
	{
		name: 'Secret Chains Mask',
		imageBase: '',
		imageColour: '',
		description: [
			'Chains never took the search for the Secret too seriously, often calling it a bunch of \'weird mumbo jumbo\'. As a practical man, with real-world sensibilities, he has however remained steadfast and loyal, trusting in his relationship with Bain.'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	},
	{
		name: 'Secret Dallas Mask',
		imageBase: '',
		imageColour: '',
		description: [
			'Dallas sometimes felt Bain held out on him regarding certain details of the Secret. After the job in the First World Bank, Bain never did explain why the Mayan gold was so important. The Payday gang is a family, and trust isn\'t always bullet-proof, but Dallas has come to understand Bain\'s need for secrecy now, at the end. And his wisdom let them both get what they each wanted.'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	},
	{
		name: 'Secret Hoxton Mask',
		imageBase: '',
		imageColour: '',
		description: [
			'Hoxton left the Old Country to get his Payday in the new. When Bain first told him about the Secret, he fancied the idea of going after ancient items for their potential value, never really caring whether or not the legendary power Bain talked about was real or not.'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	},
	{
		name: 'Secret Wolf Mask',
		imageBase: '',
		imageColour: '',
		description: [
			'Wolf has always been a violent and unpredictable ally, so initially Bain was unsure about how much about the hunt for the Secret he should tell him. Eventually, his worth became clear, but when Bain eventually revealed his quest, Wolf went crazy over it. Not only would he reap the golden benefits, he also loves a good conspiracy.'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	},
	{
		name: 'Egyptian Wolf Mask',
		imageBase: '',
		imageColour: '',
		description: [
			'Viciousness, denial of death, and gold- all aspects of how the ancient Egyptians prospered and conquered, in defiance of all. So it is somehow fitting that Wolf should don a mask honoring that ancient culture.'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	},
	{
		name: 'Mesoamerican Dallas Mask',
		imageBase: '',
		imageColour: '',
		description: [
			'As a leader, he has had to sacrifice much throughout his career. Jobs, team members, personal goals- whatever it takes to get the job done. As Mesoamerican cultures sacrificed to the gods to appease them, so has Dallas sacrificed to the gods of heisting- the contractors. '
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	},
	{
		name: 'Watchers Hoxton Mask',
		imageBase: '',
		imageColour: '',
		description: [
			'Where did they come from, the ones who gifted mankind with the greatest gift, the ones whose civilization may lie beneath the surface of earth and water? Whoever they were, most traces of their existence has been wiped away by the passage of time. Hoxton, the traveler in search of a new future, may not know the truth, but he bears their mask nonetheless in honor of the origin of the Secret.'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	},
	{
		name: 'Summerian Chains Mask',
		imageBase: '',
		imageColour: '',
		description: [
			'The Sumerians began an age of wisdom, music, spiritual strength and had the imagination to dream up ideas of how the world began. On the surface, Chains may be a professional weapons-master, but inside, he is larger than life itself, and thus honors the culture which this mask represents. '
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	},
	{
		name: 'Android',
		imageBase: '',
		imageColour: '',
		description: [
			'For the truly detached and impassive, we provide the Android mask. Lightweight alloys, chromium finish and really cool LED lights means this mask is ready for the bank job or the dancefloor. Alas, it does not make you fluent in six million languages.'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	},
	{
		name: 'Balaclava',
		imageBase: '',
		imageColour: '',
		description: [
			'The weapons may change, the ideologies may shift and the accents may swap, but the balaclava has been a mainstay for the armed robber and terrorist for decades. Covering all but your steely, flint-like eyes and your cruel, twisted mouth, it keeps you warm when it\'s chilly too.'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	},
	{
		name: 'Demonshank',
		imageBase: '',
		imageColour: '',
		description: [
			'A warrior spirit doesn\'t appear naturally. It isn\'t something you are born with. Like steel, it is forged in fire. It is beaten in the furnace of battle - tempered, polished and sharpened. This mask celebrates the birth of this warrior spirit - the furnace-born steel given wings.'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	},
	{
		name: 'Heister Sentry',
		imageBase: '',
		imageColour: '',
		description: [
			'This mask was originally designed to be part of a complete head-to-toe heisting outfit. However, field testing revealed that the gaudy spandex suit offered no protection against bullets, knives or grenades. The mask, however, was found to be lightweight, durable and stylish. It\'s heistin\' time!'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	},
	{
		name: 'Kamul',
		imageBase: '',
		imageColour: '',
		description: [
			'There are things older and fouler than heisters in the dark places of the world. And one of them is Kamul. We do not know if he is the lingering spirit of a long dead man, or something that has crossed from the realm of shade. All we know is that few look into this face and live to tell of it.'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	},
	{
		name: 'Lurker',
		imageBase: '',
		imageColour: '',
		description: [
			'Teeth are scary. Big teeth are scarier. And giant sharp fang-like teeth suddenly gnashing out where they lurk in the darkness are downright shit-yourself-terrifying. With all of that in mind, can you think of a better mask to keep the civilians in line?'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	},
	{
		name: 'Being, The',
		imageBase: '',
		imageColour: '',
		description: [
			'This mask is based on the experiments of the peculiar Dr Rudolf Mastaba. A modern Prometheus, he sought to return life to the dead with the application of Industrial Revolution technology. Rumour suggests that he was partly successful - the undead rose, but had an insatiable appetite for wheat, barley and maize.'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	},
	{
		name: 'Venger',
		imageBase: '',
		imageColour: '',
		description: [
			'Based on the crazed leader of the League of Darkness. It\'s unclear if this was a breathing apparatus or a vocabulator. Some speculate that it was a delivery system, designed to provide Nemesis with the narcotics that gave him both his superhuman strength and psychotic rage.'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	},
	{
		name: 'Heat, The',
		imageBase: '',
		imageColour: '',
		description: [
			'Everyone loves a good pair of sunglasses.',
			'But only the cockiest, most wanted, cops be damned sons of bitches are crazy enough to rob a goddamn bank wearing \'em.',
			'That\'s you.'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	},
	{
		name: 'Plague Doctor, The',
		imageBase: '',
		imageColour: '',
		description: [
			'A plague doctor mask for the Mastermind.',
			'In the word of the Bhagavad-Gita: \'Now I am become death, destroyer of worlds.\'',
			'Or at least, that was the art direction.'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	},
	{
		name: 'Butcher, The',
		imageBase: '',
		imageColour: '',
		description: [
			'A truly legendary Enforcer mask.',
			'The story goes it was made for one of the premier hitters in the Pink Panther crew years back but he didn\'t have the guts to wear it. It\'d draw too much attention.',
			'Not your concern.'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	},
	{
		name: 'Specialist, The',
		imageBase: '',
		imageColour: '',
		description: [
			'Only a true Technician could come up with a mask like this.',
			'Featuring a state of the art air filtration system, the mask can double as a chemist\'s hood in those unlikely \'must cook meth\' scenarios.'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	},
	{
		name: 'Spectre, The',
		imageBase: '',
		imageColour: '',
		description: [
			'This Ghost mask look like it\'s from the future and it might as well be.',
			'Full head protection, made out of carbon fiber and genetically engineered spider-silk. People might even mistake you for a high-end Moto GP rider.',
			'Last mistake they\'ll make.'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Free'
	},
	{
		name: 'Mega Arch Nemesis',
		imageBase: '',
		imageColour: '',
		description: [
			'One move, then another. Your opponent makes a move and you respond. he stands there, atop the mountain of gold, daring you to come forward and take on his challenge. By wearing this mask, you declare your defiance, and the rivalry unending.'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked through Achievement Milestone'
	},
	{
		name: 'Mega Conquest',
		imageBase: '',
		imageColour: '',
		description: [
			'If only the Kings of Old had such an artifact, they would have been invincible. What enemy could withstand bowing before you, as they gaze upon your magnificence? Sun Tzu can go suck a lemon, because with a mask like this, who needs to employ art in war?'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked through Achievement Milestone'
	},
	{
		name: 'Mega Famine',
		imageBase: '',
		imageColour: '',
		description: [
			'That loaf of bread you wanted. Imagine that hunger one thousandfold. More than just a lack of food, your very soul is deprived of sustenance until it\'s as empty on nourishment as your belly. If starvation could continue beyond death, this is the visage it would take. But such a plight can be a mighty motivator for heisting.'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked through Achievement Milestone'
	},
	{
		name: 'Mega Greed',
		imageBase: '',
		imageColour: '',
		description: [
			'It burns into your heart and tears the flesh from your skull- orange flames to contrast the color of an unquenchable need for more. How many trips back into the vault will you make until you are satisfied? How many weapons will make you happy? All of them! Maybe.'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked through Achievement Milestone'
	},
	{
		name: 'Mega Rad Mutant',
		imageBase: '',
		imageColour: '',
		description: [
			'As if high on radioactive spray paint, the power level has been turned up a notch and is now close to bursting. When you go on a heist, everyone around you will duck for cover as you roll by. Every geiger counter in town is about to go haywire.'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked through Achievement Milestone'
	},
	{
		name: 'Mega Tormentor',
		imageBase: '',
		imageColour: '',
		description: [
			'Torturer or tortured? Perhaps both, as the seething glow from your eyes sends chills of terror into the souls of the Law. hear the lamentations of the Uniformed Blue as you evade them skillfully, with evil glee flowing through your veins as you foil every one of their attempts to apprehend you.'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked through Achievement Milestone'
	},
	{
		name: 'The Great Immortal',
		imageBase: '',
		imageColour: '',
		description: [
			'For a thousand years, the traveller slept, biding his time until the stars did align and a mortal of sufficient ability would unlock him from his unholy prison. Rejoice! For that day has come. Wield this power... wisely.'
		],
		unlock: 'THIS IS AN INFAMOUS ITEM!',
		cost: 'Unlocked through Achievement Milestone'
	}
]

export default masks