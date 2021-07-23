<template>
  <div class="chat-area">
    <div class="chat-header">
      <a class="exit-btn" @click="logout">Exit</a>
      <h1>{{getRoom.id}}</h1>
    </div>
    <MessageList :messages="messages" />
    <TextingInput />
  </div>
</template>

<script>
import MessageList from '@/components/MessageList.vue';
import TextingInput from '@/components/TextingInput.vue';
import { mapActions, mapGetters } from 'vuex';
import io from 'socket.io-client';

export default {
  name: 'ChatRoom',
  components: {
      MessageList,
      TextingInput
  },
  data: function() {
      return {
          room: [],
          users: [],
          messages: []
      };
  },
  computed: {
      ...mapGetters(['getUser', 'getRoom', 'getSocket', 'getServerProxy'])
  },
  methods: {
    ...mapActions(['setAuth', 'setSocket']),
    logout() {
      this.$store.dispatch('setAuth', false);
      this.getSocket.emit('leaveRoom', {
        roomId: this.getRoom._id
      });
      this.$store.dispatch('setSocket', null);
      this.$router.push({
        name: 'Login'
      });
    },
    connectSocket() {
      var socket = io(this.getServerProxy);
      this.$store.dispatch('setSocket', socket);
    }
  },
  created() {
    this.connectSocket();
    this.getSocket.emit('joinRoom', {
      roomId: this.getRoom._id
    });
    this.getSocket.on('messages', data => {
      this.messages = this.messages.concat(data.reverse()); 
    });
    this.getSocket.on('moreMessages', data => {
      this.messages = data.reverse().concat(this.messages); 
    });
  }
}
</script>

<style>
  .chat-area{
    height: calc(100vh - 60px);
    display: flex;
    flex-direction: column;
  }
  .chat-area .texting-area textarea:focus-visible{
    outline: none;
  }
  .chat-area .texting-area textarea{
    font-family: "Inter", sans-serif;
    background: #F6F6F6;
    border: 1px solid #E8E8E8;
    box-sizing: border-box;
    border-radius: 100px;
    width: 100%;
    padding: 14px;
    height: 100%;
    font-weight: 500;
    font-size: 16px;
    overflow: hidden;
    resize: none;
  }
  .chat-area .texting-area button{
    position: absolute;
    right: 8px;
    top: 8px;
    padding: 10px;
    border-radius: 50%;
    border: 0;
    background: #5DB075;
    height: 34px;
    width: 34px;
  }
  .chat-area .texting-area{
    margin: 16px;
    position: relative;
    height: 50px;
  }
  .chat-area .flex-1{
    flex: 1;
  }
  .chat-area .chat-header{
    position: relative;
    align-items: center;
    padding: 0px 16px;
    margin-bottom: 16px;
  }
  .chat-area .chat-header h1 {
    font-weight: 600;
    font-size: 30px;
    line-height: 36px;
    color: #000000;
    margin: 0px;
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-left: 30px;
    padding-right: 30px;
  }
  .exit-btn{
    font-weight: 500;
    font-size: 16px;
    color: #5DB075;
    text-decoration: none;
    position: absolute;
    left: 16px;
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
</style>
