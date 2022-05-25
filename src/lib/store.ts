import type { Writable } from 'svelte/store'; 
import { writable } from 'svelte/store';

export const siteConfig: Writable<Record<string, any>> = writable({});