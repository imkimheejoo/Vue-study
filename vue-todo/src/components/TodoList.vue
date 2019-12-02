<template>
    <div>
        <ol>
            <li v-for="m in msg" :key="msg">
                {{ m }}
            </li>
        </ol>
    </div>
</template>

<script>
    export default {
        name: "TodoList",
        props: {
            msg: Array,
        }
    }
</script>

<style scoped>

</style>