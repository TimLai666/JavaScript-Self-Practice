<script lang="ts">
  import { afterUpdate, onDestroy, onMount } from "svelte";

  // 預設是10
  export let countDown: number = 10;
  let timer: number;
  const arr = [1, 2, 3, 4];

  // 00:xx
  $: displayValue = `00:${countDown.toString().padStart(2, "0")}`;

  onMount(() => {
    timer = setInterval(() => {
      countDown--;
    }, 1000);
  });

  afterUpdate(() => {
    if (countDown === 0) {
      if (timer) {
        clearInterval(timer);
        timer = 0;
      }
    }
  });

  onDestroy(() => {
    if (timer) {
      clearInterval(timer);
    }
  });
</script>

<h1>{displayValue}</h1>

{#each arr as num }
  <span>{num}</span>
  <br/>
{/each}

{#if countDown === 0}
  <h2>時間到</h2>
{/if}
