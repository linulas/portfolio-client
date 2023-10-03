<script lang="ts">
	export let href = '';
</script>

<a {href} class="button">
	<slot />
</a>

<style lang="scss">
	@import './buttonBase.scss';

	a {
		display: inline-block;
		text-decoration: none;
	}
</style>
