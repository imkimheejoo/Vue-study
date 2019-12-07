<template>
    <div>
        <header>
            <h1>TODO!</h1>
        </header>

        <form v-on:click.prevent="createTodo">
            <input type="text" id="message" placeholder="할 일을 입력해 주세요." v-model="message">
            <button class="btn btn-danger" @click="sendMessage">Add</button>
        </form>

        <todo-list v-bind:msg="todo"></todo-list>
        <div class="container">
            <div class="row">
                <Card class="col-lg-3 m-2" v-for="(value,index) in array" :key="index"/>
            </div>
        </div>
    </div>
</template>

<script>
    import TodoList from "./components/TodoList";
    import Card from "./components/Card";

    export default {
        name: "App",
        data: function () {
            return {
                array: ['a', 'b', 'c', 'd'],
                message: '',
                todo: ''
            }
        },
        components: {
            TodoList,
            Card
        },
        methods: {
            createTodo: function () {
                this.$emit('submitMessage')
            },
            sendMessage() {
                this.todo = this.message;
                window.console.log(this.todo)
            }
        }
    }
</script>

<style scoped>

</style>