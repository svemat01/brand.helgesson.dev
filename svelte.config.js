import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: [
        preprocess({
            scss: {
                prependData: '@use "src/lib/styles/variables.scss" as *;',
            },
        }),
    ],

    kit: {
        adapter: adapter(),

        prerender: {
            // This can be false if you're using a fallback (i.e. SPA mode)
            default: true,
        },
    },
};

export default config;
