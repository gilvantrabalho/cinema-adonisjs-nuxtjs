<template>
    <div class="cont-auth">
        <div class="shadow p-4 pb-5 bg-white box rounded">
            <img class="d-block mx-auto m-3" width="300px" src="../assets/img/logos/logo.PNG" alt="">

            <hr>
            <Nuxt />
        </div>
    </div>
</template>

<style>
.cont-auth {
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F0F8FF;
}

.cont-auth .box {
    z-index: 2;
    opacity: 1 !important;
}

.cont-auth:before {
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0.5;
    background-image: url(../assets/img/fundo.jpg);
    background-repeat: no-repeat;
    background-position: 50% 0;
    background-size: cover;
}
</style>

<script>
    // import 'animate.css';
</script>