import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION, SITE_URL, SITE_AUTHOR } from '../consts';

export async function GET(context) {
	const posts = await getCollection('blog');
	
	// 日付順にソート
	const sortedPosts = posts.sort((a, b) => 
		new Date(b.data.pubDate).valueOf() - new Date(a.data.pubDate).valueOf()
	);
	
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site || SITE_URL,
		language: 'ja',
		managingEditor: `noreply@jarinosuke.com (${SITE_AUTHOR})`,
		webMaster: `noreply@jarinosuke.com (${SITE_AUTHOR})`,
		items: sortedPosts.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.pubDate,
			link: `/posts/${post.id}/`,
			categories: post.data.tags || [],
		})),
		customData: `
			<language>ja</language>
			<lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
			<generator>Astro</generator>
		`,
	});
}
