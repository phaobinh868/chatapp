<template>
  <div class="flex-1 message-area" ref="scrollArea">
    <template v-if="messages && messages.length">
    <Message v-for="message in messages" :key="message._id" :message="message" :mine="message.user._id == getUser._id?true:false" />
    </template>
    <p v-else>There are no messages yet</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Message from "@/components/Message.vue";

export default {
  name: "MessageList",
  props: ['messages'],
  data: function() {
      return {
          scrollArea: null,
          loaded: false,
          lastCreatedAt: null,
          timeoutScroll: null
      };
  },
  components: {
    Message,
  },
  computed: {
    ...mapGetters(["getUser", "getSocket", "getRoom"])
  },
  methods: {
    scrollToLast() {
      this.scrollArea.scrollTop = this.scrollArea.scrollHeight - this.scrollArea.clientHeight;
    },
    handleScroll(){
      clearTimeout(this.timeoutScroll);
      if(this.scrollArea.scrollTop < 20 && this.scrollArea.scrollHeight - this.scrollArea.clientHeight > 0){
        this.timeoutScroll = setTimeout(() => {
            this.getSocket.emit('loadMoreMessage', {
              roomId: this.getRoom._id,
              lastCreatedAt: this.lastCreatedAt
            });
        }, 1000);
      }
    }
  },
  mounted() {
    this.scrollArea = this.$refs.scrollArea;
    this.scrollToLast();
    this.scrollArea.addEventListener('scroll', this.handleScroll);
  },
  updated() {
    if((this.scrollArea.scrollHeight - this.scrollArea.clientHeight)-this.scrollArea.scrollTop < 200 || !this.loaded) this.scrollToLast();
    this.loaded = true;
    if(this.messages.length) this.lastCreatedAt = this.messages[0].createdAt;
  },
  unmounted () {
    this.scrollArea.removeEventListener('scroll', this.handleScroll);
  },
};
</script>