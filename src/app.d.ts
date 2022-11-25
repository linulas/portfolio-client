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

type Skill = { text: string; icon: Icon };
type ValidIcon =
	| 'c#'
	| 'devops'
	| 'email'
	| 'external'
	| 'github'
	| 'go'
	| 'linkedin'
	| 'node'
	| 'react'
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
}

type Reference = {
	links: Link[];
	text?: string;
	icon?: Icon;
};

interface Hero {
	title: string;
	subtitle: string;
	preamble: string;
}

interface About {
	title: string;
	text: string;
	skills: {
		text: string;
		items: Skill[];
	};
}

interface Projects {
	title: string;
	text: string;
	items: Project[];
}

interface Contact {
	title: string;
	text: string;
	references: Reference[];
}
