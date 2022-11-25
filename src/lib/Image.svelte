<script lang="ts">
	import { onMount } from 'svelte';
	import Loader from './Loader.svelte';

	export let name: ValidImage = 'dataportal';
	let img: any;

	onMount(async () => {
		img = (await import(`$lib/__generated__/img/${name}.js`)).default;
	});
</script>

{#if img !== undefined}
	<picture>
		{#each img.sources as source}
			{#if source.type === 'image/webp'}
				<source srcset={source.srcset} type={source.type} alt="" />
			{:else}
				<img src={source.srcset} alt="" />
			{/if}
		{/each}
	</picture>
{/if}

{#if !img}
	<Loader />
{/if}

<style>
	img {
		width: 100%;
	}
</style>
