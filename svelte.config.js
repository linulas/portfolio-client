import adapter from '@sveltejs/adapter-auto';
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
      // TODO: add style-src when the following issue is solved: https://github.com/sveltejs/svelte/issues/6662
			directives: {
				'script-src': ['self'],
				'img-src': ['self', 'data:'],
				'frame-src': ['none']
			}
		}
	}
};

export default config;
