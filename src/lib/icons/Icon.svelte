<script lang="ts" context="module">
	export type ValidIconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
</script>

<script lang="ts">
	import Loader from '$lib/loading/Ripple.svelte';
	import { onMount } from 'svelte';

	// props
	export let name: ValidIcon;
	export let color: ValidIconColor = 'foreground';
	export let clickable = false;
	export let hoverColor: ValidColor = 'purple';
	export let size: ValidIconSize = 'lg';

	// state
	let viewBox: string | undefined = undefined;
	let Icon: any;

	// variables
	const useColor = () => {
		switch (name) {
			case 'react':
				return true;
			case 'c#':
				return true;
			case 'docker':
				return true;
			default:
				return false;
		}
	};

	onMount(async () => {
		if (name === 'c#') {
			Icon = (await import('./csharp.svelte')).default;
			viewBox = '0 0 15 15';
		} else if (name === 'devops') {
			Icon = (await import('./devops.svelte')).default;
			viewBox = '0 0 32 32';
		} else if (name === 'docker') {
			Icon = (await import('./docker.svelte')).default;
			viewBox = '0 0 48 48';
		} else if (name === 'external') {
			Icon = (await import('./external.svelte')).default;
			viewBox = '0 0 64 64';
		} else if (name === 'github') {
			Icon = (await import('./github.svelte')).default;
			viewBox = '-3 -3 30 30';
		} else if (name === 'graphql') {
			Icon = (await import('./graphql.svelte')).default;
			viewBox = '0 0 29.999 30';
		} else if (name === 'go') {
			Icon = (await import('./go.svelte')).default;
			viewBox = '16.8 16.1 72.9 27.6';
		} else if (name === 'node') {
			Icon = (await import('./node.svelte')).default;
			viewBox = '0 0 32 32';
		} else if (name === 'react') {
			Icon = (await import('./react.svelte')).default;
			viewBox = '0 0 32 32';
		} else if (name === 'rust') {
			Icon = (await import('./rust.svelte')).default;
			viewBox = '0 0 32 32';
		} else if (name === 'typescript') {
			Icon = (await import('./typescript.svelte')).default;
			viewBox = '0 0 64 64';
		}
	});
</script>

<span class={size}>
	{#if !Icon}
		<Loader {size} />
	{/if}
	{#if Icon}
		<svg
			class={`${size} ${name != 'c#' ? color : 'none'}${
				clickable ? ` clickable hvr-${hoverColor}` : ''
			}`}
			{viewBox}
		>
			{#if useColor()}
				<svelte:component this={Icon} {color} />
			{:else}
				<svelte:component this={Icon} />
			{/if}
		</svg>
	{/if}
</span>

<style lang="scss">
	@import './svg-colors.scss';
	@import './svg-mixins.scss';

	.xs {
		@include size-xs;
	}
	.sm {
		@include size-sm;
	}
	.md {
		@include size-md;
	}
	.lg {
		@include size-lg;
	}
	.xl {
		@include size-xl;
	}

	span {
		height: var(--size);
		width: var(--size);
	}

	svg {
		height: var(--size);
		width: var(--size);
	}
</style>
