<template>
    <div class="d-grid gap-2">
        <button v-if="!loading" class="btn-register btn btn-dark btn-block mt-3" type="type">
            {{ title }}
        </button>

        <button v-else class="btn-register btn btn-secondary btn-secondary mt-3" type="type">
            <div class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </button>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: 'Botão'
        },
        type: {
            type: String,
            default: 'type'
        },
        loading: {
            type: Boolean,
            default: false
        }
    }
}
</script>