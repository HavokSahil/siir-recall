import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import {katexCssPath} from './scripts/math-css.mjs';

export default defineConfig({
 base:process.env.VITE_BASE_PATH||'/',
 plugins:[react()],
 resolve:{alias:{'katex-math.css':katexCssPath}},
 server:{port:5173,allowedHosts:["archetype"]},
});
