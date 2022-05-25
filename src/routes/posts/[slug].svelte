<script lang="ts" context="module">
    import type { Load } from '@sveltejs/kit';
    export const load : Load = async ({fetch, params}) => {
        const { slug } = params;

        const response = await fetch(`/api/posts/${slug}.json`);
        const { metadata, content, raw } = await response.json();

        return {
            props: {
                metadata,
                content,
            }
        }

    }; 
</script>

<script lang="ts">
    import { siteConfig } from '$lib/store';
    export let metadata: Record<string, any>;
    export let content: string;
</script>

<svelte:head>
    <title>{metadata.title} | {$siteConfig.title}</title>
</svelte:head>

<div>
    <a href="/">Home</a>
</div>

{@html content}