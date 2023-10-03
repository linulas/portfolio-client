<script lang="ts">
	import { PUBLIC_SUPPORT_EMAIL } from '$env/static/public';
	import { page } from '$app/stores';

	const isRootPath = $page.url.pathname === '/';
</script>

<div class="container">
	{#if $page.status >= 500}
		<h1>Oh no 😔</h1>
		<p>Well, this wasn't supposed to happen.</p>
	{:else}
		<h1>{$page.status}</h1>
		<p>{$page.error?.message}</p>
	{/if}
	{#if PUBLIC_SUPPORT_EMAIL && isRootPath}
		<p>
			If this error persists, please email me at <a href="mailto:{PUBLIC_SUPPORT_EMAIL}">
				{PUBLIC_SUPPORT_EMAIL}
			</a>
		</p>
	{/if}
</div>
