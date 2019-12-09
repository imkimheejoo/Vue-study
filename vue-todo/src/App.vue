<template>
    <div class="container text-center">
        <header>
            <h1>TODO!</h1>
        </header>
        <div>
            <form>
                <div class="row justify-content-center">
                    <input class="col-sm-3 ml-4 form-control" placeholder="제목을 입력해주세요." v-model="title">
                    <input class="col-sm-3 ml-2 form-control" placeholder="할 일을 입력해주세요." v-model="content">
                    <button class="col-sm-1 btn btn-info ml-1" v-on:click.prevent="createTodo" type="submit">추가</button>
                </div>
            </form>
        </div>
        <div>{{todoList}}</div>
        <div v-for="(value,index) in todoList" v-bind:key="index">
            <!--            value라는 객체를 하위타입의 'data'로 보내겠습니다.-->
            <card v-bind:data="value"></card>
        </div>

    </div>
</template>

<script>
    import Card from "./components/Card";

    export default {
        name: "App",
        components: {
            Card
        },
        data: function () {
            return {
                title: '',
                content: '',
                todoList: []
            }
        },
        methods: {
            createTodo: function () {
                this.todoList.push({title: this.title, content: this.content});
            }
        }
    }
</script>

<style scoped>

</style>