<script lang="ts">
	import { app } from '$lib/store';
	import Grid from './Grid.svelte';
	import viewport from '$lib/viewport';
	import Icon from './icons/Icon.svelte';
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	export let about: About;

	let visible = true;

	const { title, text, skills } = about;
	const setInView = (inView: boolean) => {
		app.set({ ...$app, about: inView });
	};

	onMount(() => {
		const grid = document.getElementById('grid_wrapper');
		if (grid) {
			grid.style.minHeight = `${grid?.clientHeight || 715}px`;
		}
    visible = false;
    grid && (grid.style.opacity = "1");
	});
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
		<div id="grid_wrapper" use:viewport on:enter={() => (visible = true)}>
			<Grid>
				{#each skills.items as skill, i}
					{#if visible}
						<div class="item" in:fly={{ y: 200, duration: i * 500 }}>
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
					{/if}
				{/each}
			</Grid>
		</div>
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
		#grid_wrapper {
			height: 100%;
      opacity: 0;
		}
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
