<template>
  <div>
    <!-- <app-header v:bind:프롭스 속성이름(하위) = "상위 컴포넌트의 데이터 이름"></app-header> -->
    <!-- v-on:위에서 보낸 이벤트 이름="실행시킬 함수 이름" -->
    <app-header v-bind:propsdata="str" v-on:renew="renewStr"></app-header>
  </div>
  <!-- template에는 무조건 하나의 요소만 있어야 함 -> 또다른 태그 추가 할 수 없음! (그 안에다 정의하는건 상관 없음) -->
</template>

<script>
// AppHeader.vue에 있는 값들이 AppHeader라는 변수에 담김!
import AppHeader from './components/AppHeader.vue';

export default {
  data: function() {
    return {
      str: 'Header'
    }
  },
  components: {
    'app-header': AppHeader
  },
  methods: {
    renewStr: function() {
      this.str = 'hi'
    }
  }
}
</script>

<style>

</style>