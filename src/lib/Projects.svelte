<script lang="ts">
	import { sections } from './helpers/store';
	import viewport from './helpers/viewport';

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
					<span>
						{project.image.name}
					</span>
					<span>
						<p>
							{project.reference?.text}
						</p>
						<a href={project.reference?.link}>{project.reference?.linkText}</a>
					</span>
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
		height: 2000px;
	}

	.intro {
		width: 100%;
		h2 {
			text-align: center;
		}
	}
</style>
