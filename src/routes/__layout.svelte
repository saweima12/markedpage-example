<script lang="ts" context="module">
    import type { Load } from '@sveltejs/kit';
    import { siteConfig } from '$lib/store';
    export const load : Load = async ({fetch}) => {

        const response = await fetch("/api/config.json");
        const data: Record<string, any> = await response.json();
        siteConfig.set(data);

        return {
        }

    }; 
</script>

<div class="main-wrapper">
    <slot />
</div>