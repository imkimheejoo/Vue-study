<template>
  <div>
    <form v-on:submit.prevent="submitForm">
      <div>
        <!-- label 의 for값과 input 의 id 를 맞추면 자동으로 한 쌍이 됨  -->
        <label for="username">id: </label>
        <!-- v-model : input값의 내용을 바로 데이터로 반영 (반대도 가능)-->
        <input id="username" type="text" v-model="username">
      </div>
      <div>
        <label for="password">pw: </label>
        <input id="password" type="password" v-model="password">
      </div>
      <button type="submit">login</button>
    </form>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  // data 속성에는 객체를 많이 썼지만 component단위 개발에는 컴포넌트간 데이터가 공유 되지 않게 function을 이용해서 새 객체를 리턴하게 해야 함!
  data: function() {
    return {
      username: '',
      password: '',
    }
  },
  methods:{
    submitForm: function() {
      // 새로고침을 막기 위한 것
      // event.preventDefault() -> vue 쓰면 이거 할 필요 X

      //서버에 포스트로 전송해보는 법 http 통산 라이브러리 -> axios:브라우저에서 서버로 어떤 데이터를 주고 받기 위한 라이브러리
      // post: 데이터를 생성하거나 조작할때 쓰는 http 통신 방법
      var url = 'https://jsonplaceholder.typicode.com/users'; //이 url로 데이터를 보내고 결과를 받을 수 있음
      var data = {
        username: this.username,
        password: this.password
      }
      axios.post(url, data)
      .then(function(response) {
        console.log(response);
        
      }).catch(function(error) {
        console.log(error);
        
      })
      
    }
  }
}
</script>

<style>

</style>