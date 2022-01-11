export const twoDP = (number: number) => Math.round(number * 100) / 100

export const findNextNum = (object: object): number => Math.max(0, ...Object.keys(object).map(num => +num)) + 1

export default {
	twoDP,
	nextNum: findNextNum
}