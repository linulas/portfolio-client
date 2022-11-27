<script lang="ts">
	import { sections } from './helpers/store';
	import viewport from './helpers/viewport';
	import Image from './Image.svelte';
	import SkeletonImage from './loading/SkeletonImage.svelte';
	import Reference from './Reference.svelte';

	export let projects: Projects;

	const { title, text, items } = projects;
	const setInView = (inView: boolean) => {
		sections.set({ ...$sections, projects: inView });
	};
</script>

<div id="projects" use:viewport on:enter={() => setInView(true)} on:exit={() => setInView(false)}>
	<div class="intro">
		<h2>
			{title}
		</h2>
		<p>
			{text}
		</p>
	</div>
	<div class="projects">
		{#each items as project}
			<div class="project">
				<h3>
					{project.title}
				</h3>
				<p>
					{project.text}
				</p>
				<div class="reference">
					<div class="image_wrapper">
						<span>
							<Image name={project.image.name} sizes="50vw">
								<SkeletonImage slot="fallback" />
							</Image>
						</span>
					</div>
					{#if project.reference}
						<span>
							<Reference reference={project.reference} />
						</span>
					{/if}
				</div>
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
	#projects {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	.intro {
		width: 100%;
		h2 {
			text-align: center;
		}
	}

	.reference {
		.image_wrapper {
			width: 50%;
			aspect-ratio: 16 / 9;
			position: relative;
			overflow: hidden;
			@include box;

			span {
				width: 100%;
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
			}
		}
	}
</style>
