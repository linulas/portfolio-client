<script lang="ts">
	// imports
	import Icon from './icons/Icon.svelte';
	import { app, type SectionsInView } from './helpers/store';

	// variables
	let y = 0;
	let previous = 0;
	let breakpoint = 0;
	let sticky = false;
	let up = false;

	// functions
	const handleScroll = () => {
		// ? start a breakpoint when scrolling up
		if (!up) {
			breakpoint = y;
		}

		// ? when scrolling up 200px from breakpoint, set sticky
		if (breakpoint - y > 50) {
			sticky = true;
		}

		// ? Detect scroll up or down
		if (y > previous) {
      $app.scrollDirection = "down";
			up = false;
			sticky = false;
		} else {
      $app.scrollDirection = "up";
			up = true;
		}

		// store previous scrollY value
		previous = y;
	};

	$: isActive = (section: keyof SectionsInView) => {
		const { top, about, projects, contact } = $app;
		switch (section) {
			case 'top':
				return top;
			case 'about':
				return !top && about;
			case 'projects':
				return !about && !contact && projects;
			case 'contact':
				return contact;
			default:
				return false;
		}
	};
</script>

<header class:sticky>
	<div class="container content">
		<div class="corner">
			<a class:active={isActive('top')} href="/">
				<span class="logo">L</span>
			</a>
		</div>

		<nav>
			<ul>
				<!-- todo fix active logic -->
				<li>
					<a class:active={isActive('about')} href="#about">About</a>
				</li>
				<li>
					<a class:active={isActive('projects')} href="#projects">Projects</a>
				</li>
				<li>
					<a class:active={isActive('contact')} href="#contact">Contact</a>
				</li>
			</ul>
		</nav>

		<div class="corner">
			<a href="https://github.com/linulas" aria-label="Linulas github">
				<Icon name="github" clickable size="md" />
			</a>
		</div>
	</div>
</header>

<svelte:window bind:scrollY={y} on:scroll={handleScroll} />

<style lang="scss">
	header {
		display: flex;
		justify-content: space-between;
		background: $clr-bg-0;
		z-index: 20;
		box-shadow: rgb(39 39 39 / 50%) 0px 3px 2px;
		transition: top 0.2s;
		top: -50px;

		&.sticky {
			position: sticky;
			top: 0;
		}
	}

	.content {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.225rem 0;

		@media screen and (min-width: $media-sm) {
			padding: 0.5rem 0;
		}
	}

	.corner {
		width: 32px;
		height: 32px;

		a {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;
			height: 100%;
			text-decoration: none;

			&.active {
				.logo {
					color: $clr-bg-0;
					background: $clr-cyan;
				}
			}
		}

		@media screen and (min-width: $media-sm) {
			height: 48px;
			width: 48px;
		}
	}

	.logo {
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 50%;
		width: 16px;
		height: 16px;
		padding: 8px;

		background: $clr-bg-2;
		color: $clr-foreground;
		text-align: center;
		font-weight: bold;
		transition: background 0.2s linear;
		transition: color 0.2s linear;

		&:hover {
			background: $clr-purple;
		}

		@media screen and (min-width: $media-sm) {
			height: 24px;
			width: 24px;
		}
	}

	nav {
		display: flex;
		justify-content: center;

		a {
			display: flex;
			height: 100%;
			align-items: center;
			padding: 0 0.5rem;
			font-weight: 700;
			font-size: 0.8rem;
			text-transform: uppercase;
			letter-spacing: 0.1em;
			text-decoration: none;
			transition: color 0.2s linear;
			&.active {
				color: $clr-cyan;
			}
		}
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background-size: contain;
		li {
			position: relative;
			height: 100%;
		}
	}
</style>
