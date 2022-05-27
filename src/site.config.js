import customHeadingId from 'marked-custom-heading-id';
import { CustomClassifierHandle } from './extension/classifier.js';
import { extendPageData } from './extension/pagedata.js';

const config = {
	title: 'MarkedPage Test Project',
	classifier: [
		{ id: 'post', params: { path: '/_posts/' }, type: 'directory' },
		{ id: 'tag', params: { keys: ['tag', 'tags'] }, type: 'frontmatter' },
		{ id: 'category', params: { keys: ['category', 'categories'] }, type: 'frontmatter' },
		{ id: 'custom', params: { path: '/_posts/' }, type: CustomClassifierHandle },
	],
	extendPageData: extendPageData,
	marked: {
		options: {},
		extensions: [customHeadingId()]
	},
};

export default config;
