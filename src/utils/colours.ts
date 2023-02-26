import { type ContentRarity } from 'data/source/downloadableContent'

export const raisinBlack = '#26252E'
export const grey = '#2C2F33'
export const lightgrey = '#808080'
export const blue = '#0F639F'
export const green = '#BEDD7D'
export const red = '#FE5D63'
export const sycamore = '#83873D'
export const purple = '#ff1aff'

export const dim = 'rgba(0, 0, 0, 0.3)'
export const dimBlue = 'rgba(15, 99, 159, 0.3)'

export const itemColours: Record<ContentRarity, string> = {
	'Pre-order': '#fff',
	Free: '#fff',
	Community: '#3baefe',
	Paid: '#ffd400',
	Event: '#ff9100',
	Collaboration: '#fe5d63',
	Infamous: '#ff1aff',
	Secret: '#ff1aff',
	Bundle: '#80ff00'
}

export const colourCompare = (valueOne: number, valueTwo: number): '#BEDD7D' | '#FE5D63' | '#fff' => valueOne !== valueTwo ? (valueOne < valueTwo ? red : green) : '#fff'

const colours = {
	raisinBlack,
	grey,
	lightgrey,
	blue,
	green,
	red,
	dim,
	dimBlue
}

export default colours