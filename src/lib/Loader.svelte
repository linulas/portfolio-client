<script lang="ts">
	import type { ValidIconSize } from './icons/Icon.svelte';
	export let size: ValidIconSize = 'lg';
</script>

<div class={`lds-ripple size-${size}`}>
	<div />
	<div />
</div>
