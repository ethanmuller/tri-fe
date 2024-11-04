<script lang="ts">
  import type { PageData } from './$types';
  export let data: PageData;
</script>

{#each data.posts as post}
  <p><audio controls src="{post.file.url}">{post.notes}</audio></p>
{/each}
