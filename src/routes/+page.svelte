<script lang="ts">
	import About from '$lib/About.svelte';
	import Projects from '$lib/Projects.svelte';
	import Contact from '$lib/Contact.svelte';
	import banner from '$lib/images/banner.webp';
	import banner_fallback from '$lib/images/banner.jpg';
	import type { PageData } from './$types';
	import portrait from '$lib/images/portrait.webp';
	import portrait_fallback from '$lib/images/portrait.jpg';
	import ButtonLink from '$lib/button/ButtonLink.svelte';

	export let data: PageData;
	const { about, projects, contact } = data;
</script>

<div class="banner">
	<picture class="bg">
		<source srcset={banner} type="image/webp" />
		<img src={banner_fallback} alt="Welcome" />
	</picture>

	<div class="greeting container">
		<div class="text">
			<h1>{data.hero.title}</h1>
			<p class="subtitle">{data.hero.subtitle}</p>
			<span class="contact">
				<ButtonLink href="#contact">Contact</ButtonLink>
			</span>
		</div>
		<picture class="linus">
			<source srcset={portrait} type="image/webp" />
			<img src={portrait_fallback} alt="" />
		</picture>
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
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;

		.bg {
			position: absolute;
			-webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */
			filter: blur(8px);
			transform: scale(1.1);
			img {
				width: 210%;
			}
		}

		.greeting {
			padding: 1rem;
			z-index: 10;
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
			img {
				width: 12rem;
				@include box;
			}
			.subtitle {
				margin-top: 0;
				@include text-md;
			}
		}
	}

	section {
		z-index: 0;
	}

	main {
		background: $clr-bg-1;
	}
	@media screen and (min-width: $media-sm) {
		.banner {
			height: 400px;
			justify-content: flex-start;
			.bg {
				img {
					width: 100%;
				}
			}

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
