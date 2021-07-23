<template>
    <div class="modal" :class="{'open': getModalShow}">
      <div class="modal-content">
          <p>{{getModalMessage}}</p>
          <button @click="closeModal" class="close-btn">Close</button>
      </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'Modal',
    computed: {
        ...mapGetters(['getModalShow', 'getModalMessage'])
    },
    methods: {
        ...mapActions(['setShowModel']),
        closeModal() {
            this.$store.dispatch('setShowModel', false);
        }
    }
};
</script>