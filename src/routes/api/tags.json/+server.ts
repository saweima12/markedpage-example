import { json } from '@sveltejs/kit';

// @migration task: Check imports
import { classifiedSet } from 'markedpage';

import type { SourcePage, FrontMatterClassifierResult } from 'markedpage';
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {

    const pageSet: FrontMatterClassifierResult = await classifiedSet("tag");
    
    console.log(pageSet);


    return json({
    pageSet
})
}