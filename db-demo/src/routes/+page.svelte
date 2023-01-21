<script lang="ts">
  import type { PageData } from './$types';
  export let data: PageData;
</script>

 <div>
    <h1>Todo List</h1>
    {#each data.todos as item}
        <div>
            {#if  item.done == false}             
                <span> - {item.text}</span>
            {/if}
        </div>
    {/each}
  </div>
