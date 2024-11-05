<script lang="ts">
  import type { PageData } from './$types';
  export let data: PageData;
</script>

{#each data.posts as post}
  <div class="c-post"><audio controls src="{post.file.url}"></audio>{post.notes}</div>
{/each}
