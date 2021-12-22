export const oneDP = (number: number) => Math.round(number * 10) / 10

export const findNextNum = (object: object): number => Math.max(0, ...Object.keys(object).map(num => +num)) + 1

export default {
	oneDP,
	nextNum: findNextNum
}