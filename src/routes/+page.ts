import type { PageLoad } from './$types';

export const load : PageLoad = async ({fetch}) => {
    const response = await fetch("/api/posts.json");
    const { list } = await response.json();

    return {
        list
    }
}; 
