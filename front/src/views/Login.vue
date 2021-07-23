<template>
  <div>
    <form @submit.prevent="login" class="login-area">
      <div class="flex-1">
        <h1>Join Chatroom</h1>
        <input type="text" class="form-input" placeholder="Username" v-model.trim="name" name="name">
        <input type="text" class="form-input" placeholder="RoomID" v-model.trim="roomId" name="roomId">
      </div>
      <button type="submit" class="join-btn">Join</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'Login',
  data: function() {
      return {
          name: '',
          roomId: '',
          token: ''
      };
  },
  computed: {
      ...mapGetters(['getUser', 'getRoom', 'getServerUrl'])
  },
  created() {
    if(this.getUser){
      this.name = this.getUser.name
      this.token = this.getUser.token
    }
    if(this.getRoom){
      this.roomId = this.getRoom.id
    }
  },
  methods: {
    ...mapActions(['setUser', 'setAuth', 'setRoom']),
    login() {
      if (this.name && this.roomId) {
          axios.post(this.getServerUrl + '/api/join-room', {
            name: this.name,
            roomId: this.roomId,
            token: this.token
          }).then(res => {
            if (res.data.msg) {
              this.$store.dispatch('setShowModel', true);
              this.$store.dispatch('setMessageModel', res.data.msg);
            } else {
              this.$store.dispatch('setAuth', true);
              this.$store.dispatch('setUser', res.data.user);
              this.$store.dispatch('setRoom', res.data.room);
              this.$router.push({
                  name: 'ChatRoom'
              });
            }
          });
      } else {
        this.$store.dispatch('setShowModel', true);
        this.$store.dispatch('setMessageModel', "Username or RoomID cann't empty!");
      }
    }
  }
}
</script>
<style scoped>
  .login-area{
    padding-left: 16px;
    padding-right: 16px;
    height: calc(100vh - 60px);
    display: flex;
    flex-direction: column;
  }
  .login-area .flex-1{
    flex: 1;
  }
  .login-area h1 {
    font-weight: 600;
    font-size: 30px;
    line-height: 36px;
    color: #000000;
    margin-bottom: 32px;
  }
  .login-area input.form-input {
    background: #f6f6f6;
    border: 1px solid #e8e8e8;
    box-sizing: border-box;
    border-radius: 8px;
    width: 100%;
    height: 50px;
    padding: 16px;
    margin-bottom: 16px;
  }
  .login-area .join-btn{
    text-transform: uppercase;
    margin-bottom: 60px;
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
  .login-area .join-btn:hover{
    opacity: 0.8;
  }
</style>