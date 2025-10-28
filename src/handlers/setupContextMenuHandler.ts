import { YOUTUBE_CONTEXT_MENU_ID } from '@/constants/contextMenu'
import buildYoutubeSearchUrl from '@/utils/buildYoutubeSearchUrl'

export function setupContextMenuHandler() {
	chrome.contextMenus.onClicked.addListener((info) => {
		if (info.menuItemId === YOUTUBE_CONTEXT_MENU_ID && info.selectionText) {
			buildYoutubeSearchUrl(info.selectionText)
		}
	})
}
