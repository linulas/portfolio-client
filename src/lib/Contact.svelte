<script lang="ts">
	import Image from './Image.svelte';
	import Reference from './Reference.svelte';

	export let contact: Contact;

	const { title, text, reference } = contact;
</script>

<div id="contact">
	<div class="intro">
		<h2>{title}</h2>
		<p>{text}</p>
	</div>
	<div class="options">
		<div class="references_wrapper">
			<Reference {reference} />
		</div>
		<div class="image_wrapper">
			<Image name="avatar" />
		</div>
	</div>
</div>

<style lang="scss">
	#contact {
		margin-bottom: 4rem;
	}
	h2 {
		text-align: center;
	}
	.intro {
		margin-bottom: 2rem;
	}

	.options {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
    gap: 2rem;
    justify-content: center;
    align-items: center;
	}
	.image_wrapper {
		@include box;
    justify-self: center;
		overflow: hidden;
		width: 240px;
		aspect-ratio: 1 / 1;
	}
</style>
