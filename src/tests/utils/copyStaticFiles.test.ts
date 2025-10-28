import { describe, it, expect, beforeAll, afterAll } from 'vitest'
import { join } from 'node:path'
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import Asset from '@/types/asset.types'
import copyStaticFiles from '@/utils/copyStaticFiles'

const baseDir = __dirname
const tempFile = join(baseDir, 'tempFile.txt')
const tempDistDir = join(baseDir, 'dist')
const tempPublicDir = join(baseDir, 'public')
const copiedFilePath = join(tempDistDir, 'tempFile.txt')
const copiedPublicDir = join(tempDistDir, 'public')
const copiedPublicFile = join(copiedPublicDir, 'tempFile.txt')

const assets: Asset[] = [
	{ from: tempFile, to: copiedFilePath },
	{ from: tempPublicDir, to: copiedPublicDir }
]

describe('copyStaticFiles', () => {
	beforeAll(() => {
		mkdirSync(tempDistDir)
		mkdirSync(tempPublicDir)

		writeFileSync(tempFile, 'Test file content')
		writeFileSync(join(tempPublicDir, '/tempFile.txt'), 'Test dir file content')
	})

	afterAll(() => {
		rmSync(tempDistDir, { recursive: true, force: true })
		rmSync(tempPublicDir, { recursive: true, force: true })
		rmSync(tempFile, { force: true })
	})

	it('should copy individual file correctly', () => {
		copyStaticFiles(assets)

		expect(existsSync(copiedFilePath)).toBe(true)
		expect(readFileSync(copiedFilePath, 'utf-8')).toBe('Test file content')
	})

	it('should copy directory correctly', () => {
		copyStaticFiles(assets)

		expect(existsSync(copiedPublicFile)).toBe(true)
		expect(readFileSync(copiedPublicFile, 'utf-8')).toBe('Test dir file content')
	})

	it('should throw an error if the source path does not exist', () => {
		const invalidSource = join(baseDir, 'nonexistent.txt')
		const invalidAssets: Asset[] = [{ from: invalidSource, to: join(tempDistDir, 'fail.txt') }]

		expect(() => copyStaticFiles(invalidAssets)).toThrowError(
			`Source path does not exist: ${invalidSource}`
		)
	})

	it('should throw an error if the destination path is not a directory', () => {
		const fileAsDest = join(tempFile)
		const invalidAssets: Asset[] = [{ from: tempPublicDir, to: fileAsDest }]

		expect(() => copyStaticFiles(invalidAssets)).toThrowError(
			`Destination path is not a directory: ${fileAsDest}`
		)
	})
})
