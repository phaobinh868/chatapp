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
<style lang="scss">
  @import "@/assets/scss/app.scss";
</style>