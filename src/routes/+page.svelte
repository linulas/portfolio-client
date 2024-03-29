<script lang="ts">
	import About from '$lib/ui/About.svelte';
	import Projects from '$lib/ui/Projects.svelte';
	import Contact from '$lib/ui/Contact.svelte';
	import ButtonLink from '$lib/ui/button/ButtonLink.svelte';
	import Image from '$lib/ui/Image.svelte';
	import portrait from '$lib/__generated__/img/portrait';
	import banner from '$lib/__generated__/img/banner';
	import { onMount } from 'svelte';

	import type { PageData } from './$types';

	export let data: PageData;
	const { about, projects, contact } = data;

	let mounted = false;

	$: bannerStyle = mounted
		? `background-image: url(${banner.large})`
		: `background-image: url(${banner.placeholder});` +
		  ' background-position: center; background-repeat: no-repeat; background-size: cover;';

	onMount(() => {
		mounted = true;
	});
</script>

<div class="banner" style={bannerStyle} class:banner_fallback={!mounted}>
	<div class="greeting container">
		<div class="text">
			<h1>{data.hero.title}</h1>
			<p class="subtitle">{data.hero.subtitle}</p>
			<span class="contact">
				<ButtonLink href="#contact">Contact</ButtonLink>
			</span>
		</div>
		<div class="linus">
			<Image name="portrait" sizes="384px" small box>
				<img slot="fallback" class="fallback" sizes="192px" src={portrait.placeholder} alt="" />
			</Image>
		</div>
	</div>
</div>

<main class="container">
	<section>
		<About {about} />
	</section>

	<section>
		<Projects {projects} />
	</section>

	<section>
		<Contact {contact} />
	</section>
</main>

<style lang="scss">
	.fallback {
		@include box;
		filter: blur(8px);
	}
	.banner_fallback {
		backdrop-filter: blur(8px);
	}
	.banner {
		position: relative;
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;

		.greeting {
			padding: 1rem;
			z-index: 100;
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 2rem;

			.contact {
				display: none;
				margin-top: 3rem;
				@media screen and (min-width: $media-lg) {
					display: block;
				}
			}
			.linus,
			.fallback {
				width: 192px;
				height: 222px;
			}
			.subtitle {
				margin-top: 0;
				@include text-md;
			}
		}
	}

	h1 {
		margin-top: 0;
		margin-bottom: 1.25rem;
		@media screen and (min-width: $media-sm) {
			margin-bottom: 1.5rem;
		}
	}

	section {
		z-index: 0;
	}

	@media screen and (min-width: $media-sm) {
		.banner {
			height: 400px;
			justify-content: flex-start;
			.greeting {
				flex-direction: row-reverse;
				align-items: flex-start;
				justify-content: flex-end;
				img {
					width: 16rem;
				}
				.subtitle {
					@include text-lg;
				}
			}
		}
	}
</style>
