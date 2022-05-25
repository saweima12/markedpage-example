import customHeadingId from 'marked-custom-heading-id';
import { CustomClassifierHandle } from './classifier/custom.js';

const config = {
	title: 'MarkedPage Test Project',
	classifier: [
		{ id: 'post', params: { path: '/_posts/' }, type: 'directory' },
		{ id: 'tag', params: { keys: ['tag', 'tags'] }, type: 'frontmatter' },
		{ id: 'category', params: { keys: ['category', 'categories'] }, type: 'frontmatter' },
		{ id: 'custom', params: { path: '/_posts/' }, type: CustomClassifierHandle },
	],
	marked: {
		options: {},
		extensions: [customHeadingId()]
	},
};

export default config;
