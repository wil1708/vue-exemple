<template>
    <nav>
        <ul>
            <li>
                <router-link :to="{name: 'home'}">Accueil</router-link>
            </li>
            <li>
                <router-link :to="{name: 'series'}">Séries</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: "Menu"
    }
</script>

<style scoped>

</style>
