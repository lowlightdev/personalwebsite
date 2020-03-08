<template>
  <div id="app">
    <Details />
  </div>
</template>

<script>
import Details from './components/Details.vue';

export default {
  name: 'App',
  components: {
    Details
  }
}
</script>

<style lang="scss">
html,body{
  width:100%;
  height:100%;
  margin:0;
  padding:0;
}
#app {
  width:100%;
  height:100%;
  text-align: center;
  display: flex;
  padding:25px;
  align-items: center;
}
</style>
