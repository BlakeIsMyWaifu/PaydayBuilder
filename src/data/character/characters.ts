interface characterData {
	name: string;
	nationality: string;
	age: number | string;
	description: string[];
}

const characters: characterData[] = [
	{
		name: 'Dallas',
		nationality: 'American',
		age: 44,
		description: [
			'Experienced, cunning, methodical. At the age of 30 he tried to play two of Chicago\'s mob families against each other. It went south and several mob bosses ordered Dallas\' head on a plate, but somehow he managed to go underground and survive. After things calmed down he worked his way back up the criminal ladder.',
			'Now he\'s the face that everyone fears.'
		]
	},
	{
		name: 'wolf',
		nationality: 'Swedish',
		age: 34,
		description: [
			'Wolf was a law abiding citizen for most of his life. During the worldwide economic slump of the late 2000\'s, Wolf\'s company temporarily had only one client that got cold feet and wanted out. His company went bankrupt.',
			'He now pursues a criminal career with the same determination that drove him when he used to run his company.'
		]
	},
	{
		name: 'Chains',
		nationality: 'American',
		age: 37,
		description: [
			'As a teenager, Chains always got into trouble. After years of jumping between foster homes and juvenile institutions, he ended up in the military. There he became an excellent soldier but he always hated being told what to do.',
			'Chains left the military and became a soldier of fortune, offering his military expertise to the highest bidder.'
		]
	},
	{
		name: 'Houston',
		nationality: 'Houston',
		age: 31,
		description: [
			'Houston could never hold a job even if his life would depend on it. His life style turned him to a life of cons and burglary. His debts grew, as did his collection of enemies from years of swindlery. He needed to gather larger and larger sums of money to keep the loan sharks at bay. He committed his first major felony at the age of 24 and the stakes have only increased since.'
		]
	},
	{
		name: 'Wick',
		nationality: 'American', 
		age: '40s',
		description: [
			'John Wick is a quiet and calm former hitman. He has a seemingly ageless physique, probably from his background as a boxer. John and Chains know each other from before as they used to be in the military together.',
			'After having gone dark, John recently resurfaced and helped Chains out of a delicate situation. In return, John told Chains he was in need of a crew. How could Chains say no to an old friend?'
		]
	},
	{
		name: 'Hoxton',
		nationality: 'English',
		age: 32,
		description: [
			'Hoxton got his name from being caught with his old gang in the East End of London. After doing time in HMYOI he worked with several crime syndicates in his 20s until he finally joined the Payday Gang. After a successful stint of major heists up until 2011, Hoxton was captured by the FBI and sent to prison.',
			'In 2014, the PAYDAY Gang helped him escape. Ever since he got out, he has been convinced someone set him up.'
		]
	},
	{
		name: 'Clover',
		nationality: 'Irish',
		age: 27,
		description: [
			'Clover grew up in a rough house in a rough part of town. Her ancestors were fighters in every generation, and she is fiercely dedicated to her Irish heritage. She wears the clovers for luck, as well as a way to say \'I\'m Irish, and I\'m proud\'.'
		]
	},
	{
		name:  'Dragan',
		nationality: 'Croatian',
		age: 45,
		description: [
			'Dragan may be a former cop, but he\'s a former Croatian cop, which means his methods make the MPDC look like timid babysitters. He was brought to America and accepted into the Payday Gang as a favor to The Butcher. While there were some early suspicions regarding his true loyalties, his ability and commitment are indisputable.'
		]
	},
	{
		name: 'Jacket',
		nationality: 'American',
		age: 'Unknown',
		description: [
			'Allegedly, he once wiped out the entire Russian Mafia in Miami all on his own. His background in the military and his unflinching attitude towards over-the-top violence has made him an excellent hitman - or \'messenger\' as some like to call it. For unknown reasons he is completely mute and chooses to communicate only with the help of a tape recorder - playing back bits and pieces of language learning tapes, PAs and documentary narrations instead of speaking.'
		]
	},
	{
		name: 'Bonnie',
		nationality: 'Scottish',
		age: 43,
		description: [
			'Bonnie is from Glasgow. That should be enough to strike fear into a man\'s heart, but Bonnie is also from 1980\'s Glasgow. These years, the Thatcher era, made already tough towns even harder, and bred a generation of determined, unforgiving Scots. Bonnie is cut from this cloth.'
		]
	},
	{
		name: 'Sokol',
		nationality: 'Sokol',
		age: 25,
		description: [
			'Though young, Sokol has everything to become a legendary heister. A gifted athlete, Sokol also possesses keen intelligence and understands his role in a team. He is fearless and physical, and uses this to get amongst the enemy, whether that be a team of hockey players or a team of SWAT.'
		]
	},
	{
		name: 'Jiro',
		nationality: 'Japanese',
		age: 52,
		description: [
			'In his youth, Jiro was never accepted, until he found his way into the yakuza. Yet even here, despite his loyalty and ability, he was never fully embraced and was ultimately betrayed. Following a lengthy prison term, Jiro has come to America to find his long-lost son, Kento.'
		]
	},
	{
		name: 'Bodhi',
		nationality: 'Venezuelan',
		age: 'Unknown',
		description: [
			'Bodhi is known as one of the greatest legends in the world of crime, but few know the man behind the mask. As the founding father of the Ex-Presidents gang, Bodhi\'s renowned in the criminal underworld for his extreme athleticism and daring heists. His recent feats of strength in Mumbai and Austria got Bain’s attention, granting him an invitation to the Payday Gang.'
		]
	},
	{
		name: 'Jimmy',
		nationality: 'Unknown',
		age: 'Unknown',
		description: [
			'I had my doubts at first, I\'ll admit, but Jimmy has turned out to have all the skills to excel as a heister of Crime.Net caliber. He has no limits, never turning down a contract and lives every day like it\'s his last. He is loyal and has proven to be an excellent addition I never thought we needed.'
		]
	},
	{
		name: 'Sydney',
		nationality: 'Australian',
		age: 24,
		description: [
			'Kelli \'Sydney\' King made a rather spectacular entrance to our lives when she interrupted an on-going heist being executed by the Payday Gang. Using a mixed array of guns and explosives she just barely managed to steal away a bag full of cash. I was impressed by this crazy and fearless ad, and so were the others, even if they didn\'t want to admit it. Regardless, I had no doubts in my mind when I asked her to join us -with great risks comes great rewards.'
		]
	},
	{
		name: 'Rust',
		nationality: 'American',
		age: 61,
		description: [
			'To disrupt the Overkill MC operations, I needed a man on the inside, and that man was Tom \'Rust\' Bishop. With the help of the Elephant, we offered Rust a chance to make a real payday, and Rust was quick to oblige. He killed off his former motorcycle brothers to testament his new loyalty to me and that sealed the deal. With Rust on our side, we can now proceed to my next plan.'
		]
	},
	{
		name: 'Scarface',
		nationality: 'Cuban',
		age: 'Unknown',
		description: [
			'They don\'t make \'em like Tony anymore. A fast talker who knows what he wants and how to get it. He\'s the real deal when the shit hits the fan. a true-born heister. He doesn\'t back down for anyone and he dishes it out just as hard as he can take it. This guy\'s got balls.'
		]
	},
	{
		name: 'Sangres',
		nationality: 'Mexican',
		age: 33,
		description: [
			'Sangres is a dangerous man. He spent many years working as an enforcer and assassin for a drug cartel in Monterrey, Mexico. Then one day he decided to defect and crossed the border to the US, looking to make the big bucks. Gage introduced him to the Payday Gang. He\'s as skilled as he\'s ruthless and with those revolvers he can really light things up. And yeah... check out that razor-sharp machete.'
		]
	},
	{
		name: 'Joy',
		nationality: 'Japanese',
		age: 22,
		description: [
			'Joy\'s been a cyber criminal since her younger teens. She\'s a skilled hacker, invaluable when it comes to tech and computers. But she also knows how to handle a gun and she\'s as tough as they come in spite of her young age.'
		]
	},
	{
		name: 'Duke',
		nationality: 'North American',
		age: '50s',
		description: [
			'Once going by the alias August Lindenhurst, he abandoned that moniker for simply \'Dukes\' when joining the Payday Gang. For the last several years, Duke has been researching patterns and rumors in the larger criminal underworld. He has an innate need, more like an obsession, to pull off one truly epic heist that will put him in the history books alongside famous robbers of the past and he thinks Bain\'s gang can help him accomplish that goal.'
		]
	},
	{
		name: 'Ethan',
		nationality: 'American',
		age: 32,
		description: [
			'A little bit of David to the internet\'s proverbial Goliath, Ethan is proof that you can never really know what goes on inside Bain\'s head. As a skilled social media broadcaster, Ethan and his spouse Hila drew the legal ire of some individuals with their documentary work and were forced to spend a minor fortune defending themselves. leaving them financially vulnerable. His skills in public relations and engagement attracted the interest of Bain, who convinced him and his wife to join Payday with promises of restitution, fortune, and glory.'
		]
	},
	{
		name: 'Hila',
		nationality: 'Israeli',
		age: 29,
		description: [
			'Rumor has it that Hila underwent extreme training in the Israeli military, and while she keeps denying it publicly, something definitely caught Bain\'s attention when he asked her and her spouse Ethan to join the gang. Officially, they were brought in to give the gang a much needed public PR boost in light of certain developments regarding the FBI, but as to the real reason... only Bain knows for sure.'
		]
	}
]

export default characters