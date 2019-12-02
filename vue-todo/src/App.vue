<template>
    <div>
        <header>
            <h1>TODO!</h1>
        </header>

        <form v-on:click.prevent="createTodo">
            <input type="text" id="message" placeholder="할 일을 입력해 주세요." v-model="message">
            <button @click="sendMessage">Add</button>
        </form>

        <todo-list v-bind:msg="asdasdfa"></todo-list>


    </div>
</template>

<script>
    import TodoList from "./components/TodoList";

    export default {
        name: "App",
        data: function () {
            return {
                message: '',
                asdasdfa: []
            }
        },
        components: {
            TodoList,
        },
        methods: {
            createTodo: function () {
                document.getElementById('message')
                this.$emit('submitMessage')
            },
            sendMessage() {
                this.asdasdfa.push(this.message);
                window.console.log(this.message)
            }
        }
    }
</script>

<style scoped>

</style>