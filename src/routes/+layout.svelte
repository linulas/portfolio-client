<script lang="ts">
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';
	import { app, type SectionsInView } from '$lib/helpers/store';
	import viewport from '$lib/helpers/viewport';

	const setInView = (inView: boolean, section: keyof SectionsInView) => {
		app.set({ ...$app, [section]: inView });
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
		@import '../lib/icons/svg-mixins.scss';
		:root {
			font-family: $font-body;
			color: $clr-text;
			box-sizing: border-box;
			scroll-behavior: smooth;
			@include text-sm;
			@media screen and (min-width: $media-sm) {
				@include text-base;
			}

			.size-xs {
				@include size-xs;
			}
			.size-sm {
				@include size-sm;
			}
			.size-md {
				@include size-md;
			}
			.size-lg {
				@include size-lg;
			}
			.size-xl {
				@include size-xl;
			}
			.lds-ripple {
				display: inline-block;
				position: relative;
				width: var(--size);
				height: var(--size);

				div {
					position: absolute;
					border: 4px solid #fff;
					opacity: 1;
					border-radius: 50%;
					animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
					&:nth-child(2) {
						animation-delay: -0.5s;
					}
				}

				@keyframes lds-ripple {
					0% {
						top: var(--keyPos);
						top: var(--keyPos);
						left: var(--keyPos);
						left: var(--keyPos);
						width: 0;
						height: 0;
						opacity: 0;
					}
					4.9% {
						top: var(--keyPos);
						top: var(--keyPos);
						left: var(--keyPos);
						left: var(--keyPos);
						width: 0;
						height: 0;
						opacity: 0;
					}
					5% {
						top: var(--keyPos);
						top: var(--keyPos);
						left: var(--keyPos);
						left: var(--keyPos);
						width: 0;
						height: 0;
						opacity: 1;
					}
					100% {
						top: 0px;
						left: 0px;
						width: var(--keySize);
						height: var(--keySize);
						opacity: 0;
					}
				}
			}
		}

		body {
			min-height: 100vh;
			margin: 0;
			background: $clr-bg-1;
			contain: paint;
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

		h4 {
			@include text-md;
			margin: $m-md;
			@media screen and (min-width: $media-sm) {
				@include text-lg;
				margin: $m-lg;
			}
		}

		p {
			@include text-base;
			margin: $m-base;
			@media screen and (min-width: $media-sm) {
				@include text-md;
				margin: $m-md;
			}
		}
		.container {
			width: calc(100% - 2rem);
			max-width: $page-width;
			margin: 0 auto;
		}
		.preamble {
			@include text-md;

			@media screen and (min-width: $media-sm) {
				font-size: 1.25rem;
				line-height: 1.813rem;
				letter-spacing: -0.01em;
			}
		}
	}
</style>
