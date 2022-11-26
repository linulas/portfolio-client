<script lang="ts">
	import About from '$lib/About.svelte';
	import Projects from '$lib/Projects.svelte';
	import Contact from '$lib/Contact.svelte';
	import banner from '$lib/__generated__/img/banner';
	import type { PageData } from './$types';
	import portrait from '$lib/__generated__/img/portrait';
	import ButtonLink from '$lib/button/ButtonLink.svelte';
	import Image from '$lib/Image.svelte';

	export let data: PageData;
	const { about, projects, contact } = data;
</script>

<div class="banner">
	<div class="bg">
		<Image name="banner" sizes="100vw">
			<img
				slot="fallback"
				width={banner.width}
				height={banner.height}
				sizes="100vw"
				src={banner.placeholder}
				alt=""
			/>
		</Image>
	</div>

	<div class="greeting container">
		<div class="text">
			<h1>{data.hero.title}</h1>
			<p class="subtitle">{data.hero.subtitle}</p>
			<span class="contact">
				<ButtonLink href="#contact">Contact</ButtonLink>
			</span>
		</div>
		<div class="linus">
			<Image name="portrait" sizes="192px" box>
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
			.linus,
			.fallback {
				width: 192px;
				height: 222px;
			}
			.fallback {
				@include box;
				filter: blur(8px);
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
