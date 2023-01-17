import adapter from '@sveltejs/adapter-netlify';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		scss: {
			prependData: "@import './src/style/global.scss';"
		}
	}),

	kit: {
		adapter: adapter(),
		csp: {
			// FIX: remove unsafe-inline from style-src when the following issue is solved: https://github.com/sveltejs/svelte/issues/6662
			directives: {
				'default-src': ['none'],
				'script-src': ['self'],
				'img-src': ['self', 'data:'],
				'font-src': ['self'],
				'frame-src': ['none'],
				'base-uri': ['none'],
				'frame-ancestors': ['none'],
				'frame-src': ['none'],
				'style-src': ['self', 'unsafe-inline'],
				'form-action': ['none'],
				'object-src': ['none']
			}
		}
	}
};

export default config;
