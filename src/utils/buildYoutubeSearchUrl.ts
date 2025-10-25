import getYoutubeSearchUrl from '@/utils/getYoutubeSearchUrl'
import openTab from '@/utils/openTab'

/**
 * Builds a YouTube search URL using the provided query and opens it in a new tab.
 * @param {string} query - The search term to look up on YouTube.
 */
export default function buildYoutubeSearchUrl(query: string): void {
	const youtubeSearchUrl = getYoutubeSearchUrl(query)
	openTab(youtubeSearchUrl)
}
