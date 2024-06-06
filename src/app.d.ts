// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {}

declare namespace svelte.JSX {
	interface HTMLAttributes<T> {
		onenter: () => void;
		onexit: () => void;
	}
}

type ValidIcon =
	| 'c#'
	| 'devops'
	| 'docker'
	| 'email'
	| 'external'
	| 'github'
	| 'graphql'
	| 'go'
	| 'linkedin'
	| 'node'
	| 'react'
	| 'rust'
	| 'telegram'
	| 'typescript';
type ValidColor = keyof ColorPalette;
type ValidIconColor =
	| 'foreground'
	| 'cyan'
	| 'green'
	| 'orange'
	| 'pink'
	| 'purple'
	| 'red'
	| 'yellow';

type LinkType = 'internal' | 'external' | 'mail';

interface Section {
	title: string;
	text: string;
}

interface Skill extends Section {
	icon: Icon;
	text?: string;
}

interface DraculaColorPalette {
	background: string;
	currentLine: string;
	foreground: string;
	comment: string;
	cyan: string;
	green: string;
	orange: string;
	pink: string;
	purple: string;
	red: string;
	yellow: string;
}

interface ColorPalette extends DraculaColorPalette {
	bg0: string;
	bg1: string;
	bg2: string;
	text: string;
	link: string;
	skill: string;
}

interface MediaInfo {
	name: string;
	alt?: string;
}

interface Image extends MediaInfo {
	name: ValidImage;
}
interface Icon extends MediaInfo {
	name: ValidIcon;
}

interface Link {
	href: string;
	text?: string;
	type: LinkType;
	icon?: Icon;
}

type Reference = {
	links: Link[];
	text?: string;
};

interface Hero {
	title: string;
	subtitle: string;
	preamble: string;
}

interface Project extends Section {
	image: Image;
	techniques: Skill[];
	reference: Reference;
}

interface About extends Section {
	skills: {
		text: string;
		items: Skill[];
	};
}

interface Projects extends Section {
	items: Project[];
}

interface Contact extends Section {
	reference: Reference;
}

interface ApiResponse {
	hero: Hero;
	about: About;
	projects: Projects;
	contact: Contact;
}
