import {env} from 'cloudflare:workers';
export function database(){if(!env.DB) throw new Error('Notebook storage unavailable');return env.DB;}
