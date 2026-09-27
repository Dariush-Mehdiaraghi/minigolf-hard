import { writable } from 'svelte/store';

export type Language = 'de' | 'en';

export const language = writable<Language>('de');