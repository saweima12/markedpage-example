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