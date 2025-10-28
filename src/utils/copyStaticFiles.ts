import Asset from '@/types/asset.types'
import isDirectory from '@/utils/isDirectory'
import { copyFileSync, cpSync, existsSync } from 'node:fs'

/**
 * Copies static files from the source directory to the destination directory.
 * @param {Asset[]} assets - An array of objects containing the source and destination paths.
 */
export default function copyStaticFiles(assets: Asset[]) {
	for (const { from, to } of assets) {
		if (!existsSync(from)) {
			throw new Error(`Source path does not exist: ${from}`)
		}

		if (isDirectory(from)) {
			if (existsSync(to) && !isDirectory(to)) {
				throw new Error(`Destination path is not a directory: ${to}`)
			}
			cpSync(from, to, { recursive: true })
		} else {
			copyFileSync(from, to)
		}
	}
}
