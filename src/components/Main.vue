<template>
  <div>
      <h2>Main page</h2>
      <input type="text" v-model='name'>
  </div>
</template>

<script>
export default {
  computed : {
    name : {
      get(){
        return this.$store.state.name;
      },
      set(value){
        this.$store.commit('changeName', value);
      }
    }
  }
}
</script>

<style scoped>

</style>


