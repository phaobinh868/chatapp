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
<style scoped>
    .modal{
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: #00000052;
        margin: auto;
        display: none;
    }
    .modal.open{
        display: flex;
    }
    .modal .modal-content{
        width: 320px;
        max-width: 100%;
        margin: auto;
        background: #ffffff;
        padding: 16px;
        border-radius: 5px;
        box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
    }
    .modal .close-btn{
        text-transform: uppercase;
        height: 50px;
        background: #5DB075;
        border-radius: 100px;
        padding: 16px 32px;
        color: #ffffff;
        font-weight: 600;
        font-size: 16px;
        border: 0;
        cursor: pointer;
    }
</style>