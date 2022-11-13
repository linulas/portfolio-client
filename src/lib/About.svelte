<script lang="ts">
	import { sections } from '$lib/helpers/store';
	import viewport from './helpers/viewport';

	export let about: About;

	const { title, text, skills } = about;
	const setInView = (inView: boolean) => {
		sections.set({ ...$sections, about: inView });
	};
</script>

<div id="about" use:viewport on:enter={() => setInView(true)} on:exit={() => setInView(false)}>
	<div class="intro">
		<h2>
			{title}
		</h2>
		<div>
			<p>{text}</p>
			<span> todo - add image </span>
		</div>
	</div>
	<div class="skills">
		<h3>Skills</h3>
		<p>
			{skills.text}
		</p>
		<div class="items">
			{#each skills.items as skill}
				<div>
					<p>
						{skill.text}
					</p>
					<span> todo - add getIcon function </span>
				</div>
			{/each}
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

	.skills {
		.items {
			p {
				color: $clr-skill;
			}
		}
	}
</style>
