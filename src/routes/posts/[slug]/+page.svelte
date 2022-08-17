<script lang="ts">
    import { siteConfig } from '$lib/store';
    // loading data.
    import type { PageData } from './$types';

    // loading pageData.
    export let data : PageData;
    $: ({metadata, content} = data);


</script>

<svelte:head>
    <title>{metadata.title} | {$siteConfig.title}</title>
</svelte:head>

<div>
    <a href="/">Home</a>
</div>

{@html content}