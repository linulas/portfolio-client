<script lang="ts">
	import Csharp from './csharp.svelte';
	import Devops from './devops.svelte';
	import Github from './github.svelte';
	import Go from './go.svelte';
	import Node from './node.svelte';
	import React from './react.svelte';
	import Typescript from './typescript.svelte';
	export let name: ValidIcon;
	export let color: ValidIconColor = 'foreground';
	export let clickable = false;
	export let hoverColor: ValidColor = 'purple';
	let viewBox: string | undefined = undefined;
</script>

<svg
	width={64}
	height={64}
	class={`${name != 'c#' ? color : 'none'}${clickable ? ` clickable hvr-${hoverColor}` : ''}`}
	{viewBox}
>
	{#if name === 'github'}
		{(viewBox = '-3 -3 30 30')}
		<Github />
	{/if}
	{#if name === 'go'}
		{(viewBox = '16.8 16.1 72.9 27.6')}
		<Go />
	{/if}
	{#if name === 'node'}
		{(viewBox = '0 0 32 32')}
		<Node />
	{/if}
	{#if name === 'react'}
		{(viewBox = '0 0 32 32')}
		<React stroke={color} />
	{/if}
	{#if name === 'typescript'}
		{(viewBox = '0 0 64 64')}
		<Typescript />
	{/if}
	{#if name === 'devops'}
		{(viewBox = '0 0 32 32')}
		<Devops />
	{/if}
	{#if name === 'c#'}
		{(viewBox = '0 0 15 15')}
		<Csharp stroke={color} />
	{/if}
</svg>

<style lang="scss">
	@import './svg-colors.scss';
</style>
