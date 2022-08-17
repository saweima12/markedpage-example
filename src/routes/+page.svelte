<script lang="ts">
    import { siteConfig } from '$lib/store';
    // loading data.
    import type { PageData } from './$types';
    export let data: PageData;
    $: ({ list } = data);
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