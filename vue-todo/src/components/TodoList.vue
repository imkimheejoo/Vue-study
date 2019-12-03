<template>
    <div>
        <div v-if="msg !== ''">
            <input v-model="msg">
            <button>수정</button>
            <button>삭제</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TodoList",
        props: {
            msg: String,
        }
    }
</script>

<style scoped>

</style>