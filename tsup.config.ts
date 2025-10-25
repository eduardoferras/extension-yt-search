import { defineConfig } from 'tsup'
import { resolve } from 'node:path'
import copyStaticFiles from './src/utils/copyStaticFiles'
import Asset from './src/types/asset.types'

export default defineConfig({
	entry: ['src/service-worker.ts'],
	format: ['cjs'],
	target: 'es2023',
	clean: true,
	outDir: 'dist',
	sourcemap: true,
	minify: true,
	async onSuccess() {
		const assets: Asset[] = [
			{
				from: resolve(__dirname, 'manifest.json'),
				to: resolve(__dirname, 'dist', 'manifest.json')
			},
			{
				from: resolve(__dirname, 'public', 'icons'),
				to: resolve(__dirname, 'dist', 'icons')
			},
			{
				from: resolve(__dirname, 'src', 'locales'),
				to: resolve(__dirname, 'dist', '_locales')
			}
		]

		copyStaticFiles(assets)
	}
})
