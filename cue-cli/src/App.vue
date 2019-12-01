<template>
  <div>
    {{str}}
  </div>
  <!-- template에는 무조건 하나의 요소만 있어야 함 -> 또다른 태그 추가 할 수 없음! (그 안에다 정의하는건 상관 없음) -->
</template>

<script>
export default {
  data: function() {
    return {
      str: 'hi'
    }
  }
}
</script>

<style>

</style>