export const charString = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.,@'

export const decodeValues = (value: string): number => {
	if (value.length === 2) {
		const [firstValue, secondValue] = value.split('')
		return (decodeValues(firstValue) * charString.length) + decodeValues(secondValue)
	}
	return charString.indexOf(value)
}

export const decompressData = (data: string): string => {
	let decompressed = ''
	for (let i = 0; i < data.length; i++) {
		if (data.charAt(i + 1) === '-') {
			decompressed += data.charAt(i).repeat(parseInt(data.charAt(i + 2)))
			i += 2
			continue
		}
		decompressed += data.charAt(i)
	}
	return decompressed
}

export const encodeString = (data: object, equipped: string): string => {
	const index = Object.keys(data).findIndex(value => value === equipped)
	return charString[index]
}

export const encodeNumber = (index: number): string => {
	if (index < charString.length) return charString[index]
	const overflow = ~~(index / charString.length)
	const remainder = index - (charString.length * overflow)
	return charString[overflow] + charString[remainder]
}

export const compressData = (data: string): string => {
	let count = 1
	let currentChar = data[0]
	let compressed = ''

	for (let i = 1; i < data.length + 1; i++) {
		const value = data[i]
		if (value === currentChar) {
			if (count > 8) {
				compressed += `${currentChar}-${count}`
				count = 0
			}
			count++
			continue
		}
		compressed += count > 3 ? `${currentChar}-${count}` : currentChar.repeat(count)
		currentChar = value
		count = 1
	}

	return compressed
}