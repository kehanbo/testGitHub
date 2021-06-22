<template>
  <div id="app">
    <home></home>
  </div>
</template>

<script>
import home from './page/home.vue'

export default {
  name: 'App',
  components: {
    home
  }
}
</script>

<style>
#app{
  height: 100%;
  width: 100%;
}
</style>
