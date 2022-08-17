import type { PageLoad } from './$types';
import { siteConfig } from '$lib/store';


export const load : PageLoad = async ({fetch}) => {
    const response = await fetch("/api/config.json");
    const data: Record<string, any> = await response.json();
    siteConfig.set(data); 
    return { }
}; 
