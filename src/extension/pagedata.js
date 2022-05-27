import { marked } from "marked";
export const extendPageData = async (page) => {
    const raw = await page.raw();
    page.test = marked.parse(raw);
}