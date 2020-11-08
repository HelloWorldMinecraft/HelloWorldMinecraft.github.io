<template>
  <div style="margin-left: 10%; margin-right: 10%">
    <b-card bg-variant="transparent" text-variant="light" border-variant="dark">
      <Servers/>
    </b-card>

    <br/>

    <b-card id="" bg-variant="transparent" align="left" text-variant="light" border-variant="dark">
      <Features/>
    </b-card>
  </div>
</template>

<script>
import Servers from "./Servers.vue"
import Features from "./Features.vue"

export default {
  components: { Servers, Features },
  name: 'MainPage'
}
</script>

<style scoped>

.card-body {
  background-color: rgb(0, 0, 0, 0.6);
}
</style>
