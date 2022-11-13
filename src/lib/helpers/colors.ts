const dracula: DraculaColorPalette = {
	background: '#282a36',
	currentLine: '#44475a',
	foreground: '#f8f8f2',
	comment: '#6272a4',
	cyan: '#8be9fd',
	green: '#50fa7b',
	orange: '#ffb86c',
	pink: '#ff79c6',
	purple: '#bd93f9',
	red: '#ff5555',
	yellow: '#f1fa8c'
};

export const palette: ColorPalette = {
	...dracula,
	bg0: '#21222c',
	bg1: dracula.background,
	bg2: dracula.currentLine,
	text: dracula.foreground,
	link: dracula.pink,
	skill: dracula.yellow
};
