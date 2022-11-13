<script lang="ts">
	import About from '$lib/About.svelte';
	import Projects from '$lib/Projects.svelte';
	import Contact from '$lib/Contact.svelte';
	import coding from '$lib/images/coding.webp';
	import coding_fallback from '$lib/images/coding.jpg';
	import type { PageData } from './$types';

	export let data: PageData;
	const { about, projects, contact } = data;
</script>

<div class="banner">
	<picture>
		<source srcset={coding} type="image/webp" />
		<img src={coding_fallback} alt="Welcome" />
	</picture>

	<div class="greeting">
		<h1>{data.hero.title}</h1>
		<span>{data.hero.subtitle}</span>
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
	.banner {
		position: relative;
		height: 400px;
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;

		picture {
			position: absolute;
		}

		.greeting {
			z-index: 10;
		}
	}
</style>
