import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import vercel from '@astrojs/vercel/serverless';
export default defineConfig({
    output: 'server',
    server: { port: 8080 },
    adapter: vercel(),
    integrations: [vue()]
});
