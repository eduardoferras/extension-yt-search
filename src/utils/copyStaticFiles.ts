import Asset from '@/types/asset.types'
import isDirectory from '@/utils/isDirectory'
import { copyFileSync, cpSync } from 'node:fs'

/**
 * Copies static files from the source directory to the destination directory.
 * @param {Asset[]} assets - An array of objects containing the source and destination paths.
 */
export default function copyStaticFiles(assets: Asset[]) {
	for (const { from, to } of assets) {
		if (isDirectory(from)) {
			cpSync(from, to, { recursive: true })
		} else {
			copyFileSync(from, to)
		}
	}
}
