// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

/** @ts-ignore */
import type { PageLoad } from './$types';

const hero: Hero = {
	title: "I don't see problems, I see Puzzles",
	subtitle: 'Pick the right peices of code to solve it',
	preamble: ''
};

const about: About = {
	title: 'About',
	text: "Hi, my name is Linus and I'm a Developer based in Umeå Sweden and are currently working fullstack at Knowit. My goal is to never settle, by being open to new challenges and willing to learn new things that can promote the quality of my work, and be a positive force among the people around me. I've always loved creating things, that's probably why I got into music, and later on, programming. On the backend side I work a lot with Node, Go and Rust, while my frontend experience is mostly dominated by React/Typescript. When I'm not hammering my keyboard for programming, I'm probably hanging out with my beautiful wife or my friends, jogging, strumming my guitar or hammering my keyboard some more playing video games. I love coding on my spare time, so if you have a project I can help with, or dig into one of mine, or if you just wanna chat, feel free to contact me.",
	skills: {
		text: "I have learned a lot about being a team player from all my time playing in bands, sports-teams, prior jobs and of course everyday at my work as a IT-consultant at Knowit, so I always excell when working with others. Although I consider myself more of a backend person, I do also enjoy frontend work and have been doing both simultaniously ever since I started coding, which has helped me a lot to learn how to develop quality solutions, both my backend and frontend code gets better when I can see the big picture. I started out with a lot of Javascript/Typescript, but over time I've been shifting to write most of my projects in Go and/or Rust. Below is a handpick of the techniques I feel most comfortable with. Some honorable mentions would be C# and Java, but if I have the choice, I tend to seek out the other mentioned options instead.",
		items: [
			{
				title: 'Go',
				text: 'When you want to write something fast and simple, but still have typesafety and a lot of low level control, I have found that Go is an excellent choice. I have used Go both privately and proffessionaly and it has become one of my favourite languages. In my case I often use it to build microsevices, such as a proxy or authentication server.',
				icon: { name: 'go', alt: '' }
			},
			{
				title: 'Node',
				text: "When looking at web backends, you see a lot of Node, so there's no surprise that I have been writing a lot of it. This is probably one of the techniques I have poored most ours into both in personal projects and at work, all from sererside rendering, APIs, proxys and so on.",
				icon: { name: 'node', alt: '' }
			},
			{
				title: 'React',
				text: 'King of the hill when it comes to writing frontend, you see it both on the web and in native apps, so I have sunk almost all my frontend time into React. Although I nowadays prefer Svelte as my go to framework in my personal projects, React still is the most widespread, that is why I write it daily at work. Which means I can write it more fluently than any other frontend framework.',
				icon: { name: 'react', alt: '' }
			},
			{
				title: 'Typescript',
				text: 'Typesafety is a big quality ensurance, which is why I always use typescript whenever possible. It has become a daily companion and I often get to comine it with graphql, which has given my ways to learn typesafety between server and client.',
				icon: { name: 'typescript', alt: '' }
			},
			{
				title: 'Devops',
				text: 'When talking fullstack, I also love doing devops, which is mostly dominated by Github actions, Docker and Azure. For automated tests we use cypress at work, privately I often write my projects in Go, which has its own testing methods. I also have some small experience with kubernetes and bitbucket.',
				icon: { name: 'devops', alt: '' }
			},
			{
				title: 'Rust',
				text: 'My most recent love. Rust is such an awesome language and can be used anywhere. It gives you performance, safety and low level controll with an incredible developer experience. My proffessional experience with Rust is very limited, but personally I find every excuse I can to use it in my projects.',
				icon: {
					name: 'rust',
					alt: ''
				}
			}
		]
	}
};

const projects: Projects = {
	title: 'Projects',
	text: '						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rhoncus dictum magna, vitae feugiat quam feugiat non. Duis a lobortis magna, imperdiet accumsan augue.  Maecenas sit amet imperdiet magna. In erat dolor, luctus eu fermentum at, consectetur in sapien. 						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rhoncus dictum magna, vitae feugiat quam feugiat non. Duis a lobortis magna, imperdiet accumsan augue.  Maecenas sit amet imperdiet magna. In erat dolor, luctus eu fermentum at, consectetur in sapien. 						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rhoncus dictum magna, vitae feugiat quam feugiat non. Duis a lobortis magna, imperdiet accumsan augue.  Maecenas sit amet imperdiet magna. In erat dolor, luctus eu fermentum at, consectetur in sapien.',
	items: [
		{
			title: 'Dataportalen',
			image: {
				name: 'dataportal',
				alt: ''
			},
			techniques: [
				{ title: 'Go', icon: { name: 'go', alt: '' } },
				{ title: 'Graphql', icon: { name: 'graphql', alt: '' } },
				{ title: 'Node', icon: { name: 'node', alt: '' } },
				{ title: 'Devops', icon: { name: 'devops', alt: '' } },
				{ title: 'Typescript', icon: { name: 'typescript', alt: '' } },
				{ title: 'React', icon: { name: 'react', alt: '' } }
			],
			text: "A headless architechture is what the future calls for, and that's something I've learned more about when working with dataportalen. On top of that i got to futhtermore hone my skills in React, Apollo and GraphQL.",
			reference: {
				text: 'You can view the site at',
				links: [
					{
						href: 'https://www.dataportal.se',
						text: 'dataportalen.se',
						type: 'external'
					}
				]
			}
		},
		{
			title: 'Kvix',
			image: {
				name: 'kvix',
				alt: ''
			},
			techniques: [
				{ title: 'Typescript', icon: { name: 'typescript', alt: '' } },
				{ title: 'Native', icon: { name: 'react', alt: '' } },
				{ title: 'Node', icon: { name: 'node', alt: '' } },
				{ title: 'Devops', icon: { name: 'devops', alt: '' } },
				{ title: 'Docker', icon: { name: 'docker', alt: '' } }
			],
			text: "As of october 2019 until current date, I've been developing and maintaining digg.se, working with both backend and frontend. This project introduced me to episerver, typescript and graphql. Mainly I got to work with React, which by now is one of my strongest programming skills",
			reference: {
				text: 'You can view the site at',
				links: [
					{
						href: 'https://digg.se',
						text: 'digg.se',
						type: 'external'
					}
				]
			}
		},
		{
			title: 'Back me up',
			image: {
				name: 'back_me_up',
				alt: 'back me up'
			},
			techniques: [
				{ title: 'Go', icon: { name: 'go', alt: '' } },
				{ title: 'Rust', icon: { name: 'rust', alt: '' } },
				{ title: 'Graphql', icon: { name: 'graphql', alt: '' } },
				{ title: 'Native', icon: { name: 'react', alt: '' } },
				{ title: 'Typescript', icon: { name: 'typescript', alt: '' } },
				{ title: 'Devops', icon: { name: 'devops', alt: '' } }
			],
			text: "I was managing a gaming server with my friend, and that calls for some serious backups. \nYou don't want to loose all that hard work of your gaming progress by the cause of your own server crashing or becoming corrupted, so i frequently backed it up it. Manually. Even in gaming sessions. That's an interuption you don't want and it's quite tedious having to remeber to drag and drop folders everyday, so I thought, \"I should make a script for that!\". So I made a bash script that now has become my standard script for automating server or log backups.  ",
			reference: {
				text: 'View the source code at my',
				links: [
					{
						href: 'https://github.com/linulas/back-me-up',
						text: 'Github',
						type: 'external'
					}
				]
			}
		}
	]
};

const contact: Contact = {
	title: 'Contact',
	text: "I'm currently unavailable for fulltime work, but I would be interessted in teaming up for pesonal/freelance projects, so if you are interessted in working with me, feel free to use any of the options below to contact me. Or if you just want to chat. I'd like that too. Don't forget to follow me on social media to stay up to date. Also, I'd be glad if you would be interested in colaborating with me on personal my projects, two heads are better than one. Looking forward to hearing from you!",
	references: [
		{
			links: [
				{
					text: 'Telegram',
					href: 'https://t.me/linulas',
					type: 'external'
				}
			],
			icon: { name: 'telegram', alt: 'telegram icon' }
		},
		{
			links: [
				{
					text: 'Email',
					href: 'mailto:contact@linusbrannstrom.dev',
					type: 'external'
				}
			],
			icon: { name: 'email', alt: 'email icon' }
		},
		{
			links: [
				{
					text: 'LinkedIn',
					href: 'https://www.linkedin.com/in/linusbrannstrom/',
					type: 'external'
				}
			],
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
