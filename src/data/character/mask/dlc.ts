import { MaskData } from '../masks'
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

const dlc: Record<string, Record<string, MaskData>> = {
	'The Butchers AK/CAR Mod Pack': theButchersAKCARModPack,
	'The Alesso Heist': theAlessoHeist,
	'Armored Transport': armoredTransport,
	'The Butchers BBQ Pack': theButchersBBQPack,
	'The Point Break Heists': thePointBreakHeists,
	'San Martín Bank Heist': sanMartinBankHeist,
	'The Big Bank Heist': theBigBankHeist,
	'The Biker Heist': theBikerHeist,
	'Mega City Tailor Pack': megaCityTailorPack,
	'Clover Character Pack': cloverCharacterPack,
	'Dragan Character Pack': draganCharacterPack,
	'Sokol Character Pack': sokolCharacterPack,
	'Scarface Character Pack': scarfaceCharacterPack,
	'Buluc\'s Mansion heist': bulucsMansionHeist,
	'Border Crossing Heist': borderCrossingHeist,
	'Yakuza Character Pack': yakuzaCharacterPack,
	'H3H3 Character Pack': h3H3CharacterPack,
	'Scarface Heist Pack': scarfaceHeist,
	'Gage Weapon Pack #1': gageWeaponPack1,
	'Gage Assault Pack': gageAssaultPack,
	'Gage Historical Pack': gageHistoricalPack,
	'Gage Weapon Pack #2': gageWeaponPack2,
	'Gage Shotgun Pack': gageShotgunPack,
	'Gage Sniper Pack': gageSniperPack,
	'Golden Dagger Tailor Pack': goldenDaggerTailorPack,
	'Payday 2 Bundle Rewards': payday2BundleRewards,
	'Gage Russian Weapon Pack': gageRussianWeaponPack,
	'Hotline Miami': hotlineMiami,
	'The Diamond Heist': theDiamondHeist,
	'The Golden Grin Casino Heist': theGoldenGrinCasinoHeist,
	'Sydney Character Pack': sydneyCharacterPack,
	'The Overkill Pack': theOverkillPack,
	'Wolf Pack': wolfPack,
	'The Goat Simulator Heist': theGoatSimulatorHeist,
	'John Wick Weapon Pack': johnWickWeaponPack,
	'Poetry Jam': poetryJam,
	'Guardians Tailor Pack': guardiansTailorPack,
	'Winter Ghosts Tailor Pack': winterGhostsTailorPack,
	'John Wick Heists Pack': johnWickHeistsPack,
	'Gage Chivalry Pack': gageChivalryPack,
	'Gage Spec Ops Pack': gageSpecOpsPack,
	'The Bomb Heists': theBombHeists,
	'Dragon Pack': dragonPack,
	'Gage Ninja Pack': gageNinjaPack,
	'Southbound Tailor Pack': southboundTailorPack,
	'The Butchers Western Pack': theButchersWesternPack,
	'Biker Character Pack': bikerCharacterPack,
	'A Mery Payday Christmas Soundtrack': aMerryPaydayChristmasSoundtrack,
	'Mountain Master Heist': mountainMasterHeist,
	'Lootbag': lootbag,
	'The Completely Overkill Pack': theCompletelyOverkillPack,
	'Zag Toys': zagToys,
	'Twisted Metal': twistedMetal,
	'Thespian Mask Pack': thespianMaskPack,
	'PS4 Preorder Mask': ps4PreorderMask,
	'Xbox One Preorder Mask': xboxOnePreorderMask
}

export default dlc