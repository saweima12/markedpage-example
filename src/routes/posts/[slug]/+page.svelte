<script lang="ts">
    import { siteConfig } from '$lib/store';
    // loading data.
    import { page } from '$app/stores';
    import { invalidate } from '$app/navigation'; 
    import type { PageData } from './$types';

    // loading pageData.
    export let data : PageData;

    $: ({metadata, content} = data);
    import { onContentUpdate } from 'markedpage/helper';
    onContentUpdate((payload: Record<string, any>) => {
        // update endpoint data.
        let slug = $page.params.slug;
        invalidate(`/api/posts/${slug}.json`);
    });


</script>

<svelte:head>
    <title>{metadata.title} | {$siteConfig.title}</title>
</svelte:head>

<div>
    <a href="/">Home</a>
</div>

{@html content}