<script lang="ts">
	import Icon from './icons/Icon.svelte';
	export let reference: Reference;
	const { links, icon, text } = reference;
</script>

<div class="reference">
	{#if text}
		<p>{text}</p>
	{/if}
	{#each links as link}
		<div class="link">
			<a href={link.href}>{link.text || link.href}</a>
			{#if !icon && link.type === 'external'}
				<Icon name="external" size="xs" />
			{/if}
			{#if icon}
				<span>{icon.name}</span>
			{/if}
		</div>
	{/each}
</div>

<style lang="scss">
	.link {
		display: flex;
		align-items: center;
	}
	a {
		margin-right: 0.25rem;
	}
</style>
