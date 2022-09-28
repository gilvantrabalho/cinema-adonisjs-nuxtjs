<template>
    <div>
        ADMIN LAYOUT
        <Nuxt />
    </div>
</template>

<script>
export default {
    middleware: 'auth'
}
</script>