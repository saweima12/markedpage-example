<script lang="ts">
    import { invalidate } from '$app/navigation';
    import { siteConfig } from '$lib/store';
    
    import type { PageData } from './$types';
    // loading data.
    export let data: PageData;
    $: ({ list } = data);

    import { onContentUpdate } from 'markedpage/helper';
    onContentUpdate((payload: Record<string, any>) => {
        // update endpoint data.
        invalidate(`/api/posts.json`);
    });

</script>

<svelte:head>
    <title>{$siteConfig.title}</title>
</svelte:head>

{#each list as page}
<div>
    <section class="page-block">
        <a href="/posts/{page.slugKey}">
            <h2 class="page-title">
                {page.frontMatter.title}
            </h2>
        </a>
        <div class="excerpt">
            {page.frontMatter.excerpt}
        </div>
    </section>
    </div>
{/each}

<style>
    .page-block {
        margin: 1rem .5rem;
    }
</style>