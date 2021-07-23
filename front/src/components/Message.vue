<template>
  <div class="message" :class="{ 'left-message': !mine, 'right-message': mine }">
    <div v-if="!mine" class="message-user">{{message.user.name}}</div>
    <div v-else class="flex-1"></div>
    <div class="message-content">{{message.content}}</div>
  </div>
</template>

<script>
export default {
    name: 'Message',
    props: ['message', 'mine']
};
</script>