<script lang="ts">
	export let reference: Reference;
	const { link, linkText, icon } = reference;
</script>

<div class="reference">
	<a href={link}>{linkText || link}</a>
	{#if icon}
		<span>{icon.name}</span>
	{/if}
</div>

<style lang="scss">
	.reference {
		display: flex;
		a {
			padding: 0.5rem;
		}
	}
</style>
