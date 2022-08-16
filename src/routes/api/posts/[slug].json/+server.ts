import { json } from '@sveltejs/kit';
import { getPage } from 'markedpage';
import { getFormatedDate } from '$lib/helper';

import type { SourcePage } from 'markedpage';
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ params }) => {

    const { slug }  = params;

	const page: SourcePage = await getPage(slug);

    const content = await page.render();
    // console.log(page)
    return json({
    metadata: page.frontMatter,
    content: content
})
}