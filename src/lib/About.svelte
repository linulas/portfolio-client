<script lang="ts">
	import { sections } from '$lib/helpers/store';
	import Grid from './Grid.svelte';
	import viewport from './helpers/viewport';
	import Icon from './icons/Icon.svelte';
	// import portrait from '$lib/images/portrait.webp';
	// import portrait_fallback from '$lib/images/portrait.jpg';

	export let about: About;

	const { title, text, skills } = about;
	const setInView = (inView: boolean) => {
		sections.set({ ...$sections, about: inView });
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
		<div class="box">
			<Grid>
				{#each skills.items as skill}
					<div class="item">
						<span class="title">
							<Icon name={skill.icon.name} color="cyan" size="md" />
							<h4>
								{skill.text}
							</h4>
						</span>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rhoncus dictum magna,
							vitae feugiat quam feugiat non. Duis a lobortis magna, imperdiet accumsan augue.
							Maecenas sit amet imperdiet magna. In erat dolor, luctus eu fermentum at, consectetur
							in sapien.
						</p>
					</div>
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
		> p {
			margin-bottom: 3rem;
		}
		.box {
			@include box;
			padding: 1rem;
			background: $clr-bg-0;
		}
		.item {
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
