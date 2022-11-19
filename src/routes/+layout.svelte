<script lang="ts">
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';
	import { sections, type SectionsInView } from '$lib/helpers/store';
	import viewport from '$lib/helpers/viewport';

	const setInView = (inView: boolean, section: keyof SectionsInView) => {
		sections.set({ ...$sections, [section]: inView });
	};
</script>

<svelte:head>
	<title>Linus portfolio</title>
	<meta
		name="description"
		content="Linus Brännström is a fullstack developer based in Umeå Sweden. Here you can find a short introduction, contact info, a list of skills and some highlighted projects."
	/>
</svelte:head>

<div class="app">
	<!-- ? Dummy element to set icon active when scolling to absolute top of page -->
	<div
		id="top"
		use:viewport
		on:enter={() => setInView(true, 'top')}
		on:exit={() => setInView(false, 'top')}
	/>
	<Header />
	<slot />
	<Footer />
	<!-- ? Dummy element to set contact active when scolling to absolute bottom of page -->
	<div
		id="top"
		use:viewport
		on:enter={() => setInView(true, 'contact')}
		on:exit={() => setInView(false, 'contact')}
	/>
</div>

<style lang="scss">
	:global {
		@import '@fontsource/fira-mono';
		:root {
			font-family: $font-body;
			color: $clr-text;
			box-sizing: border-box;
			scroll-behavior: smooth;
			@include text-sm;
			@media screen and (min-width: $media-sm) {
				@include text-base;
			}
		}

		body {
			min-height: 100vh;
			margin: 0;
			background: $clr-bg-1;
		}

		a {
			color: $clr-link;
			text-decoration: underline;

			&:hover {
				color: $clr-purple;
				text-decoration: none;
			}
		}

		h1 {
			@include text-2xl;
			margin-top: 0;
			margin-bottom: 1.25rem;
			@media screen and (min-width: $media-sm) {
				@include text-3xl;
				margin-bottom: 1.5rem;
			}
		}

		h2 {
			@include text-xl;
			margin: $m-xl;
			@media screen and (min-width: $media-sm) {
				@include text-2xl;
				margin: $m-2xl;
			}
		}

		h3 {
			@include text-lg;
			margin: $m-lg;
			@media screen and (min-width: $media-sm) {
				@include text-xl;
				margin: $m-xl;
			}
		}

		.container {
			width: calc(100% - 2rem);
			max-width: $page-width;
			margin: 0 auto;
		}
	}
</style>
