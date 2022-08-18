import { json } from '@sveltejs/kit';

// @migration task: Check imports
import { classifiedSet } from 'markedpage';

import type { SourcePage, DirectoryClassifierResult } from 'markedpage';
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {

    const pageSet: DirectoryClassifierResult = await classifiedSet("post");
    const list: Array<SourcePage> = pageSet.pages.slice().sort((a, b) => {
        return new Date(b.frontMatter.created).getTime() - new Date(a.frontMatter.created).getTime();
    });

    return json({
        list
    });
}