<script lang="ts">
  import { fetchWords } from "$lib/sheet";
</script>

<h1>test for english</h1>
<h1>ทดสอบภาษาไทย</h1>

<table class="border-2">
  <thead>
    <tr>
      <th>Word</th>
      <th>part of speech</th>
    </tr>
  </thead>
  <tbody>
    {#await fetchWords()}
      <p>loading...</p>
    {:then words}
      {#each words as word}
        <tr>
          <td>{word.word}</td>
          <td>{word.type}</td>
        </tr>
      {/each}
    {:catch error}
      <p>{error.message}</p>
    {/await}
  </tbody>
</table>
