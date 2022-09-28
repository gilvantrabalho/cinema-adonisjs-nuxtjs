<template>
    <div>
        <Header />
        <Nuxt />
    </div>
</template>

<style>
:root {
    --color-default: #00008B;
    --shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%) !important;
}
</style>

<script>
import Header from '../components/Header.vue';
export default {
    components: { Header }
}
</script>