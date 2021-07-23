<template>
    <div class="texting-area">
        <textarea ref="textingArea"
            v-model.trim="content"
            v-on:keyup="onKeyUp"
            placeholder="Message here..."
        ></textarea>
        <button @click="createMessage"><img src="@/assets/images/send-icon.png" alt=""></button>
    </div>
</template>


<script>
import { mapGetters } from 'vuex';

export default {
    name: 'TextingInput',
    data: function() {
        return {
            content: '',
            textingArea: null
        };
    },
    computed: {
        ...mapGetters(['getUser', 'getSocket', 'getRoom'])
    },
    methods: {
        createMessage() {
            if(this.content != '') {
                this.getSocket.emit('createMessage', {
                    userId: this.getUser._id,
                    roomId: this.getRoom._id,
                    token: this.getUser.token,
                    content: this.content
                });
                this.content = '';
                this.focusTextingArea();
            }
        },
        onKeyUp(e) {
            e.preventDefault();
            if (e.keyCode === 13 && !e.shiftKey) {
                this.createMessage();
            }
        },
        focusTextingArea(){
            this.$refs.textingArea.focus();
        }
    },
    mounted() {
        this.textingArea = this.$refs.textingArea;
        this.focusTextingArea();
    }
};
</script>