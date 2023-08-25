import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import rtlCss from 'postcss-rtlcss'

// https://vitejs.dev/config/
export default defineConfig(() => {
    return {
        css: {
            postcss: {
                plugins: [
                    rtlCss({
                        mode: 'override',
                        source: 'ltr',
                        ltrPrefix: '.ltr',
                        rtlPrefix: '.rtl',
                        bothPrefix: '.d'
                    })
                ]
            }
        },
        plugins: [vue()],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url))
            }
        }
    };
});
