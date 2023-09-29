<script lang="ts">
	import { onMount } from 'svelte';

	export let name: ValidImage = 'dataportal';
	export let box = false;
	export let sizes = '';
	export let small = false;
	export let alt = '';
	let img: any;

	onMount(async () => {
		img = (await import(`$lib/__generated__/img/${name}.js`)).default;
	});
</script>

{#if img !== undefined}
	<picture>
		{#each img.sources as source}
			{@const srcset = source.srcset}
			<source srcset={small ? srcset[srcset.length - 1] : source.srcset[0]} {sizes} type={source.type} />
		{/each}
		<img src={img.small} width={img.width} height={img.height} {alt} class:box />
	</picture>
{/if}

{#if !img}
	<slot name="fallback" class={box ? 'box' : ''} />
{/if}

<style lang="scss">
	.box {
		@include box;
	}
	img {
		width: 100%;
		height: auto;
	}
</style>
