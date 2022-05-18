import { getPage } from 'markedpage';
import { getFormatedDate } from '$lib/helper';

import type { SourcePage } from 'markedpage';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async ({ params }) => {

    const { year, month, slug }  = params;

	const page: SourcePage = await getPage(slug, (page) => {
		const dateObj = getFormatedDate(page.frontMatter.created);
		return dateObj.year == year && dateObj.month == month;
	});

    const content = await page.render();
    const raw = await page.raw();

    return {
        body: {
            page: page,
            content: content,
            raw: raw
        }
    }
}