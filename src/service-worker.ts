import createContextMenu from '@/createContextMenu'
import { setupContextMenuHandler } from '@/handlers'

chrome.runtime.onInstalled.addListener(() => {
	createContextMenu()
})

setupContextMenuHandler()
