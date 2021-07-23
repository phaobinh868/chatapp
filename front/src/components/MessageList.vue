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
      var that = this;
      this.timeoutScroll = setTimeout(function(){
        if(that.scrollArea.scrollTop < 20 && that.scrollArea.scrollHeight - that.scrollArea.clientHeight > 0){
          console.log("loadMoreMessage");
          that.getSocket.emit('loadMoreMessage', {
            roomId: that.getRoom._id,
            lastCreatedAt: that.lastCreatedAt
          });
        }
      }, 1000);
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

<style>
.message-area {
  padding: 0px 16px;
  overflow: auto;
}
.message {
  margin-top: 26px;
  font-size: 14px;
  width: 100%;
}
.message:first-child {
  margin-top: 0;
}
.message.left-message {
}
.message.right-message {
  display: flex;
}
.message .message-user {
  text-align: left;
  margin: 0;
  margin-bottom: 8px;
}
.message .message-content {
  padding: 16px;
  text-align: left;
  width: 60%;
  border-radius: 10px;
  position: relative;
}
.message.left-message .message-content {
  background: #f6f6f6;
  border-bottom-left-radius: 0;
}
.message.right-message .message-content {
  float: right;
  text-align: right;
  background: #5db075;
  color: #fff;
  border-bottom-right-radius: 0px;
}
.message .message-content:after {
  content: " ";
  position: absolute;
  width: 0;
  height: 0;
  bottom: -20px;
  border: 12px solid;
}
.message.left-message .message-content:after {
  right: auto;
  left: 0px;
  border-color: #f6f6f6 transparent transparent #f6f6f6;
}
.message.right-message .message-content:after {
  left: auto;
  right: 0px;
  border-color: #5db075 #5db075 transparent transparent;
}
</style>
