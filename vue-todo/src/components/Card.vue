<template>
    <div class="card" style="width: 18rem;">
        <img src="../../public/pengsoo.jpeg" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{data.title}}</h5>
            <p class="card-text">{{data.content}}</p>
        </div>
        <button class="btn btn-light" v-on:click.prevent="removeTodo">완료</button>
    </div>

</template>

<script>
    export default {
        name: "card",
        props: ['data'],
        methods: {
            removeTodo: function () {
                this.$emit('remove', this.data)
            }
        }

    }
</script>

<style scoped>

</style>