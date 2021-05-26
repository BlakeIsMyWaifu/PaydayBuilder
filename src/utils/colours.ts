export const grey = '#2C2F33'
export const blue = '#0F639F'
export const red = '#FF4052'

export const dim = 'rgba(0, 0, 0, 0.3)'

interface itemColoursInterface {
	[key: string]: string;
}

export const itemColours: itemColoursInterface = {
	normal: '#fff',
	community: '#3baefe',
	dlc: '#ffd400',
	event: '#ff9100',
	collaboration: '#fe5d63',
	infamous: '#ff1aff'
}

export default { grey, blue, red, dim, itemColours }