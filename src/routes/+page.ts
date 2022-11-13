// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

import type { PageLoad } from './$types';

const hero: Hero = {
	title: "I don't see problems, I see Puzzles",
	subtitle: 'Solving it by picking the right pieces of code to build it',
	preamble: ''
};

const about: About = {
	title: 'About',
	text: "Hi, my name is Linus and I'm a Developer based in Umeå Sweden and are currently working fullstack at Knowit. I'm open to some spare time meetings and coding, so if you have a project I can help with, or if you just wanna chat, feel free to contact me. My goal is to never settle, by being open to new challenges and willing to learn new things that can promote the quality of my work, and be a positive force among the people around me. I've always loved creating things, that's probably why I got into music, and later on, programming. On the backend side I work a lot with Node JS and C#, while my frontend experience is mostly dominated by React/Typescript.<br><br>When I'm not hammering my keyboard for programming, I'm probably hanging out with my beautiful wife or my friends, jogging, strumming my guitar or hammering my keyboard some more playing video games.",
	skills: {
		text: 'I have learned a lot about being a team player from all my time playing in bands, sports-teams, prior jobs and of course everyday at my work as a IT-consultant at Knowit. I can work with both traditional and agile system development methods, with scrum being my most familiar territory.',
		items: [
			{ text: 'Node', icon: { name: 'node', alt: 'Node logo' } },
			{ text: 'React', icon: { name: 'react', alt: 'React logo' } },
			{
				text: 'Typescript',
				icon: { name: 'typescript', alt: 'typescript logo' }
			},
			{
				text: 'Mongo',
				icon: { name: 'mongodb', alt: 'Mongo database' }
			},
			{ text: 'Java', icon: { name: 'java', alt: 'Java logo' } },
			{ text: 'Vue', icon: { name: 'vue', alt: 'vue logo' } },
			{
				text: 'ASP.NET',
				icon: { name: 'asp_net', alt: 'Asp.net logo' }
			},
			{ text: 'SQL', icon: { name: 'sql_icon', alt: 'SQL logo' } },
			{ text: 'Linux', icon: { name: 'linux', alt: 'Linux logo' } },
			{ text: 'Bash', icon: { name: 'bash', alt: 'Bash logo' } }
		]
	}
};

const projects: Projects = {
	title: 'Projects',
	text: 'Lorem ipsum',
	items: [
		{
			title: 'DIGG',
			image: {
				name: 'digg',
				alt: 'a image preview of the project'
			},
			text: "As of october 2019 until current date, I've been developing and maintaining digg.se, working with both backend and frontend. This project introduced me to episerver, typescript and graphql. Mainly I got to work with React, which by now is one of my strongest programming skills",
			reference: {
				text: 'You can view the site at',
				link: 'https://digg.se',
				linkText: 'digg.se'
			}
		},
		{
			title: 'Dataportalen',
			image: {
				name: 'dataportalen',
				alt: 'dataportalen'
			},
			text: "A headless architechture is what the future calls for, and that's something I've learned more about when working with dataportalen. On top of that i got to futhtermore hone my skills in React, Apollo and GraphQL.",
			reference: {
				text: 'You can view the site at',
				link: 'https://www.dataportal.se',
				linkText: 'dataportalen.se'
			}
		},
		{
			title: 'Back me up',
			image: {
				name: 'back_me_up',
				alt: 'back me up'
			},
			text: "I was managing a gaming server with my friend, and that calls for some serious backups. \nYou don't want to loose all that hard work of your gaming progress by the cause of your own server crashing or becoming corrupted, so i frequently backed it up it. Manually. Even in gaming sessions. That's an interuption you don't want and it's quite tedious having to remeber to drag and drop folders everyday, so I thought, \"I should make a script for that!\". So I made a bash script that now has become my standard script for automating server or log backups.  ",
			reference: {
				text: 'View the source code at my',
				link: 'https://github.com/linulas/back-me-up',
				linkText: 'Github'
			}
		}
	]
};

const contact: Contact = {
	title: 'Contact',
	text: "I'm currently unavailable for fulltime work, but I would be interessted in teaming up for pesonal/freelance projects, so if you are interessted in working with me, feel free to use any of the options below to contact me. Or if you just want to chat. I'd like that too. Don't forget to follow me on social media to stay up to date. Also, I'd be glad if you would be interested in colaborating with me on personal my projects, two heads are better than one. Looking forward to hearing from you!",
	references: [
		{
			linkText: 'Telegram',
			link: 'https://t.me/linulas',
			icon: { name: 'telegram', alt: 'telegram icon' }
		},
		{
			linkText: 'Email',
			link: 'mailto:contact@linusbrannstrom.dev',
			icon: { name: 'email', alt: 'email icon' }
		},
		{
			linkText: 'LinkedIn',
			link: 'https://www.linkedin.com/in/linusbrannstrom/',
			icon: { name: 'linkedin', alt: 'linkedin icon' }
		}
	]
};

export const load: PageLoad = () => {
	return {
		hero,
		about,
		projects,
		contact
	};
};
