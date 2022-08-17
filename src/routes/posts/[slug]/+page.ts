import type { PageLoad } from './$types';
export const load : PageLoad = async ({fetch, params}) => {
    const { slug } = params;

    const response = await fetch(`/api/posts/${slug}.json`);
    const { metadata, content, raw } = await response.json();

    return {
        metadata,
        content,
    }

}; 
