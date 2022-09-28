<template>
    <div>
        <h5 class="bg-dark text-white p-2 px-3 d-inline-block rounded text-uppercase">programacao em {{ cidade }}</h5>
        <NuxtLink :to="link">
            <button class="btn btn-dark btn-link-p">
                <i class="bi bi-chevron-right"></i>
            </button>
        </NuxtLink>
    </div>
</template>

<style>
.btn-link-p {
    margin-left: -10px !important;
    margin-top: -6px !important;
    padding-top: 8px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
}
</style>

<script>
    export default {
        name: 'programacao-em',
        props: {
            cidade: {
                type: String,
                require: true
            },
            link: {
                type: String,
                require: true,
                default: '/'
            }
        }
    }
</script>