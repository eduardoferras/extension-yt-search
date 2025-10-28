import { describe, it, expect, beforeAll, afterAll } from 'vitest'
import { mkdirSync, rmSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import isDirectory from '@/utils/isDirectory'

const tempDir = resolve(__dirname, 'tempDir')
const tempFile = resolve(__dirname, 'tempFile.txt')

describe('isDirectory', () => {
	beforeAll(() => {
		mkdirSync(tempDir)
		writeFileSync(tempFile, 'Temporary file content')
	})

	afterAll(() => {
		rmSync(tempDir, { recursive: true, force: true })
		rmSync(tempFile, { force: true })
	})

	it('should return true if the path is a directory', () => {
		expect(isDirectory(tempDir)).toBe(true)
	})

	it('should return false if the path is a file', () => {
		expect(isDirectory(tempFile)).toBe(false)
	})

	it('should return false if the path does not exist', () => {
		expect(isDirectory(resolve(__dirname, 'nonExistentPath'))).toBe(false)
	})
})
