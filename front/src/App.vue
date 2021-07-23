<template>
    <div id="app">
      <router-view/>
      <Model />
    </div>
</template>
<script>
import Model from '@/components/Model.vue';
export default {
  name: 'App',
  data() {
    return {
      windowHeight: window.innerHeight
    }
  },
  components: {
    Model
  },
  mounted() {
      this.$nextTick(() => {
          window.addEventListener('resize', this.onResize);
      })
      this.onResize();
  },

  unmount() { 
      window.removeEventListener('resize', this.onResize); 
  },

  methods: {  
      onResize() {
          this.windowHeight = window.innerHeight
          document.querySelector("body").style.height = this.windowHeight + "px";
      }
  }
}
</script>
<style>
  body{
    margin: 0;
    padding: 0;
  }
  #root{
    height: 100%;
  }
  #app {
    font-family: "Inter", sans-serif;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    padding-top: 60px;
    height: calc(100% - 60px);
  }
</style>