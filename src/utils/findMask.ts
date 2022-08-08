import defaultMask from 'data/character/mask/normal/defaultMask'
import { MaskData, allMasks } from 'data/character/masks'

export const findMask = (maskName: string): MaskData => {
	let out: MaskData | null = null
	Object.values(allMasks).every(category => {
		const collections = Object.values(category)
		collections.every(collection => {
			const masks = Object.values(collection.masks)
			const search = masks.find(mask => mask.name === maskName)
			if (search) out = search
			return !search
		})
		return !out
	})
	return out ?? defaultMask['Preferred Character']
}

export default findMask