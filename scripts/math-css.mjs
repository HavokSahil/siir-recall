import {createRequire} from 'node:module';
// Use the stylesheet belonging to the renderer's KaTeX version. Different
// KaTeX releases use different class names for sizing and vertical alignment.
const require=createRequire(import.meta.url);
const rendererRequire=createRequire(require.resolve('rehype-katex'));
export const katexCssPath=rendererRequire.resolve('katex/dist/katex.min.css');
