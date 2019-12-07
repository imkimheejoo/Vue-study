<template>
    <div class="container text-center">
        <header>
            <h1>TODO!</h1>
        </header>

        <form>
            <div class="row justify-content-center" style="max-width: 800px">
                <input type="text" class="form-control mb-1 col-sm-5" placeholder="제목을 입력해주세요." v-model="title">
                <input type="text" class="form-control col-sm-5 ml-2" placeholder="내용을 입력해주세요." v-model="content">
                <button class="btn btn-danger col-sm-1 ml-2" v-on:click.prevent="createTodo">Add</button>
            </div>

        </form>

        <div v-if="array.length>=1" class="container">
            <div class="row justify-content-center">
                <Card class="col-lg-3 m-2" v-for="(data,index) in array" :key="index" v-bind:data="data"/>
            </div>
        </div>
    </div>
</template>

<script>
    import Card from "./components/Card";

    export default {
        name: "App",
        data: function () {
            return {
                array: [],
                title: '',
                content: ''
            }
        },
        components: {
            Card
        },
        methods: {
            createTodo: function () {
                // const {title, content} = this
                this.array.push({title: this.title, content: this.content})
                this.title = ''
                this.content = ''
            },
        }
    }
</script>

<style scoped>

</style>