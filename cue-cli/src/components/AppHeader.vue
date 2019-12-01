<template>
  <header>
      <h1>{{ propsdata }}</h1>
      <!-- v-on:click="실행할 메서드 이름" -->
      <button v-on:click="sendEvent">send</button>
  </header>
</template>

<script>
export default {
    props: ['propsdata'],
    methods: {
        sendEvent:function() {
            //emit 안에 이벤트 이름을 적음 (App에 이벤트를 보냄) -> app-header 태그가 이것을 받음
            this.$emit('renew')
        }
    }
}
</script>

<style>

</style>