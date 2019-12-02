<template>
    <div>
        message입니다.
    </div>
</template>

<script>
    export default {
        name: "TodoMessage",
        data: function () {
            return {
                message: ''
            }
        },
        methods: {
            submitInput: function (event) {
                this.message = event.text;
            }
        }
    }
</script>

<style scoped>

</style>