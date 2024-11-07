<script lang="ts">
  import Countdown from "./Countdown.svelte"
  import { countdownTimer } from "./countdown";
</script>

<Countdown />
<span>secend: {$countdownTimer}</span>
