<template>
    <div class="container text-center">
        <header>
            <h1>TODO!</h1>
        </header>
        <!--        v-on:하위 컴포넌트에서 발생한 이벤트이름="상위 컴포넌트 메서드 이름"-->
        <input-form v-on:create="inputTodo" class="m-3"></input-form>
        <div class="row justify-content-center">
            <div class="col-lg-3 m-2" v-for="(value,index) in todos" v-bind:key="index">
                <!--            value라는 객체를 하위타입의 'data'로 보내겠습니다.-->
                <card v-bind:data="value" v-on:remove="removeTodo"></card>
            </div>
        </div>
    </div>
</template>

<script>
    import Card from "./components/Card";
    import InputForm from "./components/Input";

    export default {
        name: "App",
        components: {
            Card, InputForm
        },
        data: function () {
            return {
                todos: []
            }
        },
        methods: {
            inputTodo: function (todo) {
                this.todos.push(todo);
            },
            removeTodo: function (todo) {
                this.todos.splice(this.todos.indexOf(todo),1)
            }
        }
    }
</script>
<style scoped>
</style>