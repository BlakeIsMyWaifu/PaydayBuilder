import { ADDBUILD, CHANGEBUILD, REMOVEBUILD, UPDATEDATA, UPDATENAME } from 'constants/buildsConstant'
import { createAction } from 'typesafe-actions'

interface SelectBuild {
	id: number;
}

export interface UpdateName extends SelectBuild {
	name: string;
}

export interface UpdateData extends SelectBuild {
	data: string;
}

export interface ChangeBuild extends SelectBuild {
	currentData: string;
}

export const addBuild = createAction(ADDBUILD)()
export const removeBuild = createAction(REMOVEBUILD)<number>()
export const updateName = createAction(UPDATENAME)<UpdateName>()
export const updateData = createAction(UPDATEDATA)<UpdateData>()
export const changeBuild = createAction(CHANGEBUILD)<ChangeBuild>()

const buildsActions = {
	addBuild,
	removeBuild,
	updateName,
	updateData,
	changeBuild
}

export default buildsActions