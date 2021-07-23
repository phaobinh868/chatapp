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
      var socket = io(this.getServerProxy, {
        secure: true,
        reconnect: true,
        rejectUnauthorized : false
      });
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