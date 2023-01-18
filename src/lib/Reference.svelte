<script lang="ts">
	import viewport from './helpers/viewport';
	import Icon from './icons/Icon.svelte';
	import { fly } from 'svelte/transition';

	// props
	export let reference: Reference;
	export let light = false;

	// states
	let itemHasBeenInView = false;

	// variables
	const { links, text } = reference;

	// methods
	const handleClick = (link: string) => {
		window.location.href = link;
	};

	const handleEnter = () => {
		itemHasBeenInView = true;
	};
</script>

<div class="reference">
	{#if text}
		<p>{text}</p>
	{/if}
	<div class="wrapper" use:viewport={{ unobserveAfterEnter: true }} on:enter={() => handleEnter()}>
		{#each links as link, i}
			<div>
				{#if itemHasBeenInView}
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<div
						class="link"
						class:light
						on:click={() => handleClick(link.href)}
						in:fly={{ x: -1000, duration: i * 500 }}
					>
						<a href={link.href}>{link.text || link.href}</a>
						{#if !link.icon && link.type === 'external'}
							<Icon name="external" size="xs" />
						{/if}
						{#if link.icon}
							<Icon name={link.icon.name} size="sm" />
						{/if}
					</div>
				{/if}
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
	.reference {
		width: 100%;
	}
	p {
		margin-bottom: 1rem;
	}
	.wrapper {
		display: grid;
		grid-template-rows: repeat(auto-fit, minmax(3.5rem, 1fr));
		gap: 1rem;

		> div {
			height: 3.5rem;
		}
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

		&.light {
			background-color: $clr-bg-1;
			&:hover {
				background-color: $clr-bg-2;
			}
			&:active {
				background-color: $clr-comment;
			}
		}
	}
	a {
		margin-left: 0.25rem;
	}
</style>
