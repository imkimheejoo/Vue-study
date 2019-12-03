<template>
    <div>
        <div v-show="msg !== ''">
            <input v-model="msg">
            <button v-on:click="removeMessage">삭제</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TodoList",
        props: {
            msg: String,
        },
        methods: {
            removeMessage: function () {
                this.msg = '';
            }
        }
    }
</script>

<style scoped>

</style>