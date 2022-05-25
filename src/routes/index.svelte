<script lang="ts" context="module">
    import type { Load } from '@sveltejs/kit';
    export const load : Load = async ({fetch}) => {
        const response = await fetch("/api/posts.json");
        const { list } = await response.json();

        return {
            props: {
                list
            }
        }

    }; 
</script>

<script lang="ts">
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