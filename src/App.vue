<template>
  <div class="container">
    <nav-bar></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  components: {
    'nav-bar': NavBar
  },
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>
  .container{
    width: 90%;
    margin: 0 auto;
    background: lightgray;
  }
</style>
