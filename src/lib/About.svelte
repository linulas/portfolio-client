<script lang="ts">
	import { app } from '$lib/helpers/store';
	import Grid from './Grid.svelte';
	import viewport from './helpers/viewport';
	import Icon from './icons/Icon.svelte';
	// import portrait from '$lib/images/portrait.webp';
	// import portrait_fallback from '$lib/images/portrait.jpg';

	export let about: About;

	const { title, text, skills } = about;
	const setInView = (inView: boolean) => {
		app.set({ ...$app, about: inView });
	};
</script>

<div id="about" use:viewport on:enter={() => setInView(true)} on:exit={() => setInView(false)}>
	<div>
		<h2>
			{title}
		</h2>
		<p class="preamble">{text}</p>
	</div>
	<div class="skills">
		<h3>Skills</h3>
		<p class="skills--intro">
			{skills.text}
		</p>
		<Grid>
			{#each skills.items as skill}
				<div class="item">
					<span class="title">
						<Icon name={skill.icon.name} color="cyan" size="md" />
						<h4>
							{skill.title}
						</h4>
					</span>
					<p>
						{skill.text}
					</p>
				</div>
			{/each}
		</Grid>
	</div>
</div>

<style lang="scss">
	#about {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
	h2 {
		text-align: center;
	}
	.skills {
		> p {
			margin-bottom: 3rem;
		}
		.item {
			@include box;
			padding: 1rem;
			background: $clr-bg-0;
			h4 {
				color: $clr-skill;
				margin: 0;
				padding-left: 1rem;
			}
			.title {
				display: flex;
				align-items: center;
			}
		}
	}
</style>
