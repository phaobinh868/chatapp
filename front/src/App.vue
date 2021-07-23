<template>
    <div>
      <router-view/>
      <Model />
    </div>
</template>
<script>
import Model from '@/components/Model.vue';
export default {
  name: 'App',
  components: {
    Model
  }
}
</script>
<style>
  body{
    margin: 0;
    padding: 0;
    padding-top: 60px;
    overflow: hidden;
  }
  #app {
    font-family: "Inter", sans-serif;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>