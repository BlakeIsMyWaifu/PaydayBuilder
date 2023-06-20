export const isUniqueValue = <T>(value: T, array: T[]) => {
	const valueIndex = array.findIndex(a => a === value)
	const arrayNullable: (T | null)[] = structuredClone(array)
	arrayNullable[valueIndex] = null
	return !arrayNullable.includes(value)
}