<template>
    <div class="text-center p-5">
        <h3>Aguarde um momento...</h3>
    </div>
</template>

<script>
export default {
    created() {
        localStorage.setItem("type_user", this.$auth.user.type);
        window.location.href = '/admin'
    }
}
</script>