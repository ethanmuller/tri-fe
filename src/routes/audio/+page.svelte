<script lang="ts">
  import type { PageData } from './$types';
  export let data: PageData;

  function isTagApplied(tags, tag) {
    return tags.includes(tag);
  }

  function isPublic(tags) {
    return isTagApplied(tags, 'public')
  }

  function isAudio(tags) {
    return isTagApplied(tags, 'audio')
  }

  function isLoop(tags) {
    return isTagApplied(tags, 'loop')
  }

</script>

{#each data.posts as post}
  {#if isPublic(post.tags) && isAudio(post.tags)}
    <div class="c-post"><audio controls src="{post.file.url}"></audio>{post.notes}</div>
  {/if}
{/each}
