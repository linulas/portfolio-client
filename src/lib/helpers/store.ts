import { writable } from 'svelte/store';

export interface SectionsInView {
	top: boolean;
	about: boolean;
	projects: boolean;
	contact: boolean;
}

export const sections = writable<SectionsInView>({
	top: false,
	about: false,
	projects: false,
	contact: false
});
