<template>
  <div class="message-alert">
    <div class="alert alert-dismissible"
      :class="'alert-' + item.status"
      v-for="(item, i) in messages" :key="i">
      {{ item.message }}
      <button type="button" class="close" @click="removeMessage(i)" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Navbar',
  data() {
    return {
    };
  },
  methods: {
    updateMessage(message, status) {
      this.$store.dispatch('alertMessageModules/updateMessage', { message, status });
    },
     ...mapActions('alertMessageModules', ['removeMessage', 'removeMessageWithTiming']),
  },
  computed:{
    ...mapGetters('alertMessageModules', ['messages']),
  },
  created() {
     const vm = this;

    // 自定義名稱 'messsage:push'
    // message: 傳入參數
    // status: 樣式，預設值為 warning
    // vm.$bus.$on('message:push', (message, status = 'warning') => {
    // vm.updateMessage(message, status);
     //});
    // vm.$bus.$emit('message:push');
  },
};
</script>

<style lang="scss">
.message-alert {
  position: fixed;
  max-width: 50%;
  top: 56px;
  right: 20px;
  z-index: 1100;
}
</style>