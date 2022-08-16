<script lang="ts">
    throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

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