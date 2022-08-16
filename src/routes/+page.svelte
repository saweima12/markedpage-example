<script lang="ts">
    throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

    import { siteConfig } from '$lib/store';
    export let list: Array<Record<string, any>>;
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