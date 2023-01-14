<script lang="ts">
	import Icon from './icons/Icon.svelte';
	export let reference: Reference;
	const { links, text } = reference;
	const handleClick = (link: string) => {
		window.location.href = link;
	};
</script>

<div class="reference">
	{#if text}
		<p>{text}</p>
	{/if}
	<div class="wrapper">
		{#each links as link}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div class="link" on:click={() => handleClick(link.href)}>
				<a href={link.href}>{link.text || link.href}</a>
				{#if !link.icon && link.type === 'external'}
					<Icon name="external" size="xs" />
				{/if}
				{#if link.icon}
					<Icon name={link.icon.name} size="sm" />
				{/if}
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
  .reference {
    width: 100%;
  }
	.wrapper {
		display: grid;
		grid-template-rows: repeat(auto-fit, minmax(3.5rem, 1fr));
		gap: 1rem;
	}
	.link {
		@include box;
		cursor: pointer;
		background-color: $clr-bg-0;
		display: flex;
		align-items: center;
		padding: 1rem;
		justify-content: space-between;
		transition: all 0.2s;

		&:hover {
			transform: scale(1.02);
			background-color: $clr-bg-1;
		}
		&:active {
			transform: scale(1.03);
			background-color: #2f313d;
		}
	}
	a {
		margin-left: 0.25rem;
	}
</style>
