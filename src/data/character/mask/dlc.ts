import { Category } from '../masks'
import aMerryPaydayChristmasSoundtrack from './dlc/aMerryPaydayChristmasSoundtrack'
import armoredTransport from './dlc/armoredTransport'
import bikerCharacterPack from './dlc/bikerCharacterPack'
import borderCrossingHeist from './dlc/borderCrossingHeist'
import bulucsMansionHeist from './dlc/bulucsMansion'
import cloverCharacterPack from './dlc/cloverCharacterPack'
import draganCharacterPack from './dlc/draganCharacterPack'
import dragonPack from './dlc/dragonPack'
import gageAssaultPack from './dlc/gageAssaultPack'
import gageChivalryPack from './dlc/gageChivalryPack'
import gageHistoricalPack from './dlc/gageHistoricalPack'
import gageNinjaPack from './dlc/gageNinjaPack'
import gageRussianWeaponPack from './dlc/gageRussianWeaponPack'
import gageShotgunPack from './dlc/gageShotgunPack'
import gageSniperPack from './dlc/gageSniperPack'
import gageSpecOpsPack from './dlc/gageSpecOpsPack'
import gageWeaponPack1 from './dlc/gageWeaponPack1'
import gageWeaponPack2 from './dlc/gageWeaponPack2'
import goldenDaggerTailorPack from './dlc/goldenDaggerTailorPack'
import guardiansTailorPack from './dlc/guardiansTailorPack'
import h3H3CharacterPack from './dlc/h3H3CharacterPack'
import hotlineMiami from './dlc/hotlineMiami'
import johnWickHeistsPack from './dlc/johnWickHeistsPack'
import johnWickWeaponPack from './dlc/johnWickWeaponPack'
import lootbag from './dlc/lootbag'
import megaCityTailorPack from './dlc/megaCityTailorPack'
import mountainMasterHeist from './dlc/mountainMasterHeist'
import payday2BundleRewards from './dlc/payday2BundleRewards'
import poetryJam from './dlc/poetryJam'
import ps4PreorderMask from './dlc/ps4PreorderMask'
import sanMartinBankHeist from './dlc/sanMartinBankHeist'
import scarfaceCharacterPack from './dlc/scarfaceCharacterPack'
import scarfaceHeist from './dlc/scarfaceHeist'
import sokolCharacterPack from './dlc/sokolCharacterPack'
import southboundTailorPack from './dlc/southboundTailorPack'
import sydneyCharacterPack from './dlc/sydneyCharacterPack'
import theAlessoHeist from './dlc/theAlessoHeist'
import theBigBankHeist from './dlc/theBigBankHeist'
import theBikerHeist from './dlc/theBikerHeist'
import theBombHeists from './dlc/theBombHeists'
import theButchersAKCARModPack from './dlc/theButchersAKCARModPack'
import theButchersBBQPack from './dlc/theButchersBBQPack'
import theButchersWesternPack from './dlc/theButchersWesternPack'
import theCompletelyOverkillPack from './dlc/theCompletelyOverkillPack'
import theDiamondHeist from './dlc/theDiamondHeist'
import theGoatSimulatorHeist from './dlc/theGoatSimulatorHeist'
import theGoldenGrinCasinoHeist from './dlc/theGoldenGrinCasinoHeist'
import theOverkillPack from './dlc/theOverkillPack'
import thePointBreakHeists from './dlc/thePointBreakHeists'
import thespianMaskPack from './dlc/thespianMaskPack'
import twistedMetal from './dlc/twistedMetal'
import winterGhostsTailorPack from './dlc/winterGhostsTailorPack'
import wolfPack from './dlc/wolfPack'
import xboxOnePreorderMask from './dlc/xboxOnePreorderMask'
import yakuzaCharacterPack from './dlc/yakuzaCharacterPack'
import zagToys from './dlc/zagToys'

export type DlcCollectionList =
	| 'The Butchers AK/CAR Mod Pack'
	| 'The Alesso Heist'
	| 'Armored Transport'
	| 'The Butchers BBQ Pack'
	| 'The Point Break Heists'
	| 'San Martín Bank Heist'
	| 'The Big Bank Heist'
	| 'The Biker Heist'
	| 'Mega City Tailor Pack'
	| 'Clover Character Pack'
	| 'Dragan Character Pack'
	| 'Sokol Character Pack'
	| 'Scarface Character Pack'
	| 'Buluc\'s Mansion heist'
	| 'Border Crossing Heist'
	| 'Yakuza Character Pack'
	| 'H3H3 Character Pack'
	| 'Scarface Heist Pack'
	| 'Gage Weapon Pack #1'
	| 'Gage Assault Pack'
	| 'Gage Historical Pack'
	| 'Gage Weapon Pack #2'
	| 'Gage Shotgun Pack'
	| 'Gage Sniper Pack'
	| 'Golden Dagger Tailor Pack'
	| 'Payday 2 Bundle Rewards'
	| 'Gage Russian Weapon Pack'
	| 'Hotline Miami'
	| 'The Diamond Heist'
	| 'The Golden Grin Casino Heist'
	| 'Sydney Character Pack'
	| 'The Overkill Pack'
	| 'Wolf Pack'
	| 'The Goat Simulator Heist'
	| 'John Wick Weapon Pack'
	| 'Poetry Jam'
	| 'Guardians Tailor Pack'
	| 'Winter Ghosts Tailor Pack'
	| 'John Wick Heists Pack'
	| 'Gage Chivalry Pack'
	| 'Gage Spec Ops Pack'
	| 'The Bomb Heists'
	| 'Dragon Pack'
	| 'Gage Ninja Pack'
	| 'Southbound Tailor Pack'
	| 'The Butchers Western Pack'
	| 'Biker Character Pack'
	| 'A Mery Payday Christmas Soundtrack'
	| 'Mountain Master Heist'
	| 'Lootbag'
	| 'The Completely Overkill Pack'
	| 'Zag Toys'
	| 'Twisted Metal'
	| 'Thespian Mask Pack'
	| 'PS4 Preorder Mask'
	| 'Xbox One Preorder Mask'

const dlc: Category<DlcCollectionList> = {
	'The Butchers AK/CAR Mod Pack': {
		id: 0,
		masks: theButchersAKCARModPack
	},
	'The Alesso Heist': {
		id: 0,
		masks: theAlessoHeist
	},
	'Armored Transport': {
		id: 0,
		masks: armoredTransport
	},
	'The Butchers BBQ Pack': {
		id: 0,
		masks: theButchersBBQPack
	},
	'The Point Break Heists': {
		id: 0,
		masks: thePointBreakHeists
	},
	'San Martín Bank Heist': {
		id: 0,
		masks: sanMartinBankHeist
	},
	'The Big Bank Heist': {
		id: 0,
		masks: theBigBankHeist
	},
	'The Biker Heist': {
		id: 0,
		masks: theBikerHeist
	},
	'Mega City Tailor Pack': {
		id: 0,
		masks: megaCityTailorPack
	},
	'Clover Character Pack': {
		id: 0,
		masks: cloverCharacterPack
	},
	'Dragan Character Pack': {
		id: 0,
		masks: draganCharacterPack
	},
	'Sokol Character Pack': {
		id: 0,
		masks: sokolCharacterPack
	},
	'Scarface Character Pack': {
		id: 0,
		masks: scarfaceCharacterPack
	},
	'Buluc\'s Mansion heist': {
		id: 0,
		masks: bulucsMansionHeist
	},
	'Border Crossing Heist': {
		id: 0,
		masks: borderCrossingHeist
	},
	'Yakuza Character Pack': {
		id: 0,
		masks: yakuzaCharacterPack
	},
	'H3H3 Character Pack': {
		id: 0,
		masks: h3H3CharacterPack
	},
	'Scarface Heist Pack': {
		id: 0,
		masks: scarfaceHeist
	},
	'Gage Weapon Pack #1': {
		id: 0,
		masks: gageWeaponPack1
	},
	'Gage Assault Pack': {
		id: 0,
		masks: gageAssaultPack
	},
	'Gage Historical Pack': {
		id: 0,
		masks: gageHistoricalPack
	},
	'Gage Weapon Pack #2': {
		id: 0,
		masks: gageWeaponPack2
	},
	'Gage Shotgun Pack': {
		id: 0,
		masks: gageShotgunPack
	},
	'Gage Sniper Pack': {
		id: 0,
		masks: gageSniperPack
	},
	'Golden Dagger Tailor Pack': {
		id: 0,
		masks: goldenDaggerTailorPack
	},
	'Payday 2 Bundle Rewards': {
		id: 0,
		masks: payday2BundleRewards
	},
	'Gage Russian Weapon Pack': {
		id: 0,
		masks: gageRussianWeaponPack
	},
	'Hotline Miami': {
		id: 0,
		masks: hotlineMiami
	},
	'The Diamond Heist': {
		id: 0,
		masks: theDiamondHeist
	},
	'The Golden Grin Casino Heist': {
		id: 0,
		masks: theGoldenGrinCasinoHeist
	},
	'Sydney Character Pack': {
		id: 0,
		masks: sydneyCharacterPack
	},
	'The Overkill Pack': {
		id: 0,
		masks: theOverkillPack
	},
	'Wolf Pack': {
		id: 0,
		masks: wolfPack
	},
	'The Goat Simulator Heist': {
		id: 0,
		masks: theGoatSimulatorHeist
	},
	'John Wick Weapon Pack': {
		id: 0,
		masks: johnWickWeaponPack
	},
	'Poetry Jam': {
		id: 0,
		masks: poetryJam
	},
	'Guardians Tailor Pack': {
		id: 0,
		masks: guardiansTailorPack
	},
	'Winter Ghosts Tailor Pack': {
		id: 0,
		masks: winterGhostsTailorPack
	},
	'John Wick Heists Pack': {
		id: 0,
		masks: johnWickHeistsPack
	},
	'Gage Chivalry Pack': {
		id: 0,
		masks: gageChivalryPack
	},
	'Gage Spec Ops Pack': {
		id: 0,
		masks: gageSpecOpsPack
	},
	'The Bomb Heists': {
		id: 0,
		masks: theBombHeists
	},
	'Dragon Pack': {
		id: 0,
		masks: dragonPack
	},
	'Gage Ninja Pack': {
		id: 0,
		masks: gageNinjaPack
	},
	'Southbound Tailor Pack': {
		id: 0,
		masks: southboundTailorPack
	},
	'The Butchers Western Pack': {
		id: 0,
		masks: theButchersWesternPack
	},
	'Biker Character Pack': {
		id: 0,
		masks: bikerCharacterPack
	},
	'A Mery Payday Christmas Soundtrack': {
		id: 0,
		masks: aMerryPaydayChristmasSoundtrack
	},
	'Mountain Master Heist': {
		id: 0,
		masks: mountainMasterHeist
	},
	'Lootbag': {
		id: 0,
		masks: lootbag
	},
	'The Completely Overkill Pack': {
		id: 0,
		masks: theCompletelyOverkillPack
	},
	'Zag Toys': {
		id: 0,
		masks: zagToys
	},
	'Twisted Metal': {
		id: 0,
		masks: twistedMetal
	},
	'Thespian Mask Pack': {
		id: 0,
		masks: thespianMaskPack
	},
	'PS4 Preorder Mask': {
		id: 0,
		masks: ps4PreorderMask
	},
	'Xbox One Preorder Mask': {
		id: 0,
		masks: xboxOnePreorderMask
	}
}

export default dlc