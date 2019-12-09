<template>
    <div>
        <form>
            <div class="row justify-content-center">
                <input class="col-sm-3 ml-4 form-control" placeholder="제목을 입력해주세요." v-model="title">
                <input class="col-sm-3 ml-2 form-control" placeholder="할 일을 입력해주세요." v-model="content">
                <button class="col-sm-1 btn btn-info ml-1" v-on:click.prevent="createTodo" type="submit">추가</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "Input",
        data: function () {
            return {
                title: '',
                content: ''
            }
        },
        methods: {
            createTodo: function () {
                this.$emit('create', {title: this.title, content: this.content});
            }
        }
    }
</script>

<style scoped>

</style>