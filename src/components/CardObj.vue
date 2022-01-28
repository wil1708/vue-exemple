<template>
    <div class="card">
        <div v-if="obj.img" class="card-img">
            <img :src="obj.img" :alt="obj.name">
        </div>
        <div class="card-body">
            <h3 :class="textColor" v-if="obj.name || obj.title">{{obj.name || obj.title}}</h3>
            <p>{{ obj.text || obj.resume }}</p>
        </div>
        <div class="card-footer">
            <button @click="changeStatus">{{ obj.isWatched ? 'Vue' : 'Pas vue' }}</button>
            <button @click="modify">Modifier</button>
        </div>
    </div>
</template>

<script>

    export default {
        name: "CardObj",
        props: {
            obj: {
                type: Object
            }
        },
        computed: {
            textColor: function () {
                return (this.obj.isWatched)? 'watched' : '';
            }
        },
        methods: {
            changeStatus: function () {
                this.$emit('status', this.obj.id, this.obj)
            },
            modify: function () {
                this.$emit('ask-modify', this.obj )
            }
        }
    }
</script>

<style scoped>

    .card {
        box-shadow: 1px 2px 8px grey;
        margin: 30px auto;
        border-radius: 10px;
        padding: 10px;
    }

    .card-img {
        width: 100%;
        overflow: hidden;
    }

    .card-img > img { width: 100%}

    h3 {
        color: brown;
    }

    h3.watched { color: darkgreen}

</style>
