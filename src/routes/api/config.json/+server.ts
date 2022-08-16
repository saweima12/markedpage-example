import { json } from '@sveltejs/kit';
import { siteConfig } from 'markedpage';
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {

    const config = await siteConfig();
    
    return json({
    ...config
})
}