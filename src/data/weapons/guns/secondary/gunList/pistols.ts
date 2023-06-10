import { type pistolList } from '../../gunList'
import { type WeaponData } from '../../weaponTypes'
import $57Ap from '../pistol/57Ap'
import babyDeagle from '../pistol/babyDeagle'
import bernetti9 from '../pistol/bernetti9'
import bernettiAuto from '../pistol/bernettiAuto'
import bronco44 from '../pistol/bronco44'
import broomstick from '../pistol/broomstick'
import castigo44 from '../pistol/castigo44'
import chimano88 from '../pistol/chimano88'
import chimanoCompact from '../pistol/chimanoCompact'
import chimanoCustom from '../pistol/chimanoCustom'
import contractor from '../pistol/contractor'
import crosskill from '../pistol/crosskill'
import crosskillChunkyCompact from '../pistol/crosskillChunkyCompact'
import crosskillGuard from '../pistol/crosskillGuard'
import czech92 from '../pistol/czech92'
import deagle from '../pistol/deagle'
import frenchmanModel87 from '../pistol/frenchmanModel87'
import geckoM2 from '../pistol/geckoM2'
import gruberKurz from '../pistol/gruberKurz'
import holt9mm from '../pistol/holt9mm'
import igorAutomatik from '../pistol/igorAutomatik'
import interceptor45 from '../pistol/interceptor45'
import kahn357 from '../pistol/kahn357'
import kangArmsModel54 from '../pistol/kangArmsModel54'
import leo from '../pistol/leo'
import m139mm from '../pistol/m139mm'
import matever357 from '../pistol/matever357'
import parabellum from '../pistol/parabellum'
import peacemaker45 from '../pistol/peacemaker45'
import rus12AngryTiger from '../pistol/rus12AngryTiger'
import signature40 from '../pistol/signature40'
import stryk18c from '../pistol/stryk18c'
import whiteStreak from '../pistol/whiteStreak'

export type Pistol = typeof pistolList[number]

const pistols: Record<Pistol, WeaponData> = {
	'Interceptor .45': interceptor45,
	'Chimano Custom': chimanoCustom,
	'5/7 AP': $57Ap,
	'Chimano Compact': chimanoCompact,
	'Chimano 88': chimano88,
	'Crosskill': crosskill,
	'Bernetti 9': bernetti9,
	'Bronco .44': bronco44,
	'White Streak': whiteStreak,
	'Parabellum': parabellum,
	'Castigo .44': castigo44,
	'Crosskill Guard': crosskillGuard,
	'STRYK 18c': stryk18c,
	'Deagle': deagle,
	'M13 9mm': m139mm,
	'Gruber Kurz': gruberKurz,
	'Signature .40': signature40,
	'Broomstick': broomstick,
	'Contractor': contractor,
	'LEO': leo,
	'Peacemaker .45': peacemaker45,
	'Matever .357': matever357,
	'Baby Deagle': babyDeagle,
	'Bernetti Auto': bernettiAuto,
	'Czech 92': czech92,
	'Igor Automatik': igorAutomatik,
	'HOLT 9mm': holt9mm,
	'Frenchman Model 87': frenchmanModel87,
	'Crosskill Chunky Compact': crosskillChunkyCompact,
	'RUS-12 Angry Tiger': rus12AngryTiger,
	'Gecko M2': geckoM2,
	'Káng Arms Model 54': kangArmsModel54,
	'Kahn .357': kahn357
}

export default pistols