<script lang="ts">
	import Image from './Image.svelte';
	import Reference from './Reference.svelte';
	import avatar from '$lib/__generated__/img/avatar';

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
			<Image name="avatar" small>
				<img slot="fallback" class="fallback" sizes="384px" src={avatar.placeholder} alt="" />
			</Image>
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

	.image_wrapper,
	.fallback {
		width: 240px;
		aspect-ratio: 1 / 1;
		justify-self: center;
		overflow: hidden;
		margin: auto;
		@include box;
	}

	.references_wrapper {
		margin-bottom: 2rem;
	}

	.options {
		width: 100%;
	}

	@media screen and (min-width: $media-sm) {
		.options {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
			gap: 2rem;
			justify-content: center;
			align-items: center;
		}
		.references_wrapper {
			margin-bottom: 0;
		}
	}
</style>
