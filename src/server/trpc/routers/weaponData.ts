import akimboShotguns from 'data/weapons/guns/primary/gunList/akimboShotguns'
import assaultRifles from 'data/weapons/guns/primary/gunList/assaultRifles'
import lightMachineGuns from 'data/weapons/guns/primary/gunList/lightMachineGuns'
import shotgunsPrimary from 'data/weapons/guns/primary/gunList/shotgunsPrimary'
import snipersPrimary from 'data/weapons/guns/primary/gunList/snipersPrimary'
import specialsPrimary from 'data/weapons/guns/primary/gunList/specialsPrimary'
import pistols from 'data/weapons/guns/secondary/gunList/pistols'
import shotgunsSecondary from 'data/weapons/guns/secondary/gunList/shotgunsSecondary'
import snipersSecondary from 'data/weapons/guns/secondary/gunList/snipersSecondary'
import specialsSecondary from 'data/weapons/guns/secondary/gunList/specialsSecondary'
import submachineGuns from 'data/weapons/guns/secondary/gunList/submachineGuns'
import melees from 'data/weapons/melees'
import throwables from 'data/weapons/throwables'

import { publicProcedure } from '../procedure'
import { createTRPCRouter } from '../trpc'

export const weaponDataRouter = createTRPCRouter({
	weaponPrimaryAssaultRifleData: publicProcedure
		.query(() => assaultRifles),
	weaponPrimaryShotgunData: publicProcedure
		.query(() => shotgunsPrimary),
	weaponPrimaryLMGData: publicProcedure
		.query(() => lightMachineGuns),
	weaponPrimarySniperData: publicProcedure
		.query(() => snipersPrimary),
	weaponPrimaryAkimboShotgunData: publicProcedure
		.query(() => akimboShotguns),
	weaponPrimarySpecialData: publicProcedure
		.query(() => specialsPrimary),

	weaponSecondaryPistolData: publicProcedure
		.query(() => pistols),
	weaponSecondarySubmachineGunData: publicProcedure
		.query(() => submachineGuns),
	weaponSecondarySpecialData: publicProcedure
		.query(() => specialsSecondary),
	weaponSecondaryShotgunData: publicProcedure
		.query(() => shotgunsSecondary),
	weaponSecondarySniperData: publicProcedure
		.query(() => snipersSecondary),

	throwableData: publicProcedure
		.query(() => throwables),
	meleeData: publicProcedure
		.query(() => melees)
})