<script lang="ts">
  import { onMount } from 'svelte';
  import { countdownTimer, setCountdown } from './countdown'

  onMount(()=>{
    setCountdown(30)
  })
</script>

{$countdownTimer}