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
	text: "Hi, my name is Linus and I'm a developer based in Umeå Sweden and are currently working fullstack at Knowit. My goal is to never settle, by being open to new challenges and willing to learn new things that can promote the quality of my work, and be a positive force among the people around me. I've always loved creating things, that's probably why I got into music, and later on, programming. On the backend side I work a lot with Node, Go and Rust, while my frontend experience is mostly dominated by React/Typescript. When I'm not hammering my keyboard for programming, I'm probably hanging out with my beautiful wife or my friends, jogging, strumming my guitar or hammering my keyboard some more playing video games. I love coding on my spare time, so if you have a project I can help with, or dig into one of mine, or if you just wanna chat, feel free to contact me.",
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
				text: 'Typesafety is a big quality ensurance, which is why I always use typescript whenever possible. It has become a daily companion and I often get to combine it with graphql, which has given my ways to master typesafety between server and client.',
				icon: { name: 'typescript', alt: '' }
			},
			{
				title: 'Devops',
				text: 'When talking fullstack, I also love doing devops, which is mostly consists of Github actions, Docker and Azure. For automated tests we use cypress at work, privately I often write my projects in Go, which has its own testing methods. I also have some small experience with kubernetes and bitbucket.',
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
	text: "I have a habit of starting many ambitious projects, but to be honest, most of them never gets to reach 1.0, but still I get to learn a lot of things along the way. Thankfully I have job that gives me projects that must be completed, so I'll give you a handpick of both finised and unfinished projects that I find relevant, that focuses on me working with my above mentioned skills.",
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
			text: "A headless architechture is what the future calls for, and that's something I've learned a lot about when working with dataportalen. By making standardized interfaces in Nexus(Graphql), we could resolve that in any headless CMS we wanted to, in this case we choose Strapi(Node). Furthermore I got to do some devops, write a dockerized proxy in Go alongside apollo router, and futhtermore hone my skills in React/Typescript.",
			reference: {
				text: 'You can view the site at',
				links: [
					{
						href: 'https://beta.dataportal.se',
						text: 'beta.dataportal.se',
						type: 'external'
					}
				]
			}
		},
		{
			title: 'Shelf',
			image: {
				name: 'shelf',
				alt: 'me up'
			},
			techniques: [
				{ title: 'Go', icon: { name: 'go', alt: '' } },
				{ title: 'Rust', icon: { name: 'rust', alt: '' } },
				{ title: 'Graphql', icon: { name: 'graphql', alt: '' } },
				{ title: 'Native', icon: { name: 'react', alt: '' } },
				{ title: 'Typescript', icon: { name: 'typescript', alt: '' } },
				{ title: 'Devops', icon: { name: 'devops', alt: '' } }
			],
			text: 'One of my more long lasting personal projects, here I get to work with the things I love the most. Go and Rust on the backend, React native with typescript as a client and Graphql APIs between them for typesafety. I write all parts as microsevices and Dockerize them with Github actions. For testing I use the native solutions for both Rust and Go',
			reference: {
				text: 'The project repos are private at the moment, but if you really want to see the source code, contact me and I can share it with you',
				links: [
					{
						href: '#contact',
						text: 'Contact options',
						type: 'internal'
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
			text: 'Native mobile apps are supercool and an important part of todays society. In the fall of 2021 I got work on a React Native project at Kvix, which is a streaming platform for health and wellbeing. Naturally that gave me experience in working with native apps for Android and iOS, but also to furthermore get better at my other skills.',
			reference: {
				text: 'You can download the app or visit the website to check it out',
				links: [
					{
						href: 'https://kvix.tv',
						text: 'Website',
						type: 'external'
					},
					{
						href: 'https://apps.apple.com/se/app/kvix/id1536433992',
						text: 'Apple Appstore',
						type: 'external'
					},
					{
						href: 'https://play.google.com/store/apps/details?id=se.kvix.app',
						text: 'Google play',
						type: 'external'
					}
				]
			}
		}
	]
};

const contact: Contact = {
	title: 'Contact',
	text: "I love coding. I spend 40 workhours every week writing software, and probably about 10-20 ours on my free time, so if you are in need of a programmer, I'm your guy! Feel free to use any of the options below to contact me. Don't forget to follow me on social media to stay up to date. Also, I'd be glad if you would be interested in colaborating with me on personal my projects, two heads are better than one. Mainly that would be for my Shelf project mentioned above, so if you have any experience in the coresponding techniques and want to work on something cool, don't hesitate to send me a message. Looking forward to hear from you!",
	reference: {
		links: [
			{
				text: 'Telegram',
				href: 'https://t.me/linulas',
				type: 'external',
				icon: { name: 'telegram', alt: 'telegram icon' }
			},
			{
				text: 'Email',
				href: 'mailto:contact@linusbrannstrom.dev',
				type: 'external',
				icon: { name: 'email', alt: 'email icon' }
			},
			{
				text: 'LinkedIn',
				href: 'https://www.linkedin.com/in/linusbrannstrom/',
				type: 'external',
				icon: { name: 'linkedin', alt: 'linkedin icon' }
			}
		]
	}
};

export const load: PageLoad = () => {
	return {
		hero,
		about,
		projects,
		contact
	};
};
