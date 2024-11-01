<script lang="ts">
  import {afterUpdate, onDestroy, onMount} from 'svelte'

  let countDown: number = 10
  let timer: number

  onMount(() => {
    timer = setInterval(() => {
      countDown--
    }, 1000)
  })

  afterUpdate(() => {
    if (countDown === 0) {
      if (timer) {
        clearInterval(timer)
        timer = 0
      }
    }
  })

  onDestroy(() => {
    if (timer) {
      clearInterval(timer)
    }
  })
</script>

<h1>{countDown}</h1>