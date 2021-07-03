export const raisinBlack = '#26252E'
export const grey = '#2C2F33'
export const lightgrey = '#808080'
export const blue = '#0F639F'
export const green = '#BEDD7D'
export const red = '#FE5D63'

export const dim = 'rgba(0, 0, 0, 0.3)'
export const dimBlue = 'rgba(15, 99, 159, 0.3)'

interface itemColoursInterface {
	[key: string]: string;
}

export const itemColours: itemColoursInterface = {
	normal: '#fff',
	'Pre-order': '#fff',
	Free: '#fff',
	community: '#3baefe',
	Community: '#3baefe',
	dlc: '#ffd400',
	Paid: '#ffd400',
	event: '#ff9100',
	Event: '#ff9100',
	collaboration: '#fe5d63',
	Collaboration: '#fe5d63',
	infamous: '#ff1aff',
	Secret: '#ff1aff',
	Bundle: '#80ff00'
}

export default { grey, blue, red, dim, itemColours }