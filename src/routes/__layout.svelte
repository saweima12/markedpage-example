<script lang="ts" context="module">
    import type { Load } from '@sveltejs/kit';
    import { siteConfig } from '$lib/store';
    export const load : Load = async ({fetch}) => {
        const response = await fetch("/api/config.json");
        const data: Record<string, any> = await response.json();
        siteConfig.set(data); 
        return { }
    }; 
</script>

<script lang="ts">
    import { invalidate } from '$app/navigation';
    import { page } from '$app/stores';
    import { onContentUpdate } from 'markedpage';

    onContentUpdate((payload: Record<string, any>) => {
        let slug = $page.params.slug;
        // update endpoint data.
        invalidate(`/api/posts.json`);
        invalidate(`/api/posts/${slug}.json`);
    });
</script>

<div class="main-wrapper">
    <slot />
</div>