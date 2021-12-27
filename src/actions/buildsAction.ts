import { ADDBUILD, CHANGEBUILD, REMOVEBUILD, UPDATEDATA, UPDATENAME } from 'constants/buildsConstant'
import { createAction } from 'typesafe-actions'

export interface AddBuild {
	changeToNewBuild: boolean;
}

export interface SelectBuild {
	id: number;
}

export interface UpdateName extends SelectBuild {
	name: string;
}

export interface UpdateData extends SelectBuild {
	data: string;
}

export const addBuild = createAction(ADDBUILD)<AddBuild>()
export const removeBuild = createAction(REMOVEBUILD)<number>()
export const updateName = createAction(UPDATENAME)<UpdateName>()
export const updateData = createAction(UPDATEDATA)<UpdateData>()
export const changeBuild = createAction(CHANGEBUILD)<SelectBuild>()

const buildsActions = {
	addBuild,
	removeBuild,
	updateName,
	updateData,
	changeBuild
}

export default buildsActions