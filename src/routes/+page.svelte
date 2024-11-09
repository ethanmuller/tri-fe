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

<main>
	{#each data.posts as post}
	  {#if isPublic(post.tags) && isAudio(post.tags) && post.file}
	    <div class="c-post"><audio controls src="{post.file.url}"></audio><div class="c-post__text">{post.notes}</div><a href="{post.file.url}" class="c-post__dl"><img src="/audio/download.gif" alt="download" /></a></div>
	  {/if}
	{/each}
</main>
