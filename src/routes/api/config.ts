import { siteConfig } from 'markedpage';
import type { RequestHandler } from '@sveltejs/kit';

const get: RequestHandler = async () => {

    const config = await siteConfig();

    return {
        body: {
            config
        }
    }
}