import { type Category } from '../masks'
import aMerryPaydayChristmasSoundtrack, { type AMerryPaydayChristmasSoundtrackList } from './dlc/aMerryPaydayChristmasSoundtrack'
import armoredTransport, { type ArmoredTransportList } from './dlc/armoredTransport'
import bikerCharacterPack, { type BikerCharacterPackList } from './dlc/bikerCharacterPack'
import borderCrossingHeist, { type BorderCrossingHeistList } from './dlc/borderCrossingHeist'
import bulucsMansionHeist, { type BulucsMansionHeistList } from './dlc/bulucsMansionHeist'
import cloverCharacterPack, { type CloverCharacterPackList } from './dlc/cloverCharacterPack'
import draganCharacterPack, { type DraganCharacterPackList } from './dlc/draganCharacterPack'
import dragonPack, { type DragonPackList } from './dlc/dragonPack'
import gageAssaultPack, { type GageAssaultPackList } from './dlc/gageAssaultPack'
import gageChivalryPack, { type GageChivalryPackList } from './dlc/gageChivalryPack'
import gageHistoricalPack, { type GageHistoricalPackList } from './dlc/gageHistoricalPack'
import gageNinjaPack, { type GageNinjaPackList } from './dlc/gageNinjaPack'
import gageRussianWeaponPack, { type GageRussianWeaponPackList } from './dlc/gageRussianWeaponPack'
import gageShotgunPack, { type GageShotgunPackList } from './dlc/gageShotgunPack'
import gageSniperPack, { type GageSniperPackList } from './dlc/gageSniperPack'
import gageSpecOpsPack, { type GageSpecOpsPackList } from './dlc/gageSpecOpsPack'
import gageWeaponPack1, { type GageWeaponPack1List } from './dlc/gageWeaponPack1'
import gageWeaponPack2, { type GageWeaponPack2List } from './dlc/gageWeaponPack2'
import goldenDaggerTailorPack, { type GoldenDaggerTailorPackList } from './dlc/goldenDaggerTailorPack'
import guardiansTailorPack, { type GuardiansTailorPackList } from './dlc/guardiansTailorPack'
import h3H3CharacterPack, { type H3H3CharacterPackList } from './dlc/h3H3CharacterPack'
import highOctaneTailorPack, { type HighOctaneTailorPackList } from './dlc/highOctaneTailorPack'
import hotlineMiami, { type HotLineMiamiList } from './dlc/hotlineMiami'
import johnWickHeistsPack, { type JohnWickHeistsPackList } from './dlc/johnWickHeistsPack'
import johnWickWeaponPack, { type JohnWickWeaponPackList } from './dlc/johnWickWeaponPack'
import lootbag, { type LootbagList } from './dlc/lootbag'
import megaCityTailorPack, { type MegaCityTailorPackList } from './dlc/megaCityTailorPack'
import mountainMasterHeist, { type MountainMasterHeistList } from './dlc/mountainMasterHeist'
import payday2BundleRewards, { type Payday2BundleRewardsList } from './dlc/payday2BundleRewards'
import poetryJam, { type PoetryJamList } from './dlc/poetryJam'
import ps4PreorderMask, { type Ps4PreorderMaskList } from './dlc/ps4PreorderMask'
import sanMartinBankHeist, { type SanMartinBankHeistList } from './dlc/sanMartinBankHeist'
import scarfaceCharacterPack, { type ScarfaceCharacterPackList } from './dlc/scarfaceCharacterPack'
import scarfaceHeist, { type ScarfaceHeistList } from './dlc/scarfaceHeist'
import sokolCharacterPack, { type SokolCharacterPackList } from './dlc/sokolCharacterPack'
import southboundTailorPack, { type SouthboundTailorPackList } from './dlc/southboundTailorPack'
import streetSmartTailorPack, { type StreetSmartTailorPackList } from './dlc/streetSmartTailorPack'
import sydneyCharacterPack, { type SydneyCharacterPackList } from './dlc/sydneyCharacterPack'
import theAlessoHeist, { type TheAlessoHeistList } from './dlc/theAlessoHeist'
import theBigBankHeist, { type TheBigBankHeistList } from './dlc/theBigBankHeist'
import theBikerHeist, { type TheBikerHeistList } from './dlc/theBikerHeist'
import theBombHeists, { type TheBombHeistsList } from './dlc/theBombHeists'
import theButchersAKCARModPack, { type TheButchersAKCARModPackList } from './dlc/theButchersAKCARModPack'
import theButchersBBQPack, { type TheButchersBBQPackList } from './dlc/theButchersBBQPack'
import theButchersWesternPack, { type TheButchersWesternPackList } from './dlc/theButchersWesternPack'
import theCompletelyOverkillPack, { type TheCompletelyOverkillPackList } from './dlc/theCompletelyOverkillPack'
import theDiamondHeist, { type TheDiamondHeistList } from './dlc/theDiamondHeist'
import theGoatSimulatorHeist, { type TheGoatSimulatorHeistList } from './dlc/theGoatSimulatorHeist'
import theGoldenGrinCasinoHeist, { type TheGoldenGrinCasinoHeistList } from './dlc/theGoldenGrinCasinoHeist'
import theOverkillPack, { type TheOverkillPackList } from './dlc/theOverkillPack'
import thePointBreakHeists, { type ThePointBreakHeistsList } from './dlc/thePointBreakHeists'
import thespianMaskPack, { type ThespianMaskPackList } from './dlc/thespianMaskPack'
import twistedMetal, { type TwistedMetalList } from './dlc/twistedMetal'
import winterGhostsTailorPack, { type WinterGhostsTailorPackList } from './dlc/winterGhostsTailorPack'
import wolfPack, { type WolfPackList } from './dlc/wolfPack'
import xboxOnePreorderMask, { type XboxOnePreorderMaskList } from './dlc/xboxOnePreorderMask'
import yakuzaCharacterPack, { type YakuzaCharacterPackList } from './dlc/yakuzaCharacterPack'
import zagToys, { type ZagToysList } from './dlc/zagToys'

export type DlcCollectionList =
	| 'The Butcher\'s AK/CAR Mod Pack'
	| 'The Alesso Heist'
	| 'Armored Transport'
	| 'The Butcher\'s BBQ Pack'
	| 'The Point Break Heists'
	| 'San Martín Bank Heist'
	| 'The Big Bank Heist'
	| 'The Biker Heist'
	| 'Mega City Tailor Pack'
	| 'Clover Character Pack'
	| 'Dragan Character Pack'
	| 'Sokol Character Pack'
	| 'Scarface Character Pack'
	| 'Buluc\'s Mansion Heist'
	| 'Border Crossing Heist'
	| 'Yakuza Character Pack'
	| 'H3H3 Character Pack'
	| 'Scarface Heist'
	| 'Gage Weapon Pack #01'
	| 'Gage Assault Pack'
	| 'Gage Historical Pack'
	| 'Gage Weapon Pack #02'
	| 'Gage Shotgun Pack'
	| 'Gage Sniper Pack'
	| 'Golden Dagger Tailor Pack'
	| 'PAYDAY 2 Bundle Rewards'
	| 'Gage Russian Weapon Pack'
	| 'Hotline Miami'
	| 'The Diamond Heist'
	| 'The Golden Grin Casino Heist'
	| 'Sydney Character Pack'
	| 'The OVERKILL Pack'
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
	| 'High Octane Tailor Pack'
	| 'Street Smart Tailor Pack'
	| 'The Butcher\'s Western Pack'
	| 'Biker Character Pack'
	| 'A Merry Payday Christmas Soundtrack'
	| 'Mountain Master Heist'
	| 'Lootbag'
	| 'The COMPLETELY OVERKILL Pack'
	| 'Zag Toys'
	| 'Twisted Metal'
	| 'Thespian Mask Pack'
	| 'PS4 Pre-Order Mask'
	| 'Xbox One Pre-Order Mask'

export type DlcMaskList =
	| TheButchersAKCARModPackList
	| TheAlessoHeistList
	| ArmoredTransportList
	| TheButchersBBQPackList
	| ThePointBreakHeistsList
	| SanMartinBankHeistList
	| TheBigBankHeistList
	| TheBikerHeistList
	| MegaCityTailorPackList
	| CloverCharacterPackList
	| DraganCharacterPackList
	| SokolCharacterPackList
	| ScarfaceCharacterPackList
	| BulucsMansionHeistList
	| BorderCrossingHeistList
	| YakuzaCharacterPackList
	| H3H3CharacterPackList
	| ScarfaceHeistList
	| GageWeaponPack1List
	| GageAssaultPackList
	| GageHistoricalPackList
	| GageWeaponPack2List
	| GageShotgunPackList
	| GageSniperPackList
	| GoldenDaggerTailorPackList
	| Payday2BundleRewardsList
	| GageRussianWeaponPackList
	| HotLineMiamiList
	| TheDiamondHeistList
	| TheGoldenGrinCasinoHeistList
	| SydneyCharacterPackList
	| TheOverkillPackList
	| WolfPackList
	| TheGoatSimulatorHeistList
	| JohnWickWeaponPackList
	| PoetryJamList
	| GuardiansTailorPackList
	| WinterGhostsTailorPackList
	| JohnWickHeistsPackList
	| GageChivalryPackList
	| GageSpecOpsPackList
	| TheBombHeistsList
	| DragonPackList
	| GageNinjaPackList
	| SouthboundTailorPackList
	| HighOctaneTailorPackList
	| StreetSmartTailorPackList
	| TheButchersWesternPackList
	| BikerCharacterPackList
	| AMerryPaydayChristmasSoundtrackList
	| MountainMasterHeistList
	| LootbagList
	| TheCompletelyOverkillPackList
	| ZagToysList
	| TwistedMetalList
	| ThespianMaskPackList
	| Ps4PreorderMaskList
	| XboxOnePreorderMaskList

const dlc: Category<DlcCollectionList> = {
	'The Butcher\'s AK/CAR Mod Pack': {
		id: 0,
		masks: theButchersAKCARModPack
	},
	'The Alesso Heist': {
		id: 1,
		masks: theAlessoHeist
	},
	'Armored Transport': {
		id: 2,
		masks: armoredTransport
	},
	'The Butcher\'s BBQ Pack': {
		id: 3,
		masks: theButchersBBQPack
	},
	'The Point Break Heists': {
		id: 4,
		masks: thePointBreakHeists
	},
	'San Martín Bank Heist': {
		id: 5,
		masks: sanMartinBankHeist
	},
	'The Big Bank Heist': {
		id: 6,
		masks: theBigBankHeist
	},
	'The Biker Heist': {
		id: 7,
		masks: theBikerHeist
	},
	'Mega City Tailor Pack': {
		id: 8,
		masks: megaCityTailorPack
	},
	'Clover Character Pack': {
		id: 9,
		masks: cloverCharacterPack
	},
	'Dragan Character Pack': {
		id: 10,
		masks: draganCharacterPack
	},
	'Sokol Character Pack': {
		id: 11,
		masks: sokolCharacterPack
	},
	'Scarface Character Pack': {
		id: 12,
		masks: scarfaceCharacterPack
	},
	'Buluc\'s Mansion Heist': {
		id: 13,
		masks: bulucsMansionHeist
	},
	'Border Crossing Heist': {
		id: 14,
		masks: borderCrossingHeist
	},
	'Yakuza Character Pack': {
		id: 15,
		masks: yakuzaCharacterPack
	},
	'H3H3 Character Pack': {
		id: 16,
		masks: h3H3CharacterPack
	},
	'Scarface Heist': {
		id: 17,
		masks: scarfaceHeist
	},
	'Gage Weapon Pack #01': {
		id: 18,
		masks: gageWeaponPack1
	},
	'Gage Assault Pack': {
		id: 19,
		masks: gageAssaultPack
	},
	'Gage Historical Pack': {
		id: 20,
		masks: gageHistoricalPack
	},
	'Gage Weapon Pack #02': {
		id: 21,
		masks: gageWeaponPack2
	},
	'Gage Shotgun Pack': {
		id: 22,
		masks: gageShotgunPack
	},
	'Gage Sniper Pack': {
		id: 23,
		masks: gageSniperPack
	},
	'Golden Dagger Tailor Pack': {
		id: 24,
		masks: goldenDaggerTailorPack
	},
	'PAYDAY 2 Bundle Rewards': {
		id: 25,
		masks: payday2BundleRewards
	},
	'Gage Russian Weapon Pack': {
		id: 26,
		masks: gageRussianWeaponPack
	},
	'Hotline Miami': {
		id: 27,
		masks: hotlineMiami
	},
	'The Diamond Heist': {
		id: 28,
		masks: theDiamondHeist
	},
	'The Golden Grin Casino Heist': {
		id: 29,
		masks: theGoldenGrinCasinoHeist
	},
	'Sydney Character Pack': {
		id: 30,
		masks: sydneyCharacterPack
	},
	'The OVERKILL Pack': {
		id: 31,
		masks: theOverkillPack
	},
	'Wolf Pack': {
		id: 32,
		masks: wolfPack
	},
	'The Goat Simulator Heist': {
		id: 33,
		masks: theGoatSimulatorHeist
	},
	'John Wick Weapon Pack': {
		id: 34,
		masks: johnWickWeaponPack
	},
	'Poetry Jam': {
		id: 35,
		masks: poetryJam
	},
	'Guardians Tailor Pack': {
		id: 36,
		masks: guardiansTailorPack
	},
	'Winter Ghosts Tailor Pack': {
		id: 37,
		masks: winterGhostsTailorPack
	},
	'John Wick Heists Pack': {
		id: 38,
		masks: johnWickHeistsPack
	},
	'Gage Chivalry Pack': {
		id: 39,
		masks: gageChivalryPack
	},
	'Gage Spec Ops Pack': {
		id: 40,
		masks: gageSpecOpsPack
	},
	'The Bomb Heists': {
		id: 41,
		masks: theBombHeists
	},
	'Dragon Pack': {
		id: 42,
		masks: dragonPack
	},
	'Gage Ninja Pack': {
		id: 43,
		masks: gageNinjaPack
	},
	'Southbound Tailor Pack': {
		id: 44,
		masks: southboundTailorPack
	},
	'High Octane Tailor Pack': {
		id: 56,
		masks: highOctaneTailorPack
	},
	'Street Smart Tailor Pack': {
		id: 57,
		masks: streetSmartTailorPack
	},
	'The Butcher\'s Western Pack': {
		id: 45,
		masks: theButchersWesternPack
	},
	'Biker Character Pack': {
		id: 46,
		masks: bikerCharacterPack
	},
	'A Merry Payday Christmas Soundtrack': {
		id: 47,
		masks: aMerryPaydayChristmasSoundtrack
	},
	'Mountain Master Heist': {
		id: 48,
		masks: mountainMasterHeist
	},
	'Lootbag': {
		id: 49,
		masks: lootbag
	},
	'The COMPLETELY OVERKILL Pack': {
		id: 50,
		masks: theCompletelyOverkillPack
	},
	'Zag Toys': {
		id: 51,
		masks: zagToys
	},
	'Twisted Metal': {
		id: 52,
		masks: twistedMetal
	},
	'Thespian Mask Pack': {
		id: 53,
		masks: thespianMaskPack
	},
	'PS4 Pre-Order Mask': {
		id: 54,
		masks: ps4PreorderMask
	},
	'Xbox One Pre-Order Mask': {
		id: 55,
		masks: xboxOnePreorderMask
	}
}

export default dlc