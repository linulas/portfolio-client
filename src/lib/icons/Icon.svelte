<script lang="ts">
	import Github from './github.svelte';
	export let name: ValidIcon;
	export let color: ValidIconColor = 'foreground';
	export let clickable = false;
</script>

{#if name === 'github'}
	<Github {color} {clickable} />
{/if}
