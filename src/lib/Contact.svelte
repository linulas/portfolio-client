<script lang="ts">
	import Reference from './Reference.svelte';

	export let contact: Contact;

	const { title, text, references } = contact;
</script>

<div id="contact">
	<div class="intro">
		<h2>{title}</h2>
		<p>{text}</p>
	</div>
	<div class="references">
		{#each references as reference}
			<Reference {reference} />
		{/each}
	</div>
</div>

<style>
	#contact {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
	h2 {
		text-align: center;
	}
</style>
