// 싱글 파일 컴포넌트 vue치고 엔터하면 됨
//싱글 파일 컴포넌트 : HTML, JS, CSS를 한 파일에 관리하는 것
<template>
  <!-- HTML -->
<!-- 템플릿 속성에 넣었던 것을 모두 여기에 넣으면 됨 -->
  <!-- var appHeader ={
    template:'<div>header</div>'} 이것과 밑이 동일-->
  <div>header</div>

</template>

<script>
export default {
// 자바스크립트
// methods: {
//     addNum: function() {

//     }
// } 과 같은 것들은 export default 안에 넣으면 됨
    methods: {
        addNum: function() {
        }
    }
}
</script>

<style>
/* CSS */
</style>