<script lang="ts">
	import { app } from './helpers/store';
	import viewport from './helpers/viewport';
	import Image from './Image.svelte';
	import SkeletonImage from './loading/SkeletonImage.svelte';
	import Reference from './Reference.svelte';
	import { spring } from 'svelte/motion';
	import Icon from './icons/Icon.svelte';
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	// props
	export let projects: Projects;

	//states
	let currentObject = 0;
	let previousObject = 0;
	let visible: { [key: number]: boolean } = {};

	projects.items.map((_, i) => {
		visible[i] = true;
	});

	// variables
	const leftImageSpring = {
		translate: 5,
		x: -1,
		y: 25,
		left: 15,
		right: -5,
		shadow: -6,
		leftScale: 1,
		rightScale: 0
	};
	const rightImageSpring = {
		translate: 100,
		x: 1,
		y: -25,
		left: -5,
		right: 0,
		shadow: 6,
		leftScale: 0,
		rightScale: 1
	};
	const springOptions = {
		stiffness: 0.1,
		damping: 0.25
	};
	const imageSpring = spring(rightImageSpring, springOptions);
	const { title, text, items } = projects;
	const images = items.map((p) => p.image);
	const projectsTechnique = items.map((p) => p.techniques);

	// reactive
	$: boxStyle = `box-shadow: ${$imageSpring.shadow}px 1px 10px -1px rgba(0, 0, 0, 1);`;
	$: imageAnimations = `transform: translate(${$imageSpring.translate}%, 50px) rotateX(${$imageSpring.x}deg) rotateY(${$imageSpring.y}deg);`;

	// functions
	const setInView = (inView: boolean) => {
		app.set({ ...$app, projects: inView });
	};

	const handleImage = (imgIndex: number) => {
		if (imgIndex < 0 || imgIndex >= images.length) return;

		if (imgIndex !== currentObject) {
			imageSpring.update(() => (imgIndex % 2 == 0 ? rightImageSpring : leftImageSpring));
		}

		previousObject = currentObject;
		currentObject = imgIndex;
	};

	// lifecycles
	onMount(() => {
		const mobile = document.getElementsByClassName('mobile');
		items.map((_, i) => {
			visible[i] = false;
			mobile
				.item(i)
				?.setAttribute('style', `opacity: 1; min-height: ${mobile.item(i)?.clientHeight};`);
		});
	});
</script>

<div id="projects" use:viewport on:enter={() => setInView(true)} on:exit={() => setInView(false)}>
	<div class="intro">
		<h2 use:viewport on:enter={() => previousObject != 0 && handleImage(0)}>
			{title}
		</h2>
		<p>
			{text}
		</p>
	</div>
	<div class="items">
		<div class="obj_background">
			<div class={`obj`} style={imageAnimations}>
				<div class={`image_wrapper`} style={boxStyle}>
					{#key currentObject}
						<Image name={images[currentObject].name} sizes="50vw">
							<SkeletonImage slot="fallback" />
						</Image>
					{/key}
				</div>
				<div class="overlay" style={`left: ${$imageSpring.left}%;${boxStyle}`}>
					<div class="background_image">
						<Image name="code" />
					</div>
					<div class="tech_wrapper">
						{#each projectsTechnique as techs, i}
							<div class="tech" class:active={i === currentObject ? 1 : 0}>
								{#each techs as tech}
									<div
										style={`transform: scale(${
											i % 2 === 0 ? $imageSpring.rightScale : $imageSpring.leftScale
										})`}
									>
										<span class="icon">
											<Icon name={tech.icon.name} color="pink" size="xs" />
										</span>
										<p>{tech.title}</p>
									</div>
								{/each}
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
		{#each items as project, i}
			{@const textDirection = i % 2 == 0 ? 'left' : 'right'}
			<div class={`project ${textDirection}`}>
				<div
					class="content"
					use:viewport
					on:enter={() => handleImage(i)}
					on:exit={() => {
						if (i != previousObject) {
							handleImage(previousObject);
						}
					}}
				>
					<h3>
						{project.title}
					</h3>
					<div class={`mobile`} use:viewport on:enter={() => (visible[i] = true)}>
						{#if visible[i]}
							<div
								class={`image_wrapper`}
								in:fly={{ x: textDirection === 'left' ? 500 : -500, duration: 500 }}
							>
								<Image name={project.image.name} sizes="100%">
									<SkeletonImage slot="fallback" />
								</Image>
							</div>
						{/if}
					</div>
					<p>
						{project.text}
					</p>
					<div class="reference">
						{#if project.reference}
							<span>
								<Reference reference={project.reference} />
							</span>
						{/if}
					</div>
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

	.items {
		position: relative;
		margin-top: 2rem;
		h3 {
			margin-top: 0;
		}
	}

	.project {
		width: 100%;
		margin-bottom: 3rem;
	}

	.image_wrapper {
		aspect-ratio: 16 / 9;
		overflow: hidden;
		@include box;
	}

	.obj_background,
	.overlay {
		display: none;
	}

	.mobile {
		opacity: 0;
	}

	@media screen and (min-width: $media-sm) {
		.reference {
			width: 50%;
		}
	}

	@media screen and (min-width: $media-md) {
		.mobile {
			display: none;
		}
		.obj_background {
			position: sticky;
			top: 27.5vh;
			display: flex;
			align-items: flex-start;
			perspective: 1800px;
			width: 100%;
			height: 500px;
		}
		.obj {
			position: relative;
			width: 49%;
			will-change: transform;
			transform-style: preserve-3d;
		}
		.items {
			margin-bottom: 8rem;
		}
		.project {
			position: relative;
			z-index: 50;
			width: 45%;

			&:not(:last-of-type) {
				margin-bottom: 80vh;
			}

			&:nth-of-type(2) {
				margin-top: -500px;
			}

			&.left {
				float: left;
				padding-right: 25%;
			}

			&.right {
				float: right;
				padding-left: 25%;
			}
		}

		.content {
			.wrapper {
				opacity: 0;
				transition: opacity 0.2s;
				&.visible {
					opacity: 1;
				}
			}
		}
		.overlay {
			display: block;
			position: absolute;
			background-color: $clr-bg-0;
			top: 30%;
			width: 90%;
			aspect-ratio: 16 / 9;
			@include box;
			overflow: hidden;

			.background_image {
				width: 100%;
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
			}

			.tech_wrapper {
				width: 65%;
				height: 100%;
				position: relative;
				z-index: 80;
				float: right;
			}

			.tech {
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				width: 95%;
				display: grid;
				grid-template-columns: repeat(auto-fit, minmax(3rem, 1fr));
				gap: 1.75rem;
				transition: all 0.2s ease-in-out;
				opacity: 0;

				&.active {
					opacity: 1;
				}

				div {
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
				}

				span {
					height: 2.75rem;
					width: 2.75rem;
					display: flex;
					justify-content: center;
					align-items: center;
					background-color: $clr-bg-0;
					@include box;
				}

				p {
					font-size: 0.75rem;
					margin: 0;
				}
			}
		}
	}

	@media screen and (min-width: $media-lg) {
		.overlay {
			.tech {
				grid-template-columns: repeat(auto-fit, minmax(3.75rem, 1fr));
				row-gap: 2rem;
				column-gap: 2rem;

				span {
					height: 3.75rem;
					width: 3.75rem;
				}
			}
		}
	}
</style>
