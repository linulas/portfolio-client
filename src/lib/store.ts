import { writable } from 'svelte/store';

export interface SectionsInView {
	top: boolean;
	about: boolean;
	projects: boolean;
	contact: boolean;
  scrollDirection: ScrollDirection;
}

type ScrollDirection = "up" | "down";

export const app = writable<SectionsInView>({
	top: false,
	about: false,
	projects: false,
	contact: false,
  scrollDirection: "down"
});
