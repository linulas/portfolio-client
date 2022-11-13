<script lang="ts">
	import About from '$lib/About.svelte';
	import Projects from '$lib/Projects.svelte';
	import Contact from '$lib/Contact.svelte';
	import banner from '$lib/images/banner.webp';
	import banner_fallback from '$lib/images/banner.jpg';
	import type { PageData } from './$types';

	export let data: PageData;
	const { about, projects, contact } = data;
</script>

<div class="banner">
	<picture>
		<source srcset={banner} type="image/webp" />
		<img src={banner_fallback} alt="Welcome" />
	</picture>

	<div class="greeting container">
		<div>
			<h1>{data.hero.title}</h1>
			<span class="subtitle">{data.hero.subtitle}</span>
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
	.banner {
		position: relative;
		height: 250px;
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;

		picture {
			position: absolute;
			-webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */
			filter: blur(8px);
			transform: scale(1.1);
		}
		img {
			width: 120%;
		}

		.greeting {
			z-index: 10;
			display: flex;
			justify-content: center;
			.subtitle {
				@include text-md;
				@media screen and (min-width: $media-sm) {
					@include text-lg;
				}
			}
		}
	}

	main {
		background: $clr-bg-1;
	}
	@media screen and (min-width: $media-sm) {
		.banner {
			height: 400px;
			img {
				width: 100%;
			}
		}
	}
</style>
